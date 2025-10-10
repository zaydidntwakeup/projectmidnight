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
