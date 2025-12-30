document.addEventListener("DOMContentLoaded", () => {
   const frames = document.querySelectorAll(".signal-frame");
   if (!frames.length) return;

   let current = 0;
   let locked = false;

   // Ensure first frame is visible
   frames[current].classList.add("active");

   function nextFrame() {
      if (locked) return;
      locked = true;

      frames[current].classList.remove("active");
      current = (current + 1) % frames.length;

      // Slight delay = intentional beat
      setTimeout(() => {
         frames[current].classList.add("active");
         locked = false;
      }, 120);
   }

   frames.forEach((frame) => {
      frame.addEventListener("click", nextFrame);
      frame.addEventListener("touchstart", (e) => {
         e.preventDefault();
         nextFrame();
      });
   });
});
