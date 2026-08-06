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

  // ---------- Reveal-on-scroll for cards, sections, and gallery photos ----------
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll(
    '.card, .project-section, .project-meta, .photo-gallery figure, .skill-block, .resume-entry'
  );
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('reveal', 'in-view'); });
  } else {
    var cardIndex = 0;
    document.querySelectorAll('.grid .card').forEach(function (card) {
      card.style.transitionDelay = (cardIndex * 60) + 'ms';
      cardIndex++;
    });
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }

  // ---------- Typewriter cycle for the hero role tagline ----------
  var cycleEl = document.getElementById('cycle-word');
  if (cycleEl) {
    var cycleWords = ['innovator', 'creator', 'designer'];
    if (reduceMotion) {
      cycleEl.textContent = cycleWords[0];
    } else {
      var wordIndex = 0, charIndex = 0, deleting = false;
      var tick = function () {
        var word = cycleWords[wordIndex];
        if (!deleting) {
          charIndex++;
          cycleEl.textContent = word.slice(0, charIndex);
          if (charIndex === word.length) { deleting = true; setTimeout(tick, 1400); return; }
          setTimeout(tick, 90);
        } else {
          charIndex--;
          cycleEl.textContent = word.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % cycleWords.length;
            setTimeout(tick, 300);
            return;
          }
          setTimeout(tick, 45);
        }
      };
      tick();
    }
  }
});
