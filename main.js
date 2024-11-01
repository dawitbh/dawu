const decks = document.querySelectorAll('.deck');
let currentDeck = 0;
let currentSlide = 0;

// Function to show the current deck and slide
function showDeckAndSlide(deckIndex, slideIndex) {
    decks.forEach((deck, dIndex) => {
        deck.classList.remove('active');
        if (dIndex === deckIndex) {
            deck.classList.add('active');
            const slides = deck.querySelectorAll('.slide');
            slides.forEach((slide, sIndex) => {
                slide.classList.remove('active');
                if (sIndex === slideIndex) {
                    slide.classList.add('active');
                }
            });
        }
    });
    updateCounts();
}

// Functions to navigate slides within the current deck
function nextSlide() {
    const slides = decks[currentDeck].querySelectorAll('.slide');
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showDeckAndSlide(currentDeck, currentSlide);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showDeckAndSlide(currentDeck, currentSlide);
    }
}

// Functions to navigate between decks
function nextDeck() {
    if (currentDeck < decks.length - 1) {
        currentDeck++;
        currentSlide = 0; // Reset slide to the first slide of the new deck
        showDeckAndSlide(currentDeck, currentSlide);
    }
}

function previousDeck() {
    if (currentDeck > 0) {
        currentDeck--;
        currentSlide = 0; // Reset slide to the first slide of the new deck
        showDeckAndSlide(currentDeck, currentSlide);
    }
}

// Function to update display counts
function updateCounts() {
    document.getElementById('slide-count').textContent = `Slide ${currentSlide + 1} / ${decks[currentDeck].querySelectorAll('.slide').length}`;
    document.getElementById('deck-count').textContent = `Deck ${currentDeck + 1} / ${decks.length}`;
}

// Event listeners for slide navigation
document.getElementById('next-slide').addEventListener('click', nextSlide);
document.getElementById('previous-slide').addEventListener('click', previousSlide);

// Event listeners for deck navigation
document.getElementById('next-deck').addEventListener('click', nextDeck);
document.getElementById('previous-deck').addEventListener('click', previousDeck);

// Initialize the first deck and slide
showDeckAndSlide(currentDeck, currentSlide);
