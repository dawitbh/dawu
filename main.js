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
