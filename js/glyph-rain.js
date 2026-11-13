// Four-letter pieces fall intact, rest briefly, then come apart into loose type.
const CELL = 12;
const STEP = 1 / 30;
const INTRO_DELAY = 2;
const DENSITY_RAMP = 8;
const SHAPES = [
  [[0, 0], [1, 0], [2, 0], [3, 0]],
  [[0, 0], [1, 0], [0, 1], [1, 1]],
  [[0, 0], [1, 0], [2, 0], [1, 1]],
  [[0, 0], [0, 1], [1, 1], [2, 1]],
  [[2, 0], [0, 1], [1, 1], [2, 1]],
  [[1, 0], [2, 0], [0, 1], [1, 1]],
  [[0, 0], [1, 0], [1, 1], [2, 1]],
];

function rotate(shape) {
  const bottom = Math.max(...shape.map(([, y]) => y));
  return shape.map(([x, y]) => [bottom - y, x]);
}

export function createGlyphRain(canvas, reader, text, onStateChange) {
  const ctx = canvas.getContext('2d');
  let letters = [];
  const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
  function readLetters() {
    letters = [...segmenter.segment(text.textContent)]
      .map(item => item.segment).filter(ch => /[\p{L}\p{N}]/u.test(ch));
    if (!letters.length) letters = [...'space'];
    letterIndex = new Map([...new Set(letters)].map((ch, i) => [ch, i]));
  }
  const glyphFont = () => '12px ' + getComputedStyle(text).fontFamily;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const atlas = document.createElement('canvas');
  let letterIndex = new Map();
  let opened = false, playing = false, generation = 0, frame = 0;
  let lastTime = 0, elapsed = 0, tick = 0, nextLetter = 0, nextSpawn = 0;
  let introTime = 0;
  let cols = 0, rows = 0, width = 0, height = 0;
  let walls, occupied;
  let pieces = [], grains = [];
  canvas.style.imageRendering = 'pixelated';

  function loadAtlas() {
    atlas.width = CELL * letterIndex.size;
    atlas.height = CELL * 3;
    const brush = atlas.getContext('2d');
    brush.font = glyphFont();
    brush.textBaseline = 'middle';
    brush.textAlign = 'center';
    const style = getComputedStyle(document.documentElement);
    const colors = ['--rain-block', '--rain-accent', '--rain-loose'].map(
      name => style.getPropertyValue(name).trim()
    );
    for (const [ch, i] of letterIndex) {
      const x = CELL * i;
      for (const [row, ink] of colors.entries()) {
        const y = row * CELL;
        if (row < 2) {
          brush.fillStyle = ink;
          brush.fillRect(x, y, CELL, CELL);
          brush.fillStyle = style.getPropertyValue('--rain-type').trim();
        } else {
          brush.fillStyle = ink;
        }
        brush.fillText(ch, x + CELL / 2, y + CELL / 2);
      }
    }
  }

  function blockText(rect) {
    const left = Math.max(0, Math.floor((rect.left - 2) / CELL));
    const right = Math.min(cols, Math.ceil((rect.right + 2) / CELL));
    if (left >= right) return;
    const top = Math.max(0, Math.floor((rect.top + reader.scrollTop - 2) / CELL));
    const bottom = Math.min(rows, Math.ceil((rect.bottom + reader.scrollTop + 2) / CELL));
    for (let y = top; y < bottom; y++) walls.fill(1, y * cols + left, y * cols + right);
  }

  function layout() {
    if (!opened || !ctx) return;
    width = reader.clientWidth;
    height = reader.clientHeight;
    if (!height || !width) return;
    canvas.width = width;
    canvas.height = height;
    cols = Math.ceil(width / CELL);
    rows = Math.ceil(reader.scrollHeight / CELL);
    walls = new Uint8Array(rows * cols);
    occupied = new Uint8Array(rows * cols);
    // Measure each wrapped line, so pieces can still fall through the margins.
    const walker = document.createTreeWalker(text, NodeFilter.SHOW_TEXT);
    const range = document.createRange();
    while (walker.nextNode()) {
      if (!walker.currentNode.textContent.trim()) continue;
      range.selectNodeContents(walker.currentNode);
      for (const rect of range.getClientRects()) blockText(rect);
    }
    for (const heading of text.querySelectorAll('h2')) {
      if (!parseFloat(getComputedStyle(heading).borderBottomWidth)) continue;
      const {left, right, bottom} = heading.getBoundingClientRect();
      blockText({left, right, top: bottom - 2, bottom});
    }
    grains = [];
    pieces = [];
    nextSpawn = 0;
    draw();
  }

  function free(x, y) {
    if (x < 0 || x >= cols || y >= rows) return false;
    return y < 0 || !(walls[y * cols + x] || occupied[y * cols + x]);
  }

  function fits(x, y, shape) {
    return shape.every(([dx, dy]) => free(x + dx, y + dy));
  }

  function spawn(y) {
    if (pieces.length > Math.min(24, cols / 3)) return;
    let shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    for (let n = Math.floor(Math.random() * 4); n > 0; n--) shape = rotate(shape);
    const span = 1 + Math.max(...shape.map(([x]) => x));
    for (let attempt = 0; attempt < 8; attempt++) {
      const x = Math.floor(Math.random() * Math.max(1, cols - span + 1));
      if (!fits(x, y, shape)) continue;
      if (pieces.some(p => Math.abs(p.y - y) < 4 && Math.abs(p.x - x) < 4)) continue;
      pieces.push({
        x, y, shape, phase: 0, nextTurn: 8 + Math.floor(Math.random() * 22),
        glyphs: shape.map(() => letterIndex.get(letters[nextLetter++ % letters.length])),
        accent: Math.random() < 0.14 ? Math.floor(Math.random() * 4) : -1,
      });
      return;
    }
  }

  function advancePieces() {
    const viewTop = Math.floor(reader.scrollTop / CELL);
    for (let i = pieces.length - 1; i >= 0; i--) {
      const p = pieces[i];
      if (--p.nextTurn <= 0) {
        p.nextTurn = 15 + Math.floor(Math.random() * 30);
        const shifted = p.x + (Math.random() < 0.5 ? -1 : 1);
        const turned = rotate(p.shape);
        if (Math.random() < 0.4 && fits(p.x, p.y, turned)) p.shape = turned;
        else if (fits(shifted, p.y, p.shape)) p.x = shifted;
      }
      if (++p.phase < 3) continue;
      p.phase = 0;
      if (fits(p.x, p.y + 1, p.shape)) {
        p.y++;
        continue;
      }
      const release = tick + 8 + Math.floor(Math.random() * 9);
      p.shape.forEach(([dx, dy], i) => {
        const x = p.x + dx, y = p.y + dy;
        if (y < 0 || !free(x, y)) return;
        occupied[y * cols + x] = 1;
        grains.push({x, y, glyph: p.glyphs[i], accent: p.accent === i, release, expires: release + 700 + Math.floor(Math.random() * 450)});
      });
      pieces.splice(i, 1);
    }
    if (introTime < INTRO_DELAY) return;
    if (--nextSpawn <= 0) {
      spawn(viewTop - 4);
      const progress = Math.min(1, (introTime - INTRO_DELAY) / DENSITY_RAMP);
      const eased = progress * progress * (3 - 2 * progress);
      const density = 0.1 + 0.9 * eased;
      // End at the original spawn interval and active-piece limit.
      const interval = Math.max(4, Math.floor(520 / cols)) + Math.floor(Math.random() * 4);
      nextSpawn = interval / density;
    }
  }

  function advanceGrains() {
    for (let i = grains.length - 1; i >= 0; i--) {
      const g = grains[i];
      if (tick < g.release) continue;
      const at = g.y * cols + g.x;
      if (tick > g.expires || (grains.length > cols * 5 && g.y === rows - 1)) {
        occupied[at] = 0;
        grains.splice(i, 1);
        continue;
      }
      const dir = Math.random() < 0.5 ? -1 : 1;
      let dx = 0;
      if (!free(g.x, g.y + 1)) {
        if (free(g.x + dir, g.y) && free(g.x + dir, g.y + 1)) dx = dir;
        else if (free(g.x - dir, g.y) && free(g.x - dir, g.y + 1)) dx = -dir;
        else continue;
      }
      occupied[at] = 0;
      g.x += dx;
      g.y++;
      occupied[g.y * cols + g.x] = 1;
    }
  }

  function draw() {
    if (!ctx || !rows || !opened) return;
    ctx.clearRect(0, 0, width, height);
    const sy = Math.round(reader.scrollTop);
    function stamp(x, y, glyph, row) {
      y -= sy;
      if (y < -CELL || y >= height) return;
      ctx.drawImage(atlas, glyph * CELL, row * CELL, CELL, CELL, x * CELL, y, CELL, CELL);
    }
    for (const g of grains) {
      stamp(g.x, g.y * CELL, g.glyph, tick < g.release ? Number(g.accent) : 2);
    }
    for (const p of pieces) {
      const progress = fits(p.x, p.y + 1, p.shape) ? (p.phase + elapsed / STEP) / 3 : 0;
      const offset = Math.floor(Math.min(1, progress) * CELL);
      p.shape.forEach(([dx, dy], i) => {
        stamp(p.x + dx, (p.y + dy) * CELL + offset, p.glyphs[i], Number(p.accent === i));
      });
    }
  }

  function animate(now) {
    if (!playing || !opened) return;
    const delta = Math.max(0, (now - lastTime) / 1000);
    introTime += delta;
    elapsed += Math.min(0.1, delta);
    lastTime = now;
    while (elapsed >= STEP) {
      elapsed -= STEP;
      tick++;
      advancePieces();
      advanceGrains();
    }
    draw();
    frame = requestAnimationFrame(animate);
  }

  function setPlaying(value) {
    playing = value && !!ctx;
    cancelAnimationFrame(frame);
    lastTime = performance.now();
    if (playing) frame = requestAnimationFrame(animate);
    onStateChange(playing);
  }

  const observer = new ResizeObserver(layout);
  function onScroll() { if (!playing) draw(); }
  function onVisibilityChange() { lastTime = performance.now(); }
  function onMotionChange() { setPlaying(!reduced.matches); }
  function onThemeChange() {
    loadAtlas();
    draw();
  }

  return {
    open(shouldPlay = !reduced.matches) {
      if (opened) return;
      opened = true;
      const token = ++generation;
      if (!ctx) { onStateChange(false); return; }
      tick = 0;
      elapsed = 0;
      introTime = 0;
      nextLetter = 0;
      readLetters();
      loadAtlas();
      layout();
      observer.observe(text);
      reader.addEventListener('scroll', onScroll, {passive: true});
      document.addEventListener('visibilitychange', onVisibilityChange);
      window.addEventListener('resize', layout);
      reduced.addEventListener('change', onMotionChange);
      window.addEventListener('site-theme-change', onThemeChange);
      setPlaying(shouldPlay);
      document.fonts.load(glyphFont(), letters.join('')).then(() => {
        if (token !== generation || !opened) return;
        loadAtlas();
        layout();
      }).catch(() => {});
    },
    close() {
      opened = false;
      generation++;
      setPlaying(false);
      observer.disconnect();
      reader.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', layout);
      reduced.removeEventListener('change', onMotionChange);
      window.removeEventListener('site-theme-change', onThemeChange);
      ctx?.clearRect(0, 0, width, height);
      pieces = [];
      grains = [];
      walls = occupied = null;
      rows = cols = 0;
    },
    toggle() { if (opened) setPlaying(!playing); },
  };
}
