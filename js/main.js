// Highlight the active nav link based on current page, and set footer year.
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href').split('/').pop();
    if (href === path) link.classList.add('active');
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Temporary theme switcher (for trying out color palettes) ----------
  var THEMES = [
    { id: 'harbor', label: 'Harbor' },
    { id: 'cardinal', label: 'Cardinal' },
    { id: 'workshop', label: 'Workshop' }
  ];
  var saved = localStorage.getItem('site-theme') || 'harbor';
  applyTheme(saved);

  var switcher = document.createElement('div');
  switcher.className = 'theme-switcher';
  THEMES.forEach(function (theme) {
    var btn = document.createElement('button');
    btn.textContent = theme.label;
    btn.dataset.themeId = theme.id;
    if (theme.id === saved) btn.classList.add('active');
    btn.addEventListener('click', function () {
      applyTheme(theme.id);
      localStorage.setItem('site-theme', theme.id);
      switcher.querySelectorAll('button').forEach(function (b) {
        b.classList.toggle('active', b.dataset.themeId === theme.id);
      });
    });
    switcher.appendChild(btn);
  });
  document.body.appendChild(switcher);

  function applyTheme(id) {
    if (id === 'harbor') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', id);
    }
  }
});