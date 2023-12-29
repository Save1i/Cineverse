function animateButton() {
  var button = document.querySelector(".promo__btn");
  button.classList.add("clicked"); // добавляем класс для анимации

  // Ждем некоторое время и удаляем класс
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 200);

  setTimeout(function () {
    window.location.href = "subscription.html"; // переход на страницу subscription.html
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

function animateButton__login() {
  const button = document.querySelector(".register__btn");
  button.classList.add("clicked"); // добавляем класс для анимации

  // Ждем некоторое время и удаляем класс
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 200);

  setTimeout(function () {
    window.location.href = "login__input-number.html"; // переход на страницу subscription.html
  }, 300);
}

function animateButton__login_inputnumber() {
  const button = document.querySelector(".login__btn");
  button.classList.add("clicked"); // добавляем класс для анимации

  // Ждем некоторое время и удаляем класс
  setTimeout(function () {
    button.classList.remove("clicked");
  }, 200);

  setTimeout(function () {
    window.location.href = "login__general information.html"; // переход на страницу subscription.html
  }, 300);
}
