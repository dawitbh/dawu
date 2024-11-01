// Setting up main elements and applying initial styles
const mainElements = Array.from(document.querySelectorAll("main"));
const sectionElements = mainElements.map((main) => Array.from(main.querySelectorAll("section")));

// Variables to keep track of the current slide and deck
let currentSlideIndex = 0;
let currentDeckIndex = 0;

// Initialize display with styles
function updateDisplay(updateDeck = true) {
    if (updateDeck) showCurrentDeck();
    showCurrentSlide();
    updateCounters();
}

// Show current deck with background styling
function showCurrentDeck() {
    mainElements.forEach((main, index) => {
        main.classList.remove("active"); // Remove active class for all
        main.style.display = index === currentDeckIndex ? "flex" : "none"; // Show only the current deck
        if (index === currentDeckIndex) main.classList.add("active"); // Add active class to the current deck
    });
}

// Slide transition effect with background color change
function showCurrentSlide() {
    const deck = mainElements[currentDeckIndex];
    const offset = currentSlideIndex * window.innerWidth * -1;

    deck.style.transform = `translateX(${offset}px)`;
    deck.style.opacity = 0.9;
    setTimeout(() => {
        deck.style.opacity = 1;
    }, 150);
}

// Update the counters for the deck and slide
function updateCounters() {
    document.getElementById("slide-count").innerText = `Slide: ${currentSlideIndex + 1}/${sectionElements[currentDeckIndex].length}`;
    document.getElementById("deck-count").innerText = `Deck: ${currentDeckIndex + 1}/${mainElements.length}`;
}

// Navigation functions for next and previous slides and decks
function goToNextSlide() {
    if (currentSlideIndex < sectionElements[currentDeckIndex].length - 1) {
        currentSlideIndex++;
        updateDisplay(false);
    } else {
        goToNextDeck();
    }
}

function goToPreviousSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateDisplay(false);
    } else {
        goToPreviousDeck(true);
    }
}

function goToNextDeck() {
    if (currentDeckIndex < mainElements.length - 1) {
        currentDeckIndex++;
        currentSlideIndex = 0;
        updateDisplay();
    }
}

function goToPreviousDeck(setToLastSlide = false) {
    if (currentDeckIndex > 0) {
        currentDeckIndex--;
        currentSlideIndex = setToLastSlide ? sectionElements[currentDeckIndex].length - 1 : 0;
        updateDisplay();
    }
}

// Handle key-based navigation
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
            goToNextSlide();
            break;
        case "ArrowLeft":
            goToPreviousSlide();
            break;
        case "ArrowUp":
            goToPreviousDeck();
            break;
        case "ArrowDown":
            goToNextDeck();
            break;
    }
});

// Attach click events to buttons for navigation
document.getElementById("next-slide").addEventListener("click", goToNextSlide);
document.getElementById("previous-slide").addEventListener("click", goToPreviousSlide);
document.getElementById("next-deck").addEventListener("click", go
