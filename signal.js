document.addEventListener("DOMContentLoaded", () => {
   const frames = document.querySelectorAll(".signal-frame");
   if (!frames.length) return;

   let current = 0;
   let locked = false;

   frames[current].classList.add("active");

   function nextFrame() {
      if (locked) return;
      locked = true;

      frames[current].classList.remove("active");
      current = (current + 1) % frames.length;

      setTimeout(() => {
         frames[current].classList.add("active");
         locked = false;
      }, 160); // intentional beat
   }

   frames.forEach((frame) => {
      frame.addEventListener("click", nextFrame);
   });
});
