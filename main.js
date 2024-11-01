const slides = document.querySelectorAll('main > section');
let currentSlide = 0;

// Function to show the selected slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updateSlideCount();
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to go to the previous slide
function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Update slide count display
function updateSlideCount() {
    document.getElementById('slide-count').textContent = `${currentSlide + 1} / ${slides.length}`;
}

// Set initial slide
showSlide(currentSlide);

// Event listeners for navigation buttons
document.getElementById('next-slide').addEventListener('click', nextSlide);
document.getElementById('previous-slide').addEventListener('click', previousSlide);
