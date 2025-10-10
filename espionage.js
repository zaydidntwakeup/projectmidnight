function openLightbox(imgElement) {
   const lightbox = document.getElementById("lightbox");
   const lightboxImg = document.getElementById("lightbox-img");
   lightboxImg.src = imgElement.src;

   // Reset inline display if it was set to "none"
   lightbox.style.display = "flex";
   requestAnimationFrame(() => {
      lightbox.classList.add("active");
   });
}

function closeLightbox(event) {
   if (event.target.id === "lightbox") {
      const lightbox = document.getElementById("lightbox");
      lightbox.classList.remove("active");

      // Use transitionend to remove display only after fade-out completes
      lightbox.addEventListener(
         "transitionend",
         () => {
            lightbox.style.display = "none";
         },
         { once: true }
      );
   }
}

// Optional: allow Escape key to close
document.addEventListener("keydown", (e) => {
   if (e.key === "Escape") {
      const lightbox = document.getElementById("lightbox");
      if (lightbox.classList.contains("active")) {
         lightbox.classList.remove("active");
         lightbox.addEventListener(
            "transitionend",
            () => {
               lightbox.style.display = "none";
            },
            { once: true }
         );
      }
   }
});
