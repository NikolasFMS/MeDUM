/* ==========================================================================
   Медиум: Покинутый особняк — Complete Zero-Dependency Vanilla JS Edition
   Full feature parity with strict GitHub Pages storage/cache/SW isolation.
   ========================================================================== */
(function () {
  'use strict';

  const DATA = window.MEDIUM_DATA;
  const SECRETS = window.SECRETS_DATA || null;
  if (!DATA) {
    document.getElementById('app').innerHTML =
      '<div style="padding:2rem;text-align:center;color:#fbbf24">Failed to load data.js</div>';
    return;
  }

  // Strictly isolated storage & cache prefixes (never touches other GitHub Pages apps)
  const LS_PREFIX = 'medium_mansion_vanilla_';
  const CACHE_PREFIX = 'medium-mansion-vanilla-';
  const KEYS = {
    gameState: LS_PREFIX + 'game_state_v1',
    setupPrefs: LS_PREFIX + 'setup_prefs_v1',
    setupPrefsV2: LS_PREFIX + 'setup_prefs_v2',
    packConfig: LS_PREFIX + 'pack_config_v1',
    packConfigsByVersion: LS_PREFIX + 'pack_configs_v2',
    secretsConfig: LS_PREFIX + 'secrets_config_v1',
    lang: LS_PREFIX + 'lang_v1',
    themeMode: LS_PREFIX + 'theme_mode_v1',
    uiStyle: LS_PREFIX + 'ui_style_v1',
    fontFamily: LS_PREFIX + 'font_family_v1',
    fontSize: LS_PREFIX + 'font_size_v1',
    timerDuration: LS_PREFIX + 'timer_duration_v1',
    muted: LS_PREFIX + 'muted_v1',
    haptics: LS_PREFIX + 'haptics_v1',
    wakeLock: LS_PREFIX + 'wakelock_v1',
  };

  // Safe localStorage helpers
  function lsGet(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v === null ? fallback : v;
    } catch {
      return fallback;
    }
  }
  function lsSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  }
  function lsRemove(key) {
    try {
      localStorage.removeItem(key);
    } catch {}
  }
  function lsGetJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed ?? fallback;
    } catch {
      return fallback;
    }
  }

  function esc(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function shuffleArray(arr) {
    const out = arr.slice();
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = out[i];
      out[i] = out[j];
      out[j] = tmp;
    }
    return out;
  }

  function arraysEqualAsSets(a, b) {
    const aa = a || [];
    const bb = b || [];
    if (aa.length !== bb.length) return false;
    const setA = new Set(aa);
    return bb.every((x) => setA.has(x));
  }

  // Inline SVG icons (clean, crisp, zero external dependency)
  const ICONS = {
    ghost:
      '<path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    settings:
      '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.25.4-1.51 1z"/>',
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    eyeOff: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>',
    skull: '<circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    timer: '<line x1="10" y1="2" x2="14" y2="2"/><line x1="12" y1="14" x2="15" y2="11"/><circle cx="12" cy="14" r="8"/>',
    play: '<polygon points="5 3 19 12 5 21 5 3"/>',
    pause: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    fog: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 17H7"/><path d="M17 21H9"/>',
    shuffle: '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    wand: '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/><path d="m14 7 3 3"/>',
    key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    wifiOff: '<line x1="2" y1="2" x2="22" y2="22"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 4.17-2.65"/><path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"/><path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/><path d="M5 13a10 10 0 0 1 5.24-2.76"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    phone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
    map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    userCheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    pin: '<line x1="12" y1="17" x2="12" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/>',
    chevronDown: '<polyline points="6 9 12 15 18 9"/>',
    chevronUp: '<polyline points="18 15 12 9 6 15"/>',
  };

  function ico(name, size) {
    const cls = size ? 'svg-ico ' + size : 'svg-ico';
    const path = ICONS[name] || ICONS.gem;
    return (
      '<svg class="' +
      cls +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      path +
      '</svg>'
    );
  }

  // Distinct compact glyphs for artifacts & Soviet hooks
  const ARTIFACT_EMOJI = {
    'art-1': '🔥', 'art-2': '🪓', 'art-3': '🪑', 'art-4': '🪞', 'art-5': '🎹', 'art-6': '🧸',
    'art-7': '📷', 'art-8': '🖼️', 'art-9': '🛡️', 'art-10': '🧰', 'art-11': '🕰️', 'art-12': '📻',
    'art-13': '🌿', 'art-14': '📖', 'art-15': '💀', 'art-16': '🕯️', 'art-17': '🎃', 'art-18': '🎯',
    'art-occ-1': '👻', 'art-occ-2': '🃏', 'art-occ-3': '🔮', 'art-occ-4': '🗡️', 'art-occ-5': '🎭', 'art-occ-6': '📕',
    'art-for-1': '🎵', 'art-for-2': '🗝️', 'art-for-3': '🏮', 'art-for-4': '🛢️', 'art-for-5': '🧥', 'art-for-6': '👑',
    'art-med-1': '✂️', 'art-med-2': '💉', 'art-med-3': '🧪', 'art-med-4': '🦽', 'art-med-5': '🩺', 'art-med-6': '📋',
    'art-gr-1': '⛏️', 'art-gr-2': '🧭', 'art-gr-3': '🪶', 'art-gr-4': '💡', 'art-gr-5': '⏳', 'art-gr-6': '⚓',
    'sec-hook-01': '🦄', 'sec-hook-02': '🍾', 'sec-hook-03': '🔌', 'sec-hook-04': '🌀', 'sec-hook-05': '🪤',
    'sec-hook-06': '🗿', 'sec-hook-07': '🧵', 'sec-hook-08': '📺', 'sec-hook-09': '📟', 'sec-hook-10': '✏️',
    'sec-hook-11': '🔥', 'sec-hook-12': '🫖', 'sec-hook-13': '🧑‍🚀', 'sec-hook-14': '📐', 'sec-hook-15': '🧺',
    'sec-hook-16': '🧴', 'sec-hook-17': '📻', 'sec-hook-18': '🌍', 'sec-hook-19': '♨️', 'sec-hook-20': '📕',
    'sec-hook-21': '📢', 'sec-hook-22': '⚙️', 'sec-hook-23': '💼', 'sec-hook-24': '🍽️', 'sec-hook-25': '🎙️',
    'sec-hook-26': '🩻', 'sec-hook-27': '🎭', 'sec-hook-28': '☎️', 'sec-hook-29': '🚗', 'sec-hook-30': '🎺',
    'sec-hook-31': '🧭', 'sec-hook-32': '📦',
  };

  function artifactBadge(artifactId, symbol) {
    const isDossier =
      symbol === 'dossier' || (typeof artifactId === 'string' && artifactId.startsWith('sec-inf-'));
    const glyph = isDossier ? '🕵️' : (ARTIFACT_EMOJI[artifactId] || '◆');
    return '<span aria-hidden="true" style="flex-shrink:0;font-size:0.88em;line-height:1">' + glyph + '</span>';
  }

  // =========================================================================
  // Haptics & Web Audio Manager
  // =========================================================================
  const haptics = {
    enabled: lsGet(KEYS.haptics, 'true') !== 'false',
    vibrate(pattern) {
      if (!this.enabled) return;
      try {
        if (navigator.vibrate) navigator.vibrate(pattern);
      } catch {}
    },
    tap() { this.vibrate(10); },
    select() { this.vibrate(14); },
    unlock() { this.vibrate([18, 30, 35]); },
    success() { this.vibrate([25, 45, 55]); },
    error() { this.vibrate([65, 40, 65]); },
    timerEnd() { this.vibrate([90, 50, 90, 50, 120]); },
    toggle() {
      this.enabled = !this.enabled;
      lsSet(KEYS.haptics, String(this.enabled));
      if (this.enabled) this.tap();
    },
  };

  const sound = {
    ctx: null,
    muted: lsGet(KEYS.muted, 'false') === 'true',
    ambientWanted: false,
    ambientNodes: null,
    visAttached: false,

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      if (!this.visAttached) {
        this.visAttached = true;
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            if (this.ctx && this.ctx.state === 'running' && this.ambientWanted) {
              this.ctx.suspend().catch(() => {});
            }
          } else if (document.visibilityState === 'visible') {
            if (this.ambientWanted && !this.muted) {
              if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume().catch(() => {});
              } else if (!this.ambientNodes) {
                this.startAmbient();
              }
            }
          }
        });
      }
    },

    isAmbientActive() {
      return this.ambientWanted && !this.muted;
    },

    toggleMute() {
      this.muted = !this.muted;
      lsSet(KEYS.muted, String(this.muted));
      if (this.muted && this.ambientWanted) this.stopAmbientNodes();
      else if (!this.muted && this.ambientWanted) this.startAmbient();
    },

    toggleAmbient() {
      this.ambientWanted = !this.ambientWanted;
      if (this.ambientWanted && !this.muted) this.startAmbient();
      else this.stopAmbientNodes();
    },

    startAmbient() {
      try {
        this.init();
        if (!this.ctx) return;
        this.stopAmbientNodes();
        const now = this.ctx.currentTime;
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.055, now + 0.9);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(340, now);
        filter.Q.setValueAtTime(1.4, now);

        const lfo = this.ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.11, now);
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(120, now);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        const freqs = [
          { type: 'triangle', f: 146.83 },
          { type: 'sine', f: 220.0 },
          { type: 'sine', f: 174.61 },
        ];
        const oscs = freqs.map((item) => {
          const o = this.ctx.createOscillator();
          o.type = item.type;
          o.frequency.setValueAtTime(item.f, now);
          o.connect(filter);
          o.start();
          return o;
        });

        filter.connect(gain);
        gain.connect(this.ctx.destination);
        lfo.start();
        this.ambientNodes = { gain, filter, lfo, lfoGain, oscs };
      } catch {}
    },

    stopAmbientNodes() {
      if (!this.ambientNodes) return;
      try {
        this.ambientNodes.oscs.forEach((o) => { o.stop(); o.disconnect(); });
        this.ambientNodes.lfo.stop();
        this.ambientNodes.lfo.disconnect();
        this.ambientNodes.lfoGain.disconnect();
        this.ambientNodes.filter.disconnect();
        this.ambientNodes.gain.disconnect();
      } catch {}
      this.ambientNodes = null;
    },

    playClick(skipHaptic) {
      if (!skipHaptic) haptics.tap();
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.08);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.08);
      } catch {}
    },

    playSelect() {
      haptics.select();
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(290, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.055);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.055);
      } catch {}
    },

    playUnlock() {
      haptics.unlock();
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        [330, 495].forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          const t0 = now + i * 0.065;
          osc.frequency.setValueAtTime(freq, t0);
          gain.gain.setValueAtTime(0.001, t0);
          gain.gain.linearRampToValueAtTime(0.14, t0 + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.14);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t0);
          osc.stop(t0 + 0.14);
        });
      } catch {}
    },

    playWarn() {
      haptics.error();
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(115, now + 0.14);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.14);
      } catch {}
    },

    playSeal() {
      haptics.success();
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(330, now + 0.15);
        osc.frequency.setValueAtTime(440, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.8);
      } catch {}
    },

    playLoss() {
      haptics.error();
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.6);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.6);
      } catch {}
    },

    playTimerEnd() {
      haptics.timerEnd();
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        [
          { f: 523.25, off: 0, dur: 0.45 },
          { f: 392.0, off: 0.25, dur: 0.7 },
        ].forEach((b) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(b.f, now + b.off);
          gain.gain.setValueAtTime(0.001, now + b.off);
          gain.gain.linearRampToValueAtTime(0.22, now + b.off + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + b.off + b.dur);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + b.off);
          osc.stop(now + b.off + b.dur);
        });
      } catch {}
    },
  };

  // =========================================================================
  // Canvas Confetti (Zero Dependencies)
  // =========================================================================
  function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ['#f59e0b', '#fbbf24', '#10b981', '#a855f7', '#fef3c7', '#ef4444'];
    const particles = [];
    for (let i = 0; i < 110; i++) {
      const angle = (Math.random() * Math.PI) / 1.4 + Math.PI * 0.14;
      const speed = 5 + Math.random() * 10;
      particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.58,
        vx: Math.cos(angle) * speed * (Math.random() < 0.5 ? -1 : 1),
        vy: -Math.sin(angle) * speed - Math.random() * 4,
        w: 6 + Math.random() * 5,
        h: 4 + Math.random() * 4,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.25,
        color: colors[i % colors.length],
        life: 1,
      });
    }

    let frame = 0;
    function tick() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach((p) => {
        if (p.life <= 0) return;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.28;
        p.vx *= 0.99;
        p.rot += p.vrot;
        p.life -= 0.012;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (alive && frame < 180) {
        requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(tick);
  }

  // =========================================================================
  // Application State & Persistence
  // =========================================================================
  function getDefaultPackForBox(version) {
    if (typeof DATA.getDefaultPackConfigForVersion === 'function') {
      return DATA.getDefaultPackConfigForVersion(version);
    }
    return version === 'secrets' && DATA.DEFAULT_SECRETS_PACK_CONFIG
      ? DATA.DEFAULT_SECRETS_PACK_CONFIG
      : DATA.DEFAULT_PACK_CONFIG;
  }

  function migratePackConfig(cfg, fallbackDef) {
    const def = fallbackDef || DATA.DEFAULT_PACK_CONFIG;
    if (!cfg || typeof cfg !== 'object') return JSON.parse(JSON.stringify(def));
    const selectedPackIds =
      Array.isArray(cfg.selectedPackIds) && cfg.selectedPackIds.length > 0
        ? cfg.selectedPackIds
        : def.selectedPackIds.slice();
    return {
      selectedPackIds,
      selectedWordPackIds:
        Array.isArray(cfg.selectedWordPackIds) && cfg.selectedWordPackIds.length > 0
          ? cfg.selectedWordPackIds
          : def.selectedWordPackIds
          ? def.selectedWordPackIds.slice()
          : selectedPackIds.slice(),
      disabledRoomIds: Array.isArray(cfg.disabledRoomIds) ? cfg.disabledRoomIds : [],
      disabledArtifactIds: Array.isArray(cfg.disabledArtifactIds) ? cfg.disabledArtifactIds : [],
      guaranteedPackIds: Array.isArray(cfg.guaranteedPackIds) ? cfg.guaranteedPackIds : [],
    };
  }

  function migrateSecretsConfig(cfg) {
    const def = (SECRETS && SECRETS.DEFAULT_SECRETS_CONFIG) || {
      hookSide: 'object',
      locationSide: 'A',
      includeAdvancedLocations: false,
      maxAdvancedLocations: 5,
      enableTelegrams: true,
      selectedWordPackIds: ['pack-secrets-words'],
    };
    if (!cfg || typeof cfg !== 'object') return JSON.parse(JSON.stringify(def));
    const selectedWordPackIds =
      Array.isArray(cfg.selectedWordPackIds) && cfg.selectedWordPackIds.length > 0
        ? cfg.selectedWordPackIds
        : def.selectedWordPackIds.slice();
    return {
      hookSide: cfg.hookSide === 'informant' ? 'informant' : 'object',
      locationSide: cfg.locationSide === 'B' || cfg.locationSide === 'mixed' ? cfg.locationSide : 'A',
      includeAdvancedLocations: Boolean(cfg.includeAdvancedLocations),
      maxAdvancedLocations: typeof cfg.maxAdvancedLocations === 'number' ? cfg.maxAdvancedLocations : 5,
      enableTelegrams: cfg.enableTelegrams !== false,
      selectedWordPackIds,
    };
  }

  function getDefaultSetupProfile(version) {
    return {
      mode: 'standard',
      difficulty: 'silver',
      duoTarget: 5,
      modifiers: Object.assign({}, DATA.DEFAULT_MODIFIERS, {
        enableTelegrams: version === 'secrets',
      }),
    };
  }

  function sanitizeSetupProfile(raw, version) {
    const def = getDefaultSetupProfile(version);
    if (!raw || typeof raw !== 'object') return def;
    return {
      mode: raw.mode === 'duo' ? 'duo' : 'standard',
      difficulty: raw.difficulty === 'gold' ? 'gold' : 'silver',
      duoTarget: raw.duoTarget === 6 || raw.duoTarget === 7 ? raw.duoTarget : 5,
      modifiers: Object.assign({}, def.modifiers, raw.modifiers || {}),
    };
  }

  function loadInitialPackConfigs() {
    const stored = lsGetJSON(KEYS.packConfigsByVersion, null);
    if (stored && typeof stored === 'object') {
      return {
        mansion: migratePackConfig(stored.mansion, getDefaultPackForBox('mansion')),
        secrets: migratePackConfig(stored.secrets, getDefaultPackForBox('secrets')),
      };
    }
    const legacyMansion = lsGetJSON(KEYS.packConfig, null);
    const legacySecrets = lsGetJSON(KEYS.secretsConfig, null);
    let secretsPack = migratePackConfig(null, getDefaultPackForBox('secrets'));
    if (legacySecrets && typeof legacySecrets === 'object' && SECRETS) {
      const packs = [SECRETS.SECRETS_BASIC_PACK_ID];
      if (legacySecrets.includeAdvancedLocations) packs.push(SECRETS.SECRETS_ADVANCED_PACK_ID);
      packs.push(
        legacySecrets.hookSide === 'informant'
          ? SECRETS.SECRETS_INFORMANTS_PACK_ID
          : SECRETS.SECRETS_OBJECTS_PACK_ID
      );
      secretsPack = migratePackConfig(
        {
          selectedPackIds: packs,
          selectedWordPackIds:
            Array.isArray(legacySecrets.selectedWordPackIds) && legacySecrets.selectedWordPackIds.length > 0
              ? legacySecrets.selectedWordPackIds
              : [SECRETS.SECRETS_WORDS_PACK_ID],
          disabledRoomIds: [],
          disabledArtifactIds: [],
          guaranteedPackIds: [],
        },
        getDefaultPackForBox('secrets')
      );
    }
    return {
      mansion: migratePackConfig(legacyMansion, getDefaultPackForBox('mansion')),
      secrets: secretsPack,
    };
  }

  function loadInitialSetupState() {
    const storedV2 = lsGetJSON(KEYS.setupPrefsV2, null);
    if (storedV2 && typeof storedV2 === 'object' && storedV2.byVersion) {
      return {
        version: storedV2.version === 'secrets' ? 'secrets' : 'mansion',
        step: storedV2.step === 'parameters' ? 'parameters' : 'version',
        byVersion: {
          mansion: sanitizeSetupProfile(storedV2.byVersion.mansion, 'mansion'),
          secrets: sanitizeSetupProfile(storedV2.byVersion.secrets, 'secrets'),
        },
      };
    }
    const legacySetup = lsGetJSON(KEYS.setupPrefs, {}) || {};
    const legacySecrets = lsGetJSON(KEYS.secretsConfig, null);
    const mansionProfile = sanitizeSetupProfile(legacySetup, 'mansion');
    const secretsProfile = getDefaultSetupProfile('secrets');
    if (legacySecrets && typeof legacySecrets === 'object') {
      if (legacySecrets.locationSide === 'B') {
        secretsProfile.difficulty = 'gold';
        secretsProfile.modifiers.mixedDifficulty = false;
      } else if (legacySecrets.locationSide === 'mixed') {
        secretsProfile.modifiers.mixedDifficulty = true;
      }
      secretsProfile.modifiers.enableTelegrams = legacySecrets.enableTelegrams !== false;
    }
    return {
      version: legacySetup.version === 'secrets' ? 'secrets' : 'mansion',
      step: legacySetup.step === 'parameters' ? 'parameters' : 'version',
      byVersion: {
        mansion: mansionProfile,
        secrets: secretsProfile,
      },
    };
  }

  function lockVisionStateForPrivacy(gs) {
    if (!gs || gs.phase !== 'vision') return false;
    if (gs.visionStep === 'medium_select') {
      gs.visionStep = 'medium_privacy';
      return true;
    }
    if (gs.visionStep === 'ghost_add') {
      gs.visionStep = 'ghost_privacy';
      return true;
    }
    return false;
  }

  function loadInitialGameState() {
    const parsed = lsGetJSON(KEYS.gameState, null);
    if (
      !parsed ||
      typeof parsed !== 'object' ||
      !Array.isArray(parsed.rooms) ||
      parsed.rooms.length === 0 ||
      typeof parsed.phase !== 'string'
    ) {
      return null;
    }
    const fixArtId = (aid) =>
      typeof aid === 'string' && aid.startsWith('pack-gr-') ? aid.replace(/^pack-gr-/, 'art-gr-') : aid;
    const migratedRooms = parsed.rooms.map((r) =>
      Object.assign({}, r, { artifactId: fixArtId(r.artifactId) })
    );
    const migratedArtifacts = Array.isArray(parsed.artifacts)
      ? parsed.artifacts.map((a) => Object.assign({}, a, { id: fixArtId(a.id) }))
      : [];
    const migratedGhostChosen = Array.isArray(parsed.ghostChosenClues)
      ? parsed.ghostChosenClues
      : parsed.ghostChosenClue
      ? [parsed.ghostChosenClue]
      : [];
    const migratedBanners = Array.isArray(parsed.roundEventBanners)
      ? parsed.roundEventBanners
      : parsed.roundEventBanner
      ? [parsed.roundEventBanner]
      : [];
    const migratedHunt = parsed.huntProgress
      ? Object.assign({}, parsed.huntProgress, {
          feverActive: Boolean(parsed.huntProgress.feverActive),
          channelPenaltyActive: Boolean(parsed.huntProgress.channelPenaltyActive),
          wallCollapseActive: Boolean(parsed.huntProgress.wallCollapseActive),
          selectedDecoyClueId: parsed.huntProgress.selectedDecoyClueId || null,
          violationTriggered: Boolean(parsed.huntProgress.violationTriggered),
          tg06UnsealPending: Boolean(parsed.huntProgress.tg06UnsealPending),
          tg06UnsealedRoomId: parsed.huntProgress.tg06UnsealedRoomId || null,
        })
      : null;

    const restoredModifiers = Object.assign({}, DATA.DEFAULT_MODIFIERS, parsed.modifiers || {});
    const restored = Object.assign({}, parsed, {
      rooms: migratedRooms,
      artifacts: migratedArtifacts,
      targetSealedCount: typeof parsed.targetSealedCount === 'number' ? parsed.targetSealedCount : 5,
      roundHistory: Array.isArray(parsed.roundHistory) ? parsed.roundHistory : [],
      discardClues: Array.isArray(parsed.discardClues) ? parsed.discardClues : [],
      modifiers: restoredModifiers,
      activeWingIds: Array.isArray(parsed.activeWingIds) ? parsed.activeWingIds : [],
      ghostChosenClues: migratedGhostChosen,
      roundEventBanners: migratedBanners,
      huntProgress: migratedHunt,
      packConfig: migratePackConfig(parsed.packConfig),
      secretsConfig: parsed.secretsConfig ? migrateSecretsConfig(parsed.secretsConfig) : undefined,
      telegramDeck: Array.isArray(parsed.telegramDeck) ? parsed.telegramDeck : [],
      telegramDiscard: Array.isArray(parsed.telegramDiscard) ? parsed.telegramDiscard : [],
      spyTelegramHand: Array.isArray(parsed.spyTelegramHand) ? parsed.spyTelegramHand : [],
      activeTelegrams: Array.isArray(parsed.activeTelegrams) ? parsed.activeTelegrams : [],
      majorTelegramSwapUsedThisRound: Boolean(parsed.majorTelegramSwapUsedThisRound),
      pendingSpyTelegramChoice: Boolean(parsed.pendingSpyTelegramChoice),
      stolenClueThisRound: parsed.stolenClueThisRound || null,
      pendingMediumSwaps: typeof parsed.pendingMediumSwaps === 'number' ? parsed.pendingMediumSwaps : 0,
      pendingGhostSwaps: typeof parsed.pendingGhostSwaps === 'number' ? parsed.pendingGhostSwaps : 0,
      pendingGhostBonusDraw: typeof parsed.pendingGhostBonusDraw === 'number' ? parsed.pendingGhostBonusDraw : 0,
      pendingMediumCacheCount: typeof parsed.pendingMediumCacheCount === 'number' ? parsed.pendingMediumCacheCount : 0,
      roundMediumSwapsLeft: typeof parsed.roundMediumSwapsLeft === 'number' ? parsed.roundMediumSwapsLeft : 0,
      roundGhostSwapsLeft: typeof parsed.roundGhostSwapsLeft === 'number' ? parsed.roundGhostSwapsLeft : 0,
      roundMediumSwapTags: Array.isArray(parsed.roundMediumSwapTags) ? parsed.roundMediumSwapTags : [],
      roundGhostSwapTags: Array.isArray(parsed.roundGhostSwapTags) ? parsed.roundGhostSwapTags : [],
      mediumChannelUsesLeft:
        typeof parsed.mediumChannelUsesLeft === 'number'
          ? parsed.mediumChannelUsesLeft
          : restoredModifiers.enableRiskActions
          ? 2
          : 0,
      mediumChannelUsedThisRound: Boolean(parsed.mediumChannelUsedThisRound),
      ghostWallCollapseUsed: Boolean(parsed.ghostWallCollapseUsed),
      wallCollapseThisRound: Boolean(parsed.wallCollapseThisRound),
      activeDeckCache: Array.isArray(parsed.activeDeckCache) ? parsed.activeDeckCache : null,
    });
    lockVisionStateForPrivacy(restored);
    return restored;
  }

  const initialSetupState = loadInitialSetupState();
  const initialPackConfigs = loadInitialPackConfigs();

  const app = {
    lang: lsGet(KEYS.lang, 'ru') === 'en' ? 'en' : 'ru',
    themeMode: lsGet(KEYS.themeMode, 'dark') === 'light' ? 'light' : 'dark',
    uiStyle: ['atmospheric', 'minimalist', 'classic'].includes(lsGet(KEYS.uiStyle, 'atmospheric'))
      ? lsGet(KEYS.uiStyle, 'atmospheric')
      : 'atmospheric',
    fontFamily: ['sans', 'system', 'rounded', 'serif'].includes(lsGet(KEYS.fontFamily, 'sans'))
      ? lsGet(KEYS.fontFamily, 'sans')
      : 'sans',
    fontSize: ['sm', 'md', 'lg', 'xl'].includes(lsGet(KEYS.fontSize, 'md'))
      ? lsGet(KEYS.fontSize, 'md')
      : 'md',
    keepAwake: lsGet(KEYS.wakeLock, 'true') !== 'false',
    timerPreset: [60, 120, 180].includes(Number(lsGet(KEYS.timerDuration, '120')))
      ? Number(lsGet(KEYS.timerDuration, '120'))
      : 120,

    packConfigs: initialPackConfigs,
    setupByVersion: initialSetupState.byVersion,
    setup: {
      version: initialSetupState.version,
      step: initialSetupState.step,
      showModifiers: false,
    },

    gameState: loadInitialGameState(),

    // Transient UI state
    modal: null, // 'settings' | 'rules' | 'history' | 'packs' | 'homeConfirm' | 'clearCacheConfirm' | 'huntConfirm' | 'violationConfirm' | 'iosInstall'
    rulesTab: 'rules',
    packsDraft: null,
    wordFilter: 'all',
    wordSearch: '',
    showMansionPlan: false,
    visionWarning: null,
    selectedCacheCardId: null,
    stolenClueId: null,
    spyRespiteUnlocked: false,
    spyPickedTelegramId: null,
    spyDiscardSecond: false,
    tg06UnsealRoomId: null,
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    deferredInstallPrompt: null,
    isInstalled:
      window.matchMedia('(display-mode: standalone)').matches ||
      Boolean(window.navigator.standalone),
    isIOS:
      /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1),
    isIntentionalReload: false,
    confettiShownForRound: null,
  };

  function T() {
    return DATA.translations[app.lang];
  }

  function applyDocumentPrefs() {
    const d = document.documentElement;
    d.lang = app.lang;
    d.dataset.theme = app.themeMode;
    d.dataset.style = app.uiStyle;
    d.dataset.font = app.fontFamily;
    d.dataset.fontSize = app.fontSize;
    const bgHex =
      app.themeMode === 'light'
        ? app.uiStyle === 'minimalist'
          ? '#f8fafc'
          : app.uiStyle === 'classic'
          ? '#f6eedf'
          : '#fffbeb'
        : app.uiStyle === 'classic'
        ? '#14110f'
        : '#09090b';
    d.style.backgroundColor = bgHex;
    document.body.style.backgroundColor = bgHex;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', bgHex);
  }

  function getActiveVersionKey() {
    return app.setup.version === 'secrets' ? 'secrets' : 'mansion';
  }

  function getActivePackConfig() {
    const key = getActiveVersionKey();
    if (!app.packConfigs[key]) {
      app.packConfigs[key] = migratePackConfig(null, getDefaultPackForBox(key));
    }
    return app.packConfigs[key];
  }

  function setActivePackConfig(cfg) {
    app.packConfigs[getActiveVersionKey()] = cfg;
  }

  function getActiveSetup() {
    const key = getActiveVersionKey();
    if (!app.setupByVersion[key]) {
      app.setupByVersion[key] = getDefaultSetupProfile(key);
    }
    return app.setupByVersion[key];
  }

  function persistPrefs() {
    lsSet(KEYS.lang, app.lang);
    lsSet(KEYS.themeMode, app.themeMode);
    lsSet(KEYS.uiStyle, app.uiStyle);
    lsSet(KEYS.fontFamily, app.fontFamily);
    lsSet(KEYS.fontSize, app.fontSize);
    lsSet(KEYS.wakeLock, String(app.keepAwake));
    lsSet(KEYS.timerDuration, String(app.timerPreset));
    lsSet(KEYS.packConfigsByVersion, JSON.stringify(app.packConfigs));
    lsSet(KEYS.packConfig, JSON.stringify(app.packConfigs.mansion));
    lsSet(
      KEYS.setupPrefsV2,
      JSON.stringify({
        version: app.setup.version,
        step: app.setup.step,
        byVersion: app.setupByVersion,
      })
    );
  }

  function persistGameState() {
    if (app.gameState) {
      lsSet(KEYS.gameState, JSON.stringify(app.gameState));
    } else {
      lsRemove(KEYS.gameState);
    }
  }

  function isGameActive() {
    return Boolean(app.gameState && app.gameState.phase !== 'gameover');
  }

  // =========================================================================
  // Wake Lock Manager (keeps screen awake ALWAYS while app is open & enabled)
  // =========================================================================
  const wakeLockMgr = {
    sentinel: null,
    requesting: false,
    retryTimer: null,
    async sync() {
      const shouldLock = Boolean(app.keepAwake);
      if (!shouldLock) {
        this.release();
        return;
      }
      if (!('wakeLock' in navigator) || this.sentinel || this.requesting) return;
      if (document.visibilityState !== 'visible') return;
      this.requesting = true;
      try {
        const s = await navigator.wakeLock.request('screen');
        if (!app.keepAwake) {
          s.release().catch(() => {});
          return;
        }
        this.sentinel = s;
        s.addEventListener('release', () => {
          if (this.sentinel === s) this.sentinel = null;
          if (app.keepAwake && document.visibilityState === 'visible') {
            clearTimeout(this.retryTimer);
            this.retryTimer = setTimeout(() => this.sync(), 600);
          }
        });
      } catch {
        // Retry automatically on next user gesture / visibility change
      } finally {
        this.requesting = false;
      }
    },
    release() {
      clearTimeout(this.retryTimer);
      if (this.sentinel) {
        const s = this.sentinel;
        this.sentinel = null;
        s.release().catch(() => {});
      }
    },
  };

  // Back-button guard (prevents accidental Android swipe-back / browser Back from killing an active match)
  function ensureHistoryGuard() {
    try {
      if (!window.history || !window.history.pushState) return;
      if (!window.history.state || !window.history.state.mediumVanillaGuard) {
        window.history.pushState({ mediumVanillaGuard: true }, '');
      }
    } catch {}
  }

  window.addEventListener('popstate', () => {
    if (app.modal) {
      sound.playClick();
      app.modal = null;
      app.packsDraft = null;
      ensureHistoryGuard();
      render();
      return;
    }
    if (isGameActive()) {
      sound.playWarn();
      app.modal = 'homeConfirm';
      ensureHistoryGuard();
      render();
    }
  });

  function flushAndLockForPrivacy() {
    if (lockVisionStateForPrivacy(app.gameState)) {
      persistGameState();
      render();
    } else {
      persistGameState();
    }
  }

  function unlockAudioAndWake() {
    if (!sound.muted && sound.ctx && sound.ctx.state === 'suspended') {
      sound.ctx.resume().catch(() => {});
    }
    wakeLockMgr.sync();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flushAndLockForPrivacy();
    } else if (document.visibilityState === 'visible') {
      wakeLockMgr.sync();
      syncHuntTimerTick();
    }
  });
  window.addEventListener('focus', () => {
    wakeLockMgr.sync();
    syncHuntTimerTick();
  });
  window.addEventListener('pageshow', () => {
    wakeLockMgr.sync();
    syncHuntTimerTick();
  });
  window.addEventListener('pointerdown', unlockAudioAndWake, { passive: true });
  window.addEventListener('touchstart', unlockAudioAndWake, { passive: true });
  window.addEventListener('click', () => wakeLockMgr.sync(), { passive: true });
  window.addEventListener('pagehide', flushAndLockForPrivacy);
  window.addEventListener('beforeunload', (e) => {
    flushAndLockForPrivacy();
    if (isGameActive() && !app.isIntentionalReload) {
      e.preventDefault();
      e.returnValue = '';
    }
  });

  // =========================================================================
  // Game Data & Deck Helpers
  // =========================================================================
  function getRoomSide(room, fallbackDifficulty) {
    return room.side || fallbackDifficulty;
  }

  function getRoomName(room, fallbackDifficulty) {
    const side = getRoomSide(room, fallbackDifficulty);
    const tr = DATA.ROOM_TRANSLATIONS[room.id];
    if (tr && tr[app.lang] && tr[app.lang][side]) return tr[app.lang][side];
    return side === 'silver' ? room.nameSilver : room.nameGold;
  }

  function getArtifactObj(gs, artifactId) {
    if (gs && Array.isArray(gs.artifacts)) {
      const found = gs.artifacts.find((a) => a.id === artifactId);
      if (found) return found;
    }
    return DATA.ALL_ARTIFACTS.find((a) => a.id === artifactId) || null;
  }

  function getArtifactName(artifactId, gs) {
    const artObj = getArtifactObj(gs, artifactId);
    const key = artObj && artObj.symbol === 'dossier' ? artifactId + '::informant' : artifactId;
    const tr = DATA.ARTIFACT_TRANSLATIONS[key] || DATA.ARTIFACT_TRANSLATIONS[artifactId];
    if (tr && tr[app.lang]) return tr[app.lang];
    return artObj ? artObj.name : artifactId;
  }

  function areTelegramsEnabled(gs) {
    if (!gs || gs.mode !== 'standard') return false;
    return Boolean(
      (gs.modifiers && gs.modifiers.enableTelegrams) ||
        (gs.version === 'secrets' && gs.secretsConfig && gs.secretsConfig.enableTelegrams)
    );
  }

  let _packWordStatsCache = null;
  function getPackWordStats() {
    if (_packWordStatsCache && _packWordStatsCache.total === DATA.ALL_CLUES.length) {
      return _packWordStatsCache;
    }
    const counts = {};
    const samples = {};
    for (let i = 0; i < DATA.ALL_CLUES.length; i++) {
      const c = DATA.ALL_CLUES[i];
      counts[c.packId] = (counts[c.packId] || 0) + 1;
      if (!samples[c.packId]) samples[c.packId] = [];
      if (samples[c.packId].length < 5) samples[c.packId].push(c);
    }
    _packWordStatsCache = { total: DATA.ALL_CLUES.length, counts, samples };
    return _packWordStatsCache;
  }

  function isExternalDictPack(pack) {
    return Boolean(pack && pack.category && pack.category !== 'medium');
  }

  function filterWordPacks(packs, filter, search) {
    const q = String(search || '').trim().toLowerCase();
    return packs.filter((p) => {
      if (filter === 'medium' && isExternalDictPack(p)) return false;
      if (filter === 'games' && (!isExternalDictPack(p) || p.isAdult)) return false;
      if (filter === 'adult' && !p.isAdult) return false;
      if (q) {
        const hay = ((p.titleRu || '') + ' ' + (p.titleEn || '') + ' ' + (p.descRu || '') + ' ' + (p.descEn || '')).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function getClueLabel(card) {
    if (app.lang === 'en') {
      if (card.wordEn) return card.wordEn;
      if (DATA.CLUE_TRANSLATIONS_BY_ID && DATA.CLUE_TRANSLATIONS_BY_ID[card.id]) {
        return DATA.CLUE_TRANSLATIONS_BY_ID[card.id];
      }
      return (DATA.CLUE_TRANSLATIONS_EN && DATA.CLUE_TRANSLATIONS_EN[card.word]) || card.word;
    }
    return card.word;
  }

  function countLocationWords(name) {
    if (!name) return 1;
    const tokens = String(name)
      .replace(/[«»"().,!?:;—–]/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    return Math.max(1, tokens.length);
  }

  function getBoxTerms(version) {
    const t = T();
    if (version !== 'secrets') {
      return {
        isSecrets: false,
        mediumRole: t.mediumRole,
        ghostRole: t.ghostRole,
        huntersRole: app.lang === 'ru' ? 'Охотники' : 'Hunters',
        sealed: t.sealed,
        lost: t.lost,
        startVision: t.startVision,
        showPlan: t.showMansionPlan,
        visionStep1: t.visionStep1,
        mediumSecretTitle: t.mediumSecretTitle,
        mediumPrivacyDesc: t.mediumPrivacyDesc,
        mediumHand: t.mediumHand,
        passToGhost: t.passToGhost,
        ghostStep2: t.ghostStep2,
        ghostSecretTitle: t.ghostSecretTitle,
        ghostPrivacyDesc: t.ghostPrivacyDesc,
        mediumSummary: t.mediumSummary,
        ghostHandPrompt: t.ghostHandPrompt,
        huntPhase: t.huntPhase,
        hunterDiscussion: t.hunterDiscussion,
        hunterPrompt: t.hunterPrompt,
        selectRoomPrompt: t.selectRoomPrompt,
        confirmHuntTitle: t.confirmHuntTitle,
        confirmHuntText: t.confirmHuntText,
        checkHideoutBadge: t.checkHideoutBadge,
        secretWas: t.secretWas,
        hunterPicked: t.hunterPicked,
        sealedResult: t.sealedResult,
        lostResult: t.lostResult,
        respitePhase: t.respitePhase,
        respiteDesc: t.respiteDesc,
        respiteDescTelegrams:
          app.lang === 'ru'
            ? 'Сыгранные подсказки уходят в сброс. Медиум добирает 2 карты, а Призрак при игре с телеграммами берёт 1 карту.'
            : 'Played clues go to discard. Medium draws 2 cards, and Ghost draws 1 card while Telegrams are active.',
        respiteDescDuo: t.respiteDescDuo,
        victoryHunters: t.victoryHunters,
        victoryGhost: t.victoryGhost,
        ghostBanished: t.ghostBanished,
        huntersLost: t.huntersLost,
        victoryDesc: t.victoryDesc,
        defeatDesc: t.defeatDesc,
        duoVictoryDesc: t.duoVictoryDesc,
        duoDefeatDesc: t.duoDefeatDesc,
        mediumCardTag: t.mediumCardsTag,
        ghostCardTag: t.ghostCardTag,
        duoSpiritCardLabel: t.duoSpiritCardLabel,
      };
    }
    if (app.lang === 'ru') {
      return {
        isSecrets: true,
        mediumRole: 'Майор',
        ghostRole: 'Шпион',
        huntersRole: 'Пионеры',
        sealed: 'Обесшпионенная среда',
        lost: 'Закрыто на учёт',
        startVision: 'Начать фазу Наблюдения',
        showPlan: 'План Маяковского-404',
        visionStep1: 'Ход Майора',
        mediumSecretTitle: 'Карта направления',
        mediumPrivacyDesc: 'Карта направления и рука Майора.',
        mediumHand: 'Подсказки на руке Майора',
        passToGhost: 'Передать Шпиону',
        ghostStep2: 'Ход Шпиона',
        ghostSecretTitle: 'Целевая локация',
        ghostPrivacyDesc: 'Подсказки Майора и рука Шпиона.',
        mediumSummary: 'Подсказки Майора',
        ghostHandPrompt: 'Выберите 1 ложную подсказку для замешивания:',
        huntPhase: 'Фаза II • Перехват',
        hunterDiscussion: 'Совещание пионеров',
        hunterPrompt: 'Пионеры обсуждают выложенные подсказки и выбирают локацию. Майор и Шпион молчат (если не действует особая телеграмма)!',
        selectRoomPrompt: 'Выберите локацию, на которую указал Майор:',
        confirmHuntTitle: 'Утвердить выбор локации?',
        confirmHuntText: 'После подтверждения будет вскрыта карта направления.',
        checkHideoutBadge: 'Проверка карты направления',
        secretWas: 'Целевая локация была:',
        hunterPicked: 'Пионеры выбрали:',
        sealedResult: 'Локация отмечена как «Обесшпионенная среда»! Карта зацепки перевёрнута, направление убрано.',
        lostResult: 'Целевая локация «Закрыта на учёт»! Шпион перехватил след, зацепка убрана.',
        respitePhase: 'Фаза III • Доклад',
        respiteDesc: 'Выложенные подсказки уходят в сброс. Майор добирает 2 карты, Шпион — до 5 карт на руке.',
        respiteDescTelegrams: 'Выложенные подсказки уходят в сброс. Майор добирает 2 карты, Шпион — 1 карту (по правилам с телеграммами).',
        respiteDescDuo: 'Выложенные подсказки уходят в сброс. Майор добирает 2 новые карты из колоды.',
        victoryHunters: 'Победа пионеров и майора',
        victoryGhost: 'Победа шпиона',
        ghostBanished: 'Шпион депортирован из Маяковского-404!',
        huntersLost: 'Чертежи гравицаппы похищены!',
        victoryDesc: 'Вы обеспечили 5 «Обесшпионенных сред» и сорвали диверсию империалистического агента.',
        defeatDesc: '5 локаций «Закрыты на учёт». Шпион замел следы и скрылся с секретными чертежами.',
        duoVictoryDesc: 'Майор и Пионер успешно очистили нужное число локаций в Маяковском-404.',
        duoDefeatDesc: 'Осталось слишком мало открытых локаций, чтобы завершить операцию.',
        mediumCardTag: 'Майор',
        ghostCardTag: 'Шпион',
        duoSpiritCardLabel: 'Подсказка из колоды',
      };
    }
    return {
      isSecrets: true,
      mediumRole: 'Major',
      ghostRole: 'Spy',
      huntersRole: 'Pioneers',
      sealed: 'De-Spied Zone',
      lost: 'Closed for Audit',
      startVision: 'Start Observation Phase',
      showPlan: 'Mayakovsky-404 Map',
      visionStep1: 'Major’s Turn',
      mediumSecretTitle: 'Direction',
      mediumPrivacyDesc: 'Direction card and Major’s hand.',
      mediumHand: 'Major’s Hand',
      passToGhost: 'Pass to Spy',
      ghostStep2: 'Spy’s Turn',
      ghostSecretTitle: 'Target Location',
      ghostPrivacyDesc: 'Major’s clues and Spy’s hand.',
      mediumSummary: 'Major’s Clues',
      ghostHandPrompt: 'Select 1 decoy clue to shuffle in:',
      huntPhase: 'Phase II • Interception',
      hunterDiscussion: 'Pioneer Discussion',
      hunterPrompt: 'Pioneers discuss the revealed clues and pick a location. Major and Spy stay silent (unless a Telegram says otherwise)!',
      selectRoomPrompt: 'Select the location the Major is pointing to:',
      confirmHuntTitle: 'Lock In Choice?',
      confirmHuntText: 'Confirming will reveal the direction card for this round.',
      checkHideoutBadge: 'Checking Direction Card',
      secretWas: 'The target location was:',
      hunterPicked: 'Pioneers chose:',
      sealedResult: 'Marked as a “De-Spied Zone”! Hook cleared and direction card removed.',
      lostResult: 'Target location is “Closed for Audit”! The Spy slipped past the Pioneers.',
      respitePhase: 'Phase III • Debrief',
      respiteDesc: 'Revealed clues are discarded. Major draws 2 clues; Spy refills hand to 5.',
      respiteDescTelegrams: 'Revealed clues are discarded. Major draws 2 clues; Spy draws 1 clue (Telegrams rule).',
      respiteDescDuo: 'Revealed clues are discarded. Major draws 2 new clues from the deck.',
      victoryHunters: 'Pioneers & Major Victory',
      victoryGhost: 'Spy Victory',
      ghostBanished: 'The Spy has been deported!',
      huntersLost: 'Gravitsappa blueprints stolen!',
      victoryDesc: 'You secured 5 De-Spied Zones and foiled the imperialist conspiracy in Mayakovsky-404.',
      defeatDesc: '5 locations were Closed for Audit. The Spy escaped with the classified blueprints.',
      duoVictoryDesc: 'Major and Pioneer secured the target number of locations in Mayakovsky-404.',
      duoDefeatDesc: 'Too few active locations remain to complete the operation.',
      mediumCardTag: 'Major',
      ghostCardTag: 'Spy',
      duoSpiritCardLabel: 'Deck Decoy',
    };
  }

  function drawTelegramCards(deck, discard, count) {
    let curDeck = (deck || []).slice();
    let curDiscard = (discard || []).slice();
    const drawn = [];
    for (let i = 0; i < count; i++) {
      if (curDeck.length === 0) {
        if (curDiscard.length === 0) break;
        curDeck = shuffleArray(curDiscard);
        curDiscard = [];
      }
      const next = curDeck.shift();
      if (next) drawn.push(next);
    }
    if (curDeck.length === 0 && curDiscard.length > 0) {
      curDeck = shuffleArray(curDiscard);
      curDiscard = [];
    }
    return { drawn, nextDeck: curDeck, nextDiscard: curDiscard };
  }

  function renderActiveTelegramsBanner(telegrams, canResolveConflict) {
    if (!Array.isArray(telegrams) || telegrams.length === 0) return '';
    const t = T();
    const showConflict = Boolean(canResolveConflict && telegrams.length > 1);
    return (
      '<div class="box red stack-sm">' +
      '<div class="row-between">' +
      '<span class="row text-xs bold text-red" style="text-transform:uppercase">' +
      ico('alert', 'sm') +
      '<span>' + esc(t.activeTelegramsTitle) + ' (' + telegrams.length + ')</span></span>' +
      (showConflict ? '<span class="badge red">' + esc(t.telegramConflictHint) + '</span>' : '') +
      '</div>' +
      telegrams
        .map((tg) => {
          const title = app.lang === 'ru' ? tg.nameRu : tg.nameEn;
          const desc = app.lang === 'ru' ? tg.textRu : tg.textEn;
          const note = app.lang === 'ru' ? tg.noteRu : tg.noteEn;
          return (
            '<div class="box stack-sm" style="background:var(--bg-panel)">' +
            '<div class="row-between">' +
            '<span class="text-xs bold"><span class="text-red mono">№' + tg.number + '</span> ' + esc(title) + '</span>' +
            (showConflict
              ? '<button type="button" class="btn btn-sm btn-secondary" data-act="dismiss-tg" data-id="' + esc(tg.id) + '" style="padding:0.15rem 0.45rem;font-size:0.68rem">' + esc(t.dismissTelegramBtn) + '</button>'
              : '') +
            '</div>' +
            '<p class="text-xs">' + esc(desc) + '</p>' +
            (note ? '<p class="text-xs text-muted" style="font-style:italic">' + esc(note) + '</p>' : '') +
            '</div>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  function getFilteredGameData(cfg) {
    const wordPackIds =
      cfg.selectedWordPackIds && cfg.selectedWordPackIds.length > 0
        ? cfg.selectedWordPackIds
        : cfg.selectedPackIds;
    const rooms = DATA.ALL_ROOMS.filter(
      (r) => cfg.selectedPackIds.includes(r.packId) && !cfg.disabledRoomIds.includes(r.id)
    );
    const artifacts = DATA.ALL_ARTIFACTS.filter(
      (a) => cfg.selectedPackIds.includes(a.packId) && !cfg.disabledArtifactIds.includes(a.id)
    );
    const roomIds = new Set(rooms.map((r) => r.id));
    const hideouts = Array.isArray(DATA.ALL_HIDEOUTS)
      ? DATA.ALL_HIDEOUTS.filter((h) => roomIds.has(h.roomId))
      : rooms.map((r) => ({ id: 'hideout-' + r.id, roomId: r.id }));
    const clues = DATA.ALL_CLUES.filter((c) => wordPackIds.includes(c.packId));
    return { rooms, artifacts, hideouts, clues };
  }

  function selectRoomsForBoard(availableRooms, guaranteedPackIds) {
    const guaranteed = Array.from(new Set(guaranteedPackIds || []));
    const nonAdvancedCount = availableRooms.filter((r) => r.level !== 'advanced').length;
    const maxAdvancedAllowed = nonAdvancedCount >= 5 ? 5 : 10;
    const picked = [];
    const pickedIds = new Set();
    let advancedPicked = 0;

    function tryPick(room) {
      if (picked.length >= 10 || pickedIds.has(room.id)) return false;
      if (room.level === 'advanced' && advancedPicked >= maxAdvancedAllowed) return false;
      picked.push(room);
      pickedIds.add(room.id);
      if (room.level === 'advanced') advancedPicked += 1;
      return true;
    }

    if (guaranteed.length > 0) {
      const minPerWing = guaranteed.length === 1 ? 3 : guaranteed.length === 2 ? 2 : 1;
      guaranteed.forEach((packId) => {
        const fromPack = shuffleArray(
          availableRooms.filter((r) => r.packId === packId && !pickedIds.has(r.id))
        );
        let added = 0;
        for (let i = 0; i < fromPack.length && added < minPerWing && picked.length < 10; i++) {
          if (tryPick(fromPack[i])) added += 1;
        }
      });
    }

    const remainder = shuffleArray(availableRooms.filter((r) => !pickedIds.has(r.id)));
    for (let i = 0; i < remainder.length && picked.length < 10; i++) {
      tryPick(remainder[i]);
    }
    // Safety fallback if cap left fewer than 10
    if (picked.length < 10) {
      for (let i = 0; i < remainder.length && picked.length < 10; i++) {
        if (!pickedIds.has(remainder[i].id)) {
          picked.push(remainder[i]);
          pickedIds.add(remainder[i].id);
        }
      }
    }
    return shuffleArray(picked);
  }

  function drawClueCards(deck, discard, count) {
    let curDeck = deck.slice();
    let curDiscard = discard.slice();
    const drawn = [];
    for (let i = 0; i < count; i++) {
      if (curDeck.length === 0) {
        if (curDiscard.length === 0) break;
        curDeck = shuffleArray(curDiscard);
        curDiscard = [];
      }
      const next = curDeck.shift();
      if (next) drawn.push(next);
    }
    if (curDeck.length === 0 && curDiscard.length > 0) {
      curDeck = shuffleArray(curDiscard);
      curDiscard = [];
    }
    return { drawn, nextDeck: curDeck, nextDiscard: curDiscard };
  }

  function getArtifactCategory(artifactId) {
    return (DATA.ARTIFACT_CATEGORIES && DATA.ARTIFACT_CATEGORIES[artifactId]) || null;
  }

  function getRoomTrait(roomId) {
    return (DATA.ROOM_TRAITS && DATA.ROOM_TRAITS[roomId]) || null;
  }

  function getArtifactCatLabel(cat) {
    const t = T();
    if (cat === 'occult') return t.artCatOccult;
    if (cat === 'archive') return t.artCatArchive;
    if (cat === 'tool') return t.artCatTool;
    if (cat === 'eerie') return t.artCatEerie;
    return '';
  }

  function getRoomTraitLabel(trait) {
    const t = T();
    if (trait === 'pillar') return t.roomTraitPillar;
    if (trait === 'quiet') return t.roomTraitQuiet;
    if (trait === 'echo') return t.roomTraitEcho;
    if (trait === 'archive') return t.roomTraitArchive;
    return '';
  }

  function getRoomTraitGlyph(trait) {
    if (trait === 'pillar') return '▲';
    if (trait === 'quiet') return '✦';
    if (trait === 'echo') return '≈';
    if (trait === 'archive') return '◆';
    return '';
  }

  function getMatchingRulePreset(modifiers, mode) {
    if (!Array.isArray(DATA.RULE_PRESETS)) return null;
    const keys = [
      'enableWingCurses',
      'mixedDifficulty',
      'mediumInsightEnabled',
      'blitzTimer',
      'enableArtifactCategories',
      'enableRoomProperties',
      'enableRiskActions',
      'enableCatchUp',
      'mixCrossBoxArtifacts',
    ];
    return (
      DATA.RULE_PRESETS.find((preset) => {
        const pm = preset.modifiers;
        if (mode !== 'duo' && Boolean(pm.ghostIllusionEnabled) !== Boolean(modifiers.ghostIllusionEnabled)) {
          return false;
        }
        if (mode !== 'duo' && Boolean(pm.enableTelegrams) !== Boolean(modifiers.enableTelegrams)) {
          return false;
        }
        return keys.every((k) => Boolean(pm[k]) === Boolean(modifiers[k]));
      }) || null
    );
  }

  function computeEffectiveHuntDuration(baseSec, hp) {
    let sec = baseSec;
    if (hp && hp.feverActive) sec = Math.max(30, sec - 30);
    if (hp && hp.channelPenaltyActive) sec = Math.max(30, sec - 15);
    if (hp && hp.wallCollapseActive) sec = sec + 30;
    return sec;
  }

  function matchesScenario(scenario, difficulty, packConfig, modifiers) {
    if (scenario.modifiers.mixedDifficulty !== modifiers.mixedDifficulty) return false;
    if (!modifiers.mixedDifficulty && scenario.difficulty !== difficulty) return false;
    if (
      Boolean(scenario.modifiers.enableWingCurses) !== Boolean(modifiers.enableWingCurses) ||
      Boolean(scenario.modifiers.ghostIllusionEnabled) !== Boolean(modifiers.ghostIllusionEnabled) ||
      Boolean(scenario.modifiers.mediumInsightEnabled) !== Boolean(modifiers.mediumInsightEnabled) ||
      Boolean(scenario.modifiers.blitzTimer) !== Boolean(modifiers.blitzTimer) ||
      Boolean(scenario.modifiers.enableArtifactCategories) !== Boolean(modifiers.enableArtifactCategories) ||
      Boolean(scenario.modifiers.enableRoomProperties) !== Boolean(modifiers.enableRoomProperties) ||
      Boolean(scenario.modifiers.enableRiskActions) !== Boolean(modifiers.enableRiskActions) ||
      Boolean(scenario.modifiers.enableCatchUp) !== Boolean(modifiers.enableCatchUp) ||
      Boolean(scenario.modifiers.enableTelegrams) !== Boolean(modifiers.enableTelegrams) ||
      Boolean(scenario.modifiers.mixCrossBoxArtifacts) !== Boolean(modifiers.mixCrossBoxArtifacts)
    ) {
      return false;
    }
    const wordIds =
      packConfig.selectedWordPackIds && packConfig.selectedWordPackIds.length > 0
        ? packConfig.selectedWordPackIds
        : packConfig.selectedPackIds;
    return (
      arraysEqualAsSets(scenario.packConfig.selectedPackIds, packConfig.selectedPackIds) &&
      arraysEqualAsSets(scenario.packConfig.selectedWordPackIds, wordIds) &&
      arraysEqualAsSets(
        scenario.packConfig.guaranteedPackIds || [],
        packConfig.guaranteedPackIds || []
      ) &&
      packConfig.disabledRoomIds.length === 0 &&
      packConfig.disabledArtifactIds.length === 0
    );
  }

  // =========================================================================
  // Core Game Actions
  // =========================================================================
  function startNewGame() {
    sound.playClick();
    const version = getActiveVersionKey();
    const profile = getActiveSetup();
    const mode = profile.mode;
    const difficulty = profile.difficulty;
    const targetSealedCount =
      mode === 'duo' ? Math.min(7, Math.max(5, profile.duoTarget)) : 5;

    let cfg = getActivePackConfig();
    let filtered = getFilteredGameData(cfg);
    if (filtered.rooms.length < 10 || filtered.artifacts.length < 10 || filtered.clues.length < 25) {
      cfg = migratePackConfig(null, getDefaultPackForBox(version));
      setActivePackConfig(cfg);
      filtered = getFilteredGameData(cfg);
    }

    const useTelegrams =
      mode === 'standard' && Boolean(profile.modifiers.enableTelegrams) && Boolean(SECRETS);
    const modifiers = Object.assign({}, DATA.DEFAULT_MODIFIERS, profile.modifiers, {
      ghostIllusionEnabled: mode === 'duo' ? false : Boolean(profile.modifiers.ghostIllusionEnabled),
      enableTelegrams: useTelegrams,
    });

    const chosenRooms = selectRoomsForBoard(filtered.rooms, cfg.guaranteedPackIds);

    let shuffledArtifacts;
    if (modifiers.mixCrossBoxArtifacts) {
      const mansionPool = filtered.artifacts.filter((a) => !a.packId.startsWith('pack-secrets'));
      const sovietPool = filtered.artifacts.filter((a) => a.packId.startsWith('pack-secrets'));
      const mSource =
        mansionPool.length >= 5
          ? mansionPool
          : DATA.ALL_ARTIFACTS.filter((a) => !a.packId.startsWith('pack-secrets'));
      const sSource =
        sovietPool.length >= 5
          ? sovietPool
          : DATA.ALL_ARTIFACTS.filter((a) => a.packId === 'pack-secrets-objects');
      shuffledArtifacts = shuffleArray(
        shuffleArray(mSource).slice(0, 5).concat(shuffleArray(sSource).slice(0, 5))
      );
    } else {
      shuffledArtifacts = shuffleArray(filtered.artifacts).slice(0, 10);
    }

    const sidesPool = modifiers.mixedDifficulty
      ? shuffleArray([
          'silver', 'silver', 'silver', 'silver', 'silver',
          'gold', 'gold', 'gold', 'gold', 'gold',
        ])
      : Array.from({ length: 10 }, () => difficulty);

    const selectedRooms = chosenRooms.map((r, idx) => {
      const side = sidesPool[idx] || difficulty;
      const roomObj = Object.assign({}, r, {
        artifactId: shuffledArtifacts[idx].id,
        status: 'active',
        side,
      });
      if (typeof r.number === 'number') {
        roomObj.code = r.number + (side === 'silver' ? 'А' : 'Б');
      }
      return roomObj;
    });

    const selectedRoomIds = new Set(selectedRooms.map((r) => r.id));
    const initialHideouts = shuffleArray(
      filtered.hideouts.filter((h) => selectedRoomIds.has(h.roomId))
    );
    const shuffledClues = shuffleArray(filtered.clues);
    const mediumHand = shuffledClues.slice(0, 10);
    const ghostHand = mode === 'standard' ? shuffledClues.slice(10, 15) : [];
    const deckClues = mode === 'standard' ? shuffledClues.slice(15) : shuffledClues.slice(10);

    const shuffledTelegrams = useTelegrams ? shuffleArray(SECRETS.SECRETS_TELEGRAMS) : [];
    const spyTelegramHand = useTelegrams ? shuffledTelegrams.slice(0, 2) : [];
    const telegramDeck = useTelegrams ? shuffledTelegrams.slice(2) : [];

    const wingSet = new Set(DATA.WING_CURSE_PACK_IDS);
    const activeWingIds = Array.from(
      new Set(selectedRooms.map((r) => r.packId).filter((pid) => wingSet.has(pid)))
    );
    const groundsRooms = selectedRooms.filter((r) => r.packId === 'pack-grounds');
    const foggedRoomId =
      modifiers.enableWingCurses && groundsRooms.length > 0
        ? shuffleArray(groundsRooms)[0].id
        : null;

    app.gameState = {
      version,
      mode,
      difficulty,
      targetSealedCount,
      currentRound: 1,
      rooms: selectedRooms,
      artifacts: shuffledArtifacts,
      hideoutCards: initialHideouts,
      deckClues,
      discardClues: [],
      mediumHand,
      ghostHand,
      currentHideout: null,
      chosenClues: [],
      revealedClues: [],
      duoSpiritClue: null,
      visionStep: 'medium_privacy',
      ghostChosenClues: [],
      ghostIllusionActive: false,
      huntProgress: null,
      roundHistory: [],
      sealedCount: 0,
      lostCount: 0,
      winner: null,
      phase: 'setup',
      packConfig: cfg,
      modifiers,
      activeWingIds,
      occultTranceUsed: false,
      mediumInsightUsed: false,
      ghostIllusionUsed: false,
      medicalFeverPending: false,
      foggedRoomId,
      roundEventBanners: [],
      telegramDeck,
      telegramDiscard: [],
      spyTelegramHand,
      activeTelegrams: [],
      majorTelegramSwapUsedThisRound: false,
      pendingSpyTelegramChoice: false,
      stolenClueThisRound: null,
      pendingMediumSwaps: 0,
      pendingGhostSwaps: 0,
      pendingGhostBonusDraw: 0,
      pendingMediumCacheCount: 0,
      roundMediumSwapsLeft: 0,
      roundGhostSwapsLeft: 0,
      roundMediumSwapTags: [],
      roundGhostSwapTags: [],
      mediumChannelUsesLeft: modifiers.enableRiskActions ? 2 : 0,
      mediumChannelUsedThisRound: false,
      ghostWallCollapseUsed: false,
      wallCollapseThisRound: false,
      activeDeckCache: null,
    };

    app.showMansionPlan = false;
    app.visionWarning = null;
    app.selectedCacheCardId = null;
    app.stolenClueId = null;
    app.spyRespiteUnlocked = false;
    app.spyPickedTelegramId = null;
    app.spyDiscardSecond = false;
    app.tg06UnsealRoomId = null;
    app.confettiShownForRound = null;
    persistPrefs();
    persistGameState();
    ensureHistoryGuard();
    wakeLockMgr.sync();
    render();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function advanceToVision() {
    const gs = app.gameState;
    if (!gs) return;
    sound.playClick();
    let deck = gs.deckClues.slice();
    let discard = (gs.discardClues || []).slice();
    let mHand = gs.mediumHand.slice();
    let gHand = gs.ghostHand.slice();

    if (deck.length === 0 && discard.length > 0) {
      deck = shuffleArray(discard);
      discard = [];
    }
    if (mHand.length === 0) {
      const res = drawClueCards(deck, discard, 2);
      mHand = res.drawn;
      deck = res.nextDeck;
      discard = res.nextDiscard;
    }
    if (gs.mode === 'standard' && gHand.length === 0) {
      const res = drawClueCards(deck, discard, 5);
      gHand = res.drawn;
      deck = res.nextDeck;
      discard = res.nextDiscard;
    }

    const activeIds = new Set(gs.rooms.filter((r) => r.status === 'active').map((r) => r.id));
    const hideout =
      gs.currentHideout ||
      gs.hideoutCards.find((h) => activeIds.has(h.roomId)) ||
      gs.hideoutCards[0] ||
      null;
    const targetRoom = hideout ? gs.rooms.find((r) => r.id === hideout.roomId) : null;

    // Compute per-round Medium swaps
    let mSwaps = gs.pendingMediumSwaps || 0;
    const mTags = [];
    if (mSwaps > 0) mTags.push('carried');
    if (gs.modifiers.enableRoomProperties && targetRoom && getRoomTrait(targetRoom.id) === 'quiet') {
      mSwaps += 1;
      mTags.push('quiet');
    }
    if (gs.modifiers.enableCatchUp && gs.lostCount >= 3) {
      mSwaps += 1;
      mTags.push('second_wind');
    }

    // Compute per-round Ghost swaps (standard mode only)
    let gSwaps = 0;
    const gTags = [];
    if (gs.mode === 'standard') {
      gSwaps = gs.pendingGhostSwaps || 0;
      if (gSwaps > 0) gTags.push('carried');
      if (gs.modifiers.enableRoomProperties && targetRoom && getRoomTrait(targetRoom.id) === 'echo') {
        gSwaps += 2;
        gTags.push('echo');
      }
      if (gs.modifiers.enableArtifactCategories && targetRoom && getArtifactCategory(targetRoom.artifactId) === 'eerie') {
        gSwaps += 1;
        gTags.push('eerie');
      }
      if (gs.modifiers.enableCatchUp && gs.sealedCount >= 3) {
        gSwaps += 2;
        gTags.push('second_wind');
      }
    }

    gs.deckClues = deck;
    gs.discardClues = discard;
    gs.mediumHand = mHand;
    gs.ghostHand = gHand;
    gs.currentHideout = hideout;
    gs.chosenClues = [];
    gs.duoSpiritClue = null;
    gs.visionStep = 'medium_privacy';
    gs.ghostChosenClues = [];
    gs.ghostIllusionActive = false;
    gs.huntProgress = null;
    gs.pendingMediumSwaps = 0;
    gs.pendingGhostSwaps = 0;
    gs.roundMediumSwapsLeft = mSwaps;
    gs.roundGhostSwapsLeft = gSwaps;
    gs.roundMediumSwapTags = mTags;
    gs.roundGhostSwapTags = gTags;
    gs.mediumChannelUsedThisRound = false;
    gs.wallCollapseThisRound = false;
    gs.activeDeckCache = null;
    gs.majorTelegramSwapUsedThisRound = false;
    gs.stolenClueThisRound = null;
    gs.phase = 'vision';
    app.showMansionPlan = false;
    app.visionWarning = null;
    app.selectedCacheCardId = null;
    app.stolenClueId = null;
    persistGameState();
    render();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function replenishHands() {
    const gs = app.gameState;
    if (!gs) return;
    sound.playClick();
    let deck = gs.deckClues.slice();
    let discard = (gs.discardClues || []).slice();
    if (deck.length === 0 && discard.length === 0) {
      const inPlay = new Set(
        gs.mediumHand
          .concat(gs.ghostHand, gs.chosenClues, gs.revealedClues)
          .map((c) => c.id)
      );
      const filtered = getFilteredGameData(gs.packConfig || getDefaultPackForBox(gs.version));
      deck = shuffleArray(filtered.clues.filter((c) => !inPlay.has(c.id)));
    }
    if (gs.mediumHand.length === 0) {
      const res = drawClueCards(deck, discard, 2);
      gs.mediumHand = res.drawn;
      deck = res.nextDeck;
      discard = res.nextDiscard;
    }
    if (gs.mode === 'standard' && gs.ghostHand.length === 0) {
      const res = drawClueCards(deck, discard, 5);
      gs.ghostHand = res.drawn;
      deck = res.nextDeck;
      discard = res.nextDiscard;
    }
    gs.deckClues = deck;
    gs.discardClues = discard;
    persistGameState();
    render();
  }

  function majorTelegramSwap() {
    const gs = app.gameState;
    if (
      !gs ||
      !areTelegramsEnabled(gs) ||
      gs.majorTelegramSwapUsedThisRound ||
      gs.chosenClues.length === 0
    ) {
      return;
    }
    sound.playClick();
    haptics.select();
    const swapIds = new Set(gs.chosenClues.map((c) => c.id));
    const discarded = gs.mediumHand.filter((c) => swapIds.has(c.id));
    const remain = gs.mediumHand.filter((c) => !swapIds.has(c.id));
    const drawRes = drawClueCards(gs.deckClues, (gs.discardClues || []).concat(discarded), discarded.length);
    gs.mediumHand = remain.concat(drawRes.drawn);
    gs.deckClues = drawRes.nextDeck;
    gs.discardClues = drawRes.nextDiscard;
    gs.chosenClues = [];
    gs.majorTelegramSwapUsedThisRound = true;

    const tgDraw = drawTelegramCards(gs.telegramDeck, gs.telegramDiscard, 1);
    if (tgDraw.drawn.length > 0) {
      gs.activeTelegrams = (gs.activeTelegrams || []).concat(tgDraw.drawn);
    }
    gs.telegramDeck = tgDraw.nextDeck;
    gs.telegramDiscard = tgDraw.nextDiscard;
    app.visionWarning = null;
    persistGameState();
    render();
  }

  function resolveTelegramConflict(telegramId) {
    const gs = app.gameState;
    if (!gs || !Array.isArray(gs.activeTelegrams) || gs.activeTelegrams.length <= 1) return;
    const found = gs.activeTelegrams.find((x) => x.id === telegramId);
    if (!found) return;
    sound.playClick();
    haptics.select();
    gs.activeTelegrams = gs.activeTelegrams.filter((x) => x.id !== telegramId);
    gs.telegramDiscard = (gs.telegramDiscard || []).concat(found);
    gs.ghostChosenClues = [];
    app.stolenClueId = null;
    app.visionWarning = null;
    persistGameState();
    render();
  }

  function spyPlayTelegram() {
    const gs = app.gameState;
    if (!gs || !gs.pendingSpyTelegramChoice) return;
    const hand = gs.spyTelegramHand || [];
    const chosen = hand.find((x) => x.id === app.spyPickedTelegramId) || hand[0];
    if (!chosen) {
      gs.pendingSpyTelegramChoice = false;
      app.spyRespiteUnlocked = false;
      persistGameState();
      render();
      return;
    }
    sound.playClick();
    haptics.select();
    const otherCards = hand.filter((x) => x.id !== chosen.id);
    let nextDiscard = (gs.telegramDiscard || []).slice();
    let keepHand = otherCards.slice();
    let drawCount = 1;
    if (app.spyDiscardSecond && otherCards.length > 0) {
      nextDiscard = nextDiscard.concat(otherCards);
      keepHand = [];
      drawCount = 2;
    }
    const drawRes = drawTelegramCards(gs.telegramDeck, nextDiscard, drawCount);
    gs.activeTelegrams = (gs.activeTelegrams || []).concat(chosen);
    gs.spyTelegramHand = keepHand.concat(drawRes.drawn);
    gs.telegramDeck = drawRes.nextDeck;
    gs.telegramDiscard = drawRes.nextDiscard;
    gs.pendingSpyTelegramChoice = false;
    app.spyRespiteUnlocked = false;
    app.spyPickedTelegramId = null;
    app.spyDiscardSecond = false;
    persistGameState();
    render();
  }

  function activateMediumInsight() {
    const gs = app.gameState;
    if (!gs || gs.mediumInsightUsed || !gs.modifiers.mediumInsightEnabled) return;
    sound.playClick();
    haptics.select();
    const res = drawClueCards(gs.deckClues, gs.discardClues || [], 2);
    gs.mediumHand = gs.mediumHand.concat(res.drawn);
    gs.deckClues = res.nextDeck;
    gs.discardClues = res.nextDiscard;
    gs.mediumInsightUsed = true;
    persistGameState();
    render();
  }

  function activateOccultTrance() {
    const gs = app.gameState;
    if (
      !gs ||
      gs.occultTranceUsed ||
      !gs.modifiers.enableWingCurses ||
      !gs.activeWingIds.includes('pack-occult') ||
      gs.chosenClues.length === 0 ||
      gs.chosenClues.length > 3
    ) {
      return;
    }
    sound.playClick();
    haptics.select();
    const discardSet = new Set(gs.chosenClues.map((c) => c.id));
    const discarded = gs.mediumHand.filter((c) => discardSet.has(c.id));
    const remain = gs.mediumHand.filter((c) => !discardSet.has(c.id));
    let deck = gs.deckClues.slice();
    let discard = (gs.discardClues || []).concat(discarded);

    const mDraw = drawClueCards(deck, discard, discarded.length);
    gs.mediumHand = remain.concat(mDraw.drawn);
    deck = mDraw.nextDeck;
    discard = mDraw.nextDiscard;

    if (gs.mode === 'standard') {
      const gDraw = drawClueCards(deck, discard, 1);
      gs.ghostHand = gs.ghostHand.concat(gDraw.drawn);
      deck = gDraw.nextDeck;
      discard = gDraw.nextDiscard;
    }

    gs.deckClues = deck;
    gs.discardClues = discard;
    gs.chosenClues = [];
    gs.occultTranceUsed = true;
    persistGameState();
    render();
  }

  function swapMediumSelected() {
    const gs = app.gameState;
    const avail = gs ? gs.roundMediumSwapsLeft || 0 : 0;
    if (!gs || avail <= 0 || gs.chosenClues.length === 0 || gs.chosenClues.length > avail) return;
    sound.playClick();
    haptics.select();
    const swapIds = new Set(gs.chosenClues.map((c) => c.id));
    const discarded = gs.mediumHand.filter((c) => swapIds.has(c.id));
    const remain = gs.mediumHand.filter((c) => !swapIds.has(c.id));
    const drawRes = drawClueCards(gs.deckClues, (gs.discardClues || []).concat(discarded), discarded.length);
    gs.mediumHand = remain.concat(drawRes.drawn);
    gs.deckClues = drawRes.nextDeck;
    gs.discardClues = drawRes.nextDiscard;
    gs.chosenClues = [];
    gs.roundMediumSwapsLeft = Math.max(0, avail - discarded.length);
    persistGameState();
    render();
  }

  function widenMediumChannel() {
    const gs = app.gameState;
    if (
      !gs ||
      !gs.modifiers.enableRiskActions ||
      (gs.mediumChannelUsesLeft || 0) <= 0 ||
      gs.mediumChannelUsedThisRound ||
      gs.chosenClues.length === 0 ||
      gs.chosenClues.length > 3
    ) {
      return;
    }
    sound.playClick();
    haptics.select();
    const swapIds = new Set(gs.chosenClues.map((c) => c.id));
    const discarded = gs.mediumHand.filter((c) => swapIds.has(c.id));
    const remain = gs.mediumHand.filter((c) => !swapIds.has(c.id));
    const drawRes = drawClueCards(gs.deckClues, (gs.discardClues || []).concat(discarded), discarded.length);
    gs.mediumHand = remain.concat(drawRes.drawn);
    gs.deckClues = drawRes.nextDeck;
    gs.discardClues = drawRes.nextDiscard;
    gs.chosenClues = [];
    gs.mediumChannelUsesLeft = Math.max(0, (gs.mediumChannelUsesLeft || 0) - 1);
    gs.mediumChannelUsedThisRound = true;
    if (gs.mode === 'standard') {
      gs.roundGhostSwapsLeft = (gs.roundGhostSwapsLeft || 0) + 2;
      if (!Array.isArray(gs.roundGhostSwapTags)) gs.roundGhostSwapTags = [];
      if (!gs.roundGhostSwapTags.includes('channel')) gs.roundGhostSwapTags.push('channel');
    }
    persistGameState();
    render();
  }

  function openDeckCache() {
    const gs = app.gameState;
    if (!gs || (gs.pendingMediumCacheCount || 0) <= 0 || gs.activeDeckCache) return;
    sound.playClick();
    haptics.select();
    const peekRes = drawClueCards(gs.deckClues, gs.discardClues || [], 3);
    if (peekRes.drawn.length === 0) return;
    gs.activeDeckCache = peekRes.drawn;
    gs.deckClues = peekRes.nextDeck;
    gs.discardClues = peekRes.nextDiscard;
    gs.chosenClues = gs.chosenClues.slice(0, 1);
    app.selectedCacheCardId = peekRes.drawn[0].id;
    persistGameState();
    render();
  }

  function confirmDeckCacheSwap() {
    const gs = app.gameState;
    if (!gs || !Array.isArray(gs.activeDeckCache) || gs.activeDeckCache.length === 0) return;
    const pickedCache = gs.activeDeckCache.find((c) => c.id === app.selectedCacheCardId);
    if (!pickedCache || gs.chosenClues.length !== 1) return;
    sound.playClick();
    haptics.success();
    const handDrop = gs.chosenClues[0];
    const remainingCache = gs.activeDeckCache.filter((c) => c.id !== pickedCache.id);
    gs.mediumHand = gs.mediumHand.filter((c) => c.id !== handDrop.id).concat(pickedCache);
    gs.discardClues = (gs.discardClues || []).concat(handDrop);
    gs.deckClues = remainingCache.concat(gs.deckClues);
    gs.activeDeckCache = null;
    gs.chosenClues = [];
    gs.pendingMediumCacheCount = Math.max(0, (gs.pendingMediumCacheCount || 0) - 1);
    app.selectedCacheCardId = null;
    persistGameState();
    render();
  }

  function skipDeckCache(silent) {
    const gs = app.gameState;
    if (!gs || !Array.isArray(gs.activeDeckCache)) return;
    if (!silent) sound.playClick();
    gs.deckClues = gs.activeDeckCache.concat(gs.deckClues);
    gs.activeDeckCache = null;
    app.selectedCacheCardId = null;
    if (!silent) {
      persistGameState();
      render();
    }
  }

  function swapGhostSelected() {
    const gs = app.gameState;
    const avail = gs ? gs.roundGhostSwapsLeft || 0 : 0;
    const chosen = gs && Array.isArray(gs.ghostChosenClues) ? gs.ghostChosenClues : [];
    if (!gs || avail <= 0 || chosen.length === 0 || chosen.length > avail) return;
    sound.playClick();
    haptics.select();
    const swapIds = new Set(chosen.map((c) => c.id));
    const discarded = gs.ghostHand.filter((c) => swapIds.has(c.id));
    const remain = gs.ghostHand.filter((c) => !swapIds.has(c.id));
    const drawRes = drawClueCards(gs.deckClues, (gs.discardClues || []).concat(discarded), discarded.length);
    gs.ghostHand = remain.concat(drawRes.drawn);
    gs.deckClues = drawRes.nextDeck;
    gs.discardClues = drawRes.nextDiscard;
    gs.ghostChosenClues = [];
    gs.roundGhostSwapsLeft = Math.max(0, avail - discarded.length);
    persistGameState();
    render();
  }

  function triggerWallCollapse() {
    const gs = app.gameState;
    if (
      !gs ||
      gs.mode !== 'standard' ||
      !gs.modifiers.enableRiskActions ||
      gs.ghostWallCollapseUsed ||
      gs.ghostHand.length === 0
    ) {
      return;
    }
    sound.playLoss();
    const discarded = gs.ghostHand.slice();
    const drawRes = drawClueCards(gs.deckClues, (gs.discardClues || []).concat(discarded), 5);
    gs.ghostHand = drawRes.drawn;
    gs.deckClues = drawRes.nextDeck;
    gs.discardClues = drawRes.nextDiscard;
    gs.ghostChosenClues = [];
    gs.ghostWallCollapseUsed = true;
    gs.wallCollapseThisRound = true;
    persistGameState();
    render();
  }

  function completeVision(extraClues, usedIllusion, stolenClueId) {
    const gs = app.gameState;
    if (!gs) return;
    const isFeverActive = Boolean(gs.medicalFeverPending);
    const isChannelPenalty = gs.mode === 'duo' && Boolean(gs.mediumChannelUsedThisRound);
    const isWallCollapse = Boolean(gs.wallCollapseThisRound);
    const activeTgs = gs.activeTelegrams || [];
    const hasTg10 = activeTgs.some((x) => x.id === 'tg-10');

    let finalChosen = gs.chosenClues.slice();
    let stolenCard = null;
    if (stolenClueId) {
      stolenCard = finalChosen.find((c) => c.id === stolenClueId) || null;
      if (stolenCard) {
        finalChosen = finalChosen.filter((c) => c.id !== stolenClueId);
        gs.mediumHand = gs.mediumHand.filter((c) => c.id !== stolenClueId);
        gs.ghostHand = gs.ghostHand.concat(stolenCard);
        gs.chosenClues = finalChosen;
      }
    }

    const baseDuration = hasTg10
      ? 60
      : gs.modifiers.blitzTimer
      ? Math.max(30, 60 - gs.lostCount * 10)
      : app.timerPreset;
    const initialDuration = hasTg10
      ? 60
      : computeEffectiveHuntDuration(baseDuration, {
          feverActive: isFeverActive,
          channelPenaltyActive: isChannelPenalty,
          wallCollapseActive: isWallCollapse,
        });
    const revealed = shuffleArray(finalChosen.concat(extraClues));
    const now = Date.now();

    gs.revealedClues = revealed;
    gs.visionStep = null;
    gs.ghostChosenClues = gs.mode === 'standard' ? extraClues : [];
    gs.duoSpiritClue = gs.mode === 'duo' ? extraClues[0] || null : null;
    gs.stolenClueThisRound = stolenCard;
    gs.ghostIllusionUsed = gs.ghostIllusionUsed || Boolean(usedIllusion);
    gs.ghostIllusionActive = false;
    gs.medicalFeverPending = false;
    gs.roundEventBanners = [];
    gs.huntProgress = {
      selectedRoomId: null,
      selectedDecoyClueId: null,
      timerDuration: initialDuration,
      timerSeconds: initialDuration,
      timerRunning: true,
      timerEndsAt: now + initialDuration * 1000,
      resultRevealed: false,
      lastResultCorrect: null,
      violationTriggered: false,
      tg06UnsealPending: false,
      tg06UnsealedRoomId: null,
      feverActive: isFeverActive,
      channelPenaltyActive: isChannelPenalty,
      wallCollapseActive: isWallCollapse,
    };
    gs.phase = 'hunt';
    app.stolenClueId = null;
    app.tg06UnsealRoomId = null;
    persistGameState();
    render();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function computeHuntRemaining(hp) {
    if (!hp) return app.timerPreset;
    if (hp.resultRevealed || !hp.timerRunning) return hp.timerSeconds;
    if (hp.timerEndsAt) return Math.max(0, Math.ceil((hp.timerEndsAt - Date.now()) / 1000));
    return hp.timerSeconds;
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function confirmHuntGuess() {
    const gs = app.gameState;
    if (!gs || !gs.huntProgress || !gs.huntProgress.selectedRoomId || !gs.currentHideout) return;
    app.modal = null;
    const activeTgs = gs.activeTelegrams || [];
    const hasTg09 = activeTgs.some((x) => x.id === 'tg-09');
    const hasTg06 = activeTgs.some((x) => x.id === 'tg-06');
    const decoyIds = new Set((gs.ghostChosenClues || []).map((c) => c.id));

    const roomMatched = gs.huntProgress.selectedRoomId === gs.currentHideout.roomId;
    const decoyMatched =
      !hasTg09 || decoyIds.size === 0 || decoyIds.has(gs.huntProgress.selectedDecoyClueId);
    const isCorrect = roomMatched && decoyMatched;

    const sealedRooms = gs.rooms.filter((r) => r.status === 'sealed');
    const unsealPending = !isCorrect && hasTg06 && sealedRooms.length > 0;
    if (unsealPending) {
      app.tg06UnsealRoomId = sealedRooms[0].id;
    }

    gs.huntProgress.timerRunning = false;
    gs.huntProgress.timerEndsAt = null;
    gs.huntProgress.resultRevealed = true;
    gs.huntProgress.lastResultCorrect = isCorrect;
    gs.huntProgress.violationTriggered = false;
    gs.huntProgress.tg06UnsealPending = unsealPending;
    if (isCorrect) {
      sound.playSeal();
    } else {
      sound.playLoss();
    }
    persistGameState();
    render();
  }

  function triggerTelegramViolation() {
    const gs = app.gameState;
    if (!gs || !gs.huntProgress || !gs.currentHideout) return;
    app.modal = null;
    const activeTgs = gs.activeTelegrams || [];
    const hasTg06 = activeTgs.some((x) => x.id === 'tg-06');
    const sealedRooms = gs.rooms.filter((r) => r.status === 'sealed');
    const unsealPending = hasTg06 && sealedRooms.length > 0;
    if (unsealPending) {
      app.tg06UnsealRoomId = sealedRooms[0].id;
    }

    gs.huntProgress.timerRunning = false;
    gs.huntProgress.timerEndsAt = null;
    gs.huntProgress.resultRevealed = true;
    gs.huntProgress.lastResultCorrect = false;
    gs.huntProgress.violationTriggered = true;
    gs.huntProgress.tg06UnsealPending = unsealPending;
    sound.playLoss();
    persistGameState();
    render();
  }

  function resolveHunt() {
    const gs = app.gameState;
    if (!gs || !gs.huntProgress) return;
    sound.playClick();
    const guessedRoomId = gs.huntProgress.selectedRoomId || (gs.currentHideout && gs.currentHideout.roomId);
    const isCorrect = Boolean(gs.huntProgress.lastResultCorrect);
    const hideoutRoomId = (gs.currentHideout && gs.currentHideout.roomId) || guessedRoomId;
    const hideoutRoom = gs.rooms.find((r) => r.id === hideoutRoomId);
    const violationTriggered = Boolean(gs.huntProgress.violationTriggered);

    let updatedRooms = gs.rooms.map((r) =>
      r.id === hideoutRoomId ? Object.assign({}, r, { status: isCorrect ? 'sealed' : 'lost' }) : r
    );
    let remainingHideouts = gs.hideoutCards.filter(
      (h) => !gs.currentHideout || h.id !== gs.currentHideout.id
    );
    let newSealed = isCorrect ? gs.sealedCount + 1 : gs.sealedCount;
    const newLost = !isCorrect ? gs.lostCount + 1 : gs.lostCount;
    const targetSealed = gs.targetSealedCount || 5;

    // Telegram #6 "Out of Resources": return 1 De-Spied location back to play
    if (gs.huntProgress.tg06UnsealPending && app.tg06UnsealRoomId) {
      const targetUnseal = updatedRooms.find(
        (r) => r.id === app.tg06UnsealRoomId && r.status === 'sealed'
      );
      if (targetUnseal) {
        updatedRooms = updatedRooms.map((r) =>
          r.id === targetUnseal.id ? Object.assign({}, r, { status: 'active' }) : r
        );
        newSealed = Math.max(0, newSealed - 1);
        if (!remainingHideouts.some((h) => h.roomId === targetUnseal.id)) {
          remainingHideouts = shuffleArray(
            remainingHideouts.concat({ id: 'hideout-' + targetUnseal.id, roomId: targetUnseal.id })
          );
        }
      }
    }

    let winner = null;
    if (gs.mode === 'duo') {
      if (newSealed >= targetSealed) winner = 'hunters';
      else {
        const remActive = updatedRooms.filter((r) => r.status === 'active').length;
        if (newSealed + remActive < targetSealed) winner = 'duo_lost';
      }
    } else {
      if (newSealed >= 5) winner = 'hunters';
      if (newLost >= 5) winner = 'ghost';
    }

    let nextFever = false;
    let nextFog = gs.foggedRoomId || null;
    const nextBanners = [];
    let nextDeck = gs.deckClues.slice();
    let nextDiscard = (gs.discardClues || []).slice();
    let nextMediumHand = gs.mediumHand.slice();
    let nextGhostHand = gs.ghostHand.slice();
    let nextPendingMediumSwaps = gs.pendingMediumSwaps || 0;
    let nextPendingGhostSwaps = gs.pendingGhostSwaps || 0;
    let nextPendingGhostBonusDraw = gs.pendingGhostBonusDraw || 0;
    let nextPendingMediumCacheCount = gs.pendingMediumCacheCount || 0;

    if (!winner && gs.modifiers.enableWingCurses) {
      const remActiveRooms = updatedRooms.filter((r) => r.status === 'active');

      if (!isCorrect && hideoutRoom && hideoutRoom.packId === 'pack-medical') {
        nextFever = true;
        nextBanners.push({ type: 'fever' });
      }

      if (
        !isCorrect &&
        gs.activeWingIds.includes('pack-forgotten') &&
        remActiveRooms.length >= 2
      ) {
        const pair = shuffleArray(remActiveRooms).slice(0, 2);
        const [a, b] = pair;
        updatedRooms = updatedRooms.map((r) => {
          if (r.id === a.id) return Object.assign({}, r, { artifactId: b.artifactId });
          if (r.id === b.id) return Object.assign({}, r, { artifactId: a.artifactId });
          return r;
        });
        const sideA = getRoomSide(a, gs.difficulty);
        const sideB = getRoomSide(b, gs.difficulty);
        const trA = DATA.ROOM_TRANSLATIONS[a.id];
        const trB = DATA.ROOM_TRANSLATIONS[b.id];
        nextBanners.push({
          type: 'poltergeist',
          roomNamesRu: [
            (trA && trA.ru[sideA]) || (sideA === 'silver' ? a.nameSilver : a.nameGold),
            (trB && trB.ru[sideB]) || (sideB === 'silver' ? b.nameSilver : b.nameGold),
          ],
          roomNamesEn: [
            (trA && trA.en[sideA]) || (sideA === 'silver' ? a.nameSilver : a.nameGold),
            (trB && trB.en[sideB]) || (sideB === 'silver' ? b.nameSilver : b.nameGold),
          ],
        });
      }

      if (nextFog) {
        const stillActive = updatedRooms.some((r) => r.id === nextFog && r.status === 'active');
        if (!stillActive || gs.currentRound + 1 >= 4 || remActiveRooms.length <= 5) {
          nextFog = null;
          if (stillActive) {
            nextBanners.push({ type: 'fog_cleared' });
          }
        }
      }
    }

    // Artifact Category Effects
    if (!winner && gs.modifiers.enableArtifactCategories && hideoutRoom) {
      const cat = getArtifactCategory(hideoutRoom.artifactId);
      if (isCorrect) {
        if (cat === 'occult') {
          nextPendingMediumSwaps += 3;
          nextBanners.push({ type: 'occult_swap_medium' });
        } else if (cat === 'archive') {
          const mRes = drawClueCards(nextDeck, nextDiscard, 1);
          nextMediumHand = nextMediumHand.concat(mRes.drawn);
          nextDeck = mRes.nextDeck;
          nextDiscard = mRes.nextDiscard;
          nextPendingMediumSwaps += 1;
          nextBanners.push({ type: 'archive_draw_medium' });
        } else if (cat === 'tool') {
          nextPendingMediumCacheCount += 1;
          nextBanners.push({ type: 'tool_scout' });
        } else if (cat === 'eerie') {
          nextPendingMediumSwaps += 2;
          nextBanners.push({ type: 'eerie_swap_medium' });
        }
      } else if (gs.mode === 'standard') {
        if (cat === 'occult') {
          nextPendingGhostSwaps += 2;
          nextBanners.push({ type: 'occult_swap_ghost' });
        } else if (cat === 'archive') {
          nextPendingGhostBonusDraw += 1;
          nextBanners.push({ type: 'archive_draw_ghost' });
        } else if (cat === 'tool') {
          nextPendingGhostSwaps += 3;
          nextBanners.push({ type: 'tool_swap_ghost' });
        }
      }
    }

    // Mansion Room Properties Effects
    if (!winner && gs.modifiers.enableRoomProperties && hideoutRoom) {
      const trait = getRoomTrait(hideoutRoom.id);
      if (isCorrect && trait === 'archive') {
        nextPendingMediumSwaps += 2;
        nextBanners.push({ type: 'room_archive_swap' });
      } else if (!isCorrect && trait === 'pillar') {
        const usedOnTable = new Set((gs.revealedClues || []).map((c) => c.id));
        const availMed = nextMediumHand.filter((c) => !usedOnTable.has(c.id));
        const dropMed = shuffleArray(availMed).slice(0, Math.min(2, availMed.length));
        if (dropMed.length > 0) {
          const dropMedIds = new Set(dropMed.map((c) => c.id));
          nextMediumHand = nextMediumHand.filter((c) => !dropMedIds.has(c.id));
          nextDiscard = nextDiscard.concat(dropMed);
          const resM = drawClueCards(nextDeck, nextDiscard, dropMed.length);
          nextMediumHand = nextMediumHand.concat(resM.drawn);
          nextDeck = resM.nextDeck;
          nextDiscard = resM.nextDiscard;
        }
        if (gs.mode === 'standard') {
          const availGhost = nextGhostHand.filter((c) => !usedOnTable.has(c.id));
          const dropGhost = shuffleArray(availGhost).slice(0, Math.min(2, availGhost.length));
          if (dropGhost.length > 0) {
            const dropGhostIds = new Set(dropGhost.map((c) => c.id));
            nextGhostHand = nextGhostHand.filter((c) => !dropGhostIds.has(c.id));
            nextDiscard = nextDiscard.concat(dropGhost);
            const resG = drawClueCards(nextDeck, nextDiscard, dropGhost.length);
            nextGhostHand = nextGhostHand.concat(resG.drawn);
            nextDeck = resG.nextDeck;
            nextDiscard = resG.nextDiscard;
          }
        }
        nextBanners.push({ type: 'pillar_collapse' });
      }
    }

    const extraList =
      gs.mode === 'duo'
        ? gs.duoSpiritClue
          ? [gs.duoSpiritClue]
          : []
        : gs.ghostChosenClues.slice();
    const usedTelegrams = (gs.activeTelegrams || []).slice();

    gs.roundHistory.push({
      round: gs.currentRound,
      mediumClues: gs.chosenClues.slice(),
      extraClues: extraList,
      revealedClues: gs.revealedClues.slice(),
      targetRoomId: hideoutRoomId,
      guessedRoomId,
      isCorrect,
      telegramNumbers: usedTelegrams.map((tg) => tg.number),
      stolenClue: gs.stolenClueThisRound || null,
      violationTriggered,
    });

    // Discard active telegrams at end of round
    if (usedTelegrams.length > 0) {
      gs.telegramDiscard = (gs.telegramDiscard || []).concat(usedTelegrams);
      gs.activeTelegrams = [];
    }

    // If Hunters/Pioneers won with Telegrams enabled, Ghost/Spy plays 1 of 2 Telegrams for next round
    const shouldPickTelegram =
      !winner &&
      areTelegramsEnabled(gs) &&
      isCorrect &&
      Array.isArray(gs.spyTelegramHand) &&
      gs.spyTelegramHand.length > 0;

    gs.pendingSpyTelegramChoice = Boolean(shouldPickTelegram);
    if (shouldPickTelegram) {
      app.spyRespiteUnlocked = false;
      app.spyPickedTelegramId = gs.spyTelegramHand[0].id;
      app.spyDiscardSecond = false;
    }

    gs.rooms = updatedRooms;
    gs.hideoutCards = remainingHideouts;
    gs.sealedCount = newSealed;
    gs.lostCount = newLost;
    gs.winner = winner;
    gs.deckClues = nextDeck;
    gs.discardClues = nextDiscard;
    gs.mediumHand = nextMediumHand;
    gs.ghostHand = nextGhostHand;
    gs.pendingMediumSwaps = nextPendingMediumSwaps;
    gs.pendingGhostSwaps = nextPendingGhostSwaps;
    gs.pendingGhostBonusDraw = nextPendingGhostBonusDraw;
    gs.pendingMediumCacheCount = nextPendingMediumCacheCount;
    gs.huntProgress = null;
    gs.ghostChosenClues = [];
    gs.ghostIllusionActive = false;
    gs.duoSpiritClue = null;
    gs.stolenClueThisRound = null;
    gs.medicalFeverPending = nextFever;
    gs.foggedRoomId = nextFog;
    gs.roundEventBanners = nextBanners;
    gs.phase = winner ? 'gameover' : 'respite';
    app.tg06UnsealRoomId = null;

    persistGameState();
    wakeLockMgr.sync();
    render();
    window.scrollTo({ top: 0, behavior: 'auto' });

    if (winner === 'hunters' && app.confettiShownForRound !== gs.currentRound) {
      app.confettiShownForRound = gs.currentRound;
      launchConfetti();
    }
  }

  function completeRespite() {
    const gs = app.gameState;
    if (!gs) return;
    sound.playClick();
    const usedIds = new Set(gs.revealedClues.map((c) => c.id));
    const remMedium = gs.mediumHand.filter((c) => !usedIds.has(c.id));
    const remGhost = gs.ghostHand.filter((c) => !usedIds.has(c.id));
    let deck = gs.deckClues.filter((c) => !usedIds.has(c.id));
    const cleanDiscard = (gs.discardClues || []).filter((c) => !usedIds.has(c.id));
    const existingDiscardIds = new Set(cleanDiscard.map((c) => c.id));
    let discard = cleanDiscard.concat(
      gs.revealedClues.filter((c) => !existingDiscardIds.has(c.id))
    );

    const mDraw = drawClueCards(deck, discard, 2);
    gs.mediumHand = remMedium.concat(mDraw.drawn);
    deck = mDraw.nextDeck;
    discard = mDraw.nextDiscard;

    let nextGhost = remGhost;
    if (gs.mode === 'standard') {
      const secretsTelegramDrawOne = areTelegramsEnabled(gs);
      const needed = secretsTelegramDrawOne ? 1 : Math.max(0, 5 - remGhost.length);
      if (needed > 0) {
        const gDraw = drawClueCards(deck, discard, needed);
        nextGhost = remGhost.concat(gDraw.drawn);
        deck = gDraw.nextDeck;
        discard = gDraw.nextDiscard;
      }
      const bonusGhost = gs.pendingGhostBonusDraw || 0;
      if (bonusGhost > 0) {
        const gBonus = drawClueCards(deck, discard, bonusGhost);
        nextGhost = nextGhost.concat(gBonus.drawn);
        deck = gBonus.nextDeck;
        discard = gBonus.nextDiscard;
      }
    }

    gs.currentRound += 1;
    gs.ghostHand = nextGhost;
    gs.pendingGhostBonusDraw = 0;
    gs.deckClues = deck;
    gs.discardClues = discard;
    gs.chosenClues = [];
    gs.revealedClues = [];
    gs.duoSpiritClue = null;
    gs.currentHideout = null;
    gs.visionStep = null;
    gs.ghostChosenClues = [];
    gs.ghostIllusionActive = false;
    gs.huntProgress = null;
    gs.pendingSpyTelegramChoice = false;
    gs.stolenClueThisRound = null;
    gs.phase = 'setup';
    app.spyRespiteUnlocked = false;
    app.spyPickedTelegramId = null;
    app.spyDiscardSecond = false;
    persistGameState();
    render();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // Strictly isolated Cache & Storage clear (NEVER affects other GitHub Pages apps)
  async function clearAppCacheIsolated() {
    const appScopeUrl = new URL('./', window.location.href).href;
    try {
      Object.keys(localStorage).forEach((k) => {
        if (k.startsWith(LS_PREFIX)) localStorage.removeItem(k);
      });
    } catch {}
    try {
      if ('caches' in window) {
        const names = await caches.keys();
        const own = names.filter((n) => n.startsWith(CACHE_PREFIX));
        await Promise.all(own.map((n) => caches.delete(n)));
      }
    } catch {}
    try {
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.getRegistration('./');
        if (reg && reg.scope === appScopeUrl) {
          await reg.unregister();
        } else {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(
            regs.filter((r) => r.scope === appScopeUrl).map((r) => r.unregister())
          );
        }
      }
    } catch {}

    app.isIntentionalReload = true;
    app.gameState = null;
    window.location.reload();
  }

  // =========================================================================
  // Hunt Timer Loop (In-place DOM updates so scrolling never stutters)
  // =========================================================================
  function syncHuntTimerTick() {
    const gs = app.gameState;
    if (!gs || gs.phase !== 'hunt' || !gs.huntProgress) return;
    const hp = gs.huntProgress;
    if (!hp.timerRunning || hp.resultRevealed) return;

    const prev = hp.timerSeconds;
    const next = computeHuntRemaining(hp);
    if (next !== prev) {
      hp.timerSeconds = next;
      if (next === 0) {
        hp.timerRunning = false;
        hp.timerEndsAt = null;
        if (prev > 0) {
          sound.playTimerEnd();
        }
        persistGameState();
        render();
        return;
      }
      persistGameState();
      updateTimerDOM(next);
    }
  }

  function updateTimerDOM(sec) {
    const digitsEl = document.getElementById('hunt-timer-digits');
    if (digitsEl) {
      digitsEl.textContent = sec === 0 ? T().timesUp : formatTime(sec);
      digitsEl.className = 'timer-digits tabular-nums' + (sec === 0 ? ' up' : sec < 30 ? ' low' : '');
    }
  }

  setInterval(syncHuntTimerTick, 250);

  // =========================================================================
  // Rendering Components
  // =========================================================================
  function renderHeader() {
    const t = T();
    const gs = app.gameState;
    const hasHistory = gs && gs.roundHistory && gs.roundHistory.length > 0;
    const activeVersion = (gs && gs.version) || app.setup.version;
    const expTr = DATA.EXPANSION_TRANSLATIONS[activeVersion];
    const subtitle =
      (expTr && expTr[app.lang] && expTr[app.lang].title) || t.appSubtitle;

    return (
      '<header class="app-header">' +
      '<div class="header-inner">' +
      '<div class="brand">' +
      '<div class="brand-icon">' + ico('ghost') + '</div>' +
      '<div class="brand-text">' +
      '<div class="brand-title font-heading">' + esc(t.appTitle) + '</div>' +
      '<div class="brand-sub">' + esc(subtitle) + '</div>' +
      '</div></div>' +
      '<div class="header-actions">' +
      (gs
        ? '<button type="button" class="icon-btn" data-act="open-home-confirm" title="' +
          esc(t.home) +
          '" aria-label="' +
          esc(t.home) +
          '">' +
          ico('home', 'sm') +
          '<span class="icon-btn-label">' +
          esc(t.home) +
          '</span></button>'
        : '') +
      (hasHistory
        ? '<button type="button" class="icon-btn" data-act="open-history" title="' +
          esc(t.roundHistoryTitle) +
          '" aria-label="' +
          esc(t.roundHistoryTitle) +
          '">' +
          ico('history', 'sm') +
          '<span class="tabular-nums">' +
          gs.roundHistory.length +
          '</span></button>'
        : '') +
      '<button type="button" class="icon-btn" data-act="open-rules" title="' +
      esc(t.rules) +
      '" aria-label="' +
      esc(t.rules) +
      '">' +
      ico('book', 'sm') +
      '<span class="icon-btn-label">' +
      esc(t.rules) +
      '</span></button>' +
      '<button type="button" class="icon-btn' +
      (sound.isAmbientActive() ? ' accent' : '') +
      '" data-act="toggle-ambient" title="' +
      esc(t.ambientMusic) +
      '" aria-label="' +
      esc(t.ambientMusic) +
      '">' +
      ico('music', 'sm') +
      '</button>' +
      '<button type="button" class="icon-btn lang-toggle-btn" data-act="toggle-lang" title="' +
      esc(t.switchLanguage) +
      '" aria-label="' +
      esc(t.switchLanguage) +
      '">' +
      (app.lang === 'ru' ? 'RU' : 'EN') +
      '</button>' +
      '<button type="button" class="icon-btn" data-act="open-settings" title="' +
      esc(t.settings) +
      '" aria-label="' +
      esc(t.settings) +
      '">' +
      ico('settings', 'sm') +
      '</button>' +
      '</div></div></header>'
    );
  }

  function renderPWAInstallCard() {
    if (app.isInstalled) return '';
    const t = T();
    if (app.deferredInstallPrompt) {
      return (
        '<button type="button" class="choice-card active row-between" data-act="pwa-install" style="margin-top:0.75rem">' +
        '<span class="row">' + ico('download', 'sm') + '<span class="bold text-sm">' + esc(t.installApp) + '</span></span>' +
        '<span class="badge">PWA</span>' +
        '</button>'
      );
    }
    if (app.isIOS) {
      return (
        '<button type="button" class="choice-card row-between" data-act="open-ios-install" style="margin-top:0.75rem">' +
        '<span class="row">' + ico('phone', 'sm') + '<span class="bold text-sm">' + esc(t.installOnIOS) + '</span></span>' +
        '<span class="badge muted">iOS</span>' +
        '</button>'
      );
    }
    return '';
  }

  function renderGameSetup() {
    const t = T();
    const s = app.setup;
    if (s.step === 'version') {
      const avail = DATA.EXPANSIONS.filter((e) => e.available);
      const upcoming = DATA.EXPANSIONS.filter((e) => !e.available);
      return (
        '<div class="container-sm fade-in"><div class="panel stack-lg">' +
        '<div class="text-center stack-sm">' +
        '<span class="badge">' + esc(t.seriesBadge) + '</span>' +
        '<h2 style="font-size:1.5rem">' + esc(t.selectVersion) + '</h2>' +
        '<p class="text-xs text-muted">' + esc(t.selectSeriesPart) + '</p>' +
        '</div>' +
        '<div class="stack-sm">' +
        avail
          .map((exp) => {
            const tr = DATA.EXPANSION_TRANSLATIONS[exp.id] && DATA.EXPANSION_TRANSLATIONS[exp.id][app.lang];
            return (
              '<button type="button" class="choice-card active stack-sm" data-act="select-version" data-id="' +
              esc(exp.id) +
              '">' +
              '<div class="row-between">' +
              '<span class="text-xs bold text-accent" style="text-transform:uppercase">' +
              esc((tr && tr.subtitle) || exp.subtitle) +
              '</span>' +
              '<span class="text-xs bold text-emerald">' + esc(t.available) + '</span>' +
              '</div>' +
              '<div class="font-heading bold" style="font-size:1.1rem">' +
              esc((tr && tr.title) || exp.title) +
              '</div>' +
              '<p class="text-xs text-muted">' + esc((tr && tr.desc) || exp.description) + '</p>' +
              '</button>'
            );
          })
          .join('') +
        '</div>' +
        '<div class="divider"></div>' +
        '<div class="stack-sm">' +
        '<div class="text-xs text-muted bold" style="text-transform:uppercase">' + esc(t.upcomingExpansions) + '</div>' +
        upcoming
          .map((exp) => {
            const tr = DATA.EXPANSION_TRANSLATIONS[exp.id] && DATA.EXPANSION_TRANSLATIONS[exp.id][app.lang];
            return (
              '<div class="box" style="opacity:0.65">' +
              '<div class="row-between">' +
              '<span class="text-sm bold">' + esc((tr && tr.title) || exp.title) + '</span>' +
              '<span class="text-xs text-muted">' + esc((tr && tr.subtitle) || exp.subtitle) + '</span>' +
              '</div>' +
              '<p class="text-xs text-muted" style="margin-top:0.2rem">' + esc((tr && tr.desc) || exp.description) + '</p>' +
              '</div>'
            );
          })
          .join('') +
        '</div>' +
        '</div>' +
        renderPWAInstallCard() +
        '</div>'
      );
    }

    // Unified Modular Parameters Step (same layout & controls for every base box — only lore/text adapts)
    const expTr = DATA.EXPANSION_TRANSLATIONS[s.version] && DATA.EXPANSION_TRANSLATIONS[s.version][app.lang];
    const isSecrets = s.version === 'secrets';
    const profile = getActiveSetup();
    const activePackCfg = getActivePackConfig();
    const filteredData = getFilteredGameData(activePackCfg);
    const activeRoomsCount = filteredData.rooms.length;
    const activeArtsCount = filteredData.artifacts.length;
    const activeWordsCount = filteredData.clues.length;
    const isConfigValid = activeRoomsCount >= 10 && activeArtsCount >= 10 && activeWordsCount >= 25;

    const activeScenario = DATA.GAME_SCENARIOS.find((sc) =>
      matchesScenario(sc, profile.difficulty, activePackCfg, profile.modifiers)
    );
    const activePreset = getMatchingRulePreset(profile.modifiers, profile.mode);
    const activeModCount = [
      profile.mode === 'standard' && profile.modifiers.enableTelegrams,
      profile.modifiers.mixCrossBoxArtifacts,
      profile.modifiers.enableArtifactCategories,
      profile.modifiers.enableRoomProperties,
      profile.modifiers.enableRiskActions,
      profile.modifiers.enableCatchUp,
      profile.modifiers.enableWingCurses,
      profile.modifiers.mediumInsightEnabled,
      profile.mode === 'standard' && profile.modifiers.ghostIllusionEnabled,
      profile.modifiers.blitzTimer,
    ].filter(Boolean).length;

    const modList = [
      { key: 'enableTelegrams', icon: 'zap', label: t.modEnableTelegrams, desc: t.modEnableTelegramsDesc, disabled: profile.mode === 'duo' },
      { key: 'mixCrossBoxArtifacts', icon: 'layers', label: t.modMixCrossBoxArtifacts, desc: t.modMixCrossBoxArtifactsDesc, disabled: false },
      { key: 'enableArtifactCategories', icon: 'gem', label: t.artifactCategoriesLabel, desc: t.artifactCategoriesDesc, disabled: false },
      { key: 'enableRoomProperties', icon: 'map', label: t.roomPropertiesLabel, desc: t.roomPropertiesDesc, disabled: false },
      { key: 'enableRiskActions', icon: 'shuffle', label: t.riskActionsLabel, desc: t.riskActionsDesc, disabled: false },
      { key: 'enableCatchUp', icon: 'sparkles', label: t.catchUpLabel, desc: t.catchUpDesc, disabled: false },
      { key: 'enableWingCurses', icon: 'flame', label: t.wingCursesLabel, desc: t.wingCursesDesc, disabled: false },
      { key: 'mediumInsightEnabled', icon: 'eye', label: t.mediumInsightLabel, desc: t.mediumInsightDesc, disabled: false },
      { key: 'ghostIllusionEnabled', icon: 'wand', label: t.ghostIllusionLabel, desc: t.ghostIllusionDesc, disabled: profile.mode === 'duo' },
      { key: 'blitzTimer', icon: 'zap', label: t.blitzTimerLabel, desc: t.blitzTimerDesc, disabled: false },
    ];

    const diffLabel = isSecrets ? t.secretsLocationsSideLabel : t.roomDifficulty;
    const silverTitle = isSecrets ? t.secretsSideA : t.silver;
    const silverDesc = isSecrets ? t.secretsSideADesc : t.silverDesc;
    const goldTitle = isSecrets ? t.secretsSideB : t.gold;
    const goldDesc = isSecrets ? t.secretsSideBDesc : t.goldDesc;
    const mixedTitle = isSecrets ? t.secretsSideMixed : t.mixedDifficultyShort;
    const roomsLabel = isSecrets ? t.locationsCount : t.roomsCount;
    const artsLabel = isSecrets ? t.hooksCount : t.artifactsCount;

    return (
      '<div class="container-sm fade-in"><div class="panel stack-lg">' +
      '<div class="text-center stack-sm">' +
      '<span class="badge' + (isSecrets ? ' red' : '') + '">' + esc((expTr && expTr.title) || t.appSubtitle) + '</span>' +
      '<h2 style="font-size:1.45rem">' + esc(t.setupPartyTitle) + '</h2>' +
      '<p class="text-xs text-muted">' + esc(isSecrets ? t.secretsSetupSubtitle : t.setupPartySubtitle) + '</p>' +
      '</div>' +

      // Mode
      '<div><span class="section-label">' + esc(t.gameMode) + '</span>' +
      '<div class="grid-2">' +
      '<button type="button" class="choice-card' + (profile.mode === 'standard' ? ' active' : '') + '" data-act="set-mode" data-val="standard">' +
      '<div class="row bold text-sm" style="margin-bottom:0.2rem">' + ico('users', 'sm') + '<span>' + esc(t.standard) + '</span></div>' +
      '<div class="text-xs text-muted">' + esc(isSecrets ? t.secretsStandardDesc : t.standardDesc) + '</div></button>' +
      '<button type="button" class="choice-card' + (profile.mode === 'duo' ? ' active' : '') + '" data-act="set-mode" data-val="duo">' +
      '<div class="row bold text-sm" style="margin-bottom:0.2rem">' + ico('userCheck', 'sm') + '<span>' + esc(t.duo) + '</span></div>' +
      '<div class="text-xs text-muted">' + esc(isSecrets ? t.secretsDuoDesc : t.duoDesc) + '</div></button>' +
      '</div></div>' +

      // Duo Target
      (profile.mode === 'duo'
        ? '<div class="box accent stack-sm">' +
          '<div class="text-xs bold text-accent" style="text-transform:uppercase">' + esc(t.duoTargetTitle) + '</div>' +
          '<p class="text-xs text-muted">' + esc(t.duoTargetDesc) + '</p>' +
          '<div class="grid-3">' +
          [5, 6, 7]
            .map(
              (n) =>
                '<button type="button" class="btn btn-sm ' +
                (profile.duoTarget === n ? 'btn-primary' : 'btn-secondary') +
                '" data-act="set-duo-target" data-val="' +
                n +
                '">' +
                n +
                ' ' +
                esc(t.duoTargetRooms) +
                '</button>'
            )
            .join('') +
          '</div></div>'
        : '') +

      // Difficulty / Location Side
      '<div><span class="section-label">' + esc(diffLabel) + '</span>' +
      '<div class="grid-diff">' +
      '<button type="button" class="choice-card' + (!profile.modifiers.mixedDifficulty && profile.difficulty === 'silver' ? ' active' : '') + '" data-act="set-diff" data-val="silver">' +
      '<div class="row bold text-sm">' + ico('sparkles', 'sm') + '<span>' + esc(silverTitle) + '</span></div>' +
      '<div class="text-xs text-muted" style="margin-top:0.15rem">' + esc(silverDesc) + '</div></button>' +
      '<button type="button" class="choice-card' + (!profile.modifiers.mixedDifficulty && profile.difficulty === 'gold' ? ' active' : '') + '" data-act="set-diff" data-val="gold">' +
      '<div class="row bold text-sm">' + ico('sparkles', 'sm') + '<span>' + esc(goldTitle) + '</span></div>' +
      '<div class="text-xs text-muted" style="margin-top:0.15rem">' + esc(goldDesc) + '</div></button>' +
      '<button type="button" class="choice-card' + (profile.modifiers.mixedDifficulty ? ' active' : '') + '" data-act="set-diff" data-val="mixed">' +
      '<div class="row bold text-sm">' + ico('shuffle', 'sm') + '<span>' + esc(mixedTitle) + '</span></div>' +
      '<div class="text-xs text-muted" style="margin-top:0.15rem">5 + 5</div></button>' +
      '</div></div>' +

      // Modular Components, Packs & Dictionaries
      '<div class="stack-sm"><span class="section-label">' + esc(t.packsButton) + '</span>' +
      '<button type="button" class="choice-card stack-sm" data-act="open-packs">' +
      '<div class="row-between">' +
      '<div class="row flex-1">' + ico('layers', 'sm') + '<div class="flex-1"><div class="bold text-sm">' + esc(t.packsButton) + '</div>' +
      (activeScenario
        ? '<div class="text-xs text-accent">' + esc(app.lang === 'ru' ? activeScenario.titleRu : activeScenario.titleEn) + '</div>'
        : '') +
      '</div></div></div>' +
      '<div class="row-wrap tabular-nums">' +
      '<span class="badge">' + esc(t.packsLabel) + ' ' + activePackCfg.selectedPackIds.length + '</span>' +
      '<span class="badge ' + (activeRoomsCount >= 10 ? 'muted' : 'red') + '">' + esc(roomsLabel) + ': ' + activeRoomsCount + '</span>' +
      '<span class="badge ' + (activeArtsCount >= 10 ? 'muted' : 'red') + '">' + esc(artsLabel) + ': ' + activeArtsCount + '</span>' +
      '<span class="badge ' + (activeWordsCount >= 25 ? 'purple' : 'red') + '">' + esc(t.wordsDeckLabel) + ' ' + activeWordsCount + '</span>' +
      '</div></button>' +
      (!isConfigValid ? '<div class="box red text-xs bold">' + esc(t.minWordsWarning) + '</div>' : '') +
      '</div>' +

      // Balanced Rule Presets (Scrollable)
      '<div class="stack-sm">' +
      '<div class="row-between">' +
      '<span class="section-label" style="margin-bottom:0">' + esc(t.rulePresetsTitle) + '</span>' +
      (!activePreset ? '<span class="preset-tag">' + esc(t.customPresetBadge) + '</span>' : '') +
      '</div>' +
      '<p class="text-xs text-muted" style="margin-top:-0.25rem">' + esc(t.rulePresetsSubtitle) + '</p>' +
      '<div class="scroll-box scroll-box-presets"><div class="preset-grid">' +
      (DATA.RULE_PRESETS || [])
        .map((pr) => {
          const isAct = activePreset && activePreset.id === pr.id;
          return (
            '<button type="button" class="preset-card' + (isAct ? ' active' : '') + '" data-act="apply-preset" data-id="' + esc(pr.id) + '">' +
            '<div class="row-between">' +
            '<span class="bold text-sm">' + esc(app.lang === 'ru' ? pr.titleRu : pr.titleEn) + '</span>' +
            '<span class="preset-tag">' + esc(app.lang === 'ru' ? pr.badgeRu : pr.badgeEn) + '</span>' +
            '</div>' +
            '<p class="text-xs text-muted">' + esc(app.lang === 'ru' ? pr.descRu : pr.descEn) + '</p>' +
            '</button>'
          );
        })
        .join('') +
      '</div></div></div>' +

      // Modifiers Accordion (Scrollable)
      '<div class="box" style="padding:0;overflow:hidden">' +
      '<button type="button" class="row-between" data-act="toggle-mods" style="width:100%;padding:0.8rem">' +
      '<span class="row">' + ico('flame', 'sm') + '<span class="text-xs bold text-accent" style="text-transform:uppercase">' + esc(t.modifiersTitle) + '</span>' +
      (activeModCount > 0 ? '<span class="badge tabular-nums">' + activeModCount + '</span>' : '') +
      '</span>' +
      ico(s.showModifiers ? 'chevronUp' : 'chevronDown', 'sm') +
      '</button>' +
      (s.showModifiers
        ? '<div class="scroll-box-mods stack-sm" style="padding:0.7rem 0.8rem 0.8rem;border-top:1px solid var(--border-card)">' +
          modList
            .map((m) => {
              const active = !m.disabled && profile.modifiers[m.key];
              return (
                '<button type="button" class="choice-card' +
                (active ? ' active' : '') +
                '" data-act="toggle-mod" data-key="' +
                m.key +
                '"' +
                (m.disabled ? ' disabled' : '') +
                '>' +
                '<div class="row" style="align-items:flex-start">' +
                '<span class="checkbox-dot' + (active ? ' checked' : '') + '">' + (active ? '✓' : '') + '</span>' +
                '<div class="flex-1">' +
                '<div class="row bold text-xs">' + ico(m.icon, 'sm') + '<span>' + esc(m.label) + '</span></div>' +
                '<div class="text-xs text-muted" style="margin-top:0.15rem">' + esc(m.desc) + '</div>' +
                '</div></div></button>'
              );
            })
            .join('') +
          '</div>'
        : '') +
      '</div>' +

      // Footer Actions
      '<div class="row">' +
      '<button type="button" class="btn btn-secondary" data-act="setup-back">' + esc(t.back) + '</button>' +
      '<button type="button" class="btn btn-primary flex-1" data-act="start-game"' + (!isConfigValid ? ' disabled' : '') + '>' + ico('play', 'sm') + '<span>' + esc(t.startInvestigation) + '</span></button>' +
      '</div>' +
      '</div>' +
      renderPWAInstallCard() +
      '</div>'
    );
  }

  function renderEventBanners(banners) {
    const list = Array.isArray(banners) ? banners : banners ? [banners] : [];
    if (list.length === 0) return '';
    const t = T();
    return (
      '<div class="stack-sm">' +
      list
        .map((banner) => {
          let tone = 'accent';
          let iconName = 'sparkles';
          let text = '';
          switch (banner.type) {
            case 'poltergeist': {
              tone = 'purple';
              iconName = 'shuffle';
              const names = (app.lang === 'ru' ? banner.roomNamesRu : banner.roomNamesEn) || [];
              text = esc(t.poltergeistAlert) + ' <strong>' + esc(names.join(' ↔ ')) + '</strong>';
              break;
            }
            case 'fever':
              tone = 'red';
              iconName = 'flame';
              text = esc(t.feverAlert);
              break;
            case 'fog_cleared':
              tone = 'sky';
              iconName = 'fog';
              text = esc(t.fogClearedAlert);
              break;
            case 'pillar_collapse':
              tone = 'red';
              iconName = 'alert';
              text = esc(t.pillarCollapseAlert);
              break;
            case 'archive_draw_medium':
              tone = 'emerald';
              iconName = 'layers';
              text = esc(t.archiveDrawMediumAlert);
              break;
            case 'archive_draw_ghost':
              tone = 'purple';
              iconName = 'layers';
              text = esc(t.archiveDrawGhostAlert);
              break;
            case 'occult_swap_medium':
              tone = 'emerald';
              iconName = 'sparkles';
              text = esc(t.occultSwapMediumAlert);
              break;
            case 'occult_swap_ghost':
              tone = 'purple';
              iconName = 'ghost';
              text = esc(t.occultSwapGhostAlert);
              break;
            case 'tool_scout':
              tone = 'sky';
              iconName = 'eye';
              text = esc(t.toolScoutAlert);
              break;
            case 'tool_swap_ghost':
              tone = 'purple';
              iconName = 'shuffle';
              text = esc(t.toolSwapGhostAlert);
              break;
            case 'eerie_swap_medium':
              tone = 'emerald';
              iconName = 'shield';
              text = esc(t.eerieSwapMediumAlert);
              break;
            case 'room_archive_swap':
              tone = 'accent';
              iconName = 'map';
              text = esc(t.roomArchiveSwapAlert);
              break;
            default:
              text = esc(t.fogClearedAlert);
          }
          return (
            '<div class="box ' + tone + ' row text-xs bold">' +
            ico(iconName, 'sm') +
            '<span>' + text + '</span>' +
            '</div>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  function renderGameBoard() {
    const t = T();
    const gs = app.gameState;
    const bt = getBoxTerms(gs.version);
    const targetSealed = gs.targetSealedCount || 5;
    const maxLost = gs.mode === 'duo' ? 11 - targetSealed : 5;
    const isMixed = Boolean(gs.modifiers.mixedDifficulty);

    const badges = [];
    if (gs.rooms.some((r) => r.level === 'advanced')) {
      badges.push({ label: app.lang === 'ru' ? 'Локации 13–24' : 'Locs 13–24', cls: 'emerald' });
    }
    if (gs.artifacts && gs.artifacts.some((a) => a.symbol === 'dossier' || a.id.startsWith('sec-inf-'))) {
      badges.push({ label: t.secretsHookInformants, cls: '' });
    }
    if (areTelegramsEnabled(gs)) {
      badges.push({ label: t.tabTelegramsList, cls: 'red' });
    }
    if (gs.modifiers.mixCrossBoxArtifacts) {
      badges.push({ label: app.lang === 'ru' ? 'Микс 5+5' : '5+5 Mix', cls: 'purple' });
    }
    if (gs.modifiers.enableArtifactCategories) badges.push({ label: t.artifactCategoriesLabel.split(' (')[0], cls: '' });
    if (gs.modifiers.enableRoomProperties) badges.push({ label: t.roomPropertiesLabel, cls: '' });
    if (gs.modifiers.enableRiskActions) badges.push({ label: t.riskActionsLabel.split(' (')[0], cls: 'purple' });
    if (gs.modifiers.enableCatchUp) badges.push({ label: t.catchUpLabel.split(' (')[0], cls: 'emerald' });
    if (gs.modifiers.enableWingCurses) {
      if (gs.activeWingIds.includes('pack-occult')) badges.push({ label: t.wingCurseOccultTitle, cls: 'purple' });
      if (gs.activeWingIds.includes('pack-forgotten')) badges.push({ label: t.wingCurseForgottenTitle, cls: '' });
      if (gs.activeWingIds.includes('pack-medical')) {
        badges.push({
          label: gs.medicalFeverPending ? t.feverBadge : t.wingCurseMedicalTitle,
          cls: gs.medicalFeverPending ? 'red' : '',
        });
      }
      if (gs.activeWingIds.includes('pack-grounds') && gs.foggedRoomId) {
        badges.push({ label: t.wingCurseGroundsTitle, cls: 'purple' });
      }
    }
    if (gs.modifiers.mediumInsightEnabled && !gs.mediumInsightUsed) badges.push({ label: t.activateInsight, cls: '' });
    if (gs.mode === 'standard' && gs.modifiers.ghostIllusionEnabled && !gs.ghostIllusionUsed) {
      badges.push({ label: t.ghostIllusionLabel.split(' (')[0], cls: 'purple' });
    }
    if (gs.modifiers.blitzTimer) badges.push({ label: t.blitzBadge, cls: 'red' });

    const sealedPips = Array.from({ length: targetSealed })
      .map((_, i) => '<span class="track-pip' + (i < gs.sealedCount ? ' sealed' : '') + '"></span>')
      .join('');
    const lostPips = Array.from({ length: maxLost })
      .map((_, i) => '<span class="track-pip' + (i < gs.lostCount ? ' lost' : '') + '"></span>')
      .join('');

    const roomsHtml = gs.rooms
      .slice(0, 10)
      .map((room, idx) => {
        const side = getRoomSide(room, gs.difficulty);
        const rName = getRoomName(room, gs.difficulty);
        const isSealed = room.status === 'sealed';
        const isLost = room.status === 'lost';
        const isFogged = room.status === 'active' && gs.foggedRoomId === room.id;
        const artObj = getArtifactObj(gs, room.artifactId);
        const artName = getArtifactName(room.artifactId, gs);
        const trait = gs.modifiers.enableRoomProperties ? getRoomTrait(room.id) : null;
        const artCat = !isFogged && gs.modifiers.enableArtifactCategories ? getArtifactCategory(room.artifactId) : null;
        const metaParts = [];
        if (bt.isSecrets && room.code && !isSealed && !isLost) {
          metaParts.push('<span class="mono ' + (room.level === 'advanced' ? 'text-emerald' : 'text-muted') + '">' + esc(room.code) + '</span>');
        } else if (isMixed && !isSealed && !isLost) {
          metaParts.push('<span class="' + (side === 'gold' ? 'text-accent' : 'text-muted') + '">' + esc(side === 'gold' ? t.goldShort : t.silverShort) + '</span>');
        }
        if (trait && !isSealed && !isLost) {
          metaParts.push('<span class="meta-trait ' + trait + '">' + getRoomTraitGlyph(trait) + ' ' + esc(getRoomTraitLabel(trait)) + '</span>');
        }
        return (
          '<div class="room-card' +
          (isSealed ? ' sealed' : isLost ? ' lost' : '') +
          '">' +
          '<div class="row-between" style="align-items:flex-start">' +
          '<div class="flex-1">' +
          '<div class="room-title">' + esc(rName) + '</div>' +
          (metaParts.length > 0 ? '<div class="room-meta-line">' + metaParts.join(' · ') + '</div>' : '') +
          '</div>' +
          (isSealed
            ? '<span class="text-emerald">' + ico('shield', 'sm') + '</span>'
            : isLost
            ? '<span class="text-red">' + ico('skull', 'sm') + '</span>'
            : '<span class="text-xs mono text-muted">' + (bt.isSecrets && room.code ? esc(room.code) : idx + 1) + '</span>') +
          '</div>' +
          '<div class="room-footer">' +
          (isFogged
            ? '<div class="room-artifact text-sky">' + ico('fog', 'sm') + '<span>' + esc(t.fogHiddenArtifact) + '</span></div>'
            : '<div class="room-artifact">' + artifactBadge(room.artifactId, artObj && artObj.symbol) + '<span>' + esc(artName) + '</span>' +
              (artCat && !isSealed && !isLost ? '<span class="meta-art-cat ' + artCat + '">· ' + esc(getArtifactCatLabel(artCat)) + '</span>' : '') +
              '</div>') +
          (isSealed
            ? '<span class="text-emerald bold" style="font-size:0.65rem;text-transform:uppercase">' + esc(bt.sealed) + '</span>'
            : isLost
            ? '<span class="text-red bold" style="font-size:0.65rem;text-transform:uppercase">' + esc(bt.lost) + '</span>'
            : '') +
          '</div></div>'
        );
      })
      .join('');

    const sideSummaryLabel = bt.isSecrets
      ? (isMixed ? t.secretsSideMixed : gs.difficulty === 'gold' ? t.secretsSideB : t.secretsSideA)
      : (isMixed ? t.mixedDifficultyShort : gs.difficulty === 'silver' ? t.silver : t.gold);

    return (
      '<div class="container stack-md fade-in">' +
      '<div class="panel stack-sm">' +
      '<div class="row-between" style="flex-wrap:wrap">' +
      '<div class="row text-xs bold">' +
      '<span class="text-accent" style="text-transform:uppercase">' + esc(t.round) + ' ' + gs.currentRound + '</span>' +
      '<span class="text-muted">·</span>' +
      '<span>' + esc(sideSummaryLabel) + '</span>' +
      '</div>' +
      '<div class="row" style="gap:0.9rem;flex-wrap:wrap">' +
      '<div class="track-row" title="' + esc(bt.sealed) + '">' +
      '<span class="text-emerald">' + ico('shield', 'sm') + '</span>' +
      sealedPips +
      '<span class="text-xs mono bold text-emerald tabular-nums">' + gs.sealedCount + '/' + targetSealed + '</span>' +
      '</div>' +
      '<div class="track-row" title="' + esc(bt.lost) + '">' +
      '<span class="text-red">' + ico('skull', 'sm') + '</span>' +
      lostPips +
      '<span class="text-xs mono bold text-red tabular-nums">' + gs.lostCount + '/' + maxLost + '</span>' +
      '</div></div></div>' +
      (badges.length > 0
        ? '<div class="row-wrap" style="padding-top:0.5rem;border-top:1px solid var(--border-card)">' +
          badges.map((b) => '<span class="badge ' + b.cls + '">' + esc(b.label) + '</span>').join('') +
          '</div>'
        : '') +
      '</div>' +

      renderActiveTelegramsBanner(gs.activeTelegrams, false) +
      renderEventBanners(gs.roundEventBanners) +

      '<div class="panel"><div class="grid-rooms">' + roomsHtml + '</div></div>' +

      (gs.phase !== 'gameover'
        ? '<div class="row" style="justify-content:center;flex-wrap:wrap">' +
          (gs.roundHistory.length > 0
            ? '<button type="button" class="btn btn-secondary" data-act="open-history">' +
              ico('history', 'sm') +
              '<span>' + esc(t.roundHistoryTitle) + ' (' + gs.roundHistory.length + ')</span></button>'
            : '') +
          '<button type="button" class="btn btn-primary" data-act="advance-vision">' +
          ico('eye', 'sm') +
          '<span>' + esc(bt.startVision) + ' (' + esc(t.round) + ' ' + gs.currentRound + ')</span></button>' +
          '</div>'
        : '') +
      '</div>'
    );
  }

  function renderPrivacyScreen(roleName, desc, unlockAction) {
    const t = T();
    return (
      '<div class="modal-overlay" role="dialog" aria-modal="true" aria-label="' + esc(t.privacyTitle) + '">' +
      '<div class="modal-panel sm"><div class="modal-body text-center stack-md" style="padding:1.5rem">' +
      '<div style="width:3.6rem;height:3.6rem;margin:0 auto;border-radius:999px;display:flex;align-items:center;justify-content:center;background:var(--bg-accent-soft);border:1px solid var(--border-accent);color:var(--text-accent)">' +
      ico('alert', 'lg') +
      '</div>' +
      '<div><span class="badge">' + esc(t.privacyTitle) + '</span></div>' +
      '<h2 style="font-size:1.35rem">' + esc(t.privacyScreenFor) + ' <span class="text-accent">' + esc(roleName) + '</span></h2>' +
      '<p class="text-sm text-muted">' + esc(desc || t.privacyPass) + '</p>' +
      '<button type="button" id="privacy-hold-btn" class="hold-btn" data-unlock="' + esc(unlockAction) + '">' +
      '<span class="hold-fill" id="privacy-hold-fill"></span>' +
      '<span class="row" style="position:relative;z-index:2">' + ico('key', 'sm') +
      '<span id="privacy-hold-label">' + esc(t.privacyIAm + ' ' + roleName + ', ' + t.privacyButton) + '</span></span>' +
      '</button>' +
      '<p id="privacy-hold-hint" class="text-xs text-muted">' + esc(t.privacyHoldHint) + '</p>' +
      '<div class="row text-xs text-muted" style="justify-content:center">' + ico('eye', 'sm') + '<span>' + esc(t.privacyLookAway) + '</span></div>' +
      '</div></div></div>'
    );
  }

  function renderMansionPlanToggle(gs, targetRoom) {
    const t = T();
    const bt = getBoxTerms(gs.version);
    const activeCount = gs.rooms.filter((r) => r.status === 'active').length;
    return (
      '<div class="stack-sm">' +
      '<button type="button" class="choice-card row-between" data-act="toggle-plan" style="padding:0.6rem 0.75rem">' +
      '<span class="row text-xs bold">' + ico('map', 'sm') +
      '<span>' + esc(bt.showPlan) + ' (' + activeCount + ')</span></span>' +
      ico(app.showMansionPlan ? 'chevronUp' : 'chevronDown', 'sm') +
      '</button>' +
      (app.showMansionPlan
        ? '<div class="grid-rooms">' +
          gs.rooms
            .slice(0, 10)
            .map((r) => {
              const isTarget = targetRoom && r.id === targetRoom.id;
              const isSealed = r.status === 'sealed';
              const isLost = r.status === 'lost';
              const isFogged = r.status === 'active' && gs.foggedRoomId === r.id;
              const artObj = getArtifactObj(gs, r.artifactId);
              const trait = gs.modifiers.enableRoomProperties && !isSealed && !isLost ? getRoomTrait(r.id) : null;
              const artCat = gs.modifiers.enableArtifactCategories && !isSealed && !isLost ? getArtifactCategory(r.artifactId) : null;
              return (
                '<div class="room-card' +
                (isTarget ? ' target' : isSealed ? ' sealed' : isLost ? ' lost' : '') +
                '">' +
                '<div class="row-between" style="align-items:flex-start">' +
                '<div class="flex-1"><div class="room-title">' + esc(getRoomName(r, gs.difficulty)) + '</div>' +
                (trait ? '<div class="room-meta-line"><span class="meta-trait ' + trait + '">' + getRoomTraitGlyph(trait) + ' ' + esc(getRoomTraitLabel(trait)) + '</span></div>' : '') +
                '</div>' +
                (isTarget ? '<span class="badge" style="padding:0.1rem 0.35rem;font-size:0.62rem">' + esc(t.targetBadge) + '</span>' : '') +
                '</div>' +
                '<div class="room-footer">' +
                '<div class="room-artifact">' + artifactBadge(r.artifactId, artObj && artObj.symbol) + '<span>' + esc(getArtifactName(r.artifactId, gs)) + '</span>' +
                (artCat ? '<span class="meta-art-cat ' + artCat + '">· ' + esc(getArtifactCatLabel(artCat)) + '</span>' : '') +
                '</div>' +
                (isFogged ? '<span class="text-sky">' + ico('fog', 'sm') + '</span>' : '') +
                '</div></div>'
              );
            })
            .join('') +
          '</div>'
        : '') +
      '</div>'
    );
  }

  function formatMediumSwapTags(tags) {
    const t = T();
    return (tags || [])
      .map((tag) => {
        if (tag === 'quiet') return t.quietRoomTag;
        if (tag === 'second_wind') return t.secondWindMediumTag;
        if (tag === 'carried') return t.carriedSwapsTag;
        return '';
      })
      .filter(Boolean);
  }

  function formatGhostSwapTags(tags) {
    const t = T();
    return (tags || [])
      .map((tag) => {
        if (tag === 'echo') return t.echoRoomTag;
        if (tag === 'eerie') return t.eerieAuraTag;
        if (tag === 'second_wind') return t.secondWindGhostTag;
        if (tag === 'carried') return t.carriedSwapsTag;
        if (tag === 'channel') return t.widenChannelBtn + ' (+2)';
        return '';
      })
      .filter(Boolean);
  }

  function renderVisionPhase() {
    const t = T();
    const gs = app.gameState;
    const bt = getBoxTerms(gs.version);
    const step = gs.visionStep || 'medium_privacy';

    if (step === 'medium_privacy') {
      return renderPrivacyScreen(bt.mediumRole, bt.mediumPrivacyDesc, 'medium_select');
    }
    if (step === 'ghost_privacy') {
      return renderPrivacyScreen(bt.ghostRole, bt.ghostPrivacyDesc, 'ghost_add');
    }

    const targetRoom = gs.rooms.find((r) => r.id === (gs.currentHideout && gs.currentHideout.roomId));
    const roomName = targetRoom ? getRoomName(targetRoom, gs.difficulty) : '';
    const targetArtObj = targetRoom ? getArtifactObj(gs, targetRoom.artifactId) : null;
    const artName = targetRoom ? getArtifactName(targetRoom.artifactId, gs) : '';
    const targetTrait = targetRoom && gs.modifiers.enableRoomProperties ? getRoomTrait(targetRoom.id) : null;
    const targetArtCat = targetRoom && gs.modifiers.enableArtifactCategories ? getArtifactCategory(targetRoom.artifactId) : null;

    const activeTgs = gs.activeTelegrams || [];
    const hasTg01 = activeTgs.some((x) => x.id === 'tg-01');
    const hasTg02 = activeTgs.some((x) => x.id === 'tg-02');
    const hasTg03 = activeTgs.some((x) => x.id === 'tg-03');
    const hasTg04 = activeTgs.some((x) => x.id === 'tg-04');
    const hasTg05 = activeTgs.some((x) => x.id === 'tg-05');
    const hasTg06 = activeTgs.some((x) => x.id === 'tg-06');

    if (step === 'medium_select') {
      const canInsight = Boolean(gs.modifiers.mediumInsightEnabled && !gs.mediumInsightUsed);
      const canTrance = Boolean(
        gs.modifiers.enableWingCurses &&
          gs.activeWingIds.includes('pack-occult') &&
          !gs.occultTranceUsed
      );
      const swapsLeft = gs.roundMediumSwapsLeft || 0;
      const swapTagLabels = formatMediumSwapTags(gs.roundMediumSwapTags);
      const cacheCount = gs.pendingMediumCacheCount || 0;
      const activeCache = Array.isArray(gs.activeDeckCache) ? gs.activeDeckCache : null;
      const canWiden = Boolean(
        gs.modifiers.enableRiskActions &&
          (gs.mediumChannelUsesLeft || 0) > 0 &&
          !gs.mediumChannelUsedThisRound
      );
      const canMajorTgSwap = Boolean(
        areTelegramsEnabled(gs) &&
          !gs.majorTelegramSwapUsedThisRound &&
          gs.mediumHand.length > 0
      );

      // Required clue counts from active Telegrams (non-deadlocking if both tg-01 and tg-02 appear)
      const locWordCount = countLocationWords(roomName);
      const tg01Count = Math.min(4, gs.mediumHand.length);
      const tg02Count = Math.min(locWordCount, gs.mediumHand.length);
      let mediumCountOk = gs.chosenClues.length > 0;
      const tgReqNotes = [];
      if (hasTg01 && hasTg02) {
        mediumCountOk = gs.chosenClues.length === tg01Count || gs.chosenClues.length === tg02Count;
        tgReqNotes.push(t.tg01Requirement + ' / ' + t.tg02Requirement + ' ' + tg02Count + ' ' + t.tg02WordsSuffix);
      } else if (hasTg01) {
        mediumCountOk = gs.chosenClues.length === tg01Count;
        tgReqNotes.push(t.tg01Requirement);
      } else if (hasTg02) {
        mediumCountOk = gs.chosenClues.length === tg02Count;
        tgReqNotes.push(t.tg02Requirement + ' ' + tg02Count + ' ' + t.tg02WordsSuffix);
      }
      if (hasTg03 && gs.mediumHand.length >= 2) {
        if (gs.chosenClues.length < 2) mediumCountOk = false;
        tgReqNotes.push(t.tg03Requirement);
      }

      const selIds = new Set(gs.chosenClues.map((c) => c.id));
      const canConfirmSwap = swapsLeft > 0 && gs.chosenClues.length >= 1 && gs.chosenClues.length <= swapsLeft;
      const canConfirmWiden = canWiden && gs.chosenClues.length >= 1 && gs.chosenClues.length <= 3;

      return (
        '<div class="container-md stack-md fade-in" style="padding-bottom:6.5rem">' +
        '<div class="panel stack-md">' +
        '<div class="row-between" style="padding-bottom:0.55rem;border-bottom:1px solid var(--border-panel)">' +
        '<div class="row"><span class="brand-icon" style="width:2rem;height:2rem">' + ico('eye', 'sm') + '</span>' +
        '<h2 style="font-size:1.15rem">' + esc(bt.visionStep1) + '</h2></div>' +
        '<button type="button" class="btn btn-sm btn-secondary" data-act="hide-to-medium" title="' + esc(t.hideScreenBtn) + '">' + ico('key', 'sm') + '<span>' + esc(t.hideScreenBtn) + '</span></button>' +
        '</div>' +

        renderActiveTelegramsBanner(activeTgs, false) +

        '<div class="box accent text-center stack-sm">' +
        '<div class="text-xs bold text-accent" style="text-transform:uppercase">' + esc(bt.mediumSecretTitle) + '</div>' +
        '<h3 style="font-size:1.25rem;overflow-wrap:anywhere">' +
        (bt.isSecrets && targetRoom && targetRoom.code ? '<span class="mono text-muted" style="font-size:0.85rem;margin-right:0.35rem">' + esc(targetRoom.code) + '</span>' : '') +
        esc(roomName) + '</h3>' +
        (targetRoom
          ? '<div class="row-wrap" style="justify-content:center"><span class="chip">' + artifactBadge(targetRoom.artifactId, targetArtObj && targetArtObj.symbol) + '<span>' + esc(artName) + '</span>' +
            (gs.foggedRoomId === targetRoom.id ? ico('fog', 'sm') : '') + '</span></div>'
          : '') +
        (targetTrait || targetArtCat
          ? '<div class="room-meta-line" style="justify-content:center">' +
            (targetTrait ? '<span class="meta-trait ' + targetTrait + '">' + getRoomTraitGlyph(targetTrait) + ' ' + esc(getRoomTraitLabel(targetTrait)) + '</span>' : '') +
            (targetTrait && targetArtCat ? '<span>·</span>' : '') +
            (targetArtCat ? '<span class="meta-art-cat ' + targetArtCat + '">' + esc(getArtifactCatLabel(targetArtCat)) + '</span>' : '') +
            '</div>'
          : '') +
        '</div>' +

        renderMansionPlanToggle(gs, targetRoom) +

        // Major Urgent Telegram Swap (Secrets of the Soviets)
        (canMajorTgSwap
          ? '<div class="swap-panel">' +
            '<div class="row-between">' +
            '<span class="row text-xs bold text-accent">' + ico('shuffle', 'sm') + '<span>' + esc(t.majorSwapForTelegramBtn) + '</span></span>' +
            '<span class="badge red">1/раунд</span>' +
            '</div>' +
            '<p class="text-xs text-muted">' + esc(t.majorSwapForTelegramHint) + '</p>' +
            '<button type="button" class="btn btn-sm btn-secondary" data-act="major-tg-swap"' +
            (gs.chosenClues.length === 0 ? ' disabled' : '') +
            '>' + ico('rotate', 'sm') + '<span>' + esc(t.majorSwapForTelegramBtn) + ' (' + gs.chosenClues.length + ')</span></button>' +
            '</div>'
          : areTelegramsEnabled(gs) && gs.majorTelegramSwapUsedThisRound
          ? '<div class="box text-xs text-muted">' + esc(t.majorSwapTelegramUsed) + '</div>'
          : '') +

        // Free Medium Hand Swaps Panel
        (swapsLeft > 0
          ? '<div class="swap-panel">' +
            '<div class="row-between">' +
            '<span class="row text-xs bold text-accent">' + ico('shuffle', 'sm') + '<span>' + esc(t.swapCardsTitle) + '</span></span>' +
            '<span class="badge tabular-nums">' + esc(t.swapAvailableLabel) + ': ' + swapsLeft + '</span>' +
            '</div>' +
            (swapTagLabels.length > 0
              ? '<div class="swap-sources">' + swapTagLabels.map((lbl) => '<span class="swap-source-item">' + esc(lbl) + '</span>').join('') + '</div>'
              : '') +
            '<p class="text-xs text-muted">' + esc(t.swapHintMedium) + '</p>' +
            '<button type="button" class="btn btn-sm btn-primary" data-act="medium-swap-selected"' +
            (!canConfirmSwap ? ' disabled' : '') +
            '>' + ico('rotate', 'sm') + '<span>' + esc(t.swapSelectedBtn) + ' (' + gs.chosenClues.length + '/' + swapsLeft + ')</span></button>' +
            '</div>'
          : '') +

        // 3-Card Deck Cache (Tool artifact sealed)
        (activeCache
          ? '<div class="swap-panel sky">' +
            '<div class="row-between">' +
            '<span class="row text-xs bold text-sky">' + ico('eye', 'sm') + '<span>' + esc(t.cacheBoxTitle) + '</span></span>' +
            '<button type="button" class="btn btn-sm btn-secondary" data-act="skip-deck-cache">' + esc(t.cacheSkipBtn) + '</button>' +
            '</div>' +
            '<p class="text-xs text-muted">' + esc(t.cacheBoxHint) + '</p>' +
            '<div class="cache-grid">' +
            activeCache
              .map((c) => {
                const isPicked = app.selectedCacheCardId === c.id;
                return (
                  '<button type="button" class="clue-card' + (isPicked ? ' selected' : '') + '" data-act="pick-cache-card" data-id="' + esc(c.id) + '">' +
                  '<span class="clue-word">' + esc(getClueLabel(c)) + '</span>' +
                  (isPicked ? '<span class="clue-check">✓</span>' : '') +
                  '</button>'
                );
              })
              .join('') +
            '</div>' +
            '<button type="button" class="btn btn-sm btn-primary btn-full" data-act="confirm-cache-swap"' +
            (!app.selectedCacheCardId || gs.chosenClues.length !== 1 ? ' disabled' : '') +
            '>' + ico('sparkles', 'sm') + '<span>' + esc(t.cacheSwapConfirm) + '</span></button>' +
            '</div>'
          : cacheCount > 0
          ? '<button type="button" class="btn btn-sm btn-secondary btn-full" data-act="open-deck-cache">' +
            ico('eye', 'sm') + '<span>' + esc(t.openCacheBtn) + (cacheCount > 1 ? ' ×' + cacheCount : '') + '</span></button>'
          : '') +

        // Tactical Powers: Insight, Trance, Widen Channel
        (canInsight || canTrance || canWiden
          ? '<div class="stack-sm">' +
            '<div class="row-wrap">' +
            (canInsight
              ? '<button type="button" class="btn btn-sm btn-primary flex-1" data-act="medium-insight">' + ico('sparkles', 'sm') + '<span>' + esc(t.activateInsight) + '</span></button>'
              : '') +
            (canTrance
              ? '<button type="button" class="btn btn-sm btn-purple flex-1" data-act="occult-trance"' +
                (gs.chosenClues.length === 0 || gs.chosenClues.length > 3 ? ' disabled' : '') +
                '>' + ico('rotate', 'sm') + '<span>' + esc(t.activateTrance) + ' (' + Math.min(3, gs.chosenClues.length) + '/3)</span></button>'
              : '') +
            (canWiden
              ? '<button type="button" class="btn btn-sm btn-secondary flex-1" data-act="medium-widen-channel"' +
                (!canConfirmWiden ? ' disabled' : '') +
                '>' + ico('zap', 'sm') + '<span>' + esc(t.widenChannelBtn) + ' (' + Math.min(3, gs.chosenClues.length) + '/3 · ' + esc(t.widenChannelLeft) + ' ' + gs.mediumChannelUsesLeft + ')</span></button>'
              : '') +
            '</div>' +
            (canWiden
              ? '<p class="text-xs text-muted">' + esc(gs.mode === 'duo' ? t.widenChannelPriceDuo : t.widenChannelPriceStd) + '</p>'
              : '') +
            '</div>'
          : '') +

        (tgReqNotes.length > 0
          ? '<div class="box red text-xs bold">' + tgReqNotes.map((n) => esc(n)).join(' · ') + '</div>'
          : '') +

        '<div><span class="section-label">' + esc(bt.mediumHand) + ' (' + gs.mediumHand.length + '):</span>' +
        (gs.mediumHand.length === 0
          ? '<div class="box accent text-center stack-sm"><p class="text-xs">' + esc(t.emptyHandNotice) + '</p>' +
            '<button type="button" class="btn btn-sm btn-primary" data-act="replenish-hands">' + esc(t.drawEmergencyCards) + '</button></div>'
          : '<div class="grid-clues">' +
            gs.mediumHand
              .map((c) => {
                const isSel = selIds.has(c.id);
                return (
                  '<button type="button" class="clue-card' + (isSel ? ' selected' : '') + '" data-act="toggle-medium-clue" data-id="' + esc(c.id) + '">' +
                  '<span class="clue-word">' + esc(getClueLabel(c)) + '</span>' +
                  (isSel ? '<span class="clue-check">✓</span>' : '') +
                  '</button>'
                );
              })
              .join('') +
            '</div>') +
        '</div>' +
        (canTrance ? '<p class="text-xs text-purple">' + esc(t.trancePromptHint) + '</p>' : '') +
        (app.visionWarning ? '<p class="text-xs text-red text-center bold">' + esc(app.visionWarning) + '</p>' : '') +
        '</div>' +

        // Sticky Bottom Action Bar
        '<div class="sticky-bottom-bar"><div class="sticky-bottom-box stack-sm">' +
        (gs.chosenClues.length > 0
          ? '<div class="row-wrap"><span class="text-xs bold text-accent">' + esc(t.selectedCountLabel) + ':</span>' +
            gs.chosenClues
              .map(
                (c) =>
                  '<button type="button" class="chip" data-act="toggle-medium-clue" data-id="' +
                  esc(c.id) +
                  '">' +
                  esc(getClueLabel(c)) +
                  ' ×</button>'
              )
              .join('') +
            '</div>'
          : '') +
        '<button type="button" class="btn btn-primary btn-full" data-act="finish-medium"' +
        (!mediumCountOk ? ' disabled' : '') +
        '><span>' +
        esc(gs.mode === 'duo' ? t.revealInDuo : bt.passToGhost) +
        ' (' +
        gs.chosenClues.length +
        ')</span>' +
        ico('arrowRight', 'sm') +
        '</button></div></div></div>'
      );
    }

    // Ghost / Spy add step
    const canIllusion = Boolean(
      gs.mode === 'standard' &&
        gs.modifiers.ghostIllusionEnabled &&
        !gs.ghostIllusionUsed &&
        gs.ghostHand.length >= 2
    );
    const illusionActive = Boolean(gs.ghostIllusionActive);
    const gIds = new Set((gs.ghostChosenClues || []).map((c) => c.id));

    // Telegram Spy overrides: tg-03 (steal 1 of Major's clues, 0 decoys), tg-05 (2 deck), tg-06 (1 deck), tg-04 (1..N decoys)
    const isAutoDeckMode = !hasTg03 && (hasTg05 || hasTg06);
    const maxTg04 = Math.max(1, Math.min(gs.chosenClues.length, gs.ghostHand.length));
    let ghostReady = false;
    if (hasTg03) {
      ghostReady = gs.chosenClues.length === 0 || Boolean(app.stolenClueId);
    } else if (isAutoDeckMode) {
      ghostReady = true;
    } else if (hasTg04) {
      ghostReady = gs.ghostHand.length === 0 || ((gs.ghostChosenClues || []).length >= 1 && (gs.ghostChosenClues || []).length <= maxTg04);
    } else {
      const reqCount = gs.ghostHand.length === 0 ? 0 : illusionActive ? 2 : 1;
      ghostReady = gs.ghostHand.length === 0 || (gs.ghostChosenClues || []).length === reqCount;
    }

    const gSwapsLeft = gs.roundGhostSwapsLeft || 0;
    const gSwapTagLabels = formatGhostSwapTags(gs.roundGhostSwapTags);
    const canGhostSwap = gSwapsLeft > 0 && (gs.ghostChosenClues || []).length >= 1 && (gs.ghostChosenClues || []).length <= gSwapsLeft;
    const canWallCollapse = Boolean(
      gs.mode === 'standard' &&
        gs.modifiers.enableRiskActions &&
        !gs.ghostWallCollapseUsed &&
        gs.ghostHand.length > 0
    );

    const spyHandTgs = areTelegramsEnabled(gs) && Array.isArray(gs.spyTelegramHand) ? gs.spyTelegramHand : [];
    const spyPromptText = hasTg04
      ? t.tg04SpyPrompt + ' ' + maxTg04 + ' ' + t.tg04SpyPromptSuffix
      : illusionActive
      ? t.ghostHandPromptIllusion
      : bt.ghostHandPrompt;

    return (
      '<div class="container-md stack-md fade-in" style="padding-bottom:6rem">' +
      '<div class="panel stack-md">' +
      '<div class="row-between" style="padding-bottom:0.55rem;border-bottom:1px solid var(--border-purple)">' +
      '<div class="row"><span class="brand-icon" style="width:2rem;height:2rem;border-color:var(--border-purple);background:var(--bg-purple-soft);color:var(--text-purple)">' + ico('ghost', 'sm') + '</span>' +
      '<h2 style="font-size:1.15rem">' + esc(bt.ghostStep2) + '</h2></div>' +
      '<button type="button" class="btn btn-sm btn-secondary" data-act="hide-to-ghost" title="' + esc(t.hideScreenBtn) + '">' + ico('key', 'sm') + '<span>' + esc(t.hideScreenBtn) + '</span></button>' +
      '</div>' +

      renderActiveTelegramsBanner(activeTgs, true) +

      '<div class="box purple text-center stack-sm">' +
      '<div class="text-xs bold text-purple" style="text-transform:uppercase">' + esc(bt.ghostSecretTitle) + '</div>' +
      '<div class="bold" style="font-size:1.15rem;overflow-wrap:anywhere">' +
      (bt.isSecrets && targetRoom && targetRoom.code ? '<span class="mono text-muted" style="font-size:0.85rem;margin-right:0.35rem">' + esc(targetRoom.code) + '</span>' : '') +
      esc(roomName) + '</div>' +
      (targetRoom
        ? '<div class="row-wrap" style="justify-content:center"><span class="chip purple">' + artifactBadge(targetRoom.artifactId, targetArtObj && targetArtObj.symbol) + '<span>' + esc(artName) + '</span>' +
          (gs.foggedRoomId === targetRoom.id ? ico('fog', 'sm') : '') + '</span></div>'
        : '') +
      (targetTrait || targetArtCat
        ? '<div class="room-meta-line" style="justify-content:center">' +
          (targetTrait ? '<span class="meta-trait ' + targetTrait + '">' + getRoomTraitGlyph(targetTrait) + ' ' + esc(getRoomTraitLabel(targetTrait)) + '</span>' : '') +
          (targetTrait && targetArtCat ? '<span>·</span>' : '') +
          (targetArtCat ? '<span class="meta-art-cat ' + targetArtCat + '">' + esc(getArtifactCatLabel(targetArtCat)) + '</span>' : '') +
          '</div>'
        : '') +
      '</div>' +

      renderMansionPlanToggle(gs, targetRoom) +

      // Major's clues (clickable to steal if tg-03 active)
      '<div class="box ' + (hasTg03 ? 'red' : '') + ' stack-sm">' +
      '<span class="section-label" style="margin-bottom:0">' + esc(hasTg03 ? t.tg03SpyPrompt : bt.mediumSummary + ' (' + gs.chosenClues.length + '):') + '</span>' +
      '<div class="row-wrap">' +
      gs.chosenClues
        .map((c) => {
          if (hasTg03) {
            const isStolen = app.stolenClueId === c.id;
            return (
              '<button type="button" class="clue-card' + (isStolen ? ' selected-purple' : '') + '" data-act="pick-steal-clue" data-id="' + esc(c.id) + '" style="min-height:2.4rem;padding:0.4rem 0.75rem">' +
              '<span class="clue-word">' + esc(getClueLabel(c)) + '</span>' +
              (isStolen ? '<span class="clue-check purple">✓</span>' : '') +
              '</button>'
            );
          }
          return '<span class="chip">' + esc(getClueLabel(c)) + '</span>';
        })
        .join('') +
      '</div></div>' +

      // Spy Telegram Hand preview (Secrets of the Soviets)
      (spyHandTgs.length > 0
        ? '<div class="box stack-sm">' +
          '<div class="text-xs bold text-muted" style="text-transform:uppercase">' + esc(t.spyTelegramHandTitle) + ' (' + spyHandTgs.length + ')</div>' +
          '<p class="text-xs text-muted">' + esc(t.spyTelegramHandHint) + '</p>' +
          '<div class="grid-responsive-2">' +
          spyHandTgs
            .map((tg) => {
              const title = app.lang === 'ru' ? tg.nameRu : tg.nameEn;
              const desc = app.lang === 'ru' ? tg.textRu : tg.textEn;
              return (
                '<div class="box stack-sm" style="background:var(--bg-panel)">' +
                '<div class="text-xs bold"><span class="text-purple mono">№' + tg.number + '</span> ' + esc(title) + '</div>' +
                '<p class="text-xs text-muted">' + esc(desc) + '</p>' +
                '</div>'
              );
            })
            .join('') +
          '</div></div>'
        : '') +

      // Alert if Medium widened the channel
      (gs.mediumChannelUsedThisRound
        ? '<div class="box purple row text-xs bold">' + ico('zap', 'sm') + '<span>' + esc(t.widenChannelAlertGhost) + '</span></div>'
        : '') +

      // Ghost Free Swaps Panel
      (gSwapsLeft > 0 && gs.ghostHand.length > 0
        ? '<div class="swap-panel purple">' +
          '<div class="row-between">' +
          '<span class="row text-xs bold text-purple">' + ico('shuffle', 'sm') + '<span>' + esc(t.swapCardsTitle) + '</span></span>' +
          '<span class="badge purple tabular-nums">' + esc(t.swapAvailableLabel) + ': ' + gSwapsLeft + '</span>' +
          '</div>' +
          (gSwapTagLabels.length > 0
            ? '<div class="swap-sources">' + gSwapTagLabels.map((lbl) => '<span class="swap-source-item">' + esc(lbl) + '</span>').join('') + '</div>'
            : '') +
          '<p class="text-xs text-muted">' + esc(t.swapHintGhost) + '</p>' +
          '<button type="button" class="btn btn-sm btn-purple" data-act="ghost-swap-selected"' +
          (!canGhostSwap ? ' disabled' : '') +
          '>' + ico('rotate', 'sm') + '<span>' + esc(t.swapOneSelectedBtn) + ' (' + (gs.ghostChosenClues || []).length + '/' + gSwapsLeft + ')</span></button>' +
          '</div>'
        : '') +

      // Ghost Illusion & Wall Collapse
      (canIllusion || canWallCollapse
        ? '<div class="stack-sm">' +
          (canIllusion
            ? '<button type="button" class="btn btn-sm btn-full ' + (illusionActive ? 'btn-purple' : 'btn-secondary') + '" data-act="toggle-illusion">' +
              ico('wand', 'sm') + '<span>' + esc(t.activateIllusion) + (illusionActive ? ' (' + gs.ghostChosenClues.length + '/2)' : '') + '</span></button>'
            : '') +
          (canWallCollapse
            ? '<button type="button" class="btn btn-sm btn-secondary btn-full text-red" data-act="ghost-wall-collapse">' +
              ico('alert', 'sm') + '<span>' + esc(t.wallCollapseBtn) + '</span></button>' +
              '<p class="text-xs text-muted">' + esc(t.wallCollapsePrice) + '</p>'
            : '') +
          '</div>'
        : '') +

      // Spy decoy selection (or auto-deck / tg-03 notice)
      (hasTg03
        ? ''
        : isAutoDeckMode
        ? '<div class="box purple text-xs bold">' +
          esc(hasTg05 ? t.tg05SpyNotice : t.tg06SpyNotice) +
          '</div>'
        : '<div><span class="section-label text-purple">' + esc(spyPromptText) + '</span>' +
          (gs.ghostHand.length === 0
            ? '<div class="box purple text-center stack-sm"><p class="text-xs">' + esc(t.ghostEmptyHandNotice) + '</p>' +
              (gs.deckClues.length > 0 || gs.discardClues.length > 0
                ? '<button type="button" class="btn btn-sm btn-purple" data-act="replenish-hands">' + esc(t.drawEmergencyCards) + '</button>'
                : '') +
              '</div>'
            : '<div class="grid-clues">' +
              gs.ghostHand
                .map((c) => {
                  const chosen = gIds.has(c.id);
                  return (
                    '<button type="button" class="clue-card' + (chosen ? ' selected-purple' : '') + '" data-act="toggle-ghost-clue" data-id="' + esc(c.id) + '">' +
                    '<span class="clue-word">' + esc(getClueLabel(c)) + '</span>' +
                    (chosen ? '<span class="clue-check purple">✓</span>' : '') +
                    '</button>'
                  );
                })
                .join('') +
              '</div>') +
          '</div>') +

      (app.visionWarning ? '<p class="text-xs text-red text-center bold">' + esc(app.visionWarning) + '</p>' : '') +
      '</div>' +

      '<div class="sticky-bottom-bar">' +
      '<button type="button" class="btn btn-purple btn-full" data-act="finish-ghost"' +
      (!ghostReady ? ' disabled' : '') +
      '>' + ico('shuffle', 'sm') + '<span>' +
      esc(hasTg03 ? t.tg03StealBtn : gs.ghostHand.length === 0 && !isAutoDeckMode ? t.proceedWithoutDecoy : t.shuffleAndReveal) +
      '</span></button>' +
      '</div></div>'
    );
  }

  function renderHuntPhase() {
    const t = T();
    const gs = app.gameState;
    const bt = getBoxTerms(gs.version);
    const hp = gs.huntProgress || {
      selectedRoomId: null,
      selectedDecoyClueId: null,
      timerDuration: app.timerPreset,
      timerSeconds: app.timerPreset,
      timerRunning: false,
      timerEndsAt: null,
      resultRevealed: false,
      lastResultCorrect: null,
      violationTriggered: false,
      tg06UnsealPending: false,
      feverActive: false,
    };
    const activeTgs = gs.activeTelegrams || [];
    const hasTg09 = activeTgs.some((x) => x.id === 'tg-09') && (gs.ghostChosenClues || []).length > 0;
    const hasTg10 = activeTgs.some((x) => x.id === 'tg-10');

    const remSec = computeHuntRemaining(hp);
    const isTimeUp = remSec === 0;
    const isLow = remSec > 0 && remSec < 30;
    const activeRooms = gs.rooms.filter((r) => r.status === 'active');
    const sealedRooms = gs.rooms.filter((r) => r.status === 'sealed');
    const pickedRoom = hp.selectedRoomId ? gs.rooms.find((r) => r.id === hp.selectedRoomId) : null;
    const pickedName = pickedRoom ? getRoomName(pickedRoom, gs.difficulty) : '';
    const targetRoom = gs.rooms.find((r) => r.id === (gs.currentHideout && gs.currentHideout.roomId));
    const targetName = targetRoom ? getRoomName(targetRoom, gs.difficulty) : '';

    const canSubmitGuess = Boolean(hp.selectedRoomId && (!hasTg09 || hp.selectedDecoyClueId));

    const timerBox =
      '<div class="timer-box' + (isTimeUp ? ' time-up' : '') + '">' +
      '<div class="row-between">' +
      '<div class="row">' + ico('timer', 'sm') +
      '<div><div class="text-xs text-muted" style="font-size:0.66rem;text-transform:uppercase">' + esc(t.discussionTimer) + '</div>' +
      '<div id="hunt-timer-digits" class="timer-digits tabular-nums' + (isTimeUp ? ' up' : isLow ? ' low' : '') + '">' +
      (isTimeUp ? esc(t.timesUp) : formatTime(remSec)) +
      '</div></div></div>' +
      '<div class="row">' +
      '<button type="button" class="btn btn-sm btn-secondary" data-act="hunt-toggle-timer">' +
      ico(hp.timerRunning ? 'pause' : 'play', 'sm') + '<span>' + esc(hp.timerRunning ? t.pause : t.start) + '</span></button>' +
      '<button type="button" class="btn btn-sm btn-secondary" data-act="hunt-reset-timer" aria-label="' + esc(t.resetTimer) + '">' + ico('rotate', 'sm') + '</button>' +
      '</div></div>' +
      (hp.feverActive || hp.channelPenaltyActive || hp.wallCollapseActive || gs.modifiers.blitzTimer || hasTg10
        ? '<div class="row-wrap" style="justify-content:flex-end">' +
          (hasTg10 ? '<span class="badge red">№10 · 60s</span>' : '') +
          (hp.wallCollapseActive ? '<span class="badge emerald">' + ico('alert', 'sm') + '<span>' + esc(t.timerBonusBadge) + '</span></span>' : '') +
          (hp.channelPenaltyActive ? '<span class="badge red">' + ico('zap', 'sm') + '<span>' + esc(t.channelPenaltyBadge) + '</span></span>' : '') +
          (hp.feverActive ? '<span class="badge red">' + ico('flame', 'sm') + '<span>' + esc(t.feverBadge) + '</span></span>' : '') +
          (gs.modifiers.blitzTimer ? '<span class="badge red">' + ico('zap', 'sm') + '<span>' + esc(t.blitzBadge) + '</span></span>' : '') +
          '</div>'
        : '') +
      (!gs.modifiers.blitzTimer && !hasTg10
        ? '<div class="grid-3">' +
          [60, 120, 180]
            .map((sec) => {
              const effectiveSec = computeEffectiveHuntDuration(sec, hp);
              const isActive = hp.timerDuration === effectiveSec && app.timerPreset === sec;
              return (
                '<button type="button" class="btn btn-sm ' +
                (isActive ? 'btn-primary' : 'btn-secondary') +
                '" data-act="hunt-preset" data-val="' +
                sec +
                '">' +
                sec / 60 +
                esc(t.minutesShort) +
                '</button>'
              );
            })
            .join('') +
          '</div>'
        : '') +
      '</div>';

    // Result detail for tg-09 / violation
    const roomMatchedInResult = targetRoom && hp.selectedRoomId === targetRoom.id;
    let resultDesc = hp.lastResultCorrect ? bt.sealedResult : bt.lostResult;
    if (hp.violationTriggered) {
      resultDesc = t.tgViolationResult;
    } else if (hasTg09 && roomMatchedInResult && !hp.lastResultCorrect) {
      resultDesc = t.tg09DecoyFail;
    } else if (hasTg09 && hp.lastResultCorrect) {
      resultDesc = t.tg09DecoySuccess + ' ' + bt.sealedResult;
    }

    return (
      '<div class="container-md stack-md fade-in" style="padding-bottom:6rem">' +
      '<div class="panel stack-sm">' +
      '<div class="row-between" style="flex-wrap:wrap">' +
      '<div><div class="text-xs bold text-accent" style="text-transform:uppercase">' + esc(bt.huntPhase) + '</div>' +
      '<h2 style="font-size:1.3rem">' + esc(bt.hunterDiscussion) + '</h2></div>' +
      timerBox +
      '</div></div>' +

      renderActiveTelegramsBanner(activeTgs, false) +

      (hp.wallCollapseActive
        ? '<div class="box emerald row text-xs bold">' + ico('alert', 'sm') + '<span>' + esc(t.wallCollapseAlertHunt) + '</span></div>'
        : '') +

      // Sticky Clues Bar below header (respects Dynamic Island)
      '<div class="sticky-clues-bar"><div class="sticky-clues-inner stack-sm">' +
      '<div class="row-between">' +
      '<div class="row text-xs bold text-accent" style="text-transform:uppercase">' + ico('sparkles', 'sm') +
      '<span>' + esc(hasTg09 ? t.tg09PickDecoyTitle : t.tableClues) + ' (' + gs.revealedClues.length + '):</span></div>' +
      '</div>' +
      (hasTg09 ? '<p class="text-xs text-muted">' + esc(t.tg09PickDecoyHint) + '</p>' : '') +
      '<div class="row-wrap">' +
      gs.revealedClues
        .map((c) => {
          if (hasTg09) {
            const isDecoyPick = hp.selectedDecoyClueId === c.id;
            return (
              '<button type="button" class="chip' + (isDecoyPick ? ' purple' : '') + '" data-act="hunt-pick-decoy" data-id="' + esc(c.id) + '" style="cursor:pointer;' +
              (isDecoyPick ? 'outline:2px solid var(--text-purple)' : '') +
              '">«' + esc(getClueLabel(c)) + '»' + (isDecoyPick ? ' ✓' : '') + '</button>'
            );
          }
          return '<span class="chip">«' + esc(getClueLabel(c)) + '»</span>';
        })
        .join('') +
      '</div></div></div>' +

      // Room Selection Grid
      '<div class="panel stack-md">' +
      '<div class="box accent row text-xs">' + ico('alert', 'sm') + '<span>' + esc(bt.hunterPrompt) + '</span></div>' +
      '<div><span class="section-label">' + esc(bt.selectRoomPrompt) + '</span>' +
      '<div class="grid-rooms">' +
      activeRooms
        .map((r) => {
          const isSel = hp.selectedRoomId === r.id;
          const side = getRoomSide(r, gs.difficulty);
          const isFog = gs.foggedRoomId === r.id;
          const artObj = getArtifactObj(gs, r.artifactId);
          const trait = gs.modifiers.enableRoomProperties ? getRoomTrait(r.id) : null;
          const artCat = !isFog && gs.modifiers.enableArtifactCategories ? getArtifactCategory(r.artifactId) : null;
          const metaParts = [];
          if (bt.isSecrets && r.code) {
            metaParts.push('<span class="mono ' + (r.level === 'advanced' ? 'text-emerald' : 'text-muted') + '">' + esc(r.code) + '</span>');
          } else if (gs.modifiers.mixedDifficulty) {
            metaParts.push('<span class="' + (side === 'gold' ? 'text-accent' : 'text-muted') + '">' + esc(side === 'gold' ? t.goldShort : t.silverShort) + '</span>');
          }
          if (trait) {
            metaParts.push('<span class="meta-trait ' + trait + '">' + getRoomTraitGlyph(trait) + ' ' + esc(getRoomTraitLabel(trait)) + '</span>');
          }
          return (
            '<button type="button" class="room-card' + (isSel ? ' selected' : '') + '" data-act="hunt-pick-room" data-id="' + esc(r.id) + '">' +
            '<div class="row-between" style="align-items:flex-start;width:100%">' +
            '<div class="flex-1"><div class="room-title">' + esc(getRoomName(r, gs.difficulty)) + '</div>' +
            (metaParts.length > 0 ? '<div class="room-meta-line">' + metaParts.join(' · ') + '</div>' : '') +
            '</div>' +
            (isSel ? '<span class="clue-check">✓</span>' : '') +
            '</div>' +
            '<div class="room-footer" style="width:100%">' +
            (isFog
              ? '<div class="room-artifact text-sky">' + ico('fog', 'sm') + '<span>' + esc(t.fogHiddenArtifact) + '</span></div>'
              : '<div class="room-artifact">' + artifactBadge(r.artifactId, artObj && artObj.symbol) + '<span>' + esc(getArtifactName(r.artifactId, gs)) + '</span>' +
                (artCat ? '<span class="meta-art-cat ' + artCat + '">· ' + esc(getArtifactCatLabel(artCat)) + '</span>' : '') +
                '</div>') +
            '</div></button>'
          );
        })
        .join('') +
      '</div></div>' +

      // Telegram Violation button for Spy (Secrets of the Soviets)
      (bt.isSecrets && activeTgs.length > 0 && !hp.resultRevealed
        ? '<div style="padding-top:0.5rem;border-top:1px solid var(--border-card)">' +
          '<button type="button" class="btn btn-sm btn-secondary btn-full text-red" data-act="open-violation-confirm">' +
          ico('alert', 'sm') + '<span>' + esc(t.tgViolationBtn) + '</span></button></div>'
        : '') +
      '</div>' +

      // Sticky Confirm Bar
      '<div class="sticky-bottom-bar">' +
      '<button type="button" class="btn btn-primary btn-full" data-act="hunt-request-confirm"' +
      (!canSubmitGuess ? ' disabled' : '') +
      '>' + ico('eye', 'sm') + '<span>' + esc(hp.selectedRoomId ? t.confirmGuess + ': ' + pickedName : t.confirmGuess) + '</span></button>' +
      '</div>' +

      // Result Reveal Modal (inline if revealed)
      (hp.resultRevealed && targetRoom
        ? '<div class="modal-overlay" role="dialog" aria-modal="true"><div class="modal-panel sm"><div class="modal-body text-center stack-md" style="padding:1.5rem">' +
          '<div style="width:3.8rem;height:3.8rem;margin:0 auto;border-radius:999px;display:flex;align-items:center;justify-content:center;border:1px solid ' +
          (hp.lastResultCorrect ? 'var(--border-emerald);background:var(--bg-emerald-soft);color:var(--text-emerald)' : 'var(--border-red);background:var(--bg-red-soft);color:var(--text-red)') +
          '">' + ico(hp.lastResultCorrect ? 'shield' : 'skull', 'lg') + '</div>' +
          '<div class="text-xs text-muted bold" style="text-transform:uppercase">' + esc(bt.checkHideoutBadge) + '</div>' +
          '<h3 style="font-size:1.35rem">' + esc(hp.lastResultCorrect ? t.correctGuess : t.wrongGuess) + '</h3>' +
          '<div class="box stack-sm">' +
          '<div class="text-xs text-muted">' + esc(bt.secretWas) + '</div>' +
          '<div class="bold text-accent" style="font-size:1.15rem">' + esc(targetName) + '</div>' +
          (!hp.lastResultCorrect && pickedName && !hp.violationTriggered
            ? '<div class="text-xs text-muted" style="padding-top:0.4rem;border-top:1px solid var(--border-card)">' + esc(bt.hunterPicked) + ' <strong class="text-red">' + esc(pickedName) + '</strong></div>'
            : '') +
          (gs.mode === 'duo' && gs.duoSpiritClue
            ? '<div style="padding-top:0.4rem;border-top:1px solid var(--border-card)"><div class="text-xs text-muted">' + esc(bt.duoSpiritCardLabel) + ':</div><span class="chip purple" style="margin-top:0.25rem">«' + esc(getClueLabel(gs.duoSpiritClue)) + '»</span></div>'
            : '') +
          '</div>' +
          '<p class="text-xs text-muted">' + esc(resultDesc) + '</p>' +

          // Telegram #6 unseal picker if applicable
          (hp.tg06UnsealPending && sealedRooms.length > 0
            ? '<div class="box red stack-sm" style="text-align:left">' +
              '<div class="text-xs bold text-red">' + esc(t.tg06UnsealTitle) + '</div>' +
              '<p class="text-xs text-muted">' + esc(t.tg06UnsealDesc) + '</p>' +
              '<div class="stack-sm">' +
              sealedRooms
                .map((sr) => {
                  const isUnsealPick = app.tg06UnsealRoomId === sr.id;
                  return (
                    '<button type="button" class="choice-card' + (isUnsealPick ? ' active' : '') + '" data-act="pick-unseal-room" data-id="' + esc(sr.id) + '" style="padding:0.5rem 0.65rem">' +
                    '<div class="row-between"><span class="text-xs bold">' + esc(getRoomName(sr, gs.difficulty)) + '</span>' +
                    '<span class="checkbox-dot' + (isUnsealPick ? ' checked' : '') + '">' + (isUnsealPick ? '✓' : '') + '</span></div></button>'
                  );
                })
                .join('') +
              '</div></div>'
            : '') +

          '<button type="button" class="btn btn-full ' + (hp.lastResultCorrect ? 'btn-emerald' : 'btn-red') + '" data-act="hunt-resolve"' +
          (hp.tg06UnsealPending && sealedRooms.length > 0 && !app.tg06UnsealRoomId ? ' disabled' : '') +
          '>' + esc(t.continue) + '</button>' +
          '</div></div></div>'
        : '') +
      '</div>'
    );
  }

  function renderRespitePhase() {
    const t = T();
    const gs = app.gameState;
    const bt = getBoxTerms(gs.version);

    // Spy Telegram selection step (Secrets of the Soviets)
    if (gs.pendingSpyTelegramChoice && Array.isArray(gs.spyTelegramHand) && gs.spyTelegramHand.length > 0) {
      if (!app.spyRespiteUnlocked) {
        return renderPrivacyScreen(bt.ghostRole, t.spyPickTelegramDesc, 'spy_respite');
      }
      const selectedId = app.spyPickedTelegramId || gs.spyTelegramHand[0].id;
      return (
        '<div class="container-sm fade-in"><div class="panel stack-md">' +
        '<div class="text-center stack-sm">' +
        '<span class="badge purple">' + esc(bt.ghostRole) + '</span>' +
        '<h2 style="font-size:1.3rem">' + esc(t.spyPickTelegramTitle) + '</h2>' +
        '<p class="text-xs text-muted">' + esc(t.spyPickTelegramDesc) + '</p>' +
        '</div>' +
        '<div class="stack-sm">' +
        gs.spyTelegramHand
          .map((tg) => {
            const isSel = selectedId === tg.id;
            const title = app.lang === 'ru' ? tg.nameRu : tg.nameEn;
            const desc = app.lang === 'ru' ? tg.textRu : tg.textEn;
            const note = app.lang === 'ru' ? tg.noteRu : tg.noteEn;
            return (
              '<button type="button" class="choice-card' + (isSel ? ' active' : '') + ' stack-sm" data-act="spy-pick-tg" data-id="' + esc(tg.id) + '">' +
              '<div class="row-between"><span class="text-sm bold"><span class="text-purple mono">№' + tg.number + '</span> ' + esc(title) + '</span>' +
              '<span class="checkbox-dot' + (isSel ? ' checked' : '') + '">' + (isSel ? '✓' : '') + '</span></div>' +
              '<p class="text-xs">' + esc(desc) + '</p>' +
              (note ? '<p class="text-xs text-muted" style="font-style:italic">' + esc(note) + '</p>' : '') +
              '</button>'
            );
          })
          .join('') +
        '</div>' +
        (gs.spyTelegramHand.length > 1
          ? '<button type="button" class="choice-card' + (app.spyDiscardSecond ? ' active' : '') + '" data-act="spy-toggle-discard-second">' +
            '<div class="row" style="align-items:flex-start">' +
            '<span class="checkbox-dot' + (app.spyDiscardSecond ? ' checked' : '') + '">' + (app.spyDiscardSecond ? '✓' : '') + '</span>' +
            '<span class="text-xs flex-1">' + esc(app.spyDiscardSecond ? t.spyDiscardSecondLabel : t.spyKeepSecondLabel) + '</span>' +
            '</div></button>'
          : '') +
        '<button type="button" class="btn btn-purple btn-full" data-act="spy-confirm-tg">' +
        ico('arrowRight', 'sm') + '<span>' + esc(t.spyConfirmTelegramBtn) + '</span></button>' +
        '</div></div>'
      );
    }

    const targetSealed = gs.targetSealedCount || 5;
    const maxLost = gs.mode === 'duo' ? 11 - targetSealed : 5;
    const discardIdSet = new Set(
      (gs.discardClues || []).concat(gs.revealedClues || []).map((c) => c.id)
    );
    const totalDiscard = discardIdSet.size;
    const isTgDrawOne = areTelegramsEnabled(gs);
    const descText =
      gs.mode === 'duo'
        ? bt.respiteDescDuo
        : isTgDrawOne
        ? bt.respiteDescTelegrams || bt.respiteDesc
        : bt.respiteDesc;

    return (
      '<div class="container-sm fade-in"><div class="panel text-center stack-md">' +
      '<div style="width:3.6rem;height:3.6rem;margin:0 auto;border-radius:1rem;display:flex;align-items:center;justify-content:center;background:var(--bg-accent-soft);border:1px solid var(--border-accent);color:var(--text-accent)">' +
      ico('layers', 'lg') +
      '</div>' +
      '<div><span class="badge">' + esc(bt.respitePhase) + '</span></div>' +
      '<h2 style="font-size:1.45rem">' + esc(t.endRound) + ' ' + gs.currentRound + '</h2>' +
      '<p class="text-sm text-muted">' + esc(descText) + '</p>' +

      '<div class="box stack-sm" style="text-align:left">' +
      '<div class="row-between text-xs"><span class="text-muted">' + esc(bt.sealed) + ':</span><strong class="text-emerald tabular-nums">' + gs.sealedCount + ' / ' + targetSealed + '</strong></div>' +
      '<div class="row-between text-xs"><span class="text-muted">' + esc(bt.lost) + ':</span><strong class="text-red tabular-nums">' + gs.lostCount + ' / ' + maxLost + '</strong></div>' +
      '<div class="row-between text-xs"><span class="text-muted">' + esc(t.clueDeckLabel) + ':</span><strong class="tabular-nums">' + gs.deckClues.length + ' (' + esc(t.discardPileLabel) + ': ' + totalDiscard + ')</strong></div>' +
      '<div class="row-between text-xs"><span class="text-muted">' + esc(t.round) + ':</span><strong class="text-accent tabular-nums">' + (gs.currentRound + 1) + '</strong></div>' +
      (gs.deckClues.length < 3 && totalDiscard > 0
        ? '<p class="text-xs text-accent" style="padding-top:0.35rem;border-top:1px solid var(--border-card)">' + esc(t.deckReshuffleNotice) + '</p>'
        : '') +
      '</div>' +

      renderActiveTelegramsBanner(gs.activeTelegrams, false) +
      renderEventBanners(gs.roundEventBanners) +

      '<div class="stack-sm">' +
      '<button type="button" class="btn btn-primary btn-full" data-act="complete-respite"><span>' + esc(t.nextRound) + ' ' + (gs.currentRound + 1) + '</span>' + ico('arrowRight', 'sm') + '</button>' +
      (gs.roundHistory.length > 0
        ? '<button type="button" class="btn btn-secondary btn-full btn-sm" data-act="open-history">' + ico('history', 'sm') + '<span>' + esc(t.roundHistoryTitle) + ' (' + gs.roundHistory.length + ')</span></button>'
        : '') +
      '</div></div></div>'
    );
  }

  function renderGameOverOverlay() {
    const t = T();
    const gs = app.gameState;
    if (!gs || gs.phase !== 'gameover') return '';
    const bt = getBoxTerms(gs.version);
    const isVictory = gs.winner === 'hunters';
    const isDuo = gs.mode === 'duo';
    const targetSealed = gs.targetSealedCount || 5;
    const maxLost = isDuo ? 11 - targetSealed : 5;
    const badgeText = isVictory ? (isDuo ? t.victoryDuo : bt.victoryHunters) : isDuo ? t.defeatDuo : bt.victoryGhost;
    const titleText = isVictory ? (isDuo ? t.duoWonTitle : bt.ghostBanished) : isDuo ? t.duoLostTitle : bt.huntersLost;
    const descText = isVictory ? (isDuo ? bt.duoVictoryDesc : bt.victoryDesc) : isDuo ? bt.duoDefeatDesc : bt.defeatDesc;

    return (
      '<div class="modal-overlay" role="dialog" aria-modal="true"><div class="modal-panel sm"><div class="modal-body text-center stack-md" style="padding:1.5rem">' +
      '<div style="width:4.4rem;height:4.4rem;margin:0 auto;border-radius:999px;display:flex;align-items:center;justify-content:center;border:2px solid ' +
      (isVictory ? 'var(--border-emerald);background:var(--bg-emerald-soft);color:var(--text-emerald)' : 'var(--border-red);background:var(--bg-red-soft);color:var(--text-red)') +
      '">' + ico(isVictory ? 'trophy' : 'skull', 'xl') + '</div>' +
      '<div><span class="badge muted">' + esc(badgeText) + '</span></div>' +
      '<h2 style="font-size:1.5rem">' + esc(titleText) + '</h2>' +
      '<p class="text-sm text-muted">' + esc(descText) + '</p>' +
      '<div class="box stack-sm" style="text-align:left">' +
      '<div class="row-between text-xs"><span class="text-muted">' + esc(t.roundsPlayed) + '</span><strong class="text-accent tabular-nums">' + gs.currentRound + '</strong></div>' +
      '<div class="row-between text-xs"><span class="text-muted">' + esc(bt.sealed) + ':</span><strong class="text-emerald tabular-nums">' + gs.sealedCount + ' / ' + targetSealed + '</strong></div>' +
      '<div class="row-between text-xs"><span class="text-muted">' + esc(bt.lost) + ':</span><strong class="text-red tabular-nums">' + gs.lostCount + ' / ' + maxLost + '</strong></div>' +
      '</div>' +
      '<div class="stack-sm">' +
      '<button type="button" class="btn btn-primary btn-full" data-act="restart-game">' + ico('rotate', 'sm') + '<span>' + esc(t.newGame) + '</span></button>' +
      (gs.roundHistory.length > 0
        ? '<button type="button" class="btn btn-secondary btn-full btn-sm" data-act="open-history">' + ico('history', 'sm') + '<span>' + esc(t.roundHistoryTitle) + ' (' + gs.roundHistory.length + ')</span></button>'
        : '') +
      '</div></div></div></div>'
    );
  }

  // =========================================================================
  // Modals: Settings, Rules, History, Packs, Confirmations
  // =========================================================================
  function renderModal() {
    if (!app.modal) return '';
    const t = T();

    if (app.modal === 'settings') {
      const wakeSupported = 'wakeLock' in navigator;
      const fonts = [
        { id: 'sans', label: t.fontSans },
        { id: 'system', label: t.fontSystem },
        { id: 'rounded', label: t.fontRounded },
        { id: 'serif', label: t.fontSerif },
      ];
      const sizes = [
        { id: 'sm', label: t.fontSizeSm },
        { id: 'md', label: t.fontSizeMd },
        { id: 'lg', label: t.fontSizeLg },
        { id: 'xl', label: t.fontSizeXl },
      ];
      const styles = [
        { id: 'atmospheric', label: t.styleAtmospheric },
        { id: 'minimalist', label: t.styleMinimalist },
        { id: 'classic', label: t.styleClassic },
      ];

      return (
        '<div class="modal-overlay" data-act="modal-backdrop" role="dialog" aria-modal="true" aria-label="' + esc(t.settings) + '">' +
        '<div class="modal-panel sm">' +
        '<div class="modal-header">' +
        '<div class="row bold">' + ico('settings', 'sm') + '<span>' + esc(t.settings) + '</span></div>' +
        '<button type="button" class="icon-btn" data-act="close-modal" aria-label="' + esc(t.close) + '">' + ico('close', 'sm') + '</button>' +
        '</div>' +
        '<div class="modal-body stack-md">' +

        // Language
        '<div><span class="section-label">' + esc(t.languageLabel) + '</span>' +
        '<div class="grid-2">' +
        '<button type="button" class="btn btn-sm ' + (app.lang === 'ru' ? 'btn-primary' : 'btn-secondary') + '" data-act="set-lang" data-val="ru">Русский</button>' +
        '<button type="button" class="btn btn-sm ' + (app.lang === 'en' ? 'btn-primary' : 'btn-secondary') + '" data-act="set-lang" data-val="en">English</button>' +
        '</div></div>' +

        // Theme
        '<div><span class="section-label">' + esc(t.themeLabel) + '</span>' +
        '<div class="grid-2">' +
        '<button type="button" class="btn btn-sm ' + (app.themeMode === 'dark' ? 'btn-primary' : 'btn-secondary') + '" data-act="set-theme" data-val="dark">' + ico('moon', 'sm') + '<span>' + esc(t.themeDark) + '</span></button>' +
        '<button type="button" class="btn btn-sm ' + (app.themeMode === 'light' ? 'btn-primary' : 'btn-secondary') + '" data-act="set-theme" data-val="light">' + ico('sun', 'sm') + '<span>' + esc(t.themeLight) + '</span></button>' +
        '</div></div>' +

        // UI Style
        '<div><span class="section-label">' + esc(t.uiStyleLabel) + '</span>' +
        '<div class="grid-3">' +
        styles
          .map(
            (st) =>
              '<button type="button" class="btn btn-sm ' +
              (app.uiStyle === st.id ? 'btn-primary' : 'btn-secondary') +
              '" data-act="set-style" data-val="' + st.id + '">' + esc(st.label) + '</button>'
          )
          .join('') +
        '</div></div>' +

        // Font Family
        '<div><span class="section-label">' + esc(t.fontFamilyLabel) + '</span>' +
        '<div class="grid-2">' +
        fonts
          .map(
            (f) =>
              '<button type="button" class="btn btn-sm ' +
              (app.fontFamily === f.id ? 'btn-primary' : 'btn-secondary') +
              '" data-act="set-font" data-val="' + f.id + '">' + esc(f.label) + '</button>'
          )
          .join('') +
        '</div></div>' +

        // Font Size
        '<div><span class="section-label">' + esc(t.fontSizeLabel) + '</span>' +
        '<div class="grid-4">' +
        sizes
          .map(
            (sz) =>
              '<button type="button" class="btn btn-sm ' +
              (app.fontSize === sz.id ? 'btn-primary' : 'btn-secondary') +
              '" data-act="set-font-size" data-val="' + sz.id + '">' + esc(sz.label) + '</button>'
          )
          .join('') +
        '</div></div>' +

        // Toggles: Sound, Haptics, Keep Awake
        '<div class="stack-sm" style="padding-top:0.65rem;border-top:1px solid var(--border-card)">' +
        '<button type="button" class="choice-card row-between" data-act="toggle-mute">' +
        '<span class="text-sm bold">' + esc(t.soundEffects) + '</span>' +
        '<span class="badge ' + (!sound.muted ? 'emerald' : 'muted') + '">' + esc(!sound.muted ? t.on : t.off) + '</span>' +
        '</button>' +
        '<button type="button" class="choice-card row-between" data-act="toggle-haptics">' +
        '<span class="text-sm bold">' + esc(t.hapticsLabel) + '</span>' +
        '<span class="badge ' + (haptics.enabled ? 'emerald' : 'muted') + '">' + esc(haptics.enabled ? t.on : t.off) + '</span>' +
        '</button>' +
        '<button type="button" class="choice-card row-between" data-act="toggle-wakelock"' + (!wakeSupported ? ' disabled' : '') + '>' +
        '<span class="text-sm bold">' + esc(t.keepAwakeLabel) + '</span>' +
        '<span class="badge ' + (!wakeSupported ? 'muted' : app.keepAwake ? 'emerald' : 'muted') + '">' +
        esc(!wakeSupported ? t.keepAwakeUnsupported : app.keepAwake ? t.on : t.off) +
        '</span></button>' +
        '</div>' +

        renderPWAInstallCard() +

        // Clear Cache
        '<div style="padding-top:0.65rem;border-top:1px solid var(--border-card)">' +
        '<button type="button" class="btn btn-sm btn-secondary btn-full text-red" data-act="open-clear-cache">' +
        ico('trash', 'sm') + '<span>' + esc(t.clearCacheButton) + '</span></button>' +
        '</div>' +
        '</div></div></div>'
      );
    }

    if (app.modal === 'homeConfirm') {
      return (
        '<div class="modal-overlay" data-act="modal-backdrop" role="dialog" aria-modal="true"><div class="modal-panel sm"><div class="modal-body text-center stack-md" style="padding:1.4rem">' +
        '<h3>' + esc(t.exitConfirmTitle) + '</h3>' +
        '<p class="text-sm text-muted">' + esc(t.exitConfirmText) + '</p>' +
        '<div class="row">' +
        '<button type="button" class="btn btn-secondary flex-1" data-act="close-modal">' + esc(t.cancel) + '</button>' +
        '<button type="button" class="btn btn-red flex-1" data-act="confirm-home">' + esc(t.exit) + '</button>' +
        '</div></div></div></div>'
      );
    }

    if (app.modal === 'clearCacheConfirm') {
      return (
        '<div class="modal-overlay" data-act="modal-backdrop" role="dialog" aria-modal="true"><div class="modal-panel sm"><div class="modal-body text-center stack-md" style="padding:1.4rem">' +
        '<h3>' + esc(t.clearCacheTitle) + '</h3>' +
        '<p class="text-sm text-muted">' + esc(t.clearCacheText) + '</p>' +
        '<div class="row">' +
        '<button type="button" class="btn btn-secondary flex-1" data-act="close-modal">' + esc(t.cancel) + '</button>' +
        '<button type="button" class="btn btn-red flex-1" data-act="confirm-clear-cache">' + esc(t.clearCacheConfirm) + '</button>' +
        '</div></div></div></div>'
      );
    }

    if (app.modal === 'iosInstall') {
      return (
        '<div class="modal-overlay" data-act="modal-backdrop" role="dialog" aria-modal="true"><div class="modal-panel sm">' +
        '<div class="modal-header"><span class="bold">' + esc(t.iosInstallTitle) + '</span>' +
        '<button type="button" class="icon-btn" data-act="close-modal">' + ico('close', 'sm') + '</button></div>' +
        '<div class="modal-body stack-md">' +
        '<ol class="text-sm stack-sm" style="padding-left:1.25rem;margin:0">' +
        '<li>' + esc(t.iosInstallStep1) + '</li><li>' + esc(t.iosInstallStep2) + '</li></ol>' +
        '<button type="button" class="btn btn-primary btn-full" data-act="close-modal">' + esc(t.close) + '</button>' +
        '</div></div></div>'
      );
    }

    if (app.modal === 'violationConfirm') {
      return (
        '<div class="modal-overlay" data-act="modal-backdrop" role="dialog" aria-modal="true"><div class="modal-panel sm"><div class="modal-body text-center stack-md" style="padding:1.4rem">' +
        '<h3>' + esc(t.tgViolationConfirmTitle) + '</h3>' +
        '<p class="text-sm text-muted">' + esc(t.tgViolationConfirmText) + '</p>' +
        '<div class="row">' +
        '<button type="button" class="btn btn-secondary flex-1" data-act="close-modal">' + esc(t.cancel) + '</button>' +
        '<button type="button" class="btn btn-red flex-1" data-act="confirm-violation">' + esc(t.tgViolationConfirmProceed) + '</button>' +
        '</div></div></div></div>'
      );
    }

    if (app.modal === 'huntConfirm' && app.gameState && app.gameState.huntProgress) {
      const gs = app.gameState;
      const bt = getBoxTerms(gs.version);
      const room = gs.rooms.find((r) => r.id === gs.huntProgress.selectedRoomId);
      if (!room) return '';
      const isFog = gs.foggedRoomId === room.id;
      const artObj = getArtifactObj(gs, room.artifactId);
      const decoyCard = gs.huntProgress.selectedDecoyClueId
        ? gs.revealedClues.find((c) => c.id === gs.huntProgress.selectedDecoyClueId)
        : null;
      return (
        '<div class="modal-overlay" data-act="modal-backdrop" role="dialog" aria-modal="true"><div class="modal-panel sm"><div class="modal-body text-center stack-md" style="padding:1.4rem">' +
        '<h3>' + esc(bt.confirmHuntTitle) + '</h3>' +
        '<div class="box accent stack-sm">' +
        '<div class="bold" style="font-size:1.15rem;text-transform:uppercase">' + esc(getRoomName(room, gs.difficulty)) + '</div>' +
        (!isFog ? '<div class="text-xs text-muted">' + artifactBadge(room.artifactId, artObj && artObj.symbol) + ' ' + esc(getArtifactName(room.artifactId, gs)) + '</div>' : '') +
        (decoyCard ? '<div class="text-xs text-purple bold">№9: «' + esc(getClueLabel(decoyCard)) + '»</div>' : '') +
        '</div>' +
        '<p class="text-xs text-muted">' + esc(bt.confirmHuntText) + '</p>' +
        '<div class="row">' +
        '<button type="button" class="btn btn-secondary flex-1" data-act="close-modal">' + esc(t.cancel) + '</button>' +
        '<button type="button" class="btn btn-primary flex-1" data-act="hunt-confirm-guess">' + esc(t.confirmHuntProceed) + '</button>' +
        '</div></div></div></div>'
      );
    }

    if (app.modal === 'rules') {
      const tab = app.rulesTab;
      let body = '';
      if (tab === 'secrets') {
        body =
          '<div class="stack-md text-sm">' +
          '<div class="box red"><div class="bold text-red" style="margin-bottom:0.3rem">' + esc(t.secretsGoalTitle) + '</div><p class="text-xs">' + esc(t.secretsGoalDesc) + '</p></div>' +
          '<div class="stack-sm"><div class="bold text-accent">' + esc(t.secretsPhasesTitle) + '</div>' +
          '<p class="text-xs text-muted">' + esc(t.secretsPhase1Rule) + '</p>' +
          '<p class="text-xs text-muted">' + esc(t.secretsPhase2Rule) + '</p>' +
          '<p class="text-xs text-muted">' + esc(t.secretsPhase3Rule) + '</p></div>' +
          '<div class="box"><div class="bold text-accent" style="margin-bottom:0.2rem">' + esc(t.secretsHooksRuleTitle) + '</div><p class="text-xs text-muted">' + esc(t.secretsHooksRuleDesc) + '</p></div>' +
          '<div class="box accent text-xs">' + esc(t.secretsCrossBoxRule) + '</div>' +
          '</div>';
      } else if (tab === 'telegrams' && SECRETS) {
        body =
          '<div class="grid-responsive-2">' +
          SECRETS.SECRETS_TELEGRAMS.map((tg) => {
            const title = app.lang === 'ru' ? tg.nameRu : tg.nameEn;
            const desc = app.lang === 'ru' ? tg.textRu : tg.textEn;
            const note = app.lang === 'ru' ? tg.noteRu : tg.noteEn;
            return (
              '<div class="box stack-sm">' +
              '<div class="text-xs bold"><span class="text-red mono">№' + tg.number + '</span> ' + esc(title) + '</div>' +
              '<p class="text-xs text-muted">' + esc(desc) + '</p>' +
              (note ? '<p class="text-xs text-muted" style="font-style:italic;opacity:0.8">' + esc(note) + '</p>' : '') +
              '</div>'
            );
          }).join('') +
          '</div>';
      } else if (tab === 'rules') {
        body =
          '<div class="stack-md text-sm">' +
          '<div class="box accent"><div class="bold text-accent" style="margin-bottom:0.3rem">' + esc(t.goalTitle) + '</div><p class="text-xs">' + esc(t.goalDesc) + '</p></div>' +
          '<div><div class="bold text-accent">' + esc(t.phase1Title) + '</div><p class="text-xs text-muted" style="margin-top:0.2rem">' + esc(t.phase1Desc) + '</p></div>' +
          '<div><div class="bold text-accent">' + esc(t.phase2Title) + '</div><p class="text-xs text-muted" style="margin-top:0.2rem">' + esc(t.phase2Desc) + '</p></div>' +
          '<div><div class="bold text-accent">' + esc(t.phase3Title) + '</div><p class="text-xs text-muted" style="margin-top:0.2rem">' + esc(t.phase3Desc) + '</p></div>' +
          '</div>';
      } else if (tab === 'components') {
        body =
          '<div class="stack-sm"><div class="bold text-accent">' + esc(t.componentsTitle) + '</div>' +
          '<div class="grid-responsive-2">' +
          [
            [t.comp1Title, t.comp1Desc],
            [t.comp2Title, t.comp2Desc],
            [t.comp3Title, t.comp3Desc],
            [t.comp4Title, t.comp4Desc],
          ]
            .map(
              ([h, d]) =>
                '<div class="box"><div class="text-xs bold text-accent" style="text-transform:uppercase;margin-bottom:0.2rem">' +
                esc(h) + '</div><p class="text-xs text-muted">' + esc(d) + '</p></div>'
            )
            .join('') +
          '</div></div>';
      } else if (tab === 'duo') {
        body =
          '<div class="stack-md text-sm"><div class="bold text-accent">' + esc(t.duoTitle) + '</div>' +
          '<p class="text-xs text-muted">' + esc(t.duoText) + '</p>' +
          '<div class="box accent text-xs bold">' + esc(t.duoBox) + '</div></div>';
      } else if (tab === 'modifiers') {
        body =
          '<div class="stack-md text-sm">' +
          '<div class="stack-sm"><div class="bold text-accent">' + esc(t.artifactCatRulesTitle) + '</div>' +
          '<div class="grid-responsive-2">' +
          [
            [t.artCatOccult, t.artCatOccultRule, 'purple'],
            [t.artCatArchive, t.artCatArchiveRule, 'accent'],
            [t.artCatTool, t.artCatToolRule, 'sky'],
            [t.artCatEerie, t.artCatEerieRule, 'red'],
          ]
            .map(
              ([h, d, tone]) =>
                '<div class="box ' + tone + '"><div class="text-xs bold" style="text-transform:uppercase;margin-bottom:0.2rem">' +
                esc(h) + '</div><p class="text-xs text-muted">' + esc(d) + '</p></div>'
            )
            .join('') +
          '</div></div>' +
          '<div class="stack-sm"><div class="bold text-accent">' + esc(t.roomTraitsRulesTitle) + '</div>' +
          '<div class="grid-responsive-2">' +
          [
            [t.roomTraitPillar, t.roomTraitPillarRule, 'red'],
            [t.roomTraitQuiet, t.roomTraitQuietRule, 'emerald'],
            [t.roomTraitEcho, t.roomTraitEchoRule, 'purple'],
            [t.roomTraitArchive, t.roomTraitArchiveRule, 'accent'],
          ]
            .map(
              ([h, d, tone]) =>
                '<div class="box ' + tone + '"><div class="text-xs bold" style="text-transform:uppercase;margin-bottom:0.2rem">' +
                esc(h) + '</div><p class="text-xs text-muted">' + esc(d) + '</p></div>'
            )
            .join('') +
          '</div></div>' +
          '<div class="stack-sm"><div class="bold text-accent">' + esc(t.riskCatchUpRulesTitle) + '</div>' +
          '<div class="grid-responsive-2">' +
          [
            [t.riskActionsLabel.split(' (')[0], t.riskRuleDesc],
            [t.catchUpLabel.split(' (')[0], t.catchUpRuleDesc],
          ]
            .map(
              ([h, d]) =>
                '<div class="box"><div class="text-xs bold text-accent" style="text-transform:uppercase;margin-bottom:0.2rem">' +
                esc(h) + '</div><p class="text-xs text-muted">' + esc(d) + '</p></div>'
            )
            .join('') +
          '</div></div>' +
          '<div class="stack-sm"><div class="bold text-accent">' + esc(t.wingCursesRulesTitle) + '</div>' +
          '<div class="grid-responsive-2">' +
          [
            [t.wingCurseOccultTitle, t.curseRuleOccultDesc, 'purple'],
            [t.wingCurseMedicalTitle, t.curseRuleMedicalDesc, 'red'],
            [t.wingCurseForgottenTitle, t.curseRuleForgottenDesc, 'accent'],
            [t.wingCurseGroundsTitle, t.curseRuleGroundsDesc, 'sky'],
          ]
            .map(
              ([h, d, tone]) =>
                '<div class="box ' + tone + '"><div class="text-xs bold" style="text-transform:uppercase;margin-bottom:0.2rem">' +
                esc(h) + '</div><p class="text-xs text-muted">' + esc(d) + '</p></div>'
            )
            .join('') +
          '</div></div>' +
          '<div class="stack-sm"><div class="bold text-accent">' + esc(t.modifiersRulesTitle) + '</div>' +
          '<div class="grid-responsive-2">' +
          [
            [t.modRuleMixedTitle, t.modRuleMixedDesc],
            [t.modRuleInsightTitle, t.modRuleInsightDesc],
            [t.modRuleIllusionTitle, t.modRuleIllusionDesc],
            [t.modRuleBlitzTitle, t.modRuleBlitzDesc],
          ]
            .map(
              ([h, d]) =>
                '<div class="box"><div class="text-xs bold text-accent" style="text-transform:uppercase;margin-bottom:0.2rem">' +
                esc(h) + '</div><p class="text-xs text-muted">' + esc(d) + '</p></div>'
            )
            .join('') +
          '</div></div></div>';
      } else {
        body =
          '<div class="stack-sm text-sm"><div class="bold text-accent">' + esc(t.tipsTitle) + '</div>' +
          '<ul class="text-xs text-muted stack-sm" style="padding-left:1.2rem;margin:0">' +
          '<li>' + esc(t.tip1) + '</li><li>' + esc(t.tip2) + '</li><li>' + esc(t.tip3) + '</li></ul></div>';
      }
      const ruleTabs = [
        ['rules', t.tabRules],
        ['secrets', t.tabSecretsRules],
        ['telegrams', t.tabTelegramsList],
        ['components', t.tabComponents],
        ['duo', t.tabDuo],
        ['modifiers', t.tabModifiers],
        ['tips', t.tabTips],
      ];
      return (
        '<div class="modal-overlay" data-act="modal-backdrop" role="dialog" aria-modal="true" aria-label="' + esc(t.rulebookTitle) + '">' +
        '<div class="modal-panel lg">' +
        '<div class="modal-header">' +
        '<div><div class="bold">' + esc(t.rulebookTitle) + '</div><div class="text-xs text-muted">' + esc(t.rulebookSubtitle) + '</div></div>' +
        '<button type="button" class="icon-btn" data-act="close-modal">' + ico('close', 'sm') + '</button>' +
        '</div>' +
        '<div class="rule-tabs">' +
        ruleTabs
          .map(
            ([id, lbl]) =>
              '<button type="button" class="rule-tab' + (tab === id ? ' active' : '') + '" data-act="rules-tab" data-val="' + id + '">' + esc(lbl) + '</button>'
          )
          .join('') +
        '</div>' +
        '<div class="modal-body">' + body + '</div>' +
        '<div class="modal-footer"><button type="button" class="btn btn-sm btn-primary" data-act="close-modal">' + esc(t.close) + '</button></div>' +
        '</div></div>'
      );
    }

    if (app.modal === 'history' && app.gameState) {
      const gs = app.gameState;
      const bt = getBoxTerms(gs.version);
      const entries = gs.roundHistory.slice().reverse();
      return (
        '<div class="modal-overlay" data-act="modal-backdrop" role="dialog" aria-modal="true" aria-label="' + esc(t.roundHistoryTitle) + '">' +
        '<div class="modal-panel lg">' +
        '<div class="modal-header">' +
        '<div><div class="bold">' + esc(t.roundHistoryTitle) + '</div><div class="text-xs text-muted">' + esc(t.roundsPlayed) + ' ' + gs.roundHistory.length + '</div></div>' +
        '<button type="button" class="icon-btn" data-act="close-modal">' + ico('close', 'sm') + '</button>' +
        '</div>' +
        '<div class="modal-body stack-md">' +
        (entries.length === 0
          ? '<p class="text-sm text-muted text-center" style="padding:2rem 0">' + esc(t.roundHistoryEmpty) + '</p>'
          : entries
              .map((en) => {
                const targetR = gs.rooms.find((r) => r.id === en.targetRoomId);
                const guessedR = gs.rooms.find((r) => r.id === en.guessedRoomId);
                const targetArt = targetR ? getArtifactObj(gs, targetR.artifactId) : null;
                const guessedArt = guessedR ? getArtifactObj(gs, guessedR.artifactId) : null;
                const extraSet = new Set((en.extraClues || []).map((c) => c.id));
                const tgNums = Array.isArray(en.telegramNumbers) ? en.telegramNumbers : [];
                return (
                  '<div class="box ' + (en.isCorrect ? 'emerald' : 'red') + ' stack-sm">' +
                  '<div class="row-between">' +
                  '<span class="row-wrap"><span class="text-xs bold" style="text-transform:uppercase">' + esc(t.round) + ' ' + en.round + '</span>' +
                  tgNums.map((n) => '<span class="badge red mono">№' + n + '</span>').join('') +
                  (en.violationTriggered ? '<span class="badge red">!</span>' : '') +
                  '</span>' +
                  '<span class="badge ' + (en.isCorrect ? 'emerald' : 'red') + '">' + esc(en.isCorrect ? bt.sealed : bt.lost) + '</span>' +
                  '</div>' +
                  '<div class="row-wrap">' +
                  en.revealedClues
                    .map((c) => {
                      const isExtra = extraSet.has(c.id);
                      const tag = isExtra ? (gs.mode === 'duo' ? t.spiritCardTag : bt.ghostCardTag) : bt.mediumCardTag;
                      return '<span class="chip' + (isExtra ? ' purple' : '') + '">' + esc(getClueLabel(c)) + ' <small style="opacity:0.75">(' + esc(tag) + ')</small></span>';
                    })
                    .join('') +
                  (en.stolenClue
                    ? '<span class="chip purple" style="text-decoration:line-through;opacity:0.8">' + esc(getClueLabel(en.stolenClue)) + ' (№3)</span>'
                    : '') +
                  '</div>' +
                  '<div class="text-xs stack-sm" style="padding-top:0.4rem;border-top:1px solid var(--border-card)">' +
                  '<div class="row-between" style="flex-wrap:wrap"><span class="text-muted">' + esc(bt.secretWas) + '</span>' +
                  '<strong class="row">' +
                  esc(targetR ? getRoomName(targetR, gs.difficulty) : en.targetRoomId) +
                  (targetR ? ' <span class="text-muted" style="font-weight:500">(' + artifactBadge(targetR.artifactId, targetArt && targetArt.symbol) + ' ' + esc(getArtifactName(targetR.artifactId, gs)) + ')</span>' : '') +
                  '</strong></div>' +
                  (!en.isCorrect && !en.violationTriggered
                    ? '<div class="row-between" style="flex-wrap:wrap"><span class="text-muted">' + esc(bt.hunterPicked) + '</span>' +
                      '<strong class="row text-red">' +
                      esc(guessedR ? getRoomName(guessedR, gs.difficulty) : en.guessedRoomId) +
                      (guessedR ? ' <span class="text-muted" style="font-weight:500">(' + artifactBadge(guessedR.artifactId, guessedArt && guessedArt.symbol) + ' ' + esc(getArtifactName(guessedR.artifactId, gs)) + ')</span>' : '') +
                      '</strong></div>'
                    : '') +
                  '</div></div>'
                );
              })
              .join('')) +
        '</div>' +
        '<div class="modal-footer"><button type="button" class="btn btn-sm btn-primary" data-act="close-modal">' + esc(t.close) + '</button></div>' +
        '</div></div>'
      );
    }

    if (app.modal === 'packs' && app.packsDraft) {
      return renderPacksModal();
    }

    return '';
  }

  function openPacksModal() {
    const pc = getActivePackConfig();
    const profile = getActiveSetup();
    app.packsDraft = {
      tab: 'packs',
      selectedPacks: pc.selectedPackIds.slice(),
      selectedWordPacks:
        pc.selectedWordPackIds && pc.selectedWordPackIds.length > 0
          ? pc.selectedWordPackIds.slice()
          : pc.selectedPackIds.slice(),
      guaranteedPacks: (pc.guaranteedPackIds || []).slice(),
      disabledRooms: pc.disabledRoomIds.slice(),
      disabledArtifacts: pc.disabledArtifactIds.slice(),
      difficulty: profile.difficulty,
      modifiers: Object.assign({}, profile.modifiers),
      appliedScenario: false,
      wordFilter: 'all',
      wordSearch: '',
      itemFilter: 'active',
    };
    app.modal = 'packs';
    render();
  }

  function renderPacksModal() {
    const t = T();
    const d = app.packsDraft;
    const isSecrets = app.setup.version === 'secrets';
    const stats = getPackWordStats();
    const fullPacks = DATA.THEMATIC_PACKS.filter((p) => p.packType === 'full');
    const wordPacks = DATA.THEMATIC_PACKS.filter((p) => (stats.counts[p.id] || 0) > 0);

    const roomsCount = DATA.ALL_ROOMS.filter(
      (r) => d.selectedPacks.includes(r.packId) && !d.disabledRooms.includes(r.id)
    ).length;
    const artsCount = DATA.ALL_ARTIFACTS.filter(
      (a) => d.selectedPacks.includes(a.packId) && !d.disabledArtifacts.includes(a.id)
    ).length;
    const wordsCount = d.selectedWordPacks.reduce((sum, pid) => sum + (stats.counts[pid] || 0), 0);
    const isValid = roomsCount >= 10 && artsCount >= 10 && wordsCount >= 25;

    const roomsTabLabel = isSecrets ? t.locationsCount : t.roomsCount;
    const artsTabLabel = isSecrets ? t.hooksCount : t.artifactsTab;

    let tabHtml = '';
    if (d.tab === 'scenarios') {
      const sortedScenarios = DATA.GAME_SCENARIOS.slice().sort((a, b) => {
        const aSec = a.id.startsWith('secrets_') ? 1 : 0;
        const bSec = b.id.startsWith('secrets_') ? 1 : 0;
        return isSecrets ? bSec - aSec : aSec - bSec;
      });
      tabHtml =
        '<div class="stack-sm"><p class="text-xs text-muted">' + esc(t.scenariosSubtitle) + '</p>' +
        sortedScenarios.map((sc) => {
          const active = matchesScenario(sc, d.difficulty, {
            selectedPackIds: d.selectedPacks,
            selectedWordPackIds: d.selectedWordPacks,
            guaranteedPackIds: d.guaranteedPacks,
            disabledRoomIds: d.disabledRooms,
            disabledArtifactIds: d.disabledArtifacts,
          }, d.modifiers);
          const scWords = DATA.ALL_CLUES.filter((c) => sc.packConfig.selectedWordPackIds.includes(c.packId)).length;
          const scIsSecrets = sc.id.startsWith('secrets_');
          const diffBadge = sc.modifiers.mixedDifficulty
            ? (scIsSecrets ? t.secretsSideMixed : t.mixedDifficultyShort)
            : sc.difficulty === 'silver'
            ? (scIsSecrets ? t.secretsSideA : t.silver)
            : (scIsSecrets ? t.secretsSideB : t.gold);
          return (
            '<button type="button" class="choice-card' + (active ? ' active' : '') + '" data-act="pack-pick-scenario" data-id="' + esc(sc.id) + '">' +
            '<div class="row" style="align-items:flex-start">' +
            '<span class="checkbox-dot' + (active ? ' checked' : '') + '">' + (active ? '✓' : '') + '</span>' +
            '<div class="flex-1 stack-sm">' +
            '<div class="bold text-sm">' + esc(app.lang === 'ru' ? sc.titleRu : sc.titleEn) + '</div>' +
            '<p class="text-xs text-muted">' + esc(app.lang === 'ru' ? sc.descRu : sc.descEn) + '</p>' +
            '<div class="row-wrap">' +
            '<span class="badge muted">' + esc(diffBadge) + '</span>' +
            '<span class="badge muted">' + esc(t.wordsCount) + ': ' + scWords + '</span>' +
            (sc.modifiers.enableTelegrams ? '<span class="badge red">' + esc(t.tabTelegramsList) + '</span>' : '') +
            (sc.modifiers.enableWingCurses ? '<span class="badge">' + esc(t.wingCursesLabel.split(' / ')[0]) + '</span>' : '') +
            (sc.modifiers.mediumInsightEnabled ? '<span class="badge">' + esc(t.activateInsight) + '</span>' : '') +
            (sc.modifiers.ghostIllusionEnabled ? '<span class="badge purple">' + esc(t.ghostIllusionLabel.split(' (')[0]) + '</span>' : '') +
            (sc.modifiers.blitzTimer ? '<span class="badge red">' + esc(t.blitzBadge) + '</span>' : '') +
            '</div></div></div></button>'
          );
        }).join('') +
        '</div>';
    } else if (d.tab === 'packs') {
      const mansionPacks = fullPacks.filter((p) => !p.id.startsWith('pack-secrets'));
      const secretsPacks = fullPacks.filter((p) => p.id.startsWith('pack-secrets'));
      const groups = isSecrets
        ? [
            { title: t.boxGroupSecrets, badge: 'red', packs: secretsPacks },
            { title: t.boxGroupMansion, badge: '', packs: mansionPacks },
          ]
        : [
            { title: t.boxGroupMansion, badge: '', packs: mansionPacks },
            { title: t.boxGroupSecrets, badge: 'red', packs: secretsPacks },
          ];
      tabHtml =
        '<div class="stack-md">' +
        groups
          .filter((g) => g.packs.length > 0)
          .map(
            (g) =>
              '<div class="stack-sm">' +
              '<div class="row"><span class="badge ' + g.badge + '">' + esc(g.title) + '</span></div>' +
              g.packs
                .map((p) => {
                  const isSel = d.selectedPacks.includes(p.id);
                  const isPin = isSel && d.guaranteedPacks.includes(p.id);
                  const rC = DATA.ALL_ROOMS.filter((r) => r.packId === p.id).length;
                  const aC = DATA.ALL_ARTIFACTS.filter((a) => a.packId === p.id).length;
                  const wC = DATA.ALL_CLUES.filter((c) => c.packId === p.id).length;
                  const pIsSec = p.id.startsWith('pack-secrets');
                  const statParts = [];
                  if (rC > 0) statParts.push('<span>' + esc(pIsSec ? t.locationsCount : t.roomsCount) + ': ' + rC + '</span>');
                  if (aC > 0) statParts.push('<span>' + esc(pIsSec ? t.hooksCount : t.artifactsCount) + ': ' + aC + '</span>');
                  if (wC > 0) statParts.push('<span>' + esc(t.wordsCount) + ': ' + wC + '</span>');
                  return (
                    '<div class="choice-card' + (isSel ? ' active' : '') + '" data-act="pack-toggle" data-id="' + esc(p.id) + '" style="cursor:pointer">' +
                    '<div class="row" style="align-items:flex-start">' +
                    '<span class="checkbox-dot' + (isSel ? ' checked' : '') + '">' + (isSel ? '✓' : '') + '</span>' +
                    '<div class="flex-1 stack-sm">' +
                    '<div class="row-between">' +
                    '<span class="bold text-sm">' + esc(app.lang === 'ru' ? p.titleRu : p.titleEn) + '</span>' +
                    (isSel && rC > 0 && p.id !== 'pack-base'
                      ? '<button type="button" class="btn btn-sm ' + (isPin ? 'btn-primary' : 'btn-secondary') + '" data-act="pack-pin" data-id="' + esc(p.id) + '" style="padding:0.2rem 0.45rem;font-size:0.68rem">' +
                        ico('pin', 'sm') + '<span>' + esc(t.guaranteedWingToggle) + '</span></button>'
                      : '') +
                    '</div>' +
                    '<p class="text-xs text-muted">' + esc(app.lang === 'ru' ? p.descRu : p.descEn) + '</p>' +
                    '<div class="row-wrap text-xs text-muted tabular-nums">' +
                    statParts.join(' · ') +
                    '</div></div></div></div>'
                  );
                })
                .join('') +
              '</div>'
          )
          .join('') +
        '</div>';
    } else if (d.tab === 'words') {
      const safeTotalWords = wordPacks.reduce((sum, p) => sum + (p.isAdult ? 0 : stats.counts[p.id] || 0), 0);
      const filteredWordPacks = filterWordPacks(wordPacks, d.wordFilter || 'all', d.wordSearch || '');
      const filterTabs = [
        ['all', t.dictFilterAll],
        ['medium', t.dictFilterMedium],
        ['games', t.dictFilterGames],
        ['adult', t.dictFilterAdult],
      ];
      tabHtml =
        '<div class="stack-sm">' +
        '<div class="row">' +
        '<button type="button" class="btn btn-sm btn-secondary flex-1" data-act="pack-words-all">' + esc(t.dictQuickSafeAll) + ' (' + safeTotalWords + ')</button>' +
        '<button type="button" class="btn btn-sm btn-secondary flex-1" data-act="pack-words-sync">' + esc(t.syncWordsWithRooms) + '</button>' +
        '</div>' +
        '<div class="dict-filter-row">' +
        filterTabs
          .map(
            ([fv, fl]) =>
              '<button type="button" class="dict-filter-btn' +
              (fv === 'adult' ? ' adult' : '') +
              ((d.wordFilter || 'all') === fv ? ' active' : '') +
              '" data-act="pack-word-filter" data-val="' + fv + '">' + esc(fl) + '</button>'
          )
          .join('') +
        '</div>' +
        '<input type="search" class="dict-search-input" data-input="pack-word-search" value="' + esc(d.wordSearch || '') + '" placeholder="' + esc(t.dictSearchPlaceholder) + '" autocomplete="off" />' +
        '<div class="scroll-box scroll-box-words-modal"><div class="stack-sm">' +
        (filteredWordPacks.length === 0
          ? '<div class="text-xs text-muted text-center" style="padding:1.2rem 0">' + esc(t.dictNoResults) + '</div>'
          : filteredWordPacks
              .map((p) => {
                const isSel = d.selectedWordPacks.includes(p.id);
                const cnt = stats.counts[p.id] || 0;
                const preview = (stats.samples[p.id] || []).map((c) => getClueLabel(c)).join(', ');
                return (
                  '<button type="button" class="choice-card' + (isSel ? ' active' : '') + '" data-act="pack-toggle-words" data-id="' + esc(p.id) + '">' +
                  '<div class="row" style="align-items:flex-start">' +
                  '<span class="checkbox-dot' + (isSel ? ' checked' : '') + '">' + (isSel ? '✓' : '') + '</span>' +
                  '<div class="flex-1">' +
                  '<div class="row-between"><span class="row-wrap"><span class="bold text-sm">' + esc(app.lang === 'ru' ? p.titleRu : p.titleEn) + '</span>' +
                  (p.isAdult ? '<span class="badge adult">' + esc(t.dictAdultBadge) + '</span>' : '') +
                  (p.packType === 'words' && !p.isAdult ? '<span class="badge purple">' + esc(t.wordOnlyBadge) + '</span>' : '') +
                  '</span><span class="badge muted tabular-nums">+' + cnt + '</span></div>' +
                  '<p class="text-xs text-muted" style="margin-top:0.2rem">' + esc(app.lang === 'ru' ? p.descRu : p.descEn) + '</p>' +
                  '<p class="text-xs text-muted" style="font-style:italic;margin-top:0.2rem">' + esc(preview) + '…</p>' +
                  '</div></div></button>'
                );
              })
              .join('')) +
        '</div></div></div>';
    } else if (d.tab === 'rooms') {
      const itemFilter = d.itemFilter || 'active';
      const filterRow =
        '<div class="dict-filter-row" style="margin-bottom:0.5rem">' +
        [
          ['active', t.boxFilterActive],
          ['all', t.boxFilterAll],
          ['mansion', t.boxFilterMansion],
          ['secrets', t.boxFilterSecrets],
        ]
          .map(
            ([fv, fl]) =>
              '<button type="button" class="dict-filter-btn' +
              (itemFilter === fv ? ' active' : '') +
              '" data-act="pack-item-filter" data-val="' + fv + '">' + esc(fl) + '</button>'
          )
          .join('') +
        '</div>';
      const visibleRooms = DATA.ALL_ROOMS.filter((r) => {
        if (itemFilter === 'active') return d.selectedPacks.includes(r.packId);
        if (itemFilter === 'mansion') return !r.packId.startsWith('pack-secrets');
        if (itemFilter === 'secrets') return r.packId.startsWith('pack-secrets');
        return true;
      });
      tabHtml =
        filterRow +
        '<div class="grid-responsive-2">' +
        visibleRooms.map((r) => {
          const inPack = d.selectedPacks.includes(r.packId);
          const active = inPack && !d.disabledRooms.includes(r.id);
          const tr = DATA.ROOM_TRANSLATIONS[r.id];
          const sName = (tr && tr[app.lang].silver) || r.nameSilver;
          const gName = (tr && tr[app.lang].gold) || r.nameGold;
          const isSecRoom = r.packId.startsWith('pack-secrets');
          const lblA = isSecRoom ? t.sideAShort + (r.number ? ' ' + r.number : '') : t.silverShort;
          const lblB = isSecRoom ? t.sideBShort + (r.number ? ' ' + r.number : '') : t.goldShort;
          return (
            '<button type="button" class="choice-card' + (active ? ' active' : '') + '" data-act="pack-toggle-room" data-id="' + esc(r.id) + '"' + (!inPack ? ' disabled' : '') + '>' +
            '<div class="row-between">' +
            '<div class="flex-1"><div class="text-xs bold">' + esc(lblA) + ' · ' + esc(sName) + '</div>' +
            '<div class="text-xs text-accent">' + esc(lblB) + ' · ' + esc(gName) + '</div></div>' +
            '<span class="checkbox-dot' + (active ? ' checked' : '') + '">' + (active ? '✓' : '') + '</span>' +
            '</div></button>'
          );
        }).join('') +
        '</div>';
    } else {
      const itemFilter = d.itemFilter || 'active';
      const filterRow =
        '<div class="dict-filter-row" style="margin-bottom:0.5rem">' +
        [
          ['active', t.boxFilterActive],
          ['all', t.boxFilterAll],
          ['mansion', t.boxFilterMansion],
          ['secrets', t.boxFilterSecrets],
        ]
          .map(
            ([fv, fl]) =>
              '<button type="button" class="dict-filter-btn' +
              (itemFilter === fv ? ' active' : '') +
              '" data-act="pack-item-filter" data-val="' + fv + '">' + esc(fl) + '</button>'
          )
          .join('') +
        '</div>';
      const visibleArts = DATA.ALL_ARTIFACTS.filter((a) => {
        if (itemFilter === 'active') return d.selectedPacks.includes(a.packId);
        if (itemFilter === 'mansion') return !a.packId.startsWith('pack-secrets');
        if (itemFilter === 'secrets') return a.packId.startsWith('pack-secrets');
        return true;
      });
      tabHtml =
        filterRow +
        '<div class="grid-responsive-2">' +
        visibleArts.map((a) => {
          const inPack = d.selectedPacks.includes(a.packId);
          const active = inPack && !d.disabledArtifacts.includes(a.id);
          return (
            '<button type="button" class="choice-card' + (active ? ' active' : '') + '" data-act="pack-toggle-art" data-id="' + esc(a.id) + '"' + (!inPack ? ' disabled' : '') + '>' +
            '<div class="row-between">' +
            '<span class="row text-xs bold">' + artifactBadge(a.id, a.symbol) + '<span>' + esc(getArtifactName(a.id)) + '</span></span>' +
            '<span class="checkbox-dot' + (active ? ' checked' : '') + '">' + (active ? '✓' : '') + '</span>' +
            '</div></button>'
          );
        }).join('') +
        '</div>';
    }

    return (
      '<div class="modal-overlay" data-act="modal-backdrop" role="dialog" aria-modal="true" aria-label="' + esc(t.packsModalTitle) + '">' +
      '<div class="modal-panel lg">' +
      '<div class="modal-header">' +
      '<div><div class="bold">' + esc(t.packsModalTitle) + '</div><div class="text-xs text-muted">' + esc(t.packsModalSubtitle) + '</div></div>' +
      '<button type="button" class="icon-btn" data-act="close-modal">' + ico('close', 'sm') + '</button>' +
      '</div>' +
      '<div class="modal-body">' +
      '<div class="tabs-bar">' +
      '<button type="button" class="tab-btn span-3' + (d.tab === 'packs' ? ' active' : '') + '" data-act="pack-tab" data-val="packs">' + esc(t.packsShortTab) + ' (' + d.selectedPacks.length + ')</button>' +
      '<button type="button" class="tab-btn span-3' + (d.tab === 'scenarios' ? ' active' : '') + '" data-act="pack-tab" data-val="scenarios">' + esc(t.scenariosTab) + '</button>' +
      '<button type="button" class="tab-btn span-2' + (d.tab === 'words' ? ' active' : '') + '" data-act="pack-tab" data-val="words">' + esc(t.wordsCount) + ' (' + wordsCount + ')</button>' +
      '<button type="button" class="tab-btn span-2' + (d.tab === 'rooms' ? ' active' : '') + '" data-act="pack-tab" data-val="rooms">' + esc(roomsTabLabel) + ' (' + roomsCount + ')</button>' +
      '<button type="button" class="tab-btn span-2' + (d.tab === 'artifacts' ? ' active' : '') + '" data-act="pack-tab" data-val="artifacts">' + esc(artsTabLabel) + ' (' + artsCount + ')</button>' +
      '</div>' +
      tabHtml +
      '</div>' +
      '<div class="modal-footer" style="flex-direction:column;align-items:stretch">' +
      (!isValid ? '<div class="box red text-xs bold">' + esc(t.minWordsWarning) + '</div>' : '') +
      '<div class="row">' +
      '<button type="button" class="btn btn-secondary" data-act="close-modal">' + esc(t.cancel) + '</button>' +
      '<button type="button" class="btn btn-primary flex-1" data-act="pack-save"' + (!isValid ? ' disabled' : '') + '>' + ico('sparkles', 'sm') + '<span>' + esc(t.saveAndApply) + '</span></button>' +
      '</div></div></div></div>'
    );
  }

  // =========================================================================
  // Master Render & Privacy Hold Binding
  // =========================================================================
  function render() {
    applyDocumentPrefs();
    const root = document.getElementById('app');
    if (!root) return;

    let mainHtml = '';
    if (!app.gameState) {
      mainHtml = renderGameSetup();
    } else if (app.gameState.phase === 'setup') {
      mainHtml = renderGameBoard();
    } else if (app.gameState.phase === 'vision') {
      mainHtml = renderVisionPhase();
    } else if (app.gameState.phase === 'hunt') {
      mainHtml = renderHuntPhase();
    } else if (app.gameState.phase === 'respite') {
      mainHtml = renderRespitePhase();
    } else if (app.gameState.phase === 'gameover') {
      mainHtml = renderGameBoard() + renderGameOverOverlay();
    }

    const offlineHtml = !app.isOnline
      ? '<div class="offline-pill" role="status" aria-live="polite">' + ico('wifiOff', 'sm') + '<span>' + esc(T().offlineMode) + '</span></div>'
      : '';

    root.innerHTML =
      renderHeader() +
      '<main class="app-main">' +
      mainHtml +
      '</main>' +
      renderModal() +
      offlineHtml;

    const hasOverlay = Boolean(
      app.modal ||
        (app.gameState &&
          (app.gameState.phase === 'gameover' ||
            (app.gameState.phase === 'hunt' &&
              app.gameState.huntProgress &&
              app.gameState.huntProgress.resultRevealed) ||
            (app.gameState.phase === 'respite' &&
              app.gameState.pendingSpyTelegramChoice &&
              !app.spyRespiteUnlocked) ||
            (app.gameState.phase === 'vision' &&
              (app.gameState.visionStep === 'medium_privacy' ||
                app.gameState.visionStep === 'ghost_privacy'))))
    );
    document.body.style.overflow = hasOverlay ? 'hidden' : '';

    bindPrivacyHold();
  }

  let holdCleanup = null;
  function bindPrivacyHold() {
    if (holdCleanup) {
      holdCleanup();
      holdCleanup = null;
    }
    const btn = document.getElementById('privacy-hold-btn');
    if (!btn) return;
    const fill = document.getElementById('privacy-hold-fill');
    const label = document.getElementById('privacy-hold-label');
    const hint = document.getElementById('privacy-hold-hint');
    const targetStep = btn.getAttribute('data-unlock');
    const origLabel = label ? label.textContent : '';
    const HOLD_MS = 700;

    let rafId = null;
    let unlockTimer = null;
    let startAt = null;
    let done = false;

    function stopRaf() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function startHold() {
      if (done || startAt !== null) return;
      haptics.tap();
      startAt = performance.now();
      if (label) label.textContent = T().privacyHolding;
      if (hint) hint.textContent = T().privacyHoldHint;

      const tick = (now) => {
        if (startAt === null || done) return;
        const pct = Math.min(100, ((now - startAt) / HOLD_MS) * 100);
        if (fill) fill.style.width = pct + '%';
        if (pct >= 100) {
          done = true;
          stopRaf();
          sound.playUnlock();
          unlockTimer = setTimeout(() => {
            unlockTimer = null;
            if (targetStep === 'spy_respite') {
              app.spyRespiteUnlocked = true;
              render();
            } else if (app.gameState && app.gameState.phase === 'vision') {
              app.gameState.visionStep = targetStep;
              persistGameState();
              render();
            }
          }, 120);
        } else {
          rafId = requestAnimationFrame(tick);
        }
      };
      rafId = requestAnimationFrame(tick);
    }

    function cancelHold() {
      if (done || startAt === null) return;
      const elapsed = performance.now() - startAt;
      startAt = null;
      stopRaf();
      if (fill) fill.style.width = '0%';
      if (label) label.textContent = origLabel;
      if (elapsed < HOLD_MS && hint) {
        hint.textContent = T().privacyHoldReleaseHint;
      }
    }

    const onPtrDown = (e) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      try { btn.setPointerCapture(e.pointerId); } catch {}
      startHold();
    };
    const onKeyDown = (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.repeat) {
        e.preventDefault();
        startHold();
      }
    };
    const onKeyUp = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cancelHold();
      }
    };
    const onCtx = (e) => e.preventDefault();

    btn.addEventListener('pointerdown', onPtrDown);
    btn.addEventListener('pointerup', cancelHold);
    btn.addEventListener('pointercancel', cancelHold);
    btn.addEventListener('lostpointercapture', cancelHold);
    btn.addEventListener('keydown', onKeyDown);
    btn.addEventListener('keyup', onKeyUp);
    btn.addEventListener('contextmenu', onCtx);

    holdCleanup = () => {
      stopRaf();
      if (unlockTimer !== null) {
        clearTimeout(unlockTimer);
        unlockTimer = null;
      }
      btn.removeEventListener('pointerdown', onPtrDown);
      btn.removeEventListener('pointerup', cancelHold);
      btn.removeEventListener('pointercancel', cancelHold);
      btn.removeEventListener('lostpointercapture', cancelHold);
      btn.removeEventListener('keydown', onKeyDown);
      btn.removeEventListener('keyup', onKeyUp);
      btn.removeEventListener('contextmenu', onCtx);
    };
  }

  // =========================================================================
  // Event Delegation
  // =========================================================================
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el) return;
    const act = el.getAttribute('data-act');
    if (act === 'modal-backdrop' && e.target !== el) return;

    const val = el.getAttribute('data-val');
    const id = el.getAttribute('data-id');
    const key = el.getAttribute('data-key');
    const gs = app.gameState;

    switch (act) {
      case 'modal-backdrop':
      case 'close-modal':
        sound.playClick();
        app.modal = null;
        app.packsDraft = null;
        render();
        break;

      case 'open-settings':
        sound.playClick();
        app.modal = 'settings';
        render();
        break;

      case 'open-rules': {
        sound.playClick();
        const activeVer = (app.gameState && app.gameState.version) || app.setup.version;
        app.rulesTab = activeVer === 'secrets' ? 'secrets' : 'rules';
        app.modal = 'rules';
        render();
        break;
      }

      case 'rules-tab':
        sound.playClick();
        app.rulesTab = val;
        render();
        break;

      case 'open-history':
        sound.playClick();
        app.modal = 'history';
        render();
        break;

      case 'open-home-confirm':
        sound.playClick();
        app.modal = 'homeConfirm';
        render();
        break;

      case 'confirm-home':
        sound.playClick();
        app.modal = null;
        app.gameState = null;
        persistGameState();
        wakeLockMgr.sync();
        render();
        break;

      case 'restart-game':
        sound.playClick();
        app.gameState = null;
        persistGameState();
        wakeLockMgr.sync();
        render();
        break;

      case 'open-clear-cache':
        sound.playClick();
        app.modal = 'clearCacheConfirm';
        render();
        break;

      case 'confirm-clear-cache':
        sound.playClick();
        clearAppCacheIsolated();
        break;

      case 'toggle-ambient':
        sound.playClick();
        sound.toggleAmbient();
        render();
        break;

      case 'toggle-mute':
        sound.toggleMute();
        if (!sound.muted) sound.playClick();
        render();
        break;

      case 'toggle-haptics':
        haptics.toggle();
        sound.playClick(true);
        render();
        break;

      case 'toggle-wakelock':
        sound.playClick();
        app.keepAwake = !app.keepAwake;
        persistPrefs();
        wakeLockMgr.sync();
        render();
        break;

      case 'toggle-lang':
        sound.playClick();
        app.lang = app.lang === 'ru' ? 'en' : 'ru';
        persistPrefs();
        render();
        break;

      case 'set-lang':
        sound.playClick();
        app.lang = val === 'en' ? 'en' : 'ru';
        persistPrefs();
        render();
        break;

      case 'set-theme':
        sound.playClick();
        app.themeMode = val === 'light' ? 'light' : 'dark';
        persistPrefs();
        render();
        break;

      case 'set-style':
        sound.playClick();
        app.uiStyle = val;
        persistPrefs();
        render();
        break;

      case 'set-font':
        sound.playClick();
        app.fontFamily = val;
        persistPrefs();
        render();
        break;

      case 'set-font-size':
        sound.playClick();
        app.fontSize = val;
        persistPrefs();
        render();
        break;

      // Setup actions (unified per-box setup profile)
      case 'select-version':
        sound.playClick();
        app.setup.version = id === 'secrets' ? 'secrets' : 'mansion';
        app.setup.step = 'parameters';
        persistPrefs();
        render();
        break;

      case 'setup-back':
        sound.playClick();
        app.setup.step = 'version';
        persistPrefs();
        render();
        break;

      case 'set-mode':
        sound.playClick();
        getActiveSetup().mode = val === 'duo' ? 'duo' : 'standard';
        persistPrefs();
        render();
        break;

      case 'set-duo-target':
        sound.playSelect();
        getActiveSetup().duoTarget = Number(val);
        persistPrefs();
        render();
        break;

      case 'set-diff': {
        sound.playClick();
        const prof = getActiveSetup();
        if (val === 'mixed') {
          prof.modifiers.mixedDifficulty = true;
        } else {
          prof.difficulty = val === 'gold' ? 'gold' : 'silver';
          prof.modifiers.mixedDifficulty = false;
        }
        persistPrefs();
        render();
        break;
      }

      case 'apply-preset': {
        const pr = (DATA.RULE_PRESETS || []).find((x) => x.id === id);
        if (pr) {
          sound.playClick();
          haptics.select();
          getActiveSetup().modifiers = Object.assign({}, DATA.DEFAULT_MODIFIERS, pr.modifiers);
          persistPrefs();
          render();
        }
        break;
      }

      case 'toggle-mods':
        sound.playClick();
        app.setup.showModifiers = !app.setup.showModifiers;
        render();
        break;

      case 'toggle-mod': {
        sound.playClick(true);
        haptics.select();
        const prof = getActiveSetup();
        prof.modifiers[key] = !prof.modifiers[key];
        persistPrefs();
        render();
        break;
      }

      case 'open-packs':
        sound.playClick();
        openPacksModal();
        break;

      case 'start-game':
        startNewGame();
        break;

      // Packs modal actions
      case 'pack-tab':
        sound.playClick();
        if (app.packsDraft) app.packsDraft.tab = val;
        render();
        break;

      case 'pack-item-filter':
        if (app.packsDraft) {
          sound.playSelect();
          app.packsDraft.itemFilter = val || 'active';
          render();
        }
        break;

      case 'pack-pick-scenario': {
        const sc = DATA.GAME_SCENARIOS.find((x) => x.id === id);
        if (sc && app.packsDraft) {
          sound.playSelect();
          app.packsDraft.selectedPacks = sc.packConfig.selectedPackIds.slice();
          app.packsDraft.selectedWordPacks = sc.packConfig.selectedWordPackIds.slice();
          app.packsDraft.guaranteedPacks = (sc.packConfig.guaranteedPackIds || []).slice();
          app.packsDraft.disabledRooms = sc.packConfig.disabledRoomIds.slice();
          app.packsDraft.disabledArtifacts = sc.packConfig.disabledArtifactIds.slice();
          app.packsDraft.difficulty = sc.difficulty;
          app.packsDraft.modifiers = Object.assign({}, sc.modifiers);
          app.packsDraft.appliedScenario = true;
          render();
        }
        break;
      }

      case 'pack-pin':
        e.stopPropagation();
        if (app.packsDraft) {
          sound.playSelect();
          const gp = app.packsDraft.guaranteedPacks;
          app.packsDraft.guaranteedPacks = gp.includes(id)
            ? gp.filter((x) => x !== id)
            : gp.concat(id);
          render();
        }
        break;

      case 'pack-toggle':
        if (app.packsDraft) {
          sound.playSelect();
          const sp = app.packsDraft.selectedPacks;
          if (sp.includes(id)) {
            app.packsDraft.selectedPacks = sp.filter((x) => x !== id);
            app.packsDraft.guaranteedPacks = app.packsDraft.guaranteedPacks.filter((x) => x !== id);
          } else {
            app.packsDraft.selectedPacks = sp.concat(id);
          }
          render();
        }
        break;

      case 'pack-toggle-words':
        if (app.packsDraft) {
          sound.playSelect();
          const sw = app.packsDraft.selectedWordPacks;
          app.packsDraft.selectedWordPacks = sw.includes(id)
            ? sw.filter((x) => x !== id)
            : sw.concat(id);
          render();
        }
        break;

      case 'pack-word-filter':
        if (app.packsDraft) {
          sound.playSelect();
          app.packsDraft.wordFilter = val || 'all';
          render();
        }
        break;

      case 'pack-words-all':
        if (app.packsDraft) {
          sound.playClick();
          const stats = getPackWordStats();
          app.packsDraft.selectedWordPacks = DATA.THEMATIC_PACKS.filter(
            (p) => (stats.counts[p.id] || 0) > 0 && !p.isAdult
          ).map((p) => p.id);
          render();
        }
        break;

      case 'pack-words-sync':
        if (app.packsDraft) {
          sound.playClick();
          const stats = getPackWordStats();
          const synced = new Set();
          app.packsDraft.selectedPacks.forEach((pid) => {
            if (pid.startsWith('pack-secrets')) {
              synced.add('pack-secrets-words');
            } else if ((stats.counts[pid] || 0) > 0) {
              synced.add(pid);
            }
          });
          app.packsDraft.selectedWordPacks =
            synced.size > 0
              ? Array.from(synced)
              : [app.setup.version === 'secrets' ? 'pack-secrets-words' : 'pack-base'];
          render();
        }
        break;

      case 'pack-toggle-room':
        if (app.packsDraft) {
          sound.playSelect();
          const dr = app.packsDraft.disabledRooms;
          app.packsDraft.disabledRooms = dr.includes(id) ? dr.filter((x) => x !== id) : dr.concat(id);
          render();
        }
        break;

      case 'pack-toggle-art':
        if (app.packsDraft) {
          sound.playSelect();
          const da = app.packsDraft.disabledArtifacts;
          app.packsDraft.disabledArtifacts = da.includes(id)
            ? da.filter((x) => x !== id)
            : da.concat(id);
          render();
        }
        break;

      case 'pack-save':
        if (app.packsDraft) {
          sound.playClick();
          setActivePackConfig({
            selectedPackIds: app.packsDraft.selectedPacks.slice(),
            selectedWordPackIds: app.packsDraft.selectedWordPacks.slice(),
            disabledRoomIds: app.packsDraft.disabledRooms.slice(),
            disabledArtifactIds: app.packsDraft.disabledArtifacts.slice(),
            guaranteedPackIds: app.packsDraft.guaranteedPacks.filter((x) =>
              app.packsDraft.selectedPacks.includes(x)
            ),
          });
          if (app.packsDraft.appliedScenario) {
            const prof = getActiveSetup();
            prof.difficulty = app.packsDraft.difficulty;
            prof.modifiers = Object.assign({}, DATA.DEFAULT_MODIFIERS, app.packsDraft.modifiers);
            if (
              prof.modifiers.enableWingCurses ||
              prof.modifiers.mediumInsightEnabled ||
              prof.modifiers.ghostIllusionEnabled ||
              prof.modifiers.blitzTimer ||
              prof.modifiers.enableArtifactCategories ||
              prof.modifiers.enableRoomProperties ||
              prof.modifiers.enableRiskActions ||
              prof.modifiers.enableCatchUp ||
              prof.modifiers.enableTelegrams ||
              prof.modifiers.mixCrossBoxArtifacts
            ) {
              app.setup.showModifiers = true;
            }
          }
          app.modal = null;
          app.packsDraft = null;
          persistPrefs();
          render();
        }
        break;

      // Board & Vision actions
      case 'advance-vision':
        advanceToVision();
        break;

      case 'toggle-plan':
        sound.playClick();
        app.showMansionPlan = !app.showMansionPlan;
        render();
        break;

      case 'hide-to-medium':
        if (gs) {
          sound.playClick();
          gs.visionStep = 'medium_privacy';
          persistGameState();
          render();
        }
        break;

      case 'hide-to-ghost':
        if (gs) {
          sound.playClick();
          gs.visionStep = 'ghost_privacy';
          persistGameState();
          render();
        }
        break;

      case 'medium-insight':
        activateMediumInsight();
        break;

      case 'occult-trance':
        activateOccultTrance();
        break;

      case 'medium-swap-selected':
        swapMediumSelected();
        break;

      case 'medium-widen-channel':
        widenMediumChannel();
        break;

      case 'open-deck-cache':
        openDeckCache();
        break;

      case 'pick-cache-card':
        sound.playClick(true);
        haptics.select();
        app.selectedCacheCardId = id;
        render();
        break;

      case 'confirm-cache-swap':
        confirmDeckCacheSwap();
        break;

      case 'skip-deck-cache':
        skipDeckCache(false);
        break;

      case 'ghost-swap-selected':
        swapGhostSelected();
        break;

      case 'ghost-wall-collapse':
        triggerWallCollapse();
        break;

      case 'replenish-hands':
        replenishHands();
        break;

      case 'toggle-medium-clue':
        if (gs) {
          sound.playClick(true);
          haptics.select();
          app.visionWarning = null;
          const exists = gs.chosenClues.some((c) => c.id === id);
          if (exists) {
            gs.chosenClues = gs.chosenClues.filter((c) => c.id !== id);
          } else {
            const card = gs.mediumHand.find((c) => c.id === id);
            if (card) gs.chosenClues = gs.chosenClues.concat(card);
          }
          persistGameState();
          render();
        }
        break;

      case 'major-tg-swap':
        majorTelegramSwap();
        break;

      case 'dismiss-tg':
        resolveTelegramConflict(id);
        break;

      case 'pick-steal-clue':
        sound.playClick(true);
        haptics.select();
        app.stolenClueId = app.stolenClueId === id ? null : id;
        render();
        break;

      case 'finish-medium':
        if (gs) {
          if (gs.chosenClues.length === 0) {
            sound.playWarn();
            app.visionWarning = T().mediumSelectWarning;
            render();
            break;
          }
          if (Array.isArray(gs.activeDeckCache)) {
            skipDeckCache(true);
          }
          sound.playClick();
          app.visionWarning = null;
          app.stolenClueId = null;
          if (gs.mode === 'duo') {
            const spiritDraw = drawClueCards(gs.deckClues, gs.discardClues || [], 1);
            gs.deckClues = spiritDraw.nextDeck;
            gs.discardClues = spiritDraw.nextDiscard;
            completeVision(spiritDraw.drawn, false, null);
          } else {
            gs.visionStep = 'ghost_privacy';
            persistGameState();
            render();
          }
        }
        break;

      case 'toggle-illusion':
        if (gs) {
          sound.playClick();
          haptics.select();
          gs.ghostIllusionActive = !gs.ghostIllusionActive;
          gs.ghostChosenClues = gs.ghostChosenClues.slice(0, gs.ghostIllusionActive ? 2 : 1);
          persistGameState();
          render();
        }
        break;

      case 'toggle-ghost-clue':
        if (gs) {
          sound.playClick(true);
          haptics.select();
          app.visionWarning = null;
          const card = gs.ghostHand.find((c) => c.id === id);
          if (!card) break;
          const activeTgs = gs.activeTelegrams || [];
          const hasTg04 = activeTgs.some((x) => x.id === 'tg-04');
          const maxPick = hasTg04
            ? Math.max(1, Math.min(gs.chosenClues.length, gs.ghostHand.length))
            : gs.ghostIllusionActive
            ? 2
            : 1;
          if (maxPick === 1) {
            gs.ghostChosenClues = [card];
          } else if (gs.ghostChosenClues.some((c) => c.id === id)) {
            gs.ghostChosenClues = gs.ghostChosenClues.filter((c) => c.id !== id);
          } else if (gs.ghostChosenClues.length < maxPick) {
            gs.ghostChosenClues = gs.ghostChosenClues.concat(card);
          } else {
            gs.ghostChosenClues = gs.ghostChosenClues.slice(1).concat(card);
          }
          persistGameState();
          render();
        }
        break;

      case 'finish-ghost':
        if (gs) {
          const activeTgs = gs.activeTelegrams || [];
          const hasTg03 = activeTgs.some((x) => x.id === 'tg-03');
          const hasTg04 = activeTgs.some((x) => x.id === 'tg-04');
          const hasTg05 = activeTgs.some((x) => x.id === 'tg-05');
          const hasTg06 = activeTgs.some((x) => x.id === 'tg-06');

          if (hasTg03) {
            if (gs.chosenClues.length > 0 && !app.stolenClueId) {
              sound.playWarn();
              app.visionWarning = T().ghostSelectWarning;
              render();
              break;
            }
            sound.playClick();
            app.visionWarning = null;
            completeVision([], false, app.stolenClueId);
            break;
          }

          if (hasTg05 || hasTg06) {
            sound.playClick();
            app.visionWarning = null;
            const drawCount = hasTg05 ? 2 : 1;
            const deckDraw = drawClueCards(gs.deckClues, gs.discardClues || [], drawCount);
            gs.deckClues = deckDraw.nextDeck;
            gs.discardClues = deckDraw.nextDiscard;
            completeVision(deckDraw.drawn, false, null);
            break;
          }

          if (hasTg04) {
            const maxPick = Math.max(1, Math.min(gs.chosenClues.length, gs.ghostHand.length));
            if (gs.ghostHand.length > 0 && (gs.ghostChosenClues.length < 1 || gs.ghostChosenClues.length > maxPick)) {
              sound.playWarn();
              app.visionWarning = T().ghostSelectWarning;
              render();
              break;
            }
            sound.playClick();
            app.visionWarning = null;
            completeVision(gs.ghostChosenClues.slice(), false, null);
            break;
          }

          const req = gs.ghostHand.length === 0 ? 0 : gs.ghostIllusionActive ? 2 : 1;
          if (gs.ghostChosenClues.length !== req) {
            sound.playWarn();
            app.visionWarning = T().ghostSelectWarning;
            render();
            break;
          }
          sound.playClick();
          app.visionWarning = null;
          completeVision(
            gs.ghostChosenClues.slice(),
            gs.ghostIllusionActive && gs.ghostChosenClues.length === 2,
            null
          );
        }
        break;

      // Hunt actions
      case 'hunt-pick-room':
        if (gs && gs.huntProgress) {
          sound.playClick(true);
          haptics.select();
          gs.huntProgress.selectedRoomId = id;
          persistGameState();
          render();
        }
        break;

      case 'hunt-pick-decoy':
        if (gs && gs.huntProgress) {
          sound.playClick(true);
          haptics.select();
          gs.huntProgress.selectedDecoyClueId =
            gs.huntProgress.selectedDecoyClueId === id ? null : id;
          persistGameState();
          render();
        }
        break;

      case 'open-violation-confirm':
        sound.playClick();
        app.modal = 'violationConfirm';
        render();
        break;

      case 'confirm-violation':
        triggerTelegramViolation();
        break;

      case 'pick-unseal-room':
        sound.playClick(true);
        haptics.select();
        app.tg06UnsealRoomId = id;
        render();
        break;

      case 'hunt-toggle-timer':
        if (gs && gs.huntProgress) {
          sound.playClick();
          const hp = gs.huntProgress;
          const cur = computeHuntRemaining(hp);
          if (cur === 0) {
            hp.timerSeconds = hp.timerDuration;
            hp.timerRunning = true;
            hp.timerEndsAt = Date.now() + hp.timerDuration * 1000;
          } else if (hp.timerRunning) {
            hp.timerSeconds = cur;
            hp.timerRunning = false;
            hp.timerEndsAt = null;
          } else {
            hp.timerRunning = true;
            hp.timerEndsAt = Date.now() + hp.timerSeconds * 1000;
          }
          persistGameState();
          render();
        }
        break;

      case 'hunt-reset-timer':
        if (gs && gs.huntProgress) {
          sound.playClick();
          gs.huntProgress.timerSeconds = gs.huntProgress.timerDuration;
          gs.huntProgress.timerRunning = false;
          gs.huntProgress.timerEndsAt = null;
          persistGameState();
          render();
        }
        break;

      case 'hunt-preset':
        if (gs && gs.huntProgress) {
          sound.playClick();
          const sec = Number(val);
          app.timerPreset = sec;
          persistPrefs();
          const effectiveSec = computeEffectiveHuntDuration(sec, gs.huntProgress);
          gs.huntProgress.timerDuration = effectiveSec;
          gs.huntProgress.timerSeconds = effectiveSec;
          gs.huntProgress.timerEndsAt = gs.huntProgress.timerRunning
            ? Date.now() + effectiveSec * 1000
            : null;
          persistGameState();
          render();
        }
        break;

      case 'hunt-request-confirm':
        if (gs && gs.huntProgress && gs.huntProgress.selectedRoomId) {
          sound.playClick();
          app.modal = 'huntConfirm';
          render();
        }
        break;

      case 'hunt-confirm-guess':
        confirmHuntGuess();
        break;

      case 'hunt-resolve':
        resolveHunt();
        break;

      case 'spy-pick-tg':
        sound.playClick(true);
        haptics.select();
        app.spyPickedTelegramId = id;
        render();
        break;

      case 'spy-toggle-discard-second':
        sound.playClick(true);
        haptics.select();
        app.spyDiscardSecond = !app.spyDiscardSecond;
        render();
        break;

      case 'spy-confirm-tg':
        spyPlayTelegram();
        break;

      case 'complete-respite':
        completeRespite();
        break;

      // PWA Install
      case 'pwa-install':
        if (app.deferredInstallPrompt) {
          sound.playClick();
          app.deferredInstallPrompt.prompt();
          app.deferredInstallPrompt.userChoice
            .then((res) => {
              if (res && res.outcome === 'accepted') {
                app.deferredInstallPrompt = null;
                app.isInstalled = true;
                render();
              }
            })
            .catch(() => {});
        }
        break;

      case 'open-ios-install':
        sound.playClick();
        app.modal = 'iosInstall';
        render();
        break;
    }
  });

  // Dictionary search inputs (preserve focus & caret across innerHTML render)
  document.addEventListener('input', (e) => {
    const inp = e.target;
    if (!inp || !inp.getAttribute) return;
    const kind = inp.getAttribute('data-input');
    if (kind !== 'sec-word-search' && kind !== 'pack-word-search') return;
    const pos = typeof inp.selectionStart === 'number' ? inp.selectionStart : inp.value.length;
    if (kind === 'sec-word-search') {
      app.wordSearch = inp.value;
    } else if (kind === 'pack-word-search' && app.packsDraft) {
      app.packsDraft.wordSearch = inp.value;
    }
    render();
    const nextInp = document.querySelector('[data-input="' + kind + '"]');
    if (nextInp) {
      nextInp.focus();
      try {
        nextInp.setSelectionRange(pos, pos);
      } catch {}
    }
  });

  // ESC closes active modal; block accidental F5 / Ctrl+R / Cmd+R reload during active game
  document.addEventListener('keydown', (e) => {
    unlockAudioAndWake();
    if (e.key === 'Escape' && app.modal) {
      sound.playClick();
      app.modal = null;
      app.packsDraft = null;
      render();
      return;
    }
    const isReloadKey =
      e.key === 'F5' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r');
    if (isReloadKey && isGameActive() && !app.isIntentionalReload) {
      e.preventDefault();
      sound.playWarn();
      app.modal = 'homeConfirm';
      render();
    }
  });

  // Online / Offline & PWA Install Events
  window.addEventListener('online', () => {
    app.isOnline = true;
    render();
  });
  window.addEventListener('offline', () => {
    app.isOnline = false;
    render();
  });
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    app.deferredInstallPrompt = e;
    render();
  });
  window.addEventListener('appinstalled', () => {
    app.deferredInstallPrompt = null;
    app.isInstalled = true;
    render();
  });

  // Register isolated Service Worker (strictly scoped to ./, never forces reload mid-game)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js', { scope: './', updateViaCache: 'none' })
        .catch(() => {});
    });
  }

  // Initial boot
  if (isGameActive()) ensureHistoryGuard();
  render();
  wakeLockMgr.sync();
})();
