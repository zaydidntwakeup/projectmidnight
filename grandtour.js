// === grandtour.js ===
// Handles PDF viewing inside the page (optimized for mobile and desktop)

function openPDF(pdfSrc, title) {
   const viewer = document.getElementById("pdf-viewer");
   const frame = document.getElementById("pdf-frame");
   const pdfTitle = document.getElementById("pdf-title");

   // Load the PDF and display it nicely
   frame.src = pdfSrc + "#view=FitH"; // Fit horizontally on load
   pdfTitle.textContent = title;

   viewer.classList.remove("hidden");

   // Prevent background scroll ONLY on desktop
   if (window.innerWidth > 768) {
      document.body.style.overflow = "hidden";
   }

   viewer.scrollIntoView({ behavior: "smooth" });
}

function closePDF() {
   const viewer = document.getElementById("pdf-viewer");
   const frame = document.getElementById("pdf-frame");

   // Clear the PDF and hide the viewer
   frame.src = "";
   viewer.classList.add("hidden");

   // Restore scroll if it was disabled
   document.body.style.overflow = "auto";
}
