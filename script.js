// Small scroll reveal effect — no framework required.
const items = document.querySelectorAll('.section, .project, .skill-grid article');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

items.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(18px)';
  item.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(item);
});

document.addEventListener('scroll', () => {
  document.querySelectorAll('.visible').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
}, {passive:true});
