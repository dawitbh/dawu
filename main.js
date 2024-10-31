const mainElements = Array.from(document.querySelectorAll("main"));
const sectionElements = mainElements.map((main) => Array.from(main.querySelectorAll("section")));
let currentSlideIndex = 0;
let currentDeckIndex = 0;

document.getElementById("next-slide").addEventListener("click", goToNextSlide);
document.getElementById("previous-slide").addEventListener("click", goToPreviousSlide);
document.getElementById("next-deck").addEventListener("click", goToNextDeck);
document.getElementById("previous-deck").addEventListener("click", goToPreviousDeck);
document.addEventListener("keydown", handleKeyNavigation);

function updateDisplay(updateDeck = true) {
    if (updateDeck) updateCurrentDeck();
    updateCurrentSlide();
    updateCounters();
}

function updateCurrentDeck() {
    mainElements.forEach((main) => main.style.display = "none");
    mainElements[currentDeckIndex].style.display = "flex";
}

function updateCurrentSlide() {
    mainElements[currentDeckIndex].style.transform = `translateX(${
        currentSlideIndex * window.innerWidth * -1
    }px)`;
    mainElements[currentDeckIndex].style.opacity = 0.9;
    setTimeout(() => {
        mainElements[currentDeckIndex].style.opacity = 1;
    }, 150);
}

function updateCounters() {
    document.getElementById("slide-count").innerText = `Slide: ${
        currentSlideIndex + 1
    }/${sectionElements[currentDeckIndex].length}`;
    document.getElementById("deck-count").innerText = `Deck: ${currentDeckIndex + 1}/${
        mainElements.length
    }`;
}

function goToNextSlide() {
    if (currentSlideIndex < sectionElements[currentDeckIndex].length - 1) {
        currentSlideIndex++;
        updateDisplay(false);
    } else if (currentDeckIndex < mainElements.length - 1) {
        currentDeckIndex++;
        currentSlideIndex = 0;
        updateDisplay();
    }
}

function goToPreviousSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateDisplay(false);
    } else if (currentDeckIndex > 0) {
        currentDeckIndex--;
        currentSlideIndex = sectionElements[currentDeckIndex].length - 1;
        updateDisplay();
    }
}

function goToNextDeck() {
    if (currentDeckIndex < mainElements.length - 1) {
        currentDeckIndex++;
        currentSlideIndex = 0;
        updateDisplay();
    }
}

function goToPreviousDeck() {
    if (currentDeckIndex > 0) {
        currentDeckIndex--;
        currentSlideIndex = 0;
        updateDisplay();
    }
}

function handleKeyNavigation(event) {
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
}

updateDisplay();
