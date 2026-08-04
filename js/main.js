// Highlight the active nav link based on current page, and set footer year.
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href').split('/').pop();
    if (href === path) link.classList.add('active');
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Temporary switcher: color theme + layout (for experimenting) ----------
  var THEMES = [
    { id: 'harbor', label: 'Harbor' },
    { id: 'cardinal', label: 'Cardinal' },
    { id: 'workshop', label: 'Workshop' }
  ];
  var LAYOUTS = [
    { id: 'classic', label: 'Classic' },
    { id: 'sidebar', label: 'Sidebar' },
    { id: 'editorial', label: 'Editorial' }
  ];

  var savedTheme = localStorage.getItem('site-theme') || 'harbor';
  var savedLayout = localStorage.getItem('site-layout') || 'classic';
  applyTheme(savedTheme);
  applyLayout(savedLayout);

  var wrap = document.createElement('div');
  wrap.className = 'theme-switcher';