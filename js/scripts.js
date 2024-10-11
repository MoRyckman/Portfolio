// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // =======================
    // Modal Overlay Functionality
    // =======================

    // Get the modal element
    var modal = document.getElementById("project-modal");

    // Get the close button inside the modal
    var closeBtn = document.getElementsByClassName("close-modal")[0];

    // Function to open the modal with the provided content
    function openModal(imageSrc, title, description, imageDes) {
        // Set the content of the modal
        document.getElementById("modal-image").src = imageSrc;
        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-description").innerText = description;
        document.getElementById("modal-desImage").src = imageDes;

        // Display the modal and add the 'show' class to trigger the animation
        modal.style.display = "block";
        setTimeout(function () {
            modal.classList.add("show");
        }, 10); // Slight delay to allow the display change to take effect
    }

    // Function to close the modal
    function closeModal() {
        // Remove the 'show' class to trigger the closing animation
        modal.classList.remove("show");
        // Wait for the animation to finish before hiding the modal
        setTimeout(function () {
            modal.style.display = "none";
        }, 600); // Duration matches the CSS transition duration
    }

    // Add click event listeners to all project cards to open the modal
    var projectCards = document.getElementsByClassName("project-card");

    for (var i = 0; i < projectCards.length; i++) {
        projectCards[i].addEventListener("click", function () {
            var imageSrc = this.querySelector("img").src;
            var title = this.querySelector(".project-info h3").innerText;
            var description = this.querySelector(".project-info p").innerText;
            var imageDes = this.querySelector(".project-info img").src;
            openModal(imageSrc, title, description, imageDes);
        });
    }

    // Add click event listener to the close button to close the modal
    closeBtn.addEventListener("click", closeModal);

    // Add click event listener to the window to close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });





    // Get the "Read More" button and the expanded content section
    var readMoreBtn = document.getElementById("read-more");
    var expandedContent = document.getElementById("expanded-about");

    // Flag to track whether the expanded content is visible
    var isExpanded = false;

    // Function to toggle the expanded content
    function toggleExpandedContent() {
        if (isExpanded) {
            // Hide the expanded content
            expandedContent.classList.add("hidden");
            readMoreBtn.innerText = "Read More";
        } else {
            // Show the expanded content
            expandedContent.classList.remove("hidden");
            readMoreBtn.innerText = "Read Less";
        }
        // Toggle the flag
        isExpanded = !isExpanded;
    }

    // Add click event listener to the "Read More" button
    readMoreBtn.addEventListener("click", toggleExpandedContent);
});


// Parallax scrolling effect
function parallaxEffect() {
    const background = document.querySelector('body');
    const scrollPosition = window.scrollY;
    var body = document.body,
        html = document.documentElement;

    var width = html.clientWidth;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    // Debugging
    console.log('Scroll Position:', scrollPosition);

    // Apply parallax effect
    background.style.backgroundPosition = `center ${-scrollPosition * ((width*2 - html.clientHeight)/(height))}px`;
}

// Initialize event listener after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if the event listener is set up
    console.log('Event listeners are set up.');

    window.addEventListener('scroll', parallaxEffect);
});


// Function to add dynamic tilt effect
function addTiltEffect(element) {
    element.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = element.getBoundingClientRect();
        const x = e.clientX - left; // X position of mouse within element
        const y = e.clientY - top;  // Y position of mouse within element
        const rotateX = ((y / height) - 0.5) * 30; // Adjust tilt range (15 degrees max)
        const rotateY = ((x / width) - 0.5) * -30;

        element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`; // Add scale and tilt
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = `rotateX(0) rotateY(0) scale(1)`; // Reset on mouse leave
        element.style.transition = "transform 0.3s ease"; // Smooth transition back to normal
    });
}

// Apply to all images, text, and project cards
document.querySelectorAll('img, h1').forEach(element => {
    addTiltEffect(element);
});
