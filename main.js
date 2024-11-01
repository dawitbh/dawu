// JavaScript for slide and deck navigation

document.addEventListener("DOMContentLoaded", () => {
  let currentDeckIndex = 0;
  let currentSlideIndex = 0;

  // Find all decks (main sections) in the document
  const decks = document.querySelectorAll("main");

  // Initialize first deck and slide visibility
  updateDeckVisibility();
  updateSlideVisibility();

  // Button elements for navigation
  const prevDeckButton = document.getElementById("previous-deck");
  const nextDeckButton = document.getElementById("next-deck");
  const prevSlideButton = document.getElementById("previous-slide");
  const nextSlideButton = document.getElementById("next-slide");

  // Event listeners for deck navigation
  prevDeckButton.addEventListener("click", () => {
    if (currentDeckIndex > 0) {
      currentDeckIndex--;
      currentSlideIndex = 0; // Reset slide index when changing decks
      updateDeckVisibility();
      updateSlideVisibility();
    }
  });

  nextDeckButton.addEventListener("click", () => {
    if (currentDeckIndex < decks.length - 1) {
      currentDeckIndex++;
      currentSlideIndex = 0;
      updateDeckVisibility();
      updateSlideVisibility();
    }
  });

  // Event listeners for slide navigation
  prevSlideButton.addEventListener("click", () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlideVisibility();
    }
  });

  nextSlideButton.addEventListener("click", () => {
    const slides = decks[currentDeckIndex].querySelectorAll("section");
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
      updateSlideVisibility();
    }
  });

  // Function to update visibility of decks
  function updateDeckVisibility() {
    decks.forEach((deck, index) => {
      deck.style.display = index === currentDeckIndex ? "block" : "none";
    });
    document.getElementById("deck-count").textContent = `${currentDeckIndex + 1} / ${decks.length}`;
  }

  // Function to update visibility of slides within the current deck
  function updateSlideVisibility() {
    const slides = decks[currentDeckIndex].querySelectorAll("section");
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlideIndex ? "block" : "none";
    });
    document.getElementById("slide-count").textContent = `${currentSlideIndex + 1} / ${slides.length}`;
  }
});
