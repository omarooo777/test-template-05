// landing change background image
let landing = document.querySelector(".landing");

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * 5);
  landing.style.backgroundImage = `url(../imgs/landing-0${
    randomNumber + 1
  }.jpg)`;
}, 10000);

// Settings box
let settingsBox = document.querySelector(".settings-box");
let settingIcon = document.querySelector(".settings-box .icon");
// settingIcon.style.color = "red";

// settingIcon.onclick = function () {
//   this.classList.toggle("fa-spin");
// };

settingIcon.addEventListener("click", () => {
  settingIcon.classList.toggle("fa-spin");
  settingsBox.classList.toggle("open");
});
