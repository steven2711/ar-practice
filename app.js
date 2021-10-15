const anchor = document.getElementById("anchor");

anchor.addEventListener("markerFound", (e) => {
  const sound = new Audio("test.mp3");
  sound.play();

  console.log("played sound");

  anchor.addEventListener("markerLost", (e) => {
    sound.pause();

    console.log("paused sound");
  });
});
