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

// document.querySelectorAll("accordion__btn").forEach((el) => {
//   el.addEventListener("click", () => {
//     let content = el.nextElementSibling;
//     console.log(content);

//     if (content.style.maxHeight) {
//       document
//         .querySelectorAll(".content")
//         .forEach((el) => (el.style.maxHeight = null));
//     } else {
//       document
//         .querySelectorAll(".content")
//         .forEach((el) => (el.style.maxHeight = null));
//       el.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion__btn");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        // If the content is open, close it
        content.style.maxHeight = null;
        content.style.paddingTop = null;
      } else {
        // Close all other contents and open the clicked one
        closeAllAccordionContents();
        content.style.maxHeight = content.scrollHeight + "40px";
        content.style.paddingTop = "40px";
      }
    });
  });

  function closeAllAccordionContents() {
    const allContents = document.querySelectorAll(".accordion__content");
    allContents.forEach((content) => {
      content.style.maxHeight = null;
      content.style.paddingTop = null;
    });
  }
});

console.log("fkjdsfkj");
