const slides = document.querySelectorAll('main > section');
const totalSlides = slides.length;
const slidesPerDeck = 3; // Adjust as necessary for your design
const totalDecks = Math.ceil(totalSlides / slidesPerDeck);
let currentSlide = 0;
let currentDeck = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updateSlideCount();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slidesPerDeck + (currentDeck * slidesPerDeck);
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide of the first deck
        currentDeck = 0; // Reset to the first deck
    }
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slidesPerDeck) % slidesPerDeck + (currentDeck * slidesPerDeck);
    if (currentSlide < 0) {
        if (currentDeck > 0) {
            currentDeck--;
            currentSlide = Math.min((currentDeck + 1) * slidesPerDeck - 1, totalSlides - 1); // Show last slide of the previous deck
        } else {
            currentSlide = totalSlides - 1; // Loop to the last slide of the last deck
        }
    }
    showSlide(currentSlide);
}

function updateSlideCount() {
    const slideCount = document.getElementById('slide-count');
    slideCount.textContent = `${(currentSlide % slidesPerDeck) + 1} / ${slidesPerDeck}`; // Current slide in the deck
    const deckCount = document.getElementById('deck-count');
    deckCount.textContent = `${currentDeck + 1} / ${totalDecks}`; // Current deck number
}

// Set initial slide and deck
showSlide(currentSlide);

// Event listeners for buttons
document.getElementById('next-slide').addEventListener('click', nextSlide);
document.getElementById('previous-slide').addEventListener('click', previousSlide);
