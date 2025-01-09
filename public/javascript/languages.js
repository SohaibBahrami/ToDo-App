const i18next = window.i18next;
const Backend = window.i18nextHttpBackend;

const html = document.querySelector("html");
const main = document.querySelector("main");
const footer = document.querySelector("footer p");

i18next.debug = true;
i18next.use(Backend).init(
  {
    lng: "en", // default language
    fallbackLng: "en", // fallback language
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
  if (lang == "fa") {
    main.setAttribute("dir", "rtl");
    footer.style.textAlign = "right";
  } else {
    main.setAttribute("dir", "ltr");
    footer.style.textAlign = "left";
  }
  html.setAttribute("lang", lang);
  setLanguage(lang);
});
