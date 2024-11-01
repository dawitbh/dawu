// Get elements
const headerButton = document.getElementById('toggleHeader');
const mainElements = document.querySelectorAll('main');
const toggleSectionsButton = document.getElementById('toggleSections');
const sections = document.querySelectorAll('section');

// Initialize header visibility state
let isHeaderVisible = true;
let areSectionsVisible = true;

// Function to toggle header visibility
function toggleHeader() {
    isHeaderVisible = !isHeaderVisible; // Toggle the state
    const header = document.querySelector('header');

    if (isHeaderVisible) {
        header.style.display = 'flex'; // Show header
    } else {
        header.style.display = 'none'; // Hide header
    }
}

// Function to toggle sections visibility
function toggleSections() {
    areSectionsVisible = !areSectionsVisible; // Toggle the state
    sections.forEach(section => {
        section.style.display = areSectionsVisible ? 'block' : 'none'; // Show or hide sections
    });
}

// Event listeners
headerButton.addEventListener('click', toggleHeader);
toggleSectionsButton.addEventListener('click', toggleSections);

// Initialize the state based on default visibility
if (!isHeaderVisible) toggleHeader();
if (!areSectionsVisible) toggleSections();
