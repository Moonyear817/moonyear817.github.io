import * as THREE from 'three';
import { Reflector } from 'three/addons/Reflector.js';
import { buildScene } from './scene.js?v=be93f58c91cb';
import { sample } from './path.js?v=be93f58c91cb';
import { isNight } from './theme.js?v=be93f58c91cb';

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ───────── 渲染器 ─────────
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
const DPR = Math.min(devicePixelRatio || 1, 2);
renderer.setPixelRatio(DPR);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap; // 取样后在着色器里再二值化：边是硬的，但没有锯齿
renderer.shadowMap.autoUpdate = false;           // 场景是静止的，只算一次
renderer.shadowMap.needsUpdate = true;

const rt = [Math.round(innerWidth * Math.min(DPR, 1.5)), Math.round(innerHeight * Math.min(DPR, 1.5))];
const { scene, water, setNight } = buildScene(Reflector, rt);
setNight(isNight());
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.3, 4000);

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  water.getRenderTarget().setSize(Math.round(w * Math.min(DPR, 1.5)), Math.round(h * Math.min(DPR, 1.5)));
}
addEventListener('resize', resize);
resize();

// ───────── 纸纹 ─────────
{
  const N = 160, c = document.createElement('canvas');
  c.width = c.height = N;
  const x = c.getContext('2d'), img = x.createImageData(N, N), a = img.data;
  for (let i = 0; i < a.length; i += 4) {
    const r = Math.random();
    const v = r < 0.035 ? 150 : r < 0.3 ? 244 : 255;
    a[i] = a[i + 1] = a[i + 2] = v; a[i + 3] = 255;
  }
  x.putImageData(img, 0, 0);
  const g = $('#grain');
  g.style.backgroundImage = `url(${c.toDataURL()})`;
  g.style.backgroundSize = `${N / Math.max(1, devicePixelRatio)}px`;
}

// ───────── 滚动 → 镜头 ─────────
// 前半段（#runway）滚动推动镜头走完全程；之后镜头停在主厅，窗口从下面浮上来。
const runway = $('#runway');
let target = 0, cur = 0;
function progress() {
  const max = runway.offsetHeight - innerHeight * 0.15;
  return Math.min(1, Math.max(0, scrollY / max));
}
addEventListener('scroll', () => { target = progress(); }, { passive: true });
target = cur = progress();

const _pos = new THREE.Vector3(), _tgt = new THREE.Vector3();
function placeCamera(u, t) {
  const s = sample(u);
  // 竖屏视野更宽
  const portrait = innerHeight > innerWidth;
  let fov = s.fov * (portrait ? 1.35 : 1);
  // 开场极轻的呼吸，滚动后消失
  const idle = RM ? 0 : (1 - Math.min(1, u * 12));
  // 进场：镜头从高空垂直降到水面上的第一个机位，起落都是缓的
  const k = RM ? 1 : Math.min(1, t / 3.2);
  const lift = 120 * (1 - k * k * k * (k * (k * 6 - 15) + 10));
  _pos.set(s.pos[0] + Math.sin(t * 0.13) * 1.6 * idle, s.pos[1] + Math.sin(t * 0.21) * 0.35 * idle + lift, s.pos[2]);
  _tgt.set(s.tgt[0], s.tgt[1] + lift * 0.6, s.tgt[2]);
  camera.position.copy(_pos);
  camera.up.set(0, 1, 0);
  camera.lookAt(_tgt);
  camera.rotateZ(s.roll);
  if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
}

// 调试用：?u=0.5 固定在某个进度
const fixed = new URLSearchParams(location.search).get('u');
window.__setU = (u) => { cur = target = u; };

const T0 = performance.now();
const reader = $('#reader');
const projectReader = $('#project-reader');
let readerSceneDrawn = false;
addEventListener('resize', () => { readerSceneDrawn = false; });
addEventListener('site-theme-change', () => {
  setNight(isNight());
  readerSceneDrawn = false;
});
function frame() {
  requestAnimationFrame(frame);
  if (!reader.hidden || !projectReader.hidden) {
    if (!readerSceneDrawn) {
      placeCamera(1, 4);
      renderer.render(scene, camera);
      readerSceneDrawn = true;
    }
    return;
  }
  readerSceneDrawn = false;
  const t = (performance.now() - T0) / 1000;
  if (fixed !== null) cur = target = parseFloat(fixed);
  cur += (target - cur) * (RM ? 1 : 0.075);
  if (Math.abs(target - cur) < 1e-5) cur = target;
  placeCamera(cur, t);
  water.material.uniforms.uTime.value = RM ? 0 : t;
  renderer.render(scene, camera);
}
frame();

// ───────── 窗口：进入视野时浮现 ─────────
const io = new IntersectionObserver((es) => {
  for (const e of es) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, { rootMargin: '0px 0px -12% 0px' });
$$('.win').forEach((w) => io.observe(w));

// ───────── 窗口：宽屏可拖动，拖起来有硬投影 ─────────
const wide = matchMedia('(min-width: 900px) and (pointer: fine)');
let z = 3;
for (const w of $$('.win')) {
  const bar = w.querySelector('.bar');
  let sx = 0, sy = 0, ox = 0, oy = 0, on = false;
  w.addEventListener('pointerdown', () => { w.style.zIndex = ++z; });
  bar.addEventListener('pointerdown', (e) => {
    if (!wide.matches || e.button !== 0) return;
    on = true; sx = e.clientX; sy = e.clientY;
    ox = parseFloat(w.dataset.x || 0); oy = parseFloat(w.dataset.y || 0);
    w.classList.add('lift'); bar.setPointerCapture(e.pointerId);
  });
  bar.addEventListener('pointermove', (e) => {
    if (!on) return;
    const x = ox + e.clientX - sx, y = oy + e.clientY - sy;
    w.dataset.x = x; w.dataset.y = y;
    w.style.transform = `translate(${x}px, ${y}px)`;
  });
  const end = () => {
    if (!on) return; on = false; w.classList.remove('lift');
    // 压在别的窗口上面时保留投影
    const r = w.getBoundingClientRect();
    w.classList.toggle('ov', $$('.win').some((o) => {
      if (o === w) return false;
      const q = o.getBoundingClientRect();
      return r.left < q.right && r.right > q.left && r.top < q.bottom && r.bottom > q.top;
    }));
  };
  bar.addEventListener('pointerup', end);
  bar.addEventListener('pointercancel', end);
}
wide.addEventListener('change', () => $$('.win').forEach((w) => { w.style.transform = ''; delete w.dataset.x; delete w.dataset.y; w.classList.remove('ov'); }));

// 待补充的链接不跳转
$$('[data-todo], .list a[href="#"]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
