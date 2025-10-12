"use strict";

/*
   Playlist Script
   Handles clicking songs to play them and update active class
*/

window.addEventListener("DOMContentLoaded", () => {
   const player = document.getElementById("audio-player");
   const tracks = document.querySelectorAll("#playlist li");

   tracks.forEach((track) => {
      track.addEventListener("click", () => {
         // Remove active class from all tracks
         tracks.forEach((t) => t.classList.remove("active"));
         // Add active class to clicked track
         track.classList.add("active");
         // Update audio source and play
         player.src = track.getAttribute("data-src");
         player.play();
      });
   });
});
