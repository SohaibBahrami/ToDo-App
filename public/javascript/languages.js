import i18next from "i18next";
import Backend from "i18next-http-backend";

i18next.use(Backend).init(
  {
    lng: "en", // default language
    backend: {
      loadPath: "/languages/{{lng}}.json",
    },
  },
  (err, t) => {
    if (err) return console.error(err);
    updateContent();
  }
);

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}

function setLanguage(lang) {
  i18next.changeLanguage(lang, (err, t) => {
    if (err) return console.error(err);
    updateContent();
  });
}

document.getElementById("langSelector").addEventListener("change", (event) => {
  const lang = event.target.value;
  setLanguage(lang);
});
