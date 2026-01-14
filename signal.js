document.addEventListener("DOMContentLoaded", () => {
   if (!window.pdfjsLib) {
      console.error("PDF.js not loaded");
      return;
   }

   const url = "mag/pmmag.pdf";

   let pdfDoc = null;
   let pageNum = 1;
   const scale = window.innerWidth < 768 ? 1.0 : 1.3;

   const canvas = document.getElementById("pdfCanvas");
   const ctx = canvas.getContext("2d");

   function renderPage(num) {
      pdfDoc.getPage(num).then((page) => {
         const viewport = page.getViewport({ scale });
         canvas.width = viewport.width;
         canvas.height = viewport.height;

         page.render({
            canvasContext: ctx,
            viewport,
         });
      });
   }

   window.pdfjsLib.getDocument(url).promise.then((pdf) => {
      pdfDoc = pdf;
      renderPage(pageNum);
   });

   document.getElementById("prevPage").onclick = () => {
      if (pageNum <= 1) return;
      pageNum--;
      renderPage(pageNum);
   };

   document.getElementById("nextPage").onclick = () => {
      if (pageNum >= pdfDoc.numPages) return;
      pageNum++;
      renderPage(pageNum);
   };
});
