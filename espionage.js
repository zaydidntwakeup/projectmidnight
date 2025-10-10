function openLightbox(imgElement) {
   const lightbox = document.getElementById("lightbox");
   const lightboxImg = document.getElementById("lightbox-img");
   lightboxImg.src = imgElement.src;
   lightbox.style.display = "flex";
}

function closeLightbox(event) {
   // Close only if the user clicks outside the image
   if (event.target.id === "lightbox") {
      event.currentTarget.style.display = "none";
   }
}
// === espionage.js ===
// Handles PDF viewing inside the page (mobile & desktop friendly)

function openPDF(pdfSrc, title) {
   const viewer = document.getElementById("pdf-viewer");
   const frame = document.getElementById("pdf-frame");
   const pdfTitle = document.getElementById("pdf-title");

   frame.src = pdfSrc + "#view=FitH"; // Fit horizontally for readability
   pdfTitle.textContent = title;

   viewer.classList.remove("hidden");

   // Only disable background scroll on desktop, not mobile
   if (window.innerWidth > 768) {
      document.body.style.overflow = "hidden";
   }

   viewer.scrollIntoView({ behavior: "smooth" });
}

function closePDF() {
   const viewer = document.getElementById("pdf-viewer");
   const frame = document.getElementById("pdf-frame");

   frame.src = "";
   viewer.classList.add("hidden");
   document.body.style.overflow = "auto"; // Restore scrolling
}
