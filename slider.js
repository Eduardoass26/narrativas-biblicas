const images = [
  { src: "https://eduardoass26.github.io/narrativas-biblicas/public/imgs/imgs_slider/jesus.png", name: "Jesus" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/moises-sarsa-ardente.png", name: "Moisés e a Sarsa Ardente" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/slider (2).webp", name: "Do inicio ao fim dos tempos" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/slider.webp", name: "A criação até o Apocalipse" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/davi.png", name: "Davi" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/egypt.png", name: "Egito Antigo" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/sansao.png", name: "Sansão" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/tomb-8622722.jpg", name: "Túmulo de Jesus" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/tomb-8563707.jpg", name: "Túmulo do Salvador" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/noahs-ark-8769317.png", name: "Arca de Noé" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/apocalipse.png", name: "Apocalipse" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/ai-generated-8772687.png", name: "O deserto" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/ai-generated-8701833.png", name: "As piramides do Egito" },
  { src: "https://eduardoass26.github.io/narrativas-biblicas//public/imgs/imgs_slider/ai-generated-8701728.png", name: "Salomão" }
];

let currentSlide = 0;

function initializeSlider() {
const sliderContainer = document.getElementById('sliderContainer');

images.forEach((image, index) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  if (index === 0) slide.classList.add('active'); // Define o primeiro slide como ativo

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.name;
  img.style.width = '100%'; // Ajusta o tamanho conforme necessário
  img.style.height = 'auto';

  slide.appendChild(img);
  sliderContainer.appendChild(slide);
});
}

function showSlide(index) {
const slides = document.querySelectorAll('.slide');

if (index >= slides.length) {
  currentSlide = 0;
} else if (index < 0) {
  currentSlide = slides.length - 1;
} else {
  currentSlide = index;
}

slides.forEach((slide) => slide.classList.remove('active'));
slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
showSlide(currentSlide + direction);
}

// Inicializa o slider ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
initializeSlider();
showSlide(currentSlide);
});