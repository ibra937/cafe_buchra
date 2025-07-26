function toggleMenu() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('open');
}
// Fermer le menu au clic sur un lien (mobile UX)
document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mainNav').classList.remove('open');
  });
});

// Diaporama équipe
let equipeIndex = 0;
const slides = document.querySelectorAll('.equipe-slide');
function showEquipeSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
  });
}
function equipePrev() {
  equipeIndex = (equipeIndex - 1 + slides.length) % slides.length;
  showEquipeSlide(equipeIndex);
}
function equipeNext() {
  equipeIndex = (equipeIndex + 1) % slides.length;
  showEquipeSlide(equipeIndex);
}
document.addEventListener('DOMContentLoaded', () => showEquipeSlide(equipeIndex));
setInterval(() => {
  equipeNext();
}, 3500);

// Diaporama avis
let avisIndex = 0;
const avisSlides = document.querySelectorAll('.avis-slide');
const avisPagination = document.querySelector('.avis-pagination');

function showAvisSlide(n) {
  avisSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
  });
  // Pagination
  avisPagination.innerHTML = '';
  avisSlides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'avis-dot' + (i === n ? ' active' : '');
    dot.onclick = () => { avisIndex = i; showAvisSlide(avisIndex); };
    avisPagination.appendChild(dot);
  });
}

function avisPrev() {
  avisIndex = (avisIndex - 1 + avisSlides.length) % avisSlides.length;
  showAvisSlide(avisIndex);
}
function avisNext() {
  avisIndex = (avisIndex + 1) % avisSlides.length;
  showAvisSlide(avisIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showAvisSlide(avisIndex);
  setInterval(() => {
    avisNext();
  }, 3500);
});