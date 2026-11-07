(function () {
  'use strict';

  function channel(c) {
    var v = c / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  }
  function parse(hex) {
    var n = hex.replace('#', '');
    return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
  }
  function lum(hex) {
    var c = parse(hex);
    return 0.2126 * channel(c[0]) + 0.7152 * channel(c[1]) + 0.0722 * channel(c[2]);
  }
  function ratio(a, b) {
    var x = lum(a), y = lum(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  }
  function textOn(hex) {
    return ratio(hex, '#FFFFFF') >= ratio(hex, '#000000') ? '#FFFFFF' : '#000000';
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function chip(hex, primary, secondary) {
    var c = el('div', 'chip');
    c.style.background = hex;
    c.style.color = textOn(hex);
    c.appendChild(el('code', '', primary));
    c.appendChild(el('span', '', secondary));
    return c;
  }

  function renderRamps(data) {
    var host = document.getElementById('ramps');
    Object.keys(data.hues).forEach(function (name) {
      var h = data.hues[name];
      var block = el('div', 'ramp-block');

      var head = el('div', 'ramp-head');
      head.appendChild(el('h3', 'text-h3', name + ' — H ' + h.hue + '°'));
      head.appendChild(el('span', '', 'anchor ' + h.anchor + ' · base C ' + h.baseChroma.toFixed(4)));
      block.appendChild(head);

      var scroll = el('div', 'ramp-scroll');
      var row = el('div', 'ramp-row');
      data.steps.forEach(function (step) {
        var entry = h.steps[String(step)];
        var cell = el('div', 'swatch-cell');
        var sw = el('div', 'swatch');
        sw.style.background = entry.hex;
        cell.appendChild(sw);
        cell.appendChild(el('code', '', String(step)));
        cell.appendChild(el('span', '', entry.hex));
        row.appendChild(cell);
      });
      scroll.appendChild(row);
      block.appendChild(scroll);

      var aliases = el('div', 'alias-grid');
      ['light', 'dark'].forEach(function (theme) {
        var set = el('div', 'alias-set');
        set.appendChild(el('h4', '', theme));
        var chips = el('div', 'alias-chips');
        ['primary', 'hover', 'pressed', 'subtle'].forEach(function (role) {
          var step = h.aliases[theme][role];
          var hex = h.steps[String(step)].hex;
          chips.appendChild(chip(hex, role + ' ' + step, hex));
        });
        chips.appendChild(chip(h.aliases[theme].onHex, 'on ' + h.aliases[theme].on, h.aliases[theme].onHex));
        set.appendChild(chips);
        aliases.appendChild(set);
      });
      block.appendChild(aliases);
      host.appendChild(block);
    });
  }

  function renderFunctional(data) {
    var host = document.getElementById('functional');
    Object.keys(data.functional).forEach(function (role) {
      var f = data.functional[role];
      var block = el('div', 'func-block');
      block.appendChild(el('h3', 'text-h3', role + ' — ' + f.ramp));
      var row = el('div', 'func-row');

      ['light', 'dark'].forEach(function (theme) {
        var set = el('div', 'alias-set');
        set.appendChild(el('h4', '', theme));
        var chips = el('div', 'alias-chips');
        ['base', 'hover', 'pressed', 'strong', 'subtle', 'on'].forEach(function (key) {
          var hex = f[theme][key];
          var step = f[theme].steps[key];
          chips.appendChild(chip(hex, key + (step === null ? '' : ' ' + step), hex));
        });
        set.appendChild(chips);
        row.appendChild(set);
      });

      block.appendChild(row);
      host.appendChild(block);
    });
  }

  function renderSummary(data) {
    var summary = document.getElementById('summary');
    if (summary) {
      summary.textContent = Object.keys(data.hues).length + ' hues · ' +
        data.steps.length + ' steps · ' + data.checks.length + ' checked pairs · ' +
        data.failures + ' failures';
    }
    var body = document.getElementById('check-summary');
    if (!body) return;
    [['Total checked pairs', data.checks.length], ['Failures', data.failures]].forEach(function (pair) {
      var tr = document.createElement('tr');
      var c1 = el('td', '', String(pair[0]));
      var c2 = el('td', '', String(pair[1]));
      if (pair[0] === 'Failures') c2.className = pair[1] === 0 ? 'verdict verdict--pass' : 'verdict verdict--fail';
      tr.appendChild(c1);
      tr.appendChild(c2);
      body.appendChild(tr);
    });
    ['light', 'dark'].forEach(function (theme) {
      var rows = data.checks.filter(function (c) { return c.theme === theme; });
      if (!rows.length) return;
      var worst = rows.reduce(function (m, c) { return c.ratio < m.ratio ? c : m; });
      var tr = document.createElement('tr');
      tr.appendChild(el('td', '', 'Worst ' + theme + ' pair: ' + worst.label));
      tr.appendChild(el('td', '', worst.ratio.toFixed(2) + ':1'));
      body.appendChild(tr);
    });
  }

  fetch('./ramps.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      renderSummary(data);
      renderRamps(data);
      renderFunctional(data);
    })
    .catch(function (err) {
      var summary = document.getElementById('summary');
      if (summary) summary.textContent = 'Catalog failed to load: ' + err.message;
    });
})();
