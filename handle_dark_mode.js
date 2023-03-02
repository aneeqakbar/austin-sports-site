const bodyElem = document.getElementsByTagName("body");
const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
const sunIcon = toggleDarkModeBtn.querySelector("#sun-img");
const moonIcon = toggleDarkModeBtn.querySelector("#moon-img");

toggleDarkModeBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  toggleDarkMode()
})

function handleDarkMode() {
  if (getCookie("dark_mode")) {
    toggleDarkMode(true);
  }
}

function toggleDarkMode(status=false) {
  if (bodyElem[0].classList.contains("dark") && !status) {
    bodyElem[0].classList.toggle("dark", false);
    setCookie("dark_mode", false);
    sunIcon?.classList?.toggle("hidden", true);
    moonIcon?.classList?.toggle("hidden", false);
  } else {
    setCookie("dark_mode", true);
    sunIcon?.classList?.toggle("hidden", false);
    moonIcon?.classList?.toggle("hidden", true);
    bodyElem[0].classList.toggle("dark", true);
  }
}

handleDarkMode()

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}