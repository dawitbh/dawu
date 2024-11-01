const slides = document.querySelectorAll('main > section');
const totalSlides = slides.length;
const decks = Math.ceil(totalSlides / slidesPerDeck); // Define slidesPerDeck as per your requirement
let currentSlide = 0;
let currentDeck = 0;
const slidesPerDeck = 3; // Example: Adjust based on how many slides per deck you want

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
        currentDeck = (currentDeck - 1 + decks) % decks; // Move to the previous deck
        currentSlide = (currentDeck === decks - 1) ? totalSlides - 1 : (slidesPerDeck - 1); // Show last slide of the last deck
    }
    showSlide(currentSlide);
}

function updateSlideCount() {
    const slideCount = document.getElementById('slide-count');
    slideCount.textContent = `${(currentSlide % slidesPerDeck) + 1} / ${slidesPerDeck}`; // Show current slide number in the deck
    const deckCount = document.getElementById('deck-count');
    deckCount.textContent = `${currentDeck + 1} / ${decks}`; // Show current deck number
}

// Set initial slide and deck
showSlide(currentSlide);

// Event listeners for buttons
document.getElementById('next-slide').addEventListener('click', nextSlide);
document.getElementById('previous-slide').addEventListener('click', previousSlide);
