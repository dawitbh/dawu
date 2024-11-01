const mains = Array.from(document.querySelectorAll("main"));
const sections = Array.from(document.querySelectorAll("section"));
let currentSlideIndex = 0;

document.getElementById("next-slide").addEventListener("click", handleNextSlide);
document.getElementById("previous-slide").addEventListener("click", handlePreviousSlide);
document.getElementById("next-deck").addEventListener("click", handleNextDeck);
document.getElementById("previous-deck").addEventListener("click", handlePreviousDeck);

function refreshUI() {
  slideToCurrent();
  updateDisplayCounters();
}

function slideToCurrent() {
  const translateValue = currentSlideIndex * -window.innerWidth;
  document.querySelector("main").style.transform = `translateX(${translateValue}px)`;
}

function updateDisplayCounters() {
  const slideCounterText = `Slide: ${currentSlideIndex + 1}/${sections.length}`;
  document.getElementById("slide-count").innerText = slideCounterText;
}

function handleNextSlide() {
  if (currentSlideIndex < sections.length - 1) {
    currentSlideIndex++;
    refreshUI();
  }
}

function handlePreviousSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    refreshUI();
  }
}

function handleNextDeck() {
  // Implementation for decks if necessary
}

function handlePreviousDeck() {
  // Implementation for decks if necessary
}

refreshUI();
