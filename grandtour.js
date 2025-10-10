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
   document.body.style.overflow = "hidden"; // Prevent background scrolling
   viewer.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to viewer
}

function closePDF() {
   const viewer = document.getElementById("pdf-viewer");
   const frame = document.getElementById("pdf-frame");

   // Clear the PDF and hide the viewer
   frame.src = "";
   viewer.classList.add("hidden");
   document.body.style.overflow = "auto"; // Restore page scroll
}
