// // Dark mode toggle
// const btn = document.getElementById("toggleDark");
// btn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
// });

// // Profile picture fullscreen overlay
// const profilePic = document.getElementById("profilePic");
// const fullscreenOverlay = document.getElementById("fullscreenOverlay");

// profilePic.addEventListener("click", () => {
//   fullscreenOverlay.style.display = "flex";
// });

// fullscreenOverlay.addEventListener("click", () => {
//   fullscreenOverlay.style.display = "none";
// });

// Dark mode toggle with persistence
const btn = document.getElementById("toggleDark");

// Check saved mode on page load
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  btn.textContent = "☀️";
} else {
  btn.textContent = "🌙";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    btn.textContent = "☀️";
  } else {
    localStorage.setItem("dark-mode", "disabled");
    btn.textContent = "🌙";
  }
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
