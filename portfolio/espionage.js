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
