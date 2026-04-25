(function () {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (!btn || !nav) return;

  const menu = nav.querySelector('.mobile-menu');
  if (!menu) return;

  const close = () => {
    nav.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();

// Back-to-top button — appears after scrolling 300px, scrolls smoothly to top
(function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  const SHOW_AT = 300;
  let raf = null;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      btn.classList.toggle('is-visible', window.scrollY > SHOW_AT);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  onScroll();
})();
