import * as THREE from 'three';

// The existing camera and buildings are inputs, never changed by this layer.
// Each window is a plane in world space, projected with the WebGL camera's
// actual projection/view matrices. Once revealed, their world positions stay
// fixed: all subsequent perspective/parallax comes ONLY from the original camera.
const STATIONS = [
  { id: 'about', sections: ['about'], start: .222, read: .238, end: .32,
    position: [12, 10.8, 280], width: 24, pixels: 420, yaw: -.3, rise: 4.5 },
  { id: 'projects', sections: ['projects'], start: .55, read: .566, end: .64,
    position: [7, 10.9, -14], width: 18, pixels: 420, yaw: 0, rise: 3.5 },
  { id: 'articles', sections: ['articles', 'thoughts'], start: .78, read: .80, end: .89,
    position: [-6.5, 7.7, -164], width: 10, pixels: 460, yaw: 0, rise: 2.5 },
];

// Exact door openings from scene.js, including the front/back of thick walls.
// These screen-space clipping apertures keep HTML behind the existing masonry.
const GATES = [
  { x: -2, z: 330, yaw: -.45, cx: 4, w: 44, h: 88, bottom: -4, thickness: 26 },
  { x: 0, z: 40, yaw: 0, cx: -2, w: 34, h: 104, bottom: -4, thickness: 30 },
  { x: 0, z: -124, yaw: 0, cx: 0, w: 12, h: 26, bottom: 1.2, thickness: 6 },
  { x: 0, z: -130, yaw: 0, cx: 0, w: 12, h: 26, bottom: 1.2, thickness: 8 },
];

const smooth = (a, b, x) => {
  const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
};
const transform = new THREE.Matrix4();
const viewProjection = new THREE.Matrix4();
const viewport = new THREE.Matrix4();
const model = new THREE.Matrix4();
const flip = new THREE.Matrix4().makeScale(1, -1, 1);
const origin = new THREE.Matrix4();
const point = new THREE.Vector3();
const center = new THREE.Vector3();
const rotation = new THREE.Quaternion();
const scale = new THREE.Vector3();
const clipPoint = new THREE.Vector4();

function aperture(gate, face, camera) {
  const normal = new THREE.Vector3(Math.sin(gate.yaw), 0, Math.cos(gate.yaw));
  const plane = new THREE.Vector3(gate.x, 0, gate.z).addScaledVector(normal, face);
  const cameraSide = normal.dot(camera.position.clone().sub(plane));
  const panelSide = normal.dot(center.clone().sub(plane));
  if (cameraSide < .5 || panelSide > 0) return 'none';

  const radius = gate.w / 2, spring = gate.h - radius;
  const outline = [[gate.cx - radius, gate.bottom], [gate.cx + radius, gate.bottom]];
  for (let n = 0; n <= 24; n++) {
    const angle = Math.PI * n / 24;
    outline.push([gate.cx + Math.cos(angle) * radius, spring + Math.sin(angle) * radius]);
  }
  const polygon = [];
  for (const [x, y] of outline) {
    point.set(gate.x + Math.cos(gate.yaw) * x + Math.sin(gate.yaw) * face,
      y, gate.z - Math.sin(gate.yaw) * x + Math.cos(gate.yaw) * face);
    clipPoint.set(point.x, point.y, point.z, 1).applyMatrix4(viewProjection);
    // A nearby portal can wrap around the camera: its aperture then fills
    // the view. Do not project vertices from behind the near plane.
    if (clipPoint.w <= camera.near) return 'none';
    const sx = (clipPoint.x / clipPoint.w + 1) * innerWidth / 2;
    const sy = (1 - clipPoint.y / clipPoint.w) * innerHeight / 2;
    polygon.push(`${sx.toFixed(2)}px ${sy.toFixed(2)}px`);
  }
  return `polygon(${polygon.join(',')})`;
}

export function createPortalPanels(camera) {
  const desk = document.querySelector('#desk');
  desk.classList.add('spatial-desk');
  const stations = STATIONS.map(config => {
    const slot = document.createElement('div');
    slot.className = 'portal-slot';
    slot.dataset.station = config.id;
    slot.inert = true;
    let parent = slot;
    const masks = [];
    for (const gate of GATES) for (const face of [gate.thickness / 2, -gate.thickness / 2]) {
      const mask = document.createElement('div');
      mask.className = 'portal-aperture';
      parent.append(mask);
      parent = mask;
      masks.push({ element: mask, gate, face });
    }
    const plane = document.createElement('div');
    plane.className = 'portal-plane';
    plane.style.width = `${config.pixels}px`;
    for (const id of config.sections) plane.append(document.getElementById(id));
    parent.append(plane);
    desk.append(slot);
    return { ...config, slot, plane, masks, entered: null, height: plane.offsetHeight };
  });
  desk.querySelectorAll('.lane').forEach(lane => lane.remove());

  const measure = () => {
    for (const station of stations) {
      const pixels = innerHeight > innerWidth ? Math.min(390, innerWidth - 28) : station.pixels;
      station.plane.style.width = `${pixels}px`;
      station.height = station.plane.offsetHeight;
      station.measuredWidth = pixels;
    }
  };
  new ResizeObserver(measure).observe(desk);
  addEventListener('site-language-change', measure);
  document.fonts.ready.then(measure);
  measure();

  const jump = id => {
    const station = stations.find(s => s.sections.includes(id));
    if (!station) return;
    const max = document.getElementById('runway').offsetHeight - innerHeight * .15;
    scrollTo({ top: station.read * max, behavior: 'instant' });
  };
  const onHash = () => {
    const id = location.hash.slice(1);
    if (['about', 'projects', 'articles', 'thoughts'].includes(id)) jump(id);
  };
  addEventListener('hashchange', onHash);
  requestAnimationFrame(onHash);

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  return {
    jump,
    update(u, time) {
      camera.updateMatrixWorld();
      viewProjection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
      viewport.set(innerWidth / 2, 0, 0, innerWidth / 2,
        0, -innerHeight / 2, 0, innerHeight / 2,
        0, 0, 1, 0, 0, 0, 0, 1);
      for (const station of stations) {
        const active = u >= station.start && u < station.end;
        if (!active) {
          station.slot.style.visibility = 'hidden';
          station.slot.inert = true;
          station.entered = null;
          continue;
        }
        if (station.entered === null) station.entered = time;
        const rise = reducedMotion ? 1 : smooth(0, .65, time - station.entered);
        center.fromArray(station.position);
        center.y -= station.rise * (1 - rise);
        const distance = center.distanceTo(camera.position);
        let alpha = smooth(0, .35, time - station.entered);
        if (reducedMotion) alpha = 1;
        point.copy(center).applyMatrix4(camera.matrixWorldInverse);
        if (point.z >= -camera.near) alpha = 0;

        const units = station.width / station.measuredWidth;
        rotation.setFromAxisAngle(new THREE.Vector3(0, 1, 0), station.yaw);
        scale.setScalar(units);
        model.compose(center, rotation, scale).multiply(flip);
        origin.makeTranslation(-station.measuredWidth / 2, -station.height / 2, 0);
        model.multiply(origin);
        transform.copy(viewport).multiply(viewProjection).multiply(model);
        station.plane.style.transform = `matrix3d(${transform.elements.join(',')})`;
        station.slot.style.opacity = alpha.toFixed(4);
        station.slot.style.visibility = alpha > .001 ? 'visible' : 'hidden';
        station.slot.inert = alpha < .3;
        station.slot.style.zIndex = String(Math.round(2000 - distance));
        station.slot.dataset.phase = rise > .999 ? 'display' : 'enter';
        for (const { element, gate, face } of station.masks) {
          element.style.clipPath = aperture(gate, face, camera);
        }
      }
    },
  };
}
