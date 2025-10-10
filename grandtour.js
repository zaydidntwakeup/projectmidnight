// === grandtour.js ===
// Handles PDF viewing inside the page

function openPDF(pdfPath, title) {
   const viewer = document.getElementById("pdf-viewer");
   const frame = document.getElementById("pdf-frame");
   const header = document.getElementById("pdf-title");

   frame.src = pdfPath + "#view=FitH"; // loads the PDF
   header.textContent = title;
   viewer.classList.remove("hidden");
   viewer.scrollIntoView({ behavior: "smooth" });
}

function closePDF() {
   const viewer = document.getElementById("pdf-viewer");
   const frame = document.getElementById("pdf-frame");

   frame.src = ""; // unload PDF when closed
   viewer.classList.add("hidden");
}
