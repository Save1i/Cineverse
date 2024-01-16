function animateButton() {
  const button = document.querySelector(".promo__btn");
  button.classList.add("clicked"); // добавляем класс для анимации

  // Ждем некоторое время и удаляем класс
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 200);

  setTimeout(function () {
    window.location.href = "subscription.html"; // переход на страницу subscription.html
  }, 300);
}

function animateButtonSub() {
  const button = document.querySelector(".promo__btn");
  button.classList.add("clicked"); // добавляем класс для анимации

  // Ждем некоторое время и удаляем класс
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 200);

  setTimeout(function () {
    window.location.href = "login.html"; // переход на страницу subscription.html
  }, 300);
}

function animateButtonsWatch() {
  const button = document.querySelector(".promo__btn");
  button.classList.add("clicked"); // добавляем класс для анимации

  // Ждем некоторое время и удаляем класс
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 200);

  setTimeout(function () {
    window.location.href = "https://api.embr.ws/embed/movie/61885"; // переход на страницу subscription.html
  }, 300);
}

function animateButtonsWatchLater() {
  const button = document.querySelector(".promo__btn");
  button.classList.add("clicked"); // добавляем класс для анимации

  // Ждем некоторое время и удаляем класс
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 200);

  setTimeout(function () {
    window.location.href = "cinema-lib__menu.html"; // переход на страницу subscription.html
  }, 300);
}

function animateButtonsWatch1() {
  const button = document.querySelector(".promo__btn");
  button.classList.add("clicked"); // добавляем класс для анимации

  // Ждем некоторое время и удаляем класс
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 200);

  setTimeout(function () {
    window.location.href = "https://api.embr.ws/embed/movie/33090"; // переход на страницу subscription.html
  }, 300);
}

const accordion = document.querySelector(".accordion");
const accordionButtons = document.querySelectorAll(".accordion__title");
const plus = document.querySelector(".accordion__btn::after");

accordionButtons.forEach.call(accordionButtons, function (accordionButton) {
  accordionButton.addEventListener("click", function () {
    const currentText = accordionButton.parentElement.querySelector(".accordion__content");
    const decor = accordionButton.parentElement.querySelector(".burger");

    decor.classList.toggle("active");
    accordionButton.classList.toggle(".accordion__btn--active");
    currentText.classList.toggle(".accordion__content--visible");

    if (currentText.classList.contains(".accordion__content--visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
      currentText.style.opacity = 1;
    } else {
      currentText.style.maxHeight = null;
      currentText.style.opacity = 0;
    }
  });
});

function toggleActive(addClass, removeClass) {
  const addElement = document.getElementById(`${addClass}`);
  const removeElement = document.getElementById(`${removeClass}`);

  switch (addElement && removeElement) {
    case removeElement:
      addElement.classList.add("active");
      removeElement.classList.remove("active");
      break;
  }
}

function transitionButton(addTransition) {
  const button = document.getElementById(`${addTransition}`);
  button.classList.add("clicked"); // добавляем класс для анимации

  // Ждем некоторое время и удаляем класс
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 200);

  setTimeout(function () {
    switch (addTransition) {
      case "login__btn-register":
        window.location.href = "login__input-number.html";
        break;
      case "login__btn-input-number":
        window.location.href = "login__general-information.html";
        break;
      case "login__btn-general-info":
        window.location.href = "personal-area.html";
        break;
      case "login__btn":
        window.location.href = "personal-area.html";
        break;
    }

    // переход на страницу subscription.html
  }, 150);
}

// Переключение видимости выпадающего списка
function toggleDropdown() {
  const dropdownContent = document.getElementById("myDropdown");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function changeGender(selectedGender) {
  const genderText = document.getElementById("gender");
  const genderW = document.getElementById("woman");
  const dropdownContent = document.getElementById("myDropdown");

  if (dropdownContent.style.display === "block" || selectedGender === "woman") {
    switch (genderText.textContent) {
      case "Мужской":
        genderText.innerHTML = "Женский";
        genderW.innerHTML = "Мужской";
        break;
      case "Женский":
        genderText.innerHTML = "Мужской";
        genderW.innerHTML = "Женский";
        break;
    }
  }
  toggleDropdown(); // Закрываем выпадающий список после выбора
}

// Закрываем выпадающий список при клике вне его области
window.onclick = function (event) {
  const dropdownInput = document.getElementById("dropdownInput");
  if (event.target !== dropdownInput && !dropdownInput.contains(event.target)) {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.display = "none";
  }
};

const headerBtn = document.querySelector(".header__btn");
const headerMenu = document.querySelector(".header__menu-container");

headerBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("menu-open");
});

function transitionPoster(addTransition) {
  const imgBtn = document.getElementById(`${addTransition}`);

  switch (addTransition) {
    case "oppenheimer-vert":
      window.location.href = "oppenheimer-page.html";
      break;
    case "theColorPurple":
      window.location.href = "the-color-purple.html";
      break;
    case "login__btn-input-number":
      window.location.href = "login__general-information.html";
      break;
    case "login__btn-general-info":
      window.location.href = "personal-area.html";
      break;
  }
}

const sideBarBtn1 = document.getElementById("1");
const sideBarBtn2 = document.getElementById("2");
const sideBarBtn3 = document.getElementById("3");
const sideBarBtn4 = document.getElementById("4");

const style1 = document.getElementById("css1");
const style2 = document.getElementById("css2");

const profile = document.getElementById("profile");
const paMyViews = document.getElementById("my-views");
const cards = document.getElementById("card");

sideBarBtn1.addEventListener("click", (event) => {
  event.preventDefault();
  cards.style.display = "none";
  paMyViews.style.display = "none";
  profile.style.display = "block";
  const buttons = [sideBarBtn1, sideBarBtn2, sideBarBtn3, sideBarBtn4];

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn === sideBarBtn1);
  });

  style1.href = "style__personal-area.css";
});

sideBarBtn2.addEventListener("click", (event) => {
  event.preventDefault();
  cards.style.display = "none";
  profile.style.display = "none";
  paMyViews.style.display = "block";
  const buttons = [sideBarBtn1, sideBarBtn2, sideBarBtn3, sideBarBtn4];

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn === sideBarBtn2);
  });
  style1.href = "style__personal-area__my-views.css";
});

sideBarBtn3.addEventListener("click", (event) => {
  event.preventDefault();
  paMyViews.style.display = "none";
  profile.style.display = "none";
  cards.style.display = "block";

  const buttons = [sideBarBtn1, sideBarBtn2, sideBarBtn3, sideBarBtn4];

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn === sideBarBtn3);
  });

  style1.href = "style__personal-area__payment-methods.css";
});

sideBarBtn4.addEventListener("click", (event) => {
  event.preventDefault();
  paMyViews.style.display = "none";
  profile.style.display = "block";
  const buttons = [sideBarBtn1, sideBarBtn2, sideBarBtn3, sideBarBtn4];

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn === sideBarBtn4);
  });

  style1.href = "style__personal-area.css";
});
