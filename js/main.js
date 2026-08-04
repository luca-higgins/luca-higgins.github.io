// Highlight the active nav link based on current page, and set footer year.
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href').split('/').pop();
    if (href === path) link.classList.add('active');
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Make whole cards clickable (not just "View project") ----------
  document.querySelectorAll('.card').forEach(function (card) {
    var link = card.querySelector('a.card-link');
    if (!link) return;
    card.classList.add('card-clickable');
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return; // let real links behave normally
      var href = link.getAttribute('href');
      if (href) window.location.href = href;
    });
  });

  // ---------- Temporary switcher: color theme + layout (for experimenting) ----------
  var THEMES = [
    { id: 'harbor', label: 'Harbor' },
    { id: 'cardinal', label: 'Cardinal' },
    { id: 'workshop', label: 'Workshop' },
    { id: 'botanical', label: 'Botanical' },
    { id: 'willow', label: 'Willow' }
  ];
  var LAYOUTS = [
    { id: 'classic', label: 'Classic' },
    { id: 'sidebar', label: 'Sidebar' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'drafting', label: 'Drafting' }
  ];

  var savedTheme = localStorage.getItem('site-theme') || 'harbor';
  var savedLayout = localStorage.getItem('site-layout') || 'classic';
  applyTheme(savedTheme);
  applyLayout(savedLayout);

  var wrap = document.createElement('div');
  wrap.className = 'theme-switcher';

  var themeGroup = buildGroup(THEMES, savedTheme, function (id) {
    applyTheme(id);
    localStorage.setItem('site-theme', id);
  });
  var divider = document.createElement('span');
  divider.className = 'switcher-divider';
  var layoutGroup = buildGroup(LAYOUTS, savedLayout, function (id) {
    applyLayout(id);
    localStorage.setItem('site-layout', id);
  });

  wrap.appendChild(themeGroup);
  wrap.appendChild(divider);
  wrap.appendChild(layoutGroup);
  document.body.appendChild(wrap);

  function buildGroup(options, current, onPick) {
    var group = document.createElement('div');
    group.className = 'switcher-group';
    options.forEach(function (opt) {
      var btn = document.createElement('button');
      btn.textContent = opt.label;
      btn.dataset.optId = opt.id;
      if (opt.id === current) btn.classList.add('active');
      btn.addEventListener('click', function () {
        onPick(opt.id);
        group.querySelectorAll('button').forEach(function (b) {
          b.classList.toggle('active', b.dataset.optId === opt.id);
        });
      });
      group.appendChild(btn);
    });
    return group;
  }

  function applyTheme(id) {
    if (id === 'harbor') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', id);
    }
  }

  function applyLayout(id) {
    if (id === 'classic') {
      document.documentElement.removeAttribute('data-layout');
    } else {
      document.documentElement.setAttribute('data-layout', id);
    }
  }
});
