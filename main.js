const slides = document.querySelectorAll('.deck .slide'); // Update selector
let currentSlide = 0;
let currentDeck = 0;

// Get unique decks by grouping slides
const decks = Array.from(document.querySelectorAll('.deck')).map(deck => 
    Array.from(deck.querySelectorAll('.slide'))
);

// Function to show the selected slide within the current deck
function showSlide(index) {
    decks[currentDeck].forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updateSlideCount();
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % decks[currentDeck].length;
    showSlide(currentSlide);
}

// Function to go to the previous slide
function previousSlide() {
    currentSlide = (currentSlide - 1 + decks[currentDeck].length) % decks[currentDeck].length;
    showSlide(currentSlide);
}

// Function to go to the next deck
function nextDeck() {
    if (currentDeck < decks.length - 1) {
        currentDeck++;
        currentSlide = 0; // Reset to first slide in the new deck
        showSlide(currentSlide);
        updateDeckCount();
    }
}

// Function to go to the previous deck
function previousDeck() {
    if (currentDeck > 0) {
        currentDeck--;
        currentSlide = 
