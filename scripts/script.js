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

if (profilePic && fullscreenOverlay) {
  profilePic.addEventListener("click", () => {
    fullscreenOverlay.style.display = "flex";
  });

  fullscreenOverlay.addEventListener("click", () => {
    fullscreenOverlay.style.display = "none";
  });
}

// Fetch and load inprogress.html content into #inprogress-container
fetch("in_progress.html")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.text();
  })
  .then((html) => {
    document.getElementById("inprogress-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error loading inprogress:", error);
    document.getElementById("inprogress-container").innerHTML =
      "<p>Unable to load inprogress.</p>";
  });

// Fetch and load news.html content into #news-container
fetch("news.html")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.text();
  })
  .then((html) => {
    document.getElementById("news-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error loading news:", error);
    document.getElementById("news-container").innerHTML =
      "<p>Unable to load news.</p>";
  });

// Fetch and load projects.html content into #projects-container
fetch("../projects.html")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.text();
  })
  .then((html) => {
    document.getElementById("projects-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error loading projects:", error);
    document.getElementById("projects-container").innerHTML =
      "<p>Unable to load projects.</p>";
  });

// Fetch and load publications.html content into #publications-container
fetch("../publications.html")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.text();
  })
  .then((html) => {
    document.getElementById("publications-container").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error loading publications:", error);
    document.getElementById("publications-container").innerHTML =
      "<p>Unable to load publications.</p>";
  });
