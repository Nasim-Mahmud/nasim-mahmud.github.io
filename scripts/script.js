// Dark mode toggle
const btn = document.getElementById("toggleDark");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Profile picture fullscreen overlay
const profilePic = document.getElementById("profilePic");
const fullscreenOverlay = document.getElementById("fullscreenOverlay");

profilePic.addEventListener("click", () => {
  fullscreenOverlay.style.display = "flex";
});

fullscreenOverlay.addEventListener("click", () => {
  fullscreenOverlay.style.display = "none";
});
