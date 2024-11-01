const slides = document.querySelectorAll('main > section');
const slidesPerDeck = 2; // Show two slides at a time
let currentSlide = 0;

function showSlides(startIndex) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        // Show the slides in the current deck
        if (i >= startIndex && i < startIndex + slidesPerDeck) {
            slide.classList.add('active');
        }
    });
    updateSlideCount();
}

function nextSlide() {
    currentSlide = (currentSlide + slidesPerDeck) % slides.length;
    showSlides(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - slidesPerDeck + slides.length) % slides.length;
    showSlides(currentSlide);
}

function updateSlideCount() {
    const totalSlides = slides.length;
    const currentDeck = Math.floor(currentSlide / slidesPerDeck) + 1;
    const totalDecks = Math.ceil(totalSlides / slidesPerDeck);
    document.getElementById('slide-count').textContent = `${currentDeck} / ${totalDecks}`;
}

// Set initial slides
showSlides(currentSlide);

// Event listeners for buttons
document.getElementById('next-slide').addEventListener('click', nextSlide);
document.getElementById('previous-slide').addEventListener('click', previousSlide);
