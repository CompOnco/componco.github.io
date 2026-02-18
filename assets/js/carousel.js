let current = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel img');
  slides.forEach(img => img.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  const slides = document.querySelectorAll('.carousel img');
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  const slides = document.querySelectorAll('.carousel img');
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.addEventListener('DOMContentLoaded', () => showSlide(0));

