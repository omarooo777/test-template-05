// landing change background image
let landing = document.querySelector(".landing");
let randomOption = true;
let backgroundInterval;
function randomizeBackground() {
  if (randomOption) {
    backgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * 5);
      landing.style.backgroundImage = `url(../imgs/landing-0${
        randomNumber + 1
      }.jpg)`;
    }, 5000);
  }
}

// Settings box
let settingsBox = document.querySelector(".settings-box");
let settingIcon = document.querySelector(".settings-box .icon");

settingIcon.addEventListener("click", () => {
  settingIcon.classList.toggle("fa-spin");
  settingsBox.classList.toggle("open");
});

// Change Main Color
let colorLi = document.querySelectorAll(".color-list li");

let localColor = localStorage.getItem("color_option");
if (localColor !== null) {
  document.documentElement.style.setProperty("--main-color", localColor);
  colorLi.forEach((color) => {
    color.classList.remove("active");
    if (color.dataset.color === localColor) {
      color.classList.add("active");
    }
  });
}

colorLi.forEach((color) => {
  color.addEventListener("click", () => {
    colorLi.forEach((color) => {
      color.classList.remove("active");
    });
    color.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      color.dataset.color
    );
    localStorage.setItem("color_option", color.dataset.color);
  });
});

// Switch Random Background Option
let randomback = document.querySelectorAll(".random-background span");
let localBackground = localStorage.getItem("background_option");

if (localBackground !== null) {
  randomback.forEach((span) => {
    span.classList.remove("active");
  });
  if (localBackground === "true") {
    randomOption = true;
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    randomOption = false;
    document.querySelector(".random-background .no").classList.add("active");
  }
}

randomizeBackground();

randomback.forEach((span) => {
  span.addEventListener("click", () => {
    randomback.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");
    if (span.dataset.background == "yes") {
      randomOption = true;
      randomizeBackground();
      localStorage.setItem("background_option", true);
    } else {
      randomOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

// Change Language Option
let langBtn = document.querySelectorAll(".language span");
let localLanguage = localStorage.getItem("language_option");

let currentLanguage;
if (localLanguage !== null) {
  currentLanguage = localLanguage;
  langBtn.forEach((lang) => {
    lang.classList.remove("active");
  });
  if (localLanguage == "en") {
    document.querySelector(".en").classList.add("active");
  } else if (localLanguage == "ar") {
    document.querySelector(".ar").classList.add("active");
  }
}

langBtn.forEach((lang) => {
  lang.addEventListener("click", () => {
    currentLanguage = lang.dataset.language;
    if (currentLanguage == "en") {
      window.location.href = `index.html`;
    } else {
      window.location.href = `index-${currentLanguage}.html`;
    }
    localStorage.setItem("language_option", currentLanguage);
    langBtn.forEach((lang) => {
      lang.classList.remove("active");
    });
    lang.classList.add("active");
  });
});

// Change Width On Scrolling
let skillsSection = document.querySelector(".skills");
let skillsBox = document.querySelectorAll(".skills .progress span");

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop) {
    skillsBox.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
};
