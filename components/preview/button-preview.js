(function () {
  'use strict';

  var root = document.documentElement;

  function raw(name) { return getComputedStyle(root).getPropertyValue(name).trim(); }
  function resolve(value, depth) {
    depth = depth || 0;
    if (depth > 10) return value;
    var m = value.match(/^var\(\s*(--[^,\s)]+)\s*\)$/);
    return m ? resolve(raw(m[1]), depth + 1) : value;
  }
  function token(name) { return resolve(raw(name)); }

  function parseColor(value) {
    var s = String(value).trim();
    var hex = s.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hex) {
      var h = hex[1];
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
    }
    var rgb = s.match(/^rgba?\(([^)]+)\)$/i);
    if (rgb) {
      var parts = rgb[1].split(',').map(function (x) { return parseFloat(x); });
      return [parts[0], parts[1], parts[2]];
    }
    return null;
  }
  function channel(c) {
    var v = c / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  }
  function luminance(rgb) {
    return 0.2126 * channel(rgb[0]) + 0.7152 * channel(rgb[1]) + 0.0722 * channel(rgb[2]);
  }
  function contrast(fg, bg) {
    var a = parseColor(fg);
    var b = parseColor(bg);
    if (!a || !b) return null;
    var la = luminance(a);
    var lb = luminance(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  }

  /* ---------- theme ---------- */
  var THEME_KEY = 'dabwave-button-preview-theme';
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function storedPref() {
    try { return localStorage.getItem(THEME_KEY) || 'system'; } catch (e) { return 'system'; }
  }
  function resolved(pref) {
    return pref === 'system' ? (mq.matches ? 'dark' : 'light') : pref;
  }
  function applyTheme(pref) {
    root.dataset.theme = resolved(pref);
    var buttons = document.querySelectorAll('[data-theme-value]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', String(buttons[i].dataset.themeValue === pref));
    }
    renderContrast();
  }

  var themeButtons = document.querySelectorAll('[data-theme-value]');
  for (var i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener('click', function () {
      var pref = this.dataset.themeValue;
      try { localStorage.setItem(THEME_KEY, pref); } catch (e) {}
      applyTheme(pref);
    });
  }
  mq.addEventListener('change', function () {
    if (storedPref() === 'system') applyTheme('system');
  });

  /* ---------- state matrix ---------- */
  var VARIANTS = [
    { name: 'primary', cls: 'btn--primary' },
    { name: 'secondary', cls: 'btn--secondary' },
    { name: 'ghost', cls: 'btn--ghost' },
    { name: 'danger (solid)', cls: 'btn--danger' },
    { name: 'danger outline', cls: 'btn--danger-outline' }
  ];
  var STATES = [
    { name: 'Default', cls: '' },
    { name: 'Hover', cls: 'is-hover' },
    { name: 'Pressed', cls: 'is-pressed' },
    { name: 'Focus', cls: 'is-focus' },
    { name: 'Disabled', cls: '', disabled: true, label: 'Unavailable' },
    { name: 'Loading', cls: 'is-loading', loading: true, label: 'Saving' }
  ];

  var SPINNER = '<svg class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9"/></svg>';

  function renderStates() {
    var host = document.getElementById('state-matrix');
    if (!host) return;
    VARIANTS.forEach(function (variant) {
      var block = document.createElement('div');
      block.className = 'variant-block';
      var title = document.createElement('h3');
      title.className = 'text-h3';
      title.textContent = variant.name;
      var row = document.createElement('div');
      row.className = 'state-row';

      STATES.forEach(function (state) {
        var cell = document.createElement('div');
        cell.className = 'state-cell';
        var label = document.createElement('span');
        label.textContent = state.name;

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = ('btn btn--md ' + variant.cls + ' ' + state.cls).trim();
        if (state.disabled) btn.disabled = true;
        if (state.loading) {
          btn.setAttribute('aria-busy', 'true');
          btn.setAttribute('aria-disabled', 'true');
        }
        btn.innerHTML = (state.loading ? SPINNER : '') + (state.label || 'Action');

        cell.appendChild(label);
        cell.appendChild(btn);
        row.appendChild(cell);
      });

      block.appendChild(title);
      block.appendChild(row);
      host.appendChild(block);
    });
  }

  /* ---------- contrast ---------- */
  var PAIRS = [
    ['on-primary / primary', '--color-on-primary', '--color-primary', 4.5],
    ['on-primary / primary-hover', '--color-on-primary', '--color-primary-hover', 4.5],
    ['on-primary / primary-pressed', '--color-on-primary', '--color-primary-pressed', 4.5],
    ['on-danger / danger', '--color-on-danger', '--color-danger', 4.5],
    ['on-danger / danger-hover', '--color-on-danger', '--color-danger-hover', 4.5],
    ['on-danger / danger-pressed', '--color-on-danger', '--color-danger-pressed', 4.5],
    ['danger-strong / surface', '--color-danger-strong', '--color-surface', 4.5],
    ['danger-strong / danger-subtle', '--color-danger-strong', '--color-danger-subtle', 4.5],
    ['border-strong / surface', '--color-border-strong', '--color-surface', 3],
    ['focus / background', '--color-focus', '--color-background', 3],
    ['text-primary / surface', '--color-text-primary', '--color-surface', 4.5]
  ];

  function renderContrast() {
    var body = document.getElementById('contrast-body');
    var summary = document.getElementById('contrast-summary');
    if (!body) return;
    body.textContent = '';
    var pass = 0;
    var fail = 0;

    PAIRS.forEach(function (pair) {
      var value = contrast(token(pair[1]), token(pair[2]));
      var tr = document.createElement('tr');
      var c1 = document.createElement('td');
      c1.textContent = pair[0];
      var c2 = document.createElement('td');
      c2.textContent = value === null ? 'n/a' : value.toFixed(2) + ':1';
      var c3 = document.createElement('td');
      c3.textContent = pair[3] + ':1';
      var c4 = document.createElement('td');
      var verdict = document.createElement('span');
      verdict.className = 'verdict';
      if (value !== null && value >= pair[3]) {
        verdict.classList.add('verdict--pass');
        verdict.textContent = 'pass';
        pass++;
      } else {
        verdict.classList.add('verdict--fail');
        verdict.textContent = 'FAIL';
        fail++;
      }
      c4.appendChild(verdict);
      tr.appendChild(c1);
      tr.appendChild(c2);
      tr.appendChild(c3);
      tr.appendChild(c4);
      body.appendChild(tr);
    });

    if (summary) {
      summary.textContent = pass + ' pass · ' + fail + ' fail — computed from the active theme.';
    }
  }

  renderStates();
  applyTheme(storedPref());
})();
