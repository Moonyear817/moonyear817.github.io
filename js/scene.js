import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/BufferGeometryUtils.js';
import { pathXZ } from './path.js?v=475a0d0fea66';

// ───────────────────────── 配色：只有红、白、黑 ─────────────────────────
// 每个材质三档颜色：受光面 / 侧光面 / 背光面。面朝向决定用哪一档，
// 没有渐变、没有纹理，像版画一样一块一块的纯色。
export const SKY = '#ece7df';
const PAL = {
  stone: ['#fbf9f5', '#8e8882', '#1e1c1b'],
  far:   ['#f6f3ee', '#c4beb7', '#6e6864'],
  nave:  ['#f4f1ec', '#8a847e', '#1b1a19'],
  ink:   ['#262424', '#121111', '#050505'],
  red:   ['#ff2232', '#d8111f', '#7c0711'],
  altar: ['#3a3634', '#2c2927', '#1d1b1a'],
};
const LIGHT = new THREE.Vector3(-0.34, 0.6, 0.72).normalize();
const toneCol = {};
for (const k in PAL) toneCol[k] = PAL[k].map((h) => new THREE.Color(h));

// ───────────────────────── 几何工具 ─────────────────────────
const solids = [];
const glows = [];
let RECV = 1; // 当前构件是否接收投射阴影（教堂内部为 0，否则屋顶会把主厅整个压黑）
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _n = new THREE.Vector3();

function bake(geo, mat, { inward = false } = {}) {
  let g = geo.index ? geo.toNonIndexed() : geo;
  for (const k of Object.keys(g.attributes)) if (k !== 'position') g.deleteAttribute(k);
  const p = g.attributes.position;
  if (inward) {
    for (let i = 0; i < p.count; i += 3) {
      for (let k = 0; k < 3; k++) {
        const t = p.getComponent(i + 1, k);
        p.setComponent(i + 1, k, p.getComponent(i + 2, k));
        p.setComponent(i + 2, k, t);
      }
    }
  }
  const col = new Float32Array(p.count * 3), sh = new Float32Array(p.count * 3);
  const nor = new Float32Array(p.count * 3), rc = new Float32Array(p.count);
  for (let i = 0; i < p.count; i += 3) {
    _a.fromBufferAttribute(p, i); _b.fromBufferAttribute(p, i + 1); _c.fromBufferAttribute(p, i + 2);
    _n.subVectors(_b, _a).cross(_c.clone().sub(_a)).normalize();
    const d = _n.dot(LIGHT), P = toneCol[mat];
    const c = d > 0.42 ? P[0] : d > -0.12 ? P[1] : P[2];
    // 落在阴影里：受光面降一档，侧光面降到最暗；背光面本来就暗，不受影响
    const s2 = d > 0.42 ? P[1] : d > 0.04 ? P[2] : c;
    const r = d > 0.04 ? RECV : 0;
    for (let k = 0; k < 3; k++) {
      const j = (i + k) * 3;
      col[j] = c.r; col[j + 1] = c.g; col[j + 2] = c.b;
      sh[j] = s2.r; sh[j + 1] = s2.g; sh[j + 2] = s2.b;
      nor[j] = _n.x; nor[j + 1] = _n.y; nor[j + 2] = _n.z;
      rc[i + k] = r;
    }
  }
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setAttribute('shadeColor', new THREE.BufferAttribute(sh, 3));
  g.setAttribute('recv', new THREE.BufferAttribute(rc, 1));
  solids.push(g);
}

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(1, 1, 1);
function place(geo, x = 0, y = 0, z = 0, ry = 0, rz = 0, rx = 0) {
  _e.set(rx, ry, rz, 'YXZ');
  _q.setFromEuler(_e);
  _m.compose(new THREE.Vector3(x, y, z), _q, _s);
  geo.applyMatrix4(_m);
  return geo;
}

function box(x, y, z, w, h, d, mat = 'stone', ry = 0, rz = 0, rx = 0) {
  bake(place(new THREE.BoxGeometry(w, h, d), x, y, z, ry, rz, rx), mat);
}
// 底面贴着 y0 的盒子，更好摆
function block(x, z, w, h, d, mat = 'stone', ry = 0, y0 = -6, rz = 0) {
  box(x, y0 + h / 2, z, w, h, d, mat, ry, rz);
}
function glowBox(x, y, z, w, h, d, ry = 0) {
  const g = place(new THREE.BoxGeometry(w, h, d), x, y, z, ry);
  const gg = g.toNonIndexed();
  for (const k of Object.keys(gg.attributes)) if (k !== 'position') gg.deleteAttribute(k);
  glows.push(gg);
}

// 带拱形开口的厚墙。墙沿局部 x 方向，高 H，厚 T；crown 是顶部轮廓（从右到左），
// holes 为拱门 {x,w,h,hb}，crosses 为十字形镂空 {x,y,s}。
function archWall({ W, H, T, y0 = -6, crown = null, holes = [], crosses = [], seg = 10, floorHeight = null }) {
  const s = new THREE.Shape();
  s.moveTo(-W / 2, y0);
  s.lineTo(W / 2, y0);
  if (crown) for (const [px, py] of crown) s.lineTo(px, py);
  else { s.lineTo(W / 2, H); s.lineTo(-W / 2, H); }
  s.lineTo(-W / 2, y0);
  for (const o of holes) {
    const hb = o.hb ?? y0 + 2, r = o.w / 2, top = o.h - r;
    const h = new THREE.Path();
    h.moveTo(o.x - r, hb);
    h.lineTo(o.x + r, hb);
    h.lineTo(o.x + r, top);
    h.absarc(o.x, top, r, 0, Math.PI, false);
    h.lineTo(o.x - r, hb);
    s.holes.push(h);
  }
  for (const c of crosses) {
    const a = c.s * 0.16, L = c.s * 0.5, up = c.s * 0.62, dn = c.s, cy = c.y;
    const h = new THREE.Path();
    h.moveTo(c.x - a, cy - dn); h.lineTo(c.x + a, cy - dn); h.lineTo(c.x + a, cy - a);
    h.lineTo(c.x + L, cy - a); h.lineTo(c.x + L, cy + a); h.lineTo(c.x + a, cy + a);
    h.lineTo(c.x + a, cy + up); h.lineTo(c.x - a, cy + up); h.lineTo(c.x - a, cy + a);
    h.lineTo(c.x - L, cy + a); h.lineTo(c.x - L, cy - a); h.lineTo(c.x - a, cy - a);
    h.lineTo(c.x - a, cy - dn);
    s.holes.push(h);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth: T, bevelEnabled: false, curveSegments: seg });
  g.translate(0, 0, -T / 2);
  if (floorHeight !== null) {
    // The continuous floor covers these doorway sills and wall undersides.
    // Keeping both surfaces at the same height causes depth-buffer flicker.
    const positions = g.attributes.position;
    const keep = [];
    for (let i = 0; i < positions.count; i += 3) {
      const onFloor = [i, i + 1, i + 2].every(
        vertex => Math.abs(positions.getY(vertex) - floorHeight) < 0.00001
      );
      if (!onFloor) keep.push(i, i + 1, i + 2);
    }
    g.setIndex(keep);
  }
  return g;
}
function wall(opts, x, z, ry = 0, mat = 'stone', y = 0, rz = 0) {
  bake(place(archWall(opts), x, y, z, ry, rz), mat);
}

// 黑色实心十字架，从水里竖起来；sink 表示没入水中的深度
function cross(x, z, h, { ry = 0, rz = 0, rx = 0, sink = 0.18, mat = 'ink' } = {}) {
  const t = h * 0.085, arm = h * 0.46, armY = h * 0.72;
  const base = -h * sink;
  const g1 = new THREE.BoxGeometry(t, h, t).translate(0, h / 2, 0);
  const g2 = new THREE.BoxGeometry(arm, t, t).translate(0, armY, 0);
  const g = mergeGeometries([g1.toNonIndexed(), g2.toNonIndexed()]);
  bake(place(g, x, base, z, ry, rz, rx), mat);
}

// 伸进水里的宽台阶
function steps(x, z, w, n, rise, run, ry = 0, topY = 0, mat = 'stone') {
  for (let i = 0; i < n; i++) {
    const h = topY - i * rise + 6;
    const g = new THREE.BoxGeometry(w, h, run * (i + 1));
    g.translate(0, -6 + h / 2, (run * (i + 1)) / 2);
    bake(place(g, x, 0, z, ry), mat);
  }
}

// 可复现的随机数
let seed = 20261113;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const rr = (a, b) => a + (b - a) * rnd();

// 顶部碎裂的轮廓
function jagged(W, H, n, drop) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const x = W / 2 - (W * i) / n;
    const y = H - (i === 0 || i === n ? rnd() * drop * 0.3 : rnd() * drop);
    pts.push([x, y]);
    if (i < n) pts.push([x - (W / n) * rr(0.3, 0.7), y]);
  }
  return pts;
}

// ───────────────────────── 场景布置 ─────────────────────────
function buildRuins() {
  // ── 第一道巨门（z≈330）：一面 130 m 高的残墙，中间一个拱洞，右端崩塌
  wall({
    W: 270, H: 132, T: 26,
    crown: [[135, 46], [112, 52], [96, 88], [72, 96], [60, 132], [-20, 132], [-30, 122], [-70, 128], [-96, 110], [-135, 118]],
    holes: [{ x: 4, w: 44, h: 88 }, { x: -78, w: 22, h: 54 }, { x: 88, w: 18, h: 40 }],
  }, -2, 330, -0.45);
  block(-146, 258, 46, 172, 52, 'stone', -0.45);         // 左侧高塔
  block(-146, 258, 30, 20, 60, 'stone', -0.45, 166);     // 塔顶错层
  block(152, 300, 26, 36, 30, 'stone', 0.5, -6, 0.12); // 右端塌落的块
  steps(-52, 324, 50, 4, 1.2, 4, -0.45, 1.6);   // 门前没入水中的台阶

  // ── 长水道两侧的拱廊（z 300 → 70）
  wall({ W: 230, H: 74, T: 12, crown: jagged(230, 74, 7, 14),
    holes: Array.from({ length: 9 }, (_, i) => ({ x: -100 + i * 25, w: 14, h: 46 })) }, -46, 185, Math.PI / 2);
  wall({ W: 236, H: 150, T: 24, crown: jagged(236, 150, 5, 30),
    holes: [{ x: -60, w: 30, h: 96 }, { x: 40, w: 30, h: 96 }] }, -96, 190, Math.PI / 2);
  wall({ W: 230, H: 92, T: 12, crown: jagged(230, 92, 6, 18),
    holes: Array.from({ length: 7 }, (_, i) => ({ x: -96 + i * 32, w: 18, h: 60 })) }, 52, 185, Math.PI / 2);
  wall({ W: 240, H: 140, T: 26, crown: jagged(240, 140, 4, 36),
    holes: [{ x: 0, w: 40, h: 110 }] }, 108, 180, Math.PI / 2);
  // 高处横跨水道的残桥
  box(3, 104, 236, 160, 10, 14);
  box(-60, 120, 120, 10, 8, 80, 'stone', 0, 0.03);
  // 水道里倒下的巨石和半淹台阶
  block(34, 262, 14, 30, 22, 'stone', 0.4, -10, 0.35);
  block(-34, 110, 10, 18, 40, 'stone', -0.2, -8, -0.2);
  steps(-40, 160, 30, 5, 1.4, 3, Math.PI / 2, 4);
  steps(44, 92, 28, 4, 1.2, 3, -Math.PI / 2, 3);

  // ── 第二道巨门（z≈40）：更高、更厚
  wall({
    W: 250, H: 160, T: 30,
    crown: [[125, 120], [96, 130], [80, 160], [-60, 160], [-74, 146], [-100, 152], [-125, 138]],
    holes: [{ x: -2, w: 34, h: 104 }, { x: -82, w: 20, h: 66 }, { x: 78, w: 20, h: 66 }],
  }, 0, 40);
  block(0, 40, 60, 22, 36, 'stone', 0, 156);
  steps(-2, 55, 40, 4, 0.5, 3, 0, 1.4);

  // ── 教堂前的水面院落：两列孤立的巨柱
  for (let i = 0; i < 4; i++) {
    block(-64, 10 - i * 34, 12, 70 - i * 6 - rr(0, 20), 12);
    block(66, 4 - i * 34, 12, 64 - i * 4 - rr(0, 24), 12);
  }
  box(-64, 64, -40, 12, 7, 100, 'stone', 0, 0.06);

  // ── 远景：苍白的巨构，被雾吃掉
  wall({ W: 320, H: 280, T: 40, holes: [{ x: 0, w: 120, h: 210 }] }, 40, -640, 0, 'far');
  wall({ W: 260, H: 220, T: 30, crown: jagged(260, 220, 5, 50), holes: [{ x: -40, w: 60, h: 150 }] }, -330, -380, 0.6, 'far');
  wall({ W: 300, H: 240, T: 30, crown: jagged(300, 240, 6, 60), holes: [{ x: 50, w: 70, h: 170 }] }, 360, -300, -0.7, 'far');
  block(-250, -60, 40, 230, 40, 'far', 0.3);
  block(270, -120, 34, 200, 34, 'far', -0.2);

  // ── 开场海面上的残迹
  block(-150, 560, 40, 120, 30, 'stone', 0.3, -6, 0.05);
  block(-190, 470, 26, 64, 70, 'stone', -0.2);
  wall({ W: 120, H: 70, T: 10, crown: jagged(120, 70, 4, 26), holes: [{ x: -20, w: 16, h: 40 }, { x: 22, w: 16, h: 40 }] }, -110, 640, 0.9);
  block(260, 520, 30, 150, 30, 'stone', -0.3);
  steps(-60, 600, 50, 3, 1.4, 5, 0.3, 0.8);

  // ── 两侧远处：少量巨大的斜向残构（不要零碎的小块）
  const giants = [
    // x, z, 宽, 高, 厚, 朝向, 是否带拱洞
    [-330, 620, 150, 210, 30, 0.75, 1],
    [380, 420, 180, 260, 34, -0.6, 1],
    [-420, 250, 60, 300, 60, 0.4, 0],
    [300, 150, 140, 200, 28, -0.95, 1],
    [-360, -40, 200, 240, 36, 0.55, 1],
    [460, -200, 70, 320, 70, -0.3, 0],
    [-200, -320, 160, 180, 28, -0.4, 1],
    [220, 880, 50, 230, 50, 0.2, 0],
  ];
  for (const [x, z, w, h, t, ry, arch] of giants) {
    const mat = Math.hypot(x, z - 200) > 520 ? 'far' : 'stone';
    if (arch) wall({ W: w, H: h, T: t, crown: jagged(w, h, 3, h * 0.25), holes: [{ x: rr(-w * 0.15, w * 0.15), w: w * 0.36, h: h * 0.62 }] }, x, z, ry, mat);
    else block(x, z, w, h, t, mat, ry);
  }
}

function buildChurch() {
  RECV = 1;
  const Z0 = -130;       // 正立面
  const Z1 = -330;       // 后墙
  const FL = 1.2;        // 主厅地面高度
  const zc = (Z0 + Z1) / 2, len = Z0 - Z1;

  // 基座和伸入水中的台阶
  box(0, FL - 2, zc - 3, 56, 4, len + 14);
  steps(0, -126, 36, 4, 0.3, 4, 0, FL);

  // 正立面：阶梯状的轮廓，深门洞，上方一个嵌进墙里的黑色十字
  wall({
    W: 62, H: 84, T: 8, y0: -2, floorHeight: FL,
    crown: [[31, 60], [21, 60], [21, 84], [-21, 84], [-21, 60], [-31, 60]],
    holes: [{ x: 0, w: 12, h: 26, hb: FL }],
  }, 0, Z0);
  // 门洞外再套一圈厚门框，显出墙的厚度
  wall({ W: 22, H: 34, T: 6, y0: FL, floorHeight: FL, holes: [{ x: 0, w: 12, h: 26, hb: FL }] }, 0, Z0 + 6);
  box(0, 52, Z0 + 4.2, 2.6, 18, 0.6, 'ink');
  box(0, 56, Z0 + 4.2, 10, 2.6, 0.6, 'ink');
  // 两侧巨柱
  block(-42, Z0 + 2, 22, 116, 34);
  block(42, Z0 + 2, 22, 116, 34);
  block(-42, Z0 + 2, 14, 14, 26, 'stone', 0, 110);
  block(42, Z0 + 2, 14, 14, 26, 'stone', 0, 110);
  // 顶上的黑色十字架
  cross(0, Z0, 22, { sink: -84 / 22 });

  // 外墙、扶壁
  for (const sx of [-1, 1]) {
    box(sx * 25, 26, zc - 2, 6, 56, len - 4);
    for (let i = 0; i < 9; i++) block(sx * 31, Z0 - 18 - i * 20, 6, 30 - (i % 2) * 6, 5);
  }
  // 屋顶外壳（从外面看不到内部穹顶的背面）
  box(0, 52, zc - 2, 50, 4, len - 4, 'stone');

  // ── 主厅内部（不接收投影，否则屋顶会把主厅整个压黑）
  RECV = 0;
  // 两侧连拱：每 10 m 一个拱
  for (const sx of [-1, 1]) {
    wall({ W: len - 6, H: 32, T: 2.4, y0: 0, floorHeight: FL,
      holes: Array.from({ length: 19 }, (_, i) => ({ x: -(len - 6) / 2 + 10 + i * 10, w: 6.6, h: 23, hb: FL })) },
    sx * 12, zc - 1, Math.PI / 2, 'nave');
    // 侧廊顶
    box(sx * 18, 31, zc - 1, 12, 2, len - 6, 'nave');
    // 侧廊外墙上的细长高窗（发白光）
    for (let i = 0; i < 18; i++) glowBox(sx * 21.9, 14, Z0 - 14 - i * 10, 0.2, 13, 1.1);
  }
  // 连续筒形拱顶
  const vault = new THREE.CylinderGeometry(12, 12, len - 6, 14, 1, true, -Math.PI / 2, Math.PI);
  vault.rotateX(-Math.PI / 2);
  bake(place(vault, 0, 32, zc - 1), 'nave', { inward: true });
  // 拱顶的横肋
  for (let i = 0; i < 19; i++) {
    const rib = new THREE.TorusGeometry(12, 0.6, 4, 14, Math.PI);
    bake(place(rib, 0, 32, Z0 - 10 - i * 10), 'nave');
  }
  // 后墙（深色）+ 十字形白光
  box(0, 24, Z1, 50, 52, 4, 'altar');
  glowBox(0, 24, Z1 + 2.1, 2.6, 26, 0.2);
  glowBox(0, 29, Z1 + 2.1, 12, 2.6, 0.2);
  // 祭台
  box(0, FL + 1, Z1 + 12, 10, 2, 4, 'ink');
  box(0, FL + 0.25, Z1 + 12, 16, 0.5, 9, 'nave');

  // 红色地毯
  box(0, FL + 0.03, (Z0 - 4 + Z1 + 16) / 2, 4.6, 0.06, Z0 - 4 - (Z1 + 16), 'red');

  // 长椅：黑色
  for (let z = Z0 - 22; z > Z1 + 24; z -= 3.4) {
    for (const sx of [-1, 1]) {
      const cx = sx * 6.6;
      box(cx, FL + 0.55, z, 7.4, 0.35, 0.9, 'ink');
      box(cx, FL + 1.05, z + 0.42, 7.4, 1.25, 0.16, 'ink');
      box(cx - 3.6, FL + 0.4, z, 0.2, 0.8, 0.9, 'ink');
      box(cx + 3.6, FL + 0.4, z, 0.2, 0.8, 0.9, 'ink');
    }
  }
  RECV = 1;
}

function buildCrosses() {
  const path = pathXZ(400);
  const clear = (x, z, r) => !path.some(([px, pz]) => Math.hypot(px - x, pz - z) < r);
  const zones = [
    // [xmin, xmax, zmin, zmax, count, hmin, hmax]
    [-130, 240, 360, 760, 26, 3, 16],
    [-34, 40, 70, 310, 14, 3, 13],
    [-56, 58, -110, 20, 14, 3, 12],
    [-500, 500, 200, 1000, 30, 4, 22],
  ];
  for (const [x0, x1, z0, z1, n, h0, h1] of zones) {
    let k = 0, tries = 0;
    while (k < n && tries++ < 400) {
      const x = rr(x0, x1), z = rr(z0, z1);
      const h = rr(h0, h1);
      if (!clear(x, z, 10 + h * 0.7)) continue;
      if (Math.abs(x) < 34 && z > -134 && z < -96) continue; // 教堂台阶
      cross(x, z, h, { ry: rr(-0.9, 0.9), rz: rnd() < 0.3 ? rr(-0.14, 0.14) : 0, rx: rnd() < 0.2 ? rr(-0.1, 0.1) : 0, sink: rr(0.05, 0.3) });
      k++;
    }
  }
  // 远处几座巨大的十字架
  cross(-300, -170, 64, { ry: 0.4, sink: 0.12 });
  cross(330, 60, 52, { ry: -0.5, rz: 0.05, sink: 0.15 });
  cross(-210, 780, 40, { ry: 0.2, sink: 0.1 });
  cross(150, -470, 80, { ry: 0.1, sink: 0.08 });
}

// ───────────────────────── 体块材质：纯色 + 硬边投影 ─────────────────────────
function solidMaterial() {
  const m = new THREE.ShaderMaterial({
    lights: true,
    fog: true,
    side: THREE.DoubleSide,
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.lights, THREE.UniformsLib.fog,
      { uNight: { value: 0 } },
    ]),
    vertexShader: /* glsl */`
      #include <common>
      #include <fog_pars_vertex>
      #include <shadowmap_pars_vertex>
      attribute vec3 color;
      attribute vec3 shadeColor;
      attribute float recv;
      varying vec3 vCol;
      varying vec3 vShade;
      varying float vRecv;
      void main() {
        vCol = color; vShade = shadeColor; vRecv = recv;
        #include <beginnormal_vertex>
        #include <defaultnormal_vertex>
        #include <begin_vertex>
        #include <project_vertex>
        #include <worldpos_vertex>
        #include <shadowmap_vertex>
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      #include <common>
      #include <packing>
      #include <fog_pars_fragment>
      #include <bsdfs>
      #include <lights_pars_begin>
      #include <shadowmap_pars_fragment>
      #include <shadowmask_pars_fragment>
      uniform float uNight;
      varying vec3 vCol;
      varying vec3 vShade;
      varying float vRecv;
      void main() {
        float lit = vRecv > 0.5 ? step(0.5, getShadowMask()) : 1.0;
        vec3 color = mix(vShade, vCol, lit);
        vec3 nightColor = color * vec3(0.25, 0.29, 0.38) + vec3(0.004, 0.006, 0.012);
        gl_FragColor = vec4(mix(color, nightColor, uNight), 1.0);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  });
  return m;
}

// ───────────────────────── 红色镜面海 ─────────────────────────
const WaterShader = {
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
    uTime: { value: 0 },
    uNight: { value: 0 },
    uFog: { value: new THREE.Color(SKY).convertLinearToSRGB() },
  },
  vertexShader: /* glsl */`
    uniform mat4 textureMatrix;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vUv = textureMatrix * vec4(position, 1.0);
      vec4 w = modelMatrix * vec4(position, 1.0);
      vWorld = w.xyz;
      gl_Position = projectionMatrix * viewMatrix * w;
    }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uNight;
    uniform vec3 uFog;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vec2 p = vWorld.xz;
      float w = sin(p.x * 0.035 + uTime * 0.35) * 0.6
              + sin(p.y * 0.05 - uTime * 0.28) * 0.4;
      float fade = smoothstep(4.0, 60.0, distance(vWorld, cameraPosition));
      vec4 uv = vUv;
      uv.x += w * 0.0012 * uv.w * fade;
      uv.y += w * 0.0022 * uv.w * fade;
      vec3 r = texture2DProj(tDiffuse, uv).rgb;
      float L = dot(r, vec3(0.2126, 0.7152, 0.0722));
      // 倒影亮度只决定三档红：白色的天和墙 → 鲜红；灰面 → 深一档的红；黑十字架 → 暗红
      vec3 hi  = vec3(1.0, 0.075, 0.13);
      vec3 mid = vec3(0.80, 0.035, 0.075);
      vec3 lo  = vec3(0.20, 0.0, 0.018);
      vec3 c = mix(lo, mid, smoothstep(0.03, 0.05, L));
      c = mix(c, hi, smoothstep(0.42, 0.5, L));
      c *= mix(1.0, 0.36, uNight);
      float d = distance(vWorld, cameraPosition);
      c = mix(c, uFog, smoothstep(600.0, 3200.0, d) * 0.55);
      gl_FragColor = vec4(c, 1.0);
    }`,
};

export function buildScene(Reflector, rtSize) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(SKY);
  scene.fog = new THREE.Fog(SKY, 160, 1250);

  buildRuins();
  buildChurch();
  buildCrosses();

  const solidGeo = mergeGeometries(solids);
  const solid = new THREE.Mesh(solidGeo, solidMaterial());
  solid.castShadow = true;
  solid.receiveShadow = true;
  scene.add(solid);

  // 一盏方向光只用来投影（颜色不参与计算），影子是硬边的
  const sun = new THREE.DirectionalLight(0xffffff, 1);
  sun.position.copy(LIGHT).multiplyScalar(900);
  sun.target.position.set(0, 0, 0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  const S = sun.shadow.camera;
  S.left = -700; S.right = 700; S.top = 700; S.bottom = -700; S.near = 10; S.far = 2200;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.6;
  scene.add(sun, sun.target);

  const glowGeo = mergeGeometries(glows);
  const glow = new THREE.Mesh(glowGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false }));
  scene.add(glow);

  const water = new Reflector(new THREE.PlaneGeometry(8000, 8000), {
    textureWidth: rtSize[0], textureHeight: rtSize[1], shader: WaterShader, clipBias: 0.002, multisample: 4,
  });
  water.rotation.x = -Math.PI / 2;
  scene.add(water);

  function setNight(dark) {
    const sky = dark ? '#090b12' : SKY;
    scene.background.set(sky);
    scene.fog.color.set(sky);
    solid.material.uniforms.uNight.value = dark ? 1 : 0;
    water.material.uniforms.uNight.value = dark ? 1 : 0;
    water.material.uniforms.uFog.value.set(sky).convertLinearToSRGB();
    glow.material.color.set(dark ? '#e4e8f4' : '#ffffff');
  }

  return { scene, water, solid, setNight };
}
