// JavaScript to handle project card expansion
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove expanded class from all other cards
            projectCards.forEach(c => {
                if (c !== card && c.classList.contains('expanded')) {
                    c.classList.remove('expanded');
                }
            });
            // Toggle the clicked card
            card.classList.toggle('expanded');
        });
    });
});


// JavaScript to toggle 'Read More' content
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButton = document.getElementById('read-more');
    const expandedAbout = document.getElementById('expanded-about');

    readMoreButton.addEventListener('click', () => {
        // Toggle visibility of the expanded content
        if (expandedAbout.classList.contains('hidden')) {
            expandedAbout.classList.remove('hidden');
            readMoreButton.textContent = 'Read Less'; // Change button text to "Read Less"
        } else {
            expandedAbout.classList.add('hidden');
            readMoreButton.textContent = 'Read More'; // Change button text back to "Read More"
        }
    });
});


// Parallax scrolling effect
function parallaxEffect() {
    const background = document.querySelector('body');
    const scrollPosition = window.scrollY;

    // Debugging
    console.log('Scroll Position:', scrollPosition);

    // Apply parallax effect
    background.style.backgroundPosition = `center ${-scrollPosition * 0.6}px`;
}

// Initialize event listener after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if the event listener is set up
    console.log('Event listeners are set up.');

    window.addEventListener('scroll', parallaxEffect);
});
