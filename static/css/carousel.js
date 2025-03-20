let images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function fadeImages() {
  // Remove the 'active' class from all images
  images.forEach((img) => {
    img.classList.remove('active');
  });

  // Add the 'active' class to the current image
  images[currentIndex].classList.add('active');

  // Update the index for the next image
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Change the image every 3 seconds (3000 milliseconds)
setInterval(fadeImages, 3000);

// Initialize the first image to be visible on load
fadeImages();
