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
  // console.log(document.querySelector("html").lang);

  if (document.querySelector("html").lang !== currentLanguage) {
    if (currentLanguage == "en") {
      window.location.href = `index.html`;
    } else {
      window.location.href = `index-${currentLanguage}.html`;
    }
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

window.addEventListener("scroll", function () {
  if (window.scrollY >= skillsSection.offsetTop) {
    skillsBox.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
});

// Popup Window
let galleryImgs = document.querySelectorAll(".gallery img");
let galleryIcon = document.querySelectorAll(".gallery i");

galleryIcon.forEach((icon) => {
  icon.addEventListener("click", function () {
    let popupOverlay = document.createElement("div");
    popupOverlay.className = "popup-overlay";
    document.body.appendChild(popupOverlay);
    let popupContainer = document.createElement("div");
    popupContainer.className = "popup-container";
    document.body.appendChild(popupContainer);
    if (icon.parentElement.children[1].alt !== null) {
      let imgTitle = document.createElement("h4");
      imgTitle.appendChild(
        document.createTextNode(icon.parentElement.children[1].alt)
      );
      popupContainer.appendChild(imgTitle);
    }
    let popupImg = document.createElement("img");
    popupImg.src = icon.parentElement.children[1].src;
    popupContainer.appendChild(popupImg);
    let closeBtn = document.createElement("span");
    closeBtn.className = "close-button";
    closeBtn.appendChild(document.createTextNode("X"));
    popupContainer.appendChild(closeBtn);
  });
});

document.addEventListener("click", (e) => {
  if (
    e.target.className == "close-button" ||
    e.target.className == "popup-overlay"
  ) {
    document.querySelector(".popup-overlay").remove();
    document.querySelector(".popup-container").remove();
  }
});

// Bullets
let allSections = document.querySelectorAll("section");
let bulletsContainer = document.querySelector(".bullets-nav");
let allBullets = document.querySelectorAll(".bullets-nav .bullet");

allBullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    document.querySelector(`.${bullet.dataset.sectionclass}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  let currentSection;
  allSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });
  allBullets.forEach((bullet) => {
    bullet.classList.remove("active");
    if (currentSection == bullet.dataset.sectionclass) {
      bullet.classList.add("active");
    }
  });
});

// Show Bullets Option
let bulletsOption = document.querySelectorAll(".toggler-bullets span");
let localBullet = localStorage.getItem("bullet_option");

if (localBullet !== null) {
  bulletsOption.forEach((span) => {
    span.classList.remove("active");
  });
  if (localBullet == "show") {
    document.querySelector(".toggler-bullets .show").classList.add("active");
    bulletsContainer.style.display = "block";
  } else if (localBullet == "hide") {
    document.querySelector(".toggler-bullets .hide").classList.add("active");
    bulletsContainer.style.display = "none";
  }
}

bulletsOption.forEach((span) => {
  span.addEventListener("click", () => {
    bulletsOption.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");
    if (span.dataset.show == "yes") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullet_option", "show");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullet_option", "hide");
    }
  });
});

// Reset Options BTN
document.querySelector(".reset-options").onclick = function () {
  localStorage.clear();
  // localStorage.removeItem("color_option");
  // localStorage.removeItem("background_option");
  // localStorage.removeItem("bullet_option");
  window.location.reload();
};
