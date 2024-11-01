const mains = Array.from(document.querySelectorAll("main .deck"));
const sections = mains.map((main) => Array.from(main.querySelectorAll("section")));
let currentSlideIndex = 0;
let currentDeckIndex = 0;

document.getElementById("next-slide").addEventListener("click", handleNextSlide);
document.getElementById("previous-slide").addEventListener("click", handlePreviousSlide);
document.getElementById("next-deck").addEventListener("click", handleNextDeck);
document.getElementById("previous-deck").addEventListener("click", handlePreviousDeck);

function refreshUI(deckChanged = true) {
    if (deckChanged) switchDeck();
    slideToCurrent();
    updateDisplayCounters();
}

function switchDeck() {
    mains.forEach((main) => (main.style.display = "none"));
    mains[currentDeckIndex].style.display = "flex";
}

function slideToCurrent() {
    const translateValue = currentSlideIndex * -window.innerWidth;
    mains[currentDeckIndex].style.transform = `translateX(${translateValue}px)`;
}

function updateDisplayCounters() {
    updateSlideCounter();
    updateDeckCounter();
}

function updateSlideCounter() {
    const slideCounterText = `Slide: ${currentSlideIndex + 1}/${sections[currentDeckIndex].length}`;
    document.getElementById("slide-count").innerText = slideCounterText;
}

function updateDeckCounter() {
    const deckCounterText = `Deck: ${currentDeckIndex + 1}/${mains.length}`;
    document.getElementById("deck-count").innerText = deckCounterText;
}

function handleNextSlide()
