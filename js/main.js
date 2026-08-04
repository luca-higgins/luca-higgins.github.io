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
});
