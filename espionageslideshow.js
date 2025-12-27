let slideshowOverlay = null;
let slideshowImg = null;
let slides = [];
let currentIndex = 0;
let slideshowActive = false;

/* === INIT SLIDESHOW FROM TRIGGER === */
function startSlideshow(triggerEl) {
   if (slideshowActive) return;

   const slideData = triggerEl.dataset.slides;
   if (!slideData) return;

   slides = slideData
      .split(",")
      .map((src) => src.trim())
      .filter(Boolean);

   if (!slides.length) return;

   currentIndex = 0;
   slideshowActive = true;

   createOverlay();
   showSlide(currentIndex);
}

/* === CREATE FULLSCREEN OVERLAY === */
function createOverlay() {
   slideshowOverlay = document.createElement("div");
   slideshowOverlay.className = "slideshow-overlay";

   slideshowImg = document.createElement("img");
   slideshowImg.className = "slideshow-frame";

   slideshowOverlay.appendChild(slideshowImg);
   document.body.appendChild(slideshowOverlay);

   // Advance on click
   slideshowOverlay.addEventListener("click", nextSlide);

   // Escape exits
   document.addEventListener("keydown", handleKeydown);

   // Fade in
   requestAnimationFrame(() => {
      slideshowOverlay.classList.add("active");
   });
}

/* === DISPLAY SLIDE === */
function showSlide(index) {
   slideshowImg.classList.remove("visible");

   setTimeout(() => {
      slideshowImg.src = slides[index];
      slideshowImg.onload = () => {
         slideshowImg.classList.add("visible");
      };
   }, 250);
}

/* === NEXT SLIDE === */
function nextSlide() {
   currentIndex++;

   if (currentIndex >= slides.length) {
      closeSlideshow();
      return;
   }

   showSlide(currentIndex);
}

/* === CLOSE SLIDESHOW === */
function closeSlideshow() {
   slideshowActive = false;

   slideshowOverlay.classList.remove("active");

   document.removeEventListener("keydown", handleKeydown);

   setTimeout(() => {
      slideshowOverlay.remove();
      slideshowOverlay = null;
      slideshowImg = null;
   }, 500);
}

/* === KEYBOARD CONTROL === */
function handleKeydown(e) {
   if (e.key === "Escape") {
      closeSlideshow();
   }
}
