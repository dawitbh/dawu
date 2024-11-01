const slides = document.querySelectorAll('main > section');
let currentSlide = 0;
let currentDeck = 0;

// Get unique decks by grouping slides
const decks = Array.from(slides).reduce((acc, slide, index) => {
    const deckIndex = Math.floor(index / 10); // Assuming 10 slides per deck
    if (!acc[deckIndex]) acc[deckIndex] = [];
    acc[deckIndex].push(slide);
    return acc;
}, []);

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
        currentSlide = 0; // Reset to first slide in the new deck
        showSlide(currentSlide);
        updateDeckCount();
    }
}

// Update slide count display
function updateSlideCount() {
    document.getElementById('slide-count').textContent = `${currentSlide + 1} / ${decks[currentDeck].length}`;
}

// Update deck count display
function updateDeckCount() {
    document.getElementById('deck-count').textContent = `${currentDeck + 1} / ${decks.length}`;
}

// Set initial slide and deck
showSlide(currentSlide);
updateDeckCount();

// Event listeners for navigation buttons
document.getElementById('next-slide').addEventListener('click', nextSlide);
document.getElementById('previous-slide').addEventListener('click', previousSlide);
document.getElementById('next-deck').addEventListener('click', nextDeck);
document.getElementById('previous-deck').addEventListener('click', previousDeck);
