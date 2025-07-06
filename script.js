var nav = document.getElementById("nav");
var info = document.getElementById("info");

function showInfo() {
  nav.classList.toggle("rotate");
  info.classList.toggle("hidden");
}

function hide() {
  if (!info.classList.contains("hidden")) {
    showInfo();
  }
}
