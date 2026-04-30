const slides = document.querySelectorAll('.gallery-slide');
let index = 0;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(i) {
    slides[index].classList.remove('active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    showSlide(index + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(index - 1);
});