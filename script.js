const galleryGrid = document.querySelector('.gallery-grid');

function loadGallery() {
  const images = ['art1.jpg', 'art2.jpg', 'art3.jpg', 'art4.jpg', 'art5.jpg', 'art6.jpg', 'art7.jpg', 'art8.jpg'];
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;
    imgElement.alt = "Artwork";
    galleryGrid.appendChild(imgElement);
  });
}

// Call loadGallery on page load
window.onload = loadGallery;
