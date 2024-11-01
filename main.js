const decks = document.querySelectorAll('.deck');
let currentSlide = 0;
let currentDeck = 0;

// Function to show the selected slide within the current deck
function showSlide(index) {
    const slides = decks[currentDeck].querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updateSlideCount();
}

// Function to show the current deck
function showDeck(index) {
    decks.forEach((deck, i) => {
        deck.classList.remove('active');
        if (i === index) {
            deck.classList.add('active');
            currentSlide = 0; // Reset to first slide in the new deck
            showSlide(currentSlide);
        }
    });
    updateDeckCount();
}

// Function to go to the next slide
function nextSlide() {
    const slides = decks[currentDeck].querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to go to the previous slide
