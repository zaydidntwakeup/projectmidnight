let slideIndex = 0;
showSlides(); // Start the slideshow automatically

function showSlides() {
   const slides = document.querySelectorAll(".slide");
   slides.forEach((slide) => (slide.style.display = "none"));

   slideIndex++;
   if (slideIndex > slides.length) slideIndex = 1;

   slides[slideIndex - 1].style.display = "block";

   // Change image every 4 seconds
   setTimeout(showSlides, 4000);
}

// === Lightbox Functions ===
function openLightbox(imgElement) {
   const lightbox = document.getElementById("lightbox");
   const lightboxImg = document.getElementById("lightbox-img");
   lightboxImg.src = imgElement.src;
   lightbox.style.display = "flex";
}

function closeLightbox(event) {
   const lightbox = document.getElementById("lightbox");
   if (event.target === lightbox) {
      lightbox.style.display = "none";
   }
}
function zoomImage(img) {
   const zoomViewer = document.getElementById("zoom-viewer");
   const zoomImg = document.getElementById("zoom-img");

   zoomImg.src = img.src; // Set image source
   zoomViewer.classList.add("active");

   // Optional: pause slideshow if you're using setInterval
   if (typeof pauseSlideshow === "function") pauseSlideshow();
}

function closeZoom(event) {
   const zoomViewer = document.getElementById("zoom-viewer");
   if (event.target.id === "zoom-viewer" || event.target.id === "zoom-img") {
      zoomViewer.classList.remove("active");

      // Optional: resume slideshow
      if (typeof resumeSlideshow === "function") resumeSlideshow();
   }
}
