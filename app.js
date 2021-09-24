const anchor = document.getElementById("#anchor");

anchorRef.addEventListener("markerFound", (e) => {
  e.prevenDefault();
  console.log("marker found");
});
