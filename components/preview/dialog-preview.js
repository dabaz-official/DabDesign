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
  var THEME_KEY = 'dabwave-dialog-preview-theme';
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

  /* ---------- contrast ---------- */
  var PAIRS = [
    ['title on surface', '--color-text-primary', '--color-surface', 4.5],
    ['description on surface', '--color-text-secondary', '--color-surface', 4.5],
    ['body on surface', '--color-text-primary', '--color-surface', 4.5],
    ['border-strong on surface', '--color-border-strong', '--color-surface', 3],
    ['focus on surface', '--color-focus', '--color-surface', 3],
    ['on-primary on primary', '--color-on-primary', '--color-primary', 4.5],
    ['on-danger on danger', '--color-on-danger', '--color-danger', 4.5]
  ];

  function renderContrast() {
    var body = document.getElementById('contrast-body');
    var summary = document.getElementById('contrast-summary');
    if (!body) return;
    body.textContent = '';
    var pass = 0;
    var fail = 0;
    var exempt = 0;

    PAIRS.forEach(function (pair) {
      var value = contrast(token(pair[1]), token(pair[2]));
      var min = pair[3];
      var isExempt = pair[4] === true;
      var tr = document.createElement('tr');
      var c1 = document.createElement('td');
      c1.textContent = pair[0];
      var c2 = document.createElement('td');
      c2.textContent = value === null ? 'n/a' : value.toFixed(2) + ':1';
      var c3 = document.createElement('td');
      c3.textContent = isExempt ? '—' : min + ':1';
      var c4 = document.createElement('td');
      var verdict = document.createElement('span');
      verdict.className = 'verdict';
      if (isExempt) {
        verdict.classList.add('verdict--exempt');
        verdict.textContent = 'exempt';
        exempt++;
      } else if (value !== null && value >= min) {
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
      summary.textContent = pass + ' pass · ' + fail + ' fail · ' + exempt +
        ' exempt (recorded) — computed from the active theme.';
    }
  }

  /* ---------- dialogs ---------- */
  var status = document.getElementById('focus-status');
  var lastTrigger = null;
  var previousOverflow = '';

  function activeLabel() {
    var el = document.activeElement;
    if (!el) return 'none';
    var label = el.getAttribute('aria-label') || el.textContent.trim() || el.tagName.toLowerCase();
    return label.length > 40 ? label.slice(0, 40) + '…' : label;
  }

  var FOCUSABLE = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function visibleFocusables(dialog) {
    var nodes = dialog.querySelectorAll(FOCUSABLE);
    var list = [];
    for (var i = 0; i < nodes.length; i++) {
      if (!nodes[i].disabled && nodes[i].getAttribute('aria-hidden') !== 'true' && nodes[i].getClientRects().length) {
        list.push(nodes[i]);
      }
    }
    return list;
  }

  function firstFocusable(dialog) {
    var nodes = visibleFocusables(dialog);
    return nodes.length ? nodes[0] : null;
  }

  function openDialog(dialog, trigger) {
    if (!dialog) return;
    lastTrigger = trigger || null;
    previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    delete dialog.dataset.closeHandled;
    dialog.showModal();
    var target = dialog.querySelector('[autofocus]') || firstFocusable(dialog) || dialog;
    if (target === dialog) dialog.setAttribute('tabindex', '-1');
    target.focus();
    if (status) status.textContent = 'Open — focus: ' + activeLabel();
  }

  function handleClose(dialog) {
    if (!dialog || dialog.dataset.closeHandled === 'true') return;
    dialog.dataset.closeHandled = 'true';
    root.style.overflow = previousOverflow;
    if (lastTrigger) lastTrigger.focus();
    if (status) status.textContent = 'Closed — focus returned to: ' + activeLabel();
    lastTrigger = null;
  }

  function closeDialog(dialog) {
    if (!dialog || !dialog.open) return;
    dialog.close();
    handleClose(dialog);
  }

  var openers = document.querySelectorAll('[data-dialog-open]');
  for (var i = 0; i < openers.length; i++) {
    openers[i].addEventListener('click', function () {
      openDialog(document.getElementById(this.dataset.dialogOpen), this);
    });
  }

  var dialogs = document.querySelectorAll('dialog.dialog');
  for (var j = 0; j < dialogs.length; j++) {
    (function (dialog) {
      var closers = dialog.querySelectorAll('[data-close]');
      for (var k = 0; k < closers.length; k++) {
        closers[k].addEventListener('click', function () { closeDialog(dialog); });
      }
      dialog.addEventListener('keydown', function (event) {
        if (event.key !== 'Tab' || !dialog.open) return;
        var nodes = visibleFocusables(dialog);
        if (!nodes.length) return;
        var first = nodes[0];
        var last = nodes[nodes.length - 1];
        if (!dialog.contains(document.activeElement)) {
          event.preventDefault();
          first.focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      });
      dialog.addEventListener('close', function () { handleClose(dialog); });
      dialog.addEventListener('cancel', function () {
        setTimeout(function () { if (!dialog.open) handleClose(dialog); }, 0);
      });
      dialog.addEventListener('focusin', function () {
        if (status && dialog.open) status.textContent = 'Open — focus: ' + activeLabel();
      });
    })(dialogs[j]);
  }

  applyTheme(storedPref());
})();
