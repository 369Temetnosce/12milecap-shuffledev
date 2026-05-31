(function() {
  const init = () => {
    const elements = document.querySelectorAll('.tm-reveal');
    if (!elements.length) return;

    const reveal = (el) => {
      el.classList.remove('opacity-0', 'translate-y-6');
      el.classList.add('opacity-100', 'translate-y-0');
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      elements.forEach(el => observer.observe(el));
    } else {
      elements.forEach(reveal);
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();