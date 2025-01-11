const html = document.querySelector("html");
const nav = document.querySelector("nav");
const themeIcon = document.querySelector(".theme-icon");
const darkmodeBtn = document.getElementById("darkmode-toggle");
const appScreenshotSection = document.getElementById("app-screenshot-section");
const appScreenshot = document.getElementById("app-screenshot");
const bgImage = document.getElementById("bg-image");
const collapseSection = document.getElementById("collapse-section");
const icons = document.querySelectorAll(".dark-icons");
const accordionHeading = document.querySelectorAll(".accordion-h");

function setLight() {
  html.setAttribute("data-bs-theme", "light");
  themeIcon.classList.remove("fa-regular");
  themeIcon.classList.add("fa-solid");
  nav.classList.remove("darkmode");
  nav.classList.add("lightmode");
  bgImage.classList.remove("darkmode");
  bgImage.classList.add("lightmode");
  appScreenshotSection.classList.remove("darkmode");
  appScreenshotSection.classList.add("lightmode");
  appScreenshot.classList.remove("darkmode");
  appScreenshot.classList.add("lightmode");
  collapseSection.classList.remove("darkmode");
  collapseSection.classList.add("lightmode");
  icons.forEach((icon) => {
    icon.classList.remove("darkmode");
    icon.classList.add("lightmode");
  });
  accordionHeading.forEach((h) => {
    h.classList.remove("darkmode");
  });
}

function setDark() {
  html.setAttribute("data-bs-theme", "dark");
  themeIcon.classList.add("fa-regular");
  themeIcon.classList.remove("fa-solid");
  nav.classList.add("darkmode");
  nav.classList.remove("lightmode");
  bgImage.classList.add("darkmode");
  bgImage.classList.remove("lightmode");
  appScreenshotSection.classList.add("darkmode");
  appScreenshotSection.classList.remove("lightmode");
  appScreenshot.classList.add("darkmode");
  appScreenshot.classList.remove("lightmode");
  collapseSection.classList.add("darkmode");
  collapseSection.classList.remove("lightmode");
  icons.forEach((icon) => {
    icon.classList.add("darkmode");
    icon.classList.remove("lightmode");
  });
  accordionHeading.forEach((h) => {
    h.classList.add("darkmode");
  });
}

// Initial Theme Setting based on Cookie
const themeFromCookie = document.cookie
  .split("; ")
  .find((row) => row.startsWith("data-bs-theme="));
if (themeFromCookie) {
  const themeValue = themeFromCookie.split("=")[1];
  if (themeValue === "dark") {
    setDark();
  } else {
    setLight();
  }
} else {
  // Fallback to System Preference
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setDark();
  } else {
    setLight();
  }
}

// Event Listener for Button Click
darkmodeBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (html.getAttribute("data-bs-theme") == "dark") {
    setLight();
    document.cookie = "data-bs-theme=light";
  } else {
    setDark();
    document.cookie = "data-bs-theme=dark";
  }
}
