import "regenerator-runtime/runtime";
import "../vendor/normalize.css";
import "../pages/index.css";
import "../vendor/fonts.css";

const carousel = document.querySelector('.carousel-inner');
const carouselMobile = document.querySelector('.carousel-inner-mobile');
const buttons = document.querySelectorAll('.custom-button');
const buttonsMobile = document.querySelectorAll('.custom-button-mobile');


function showSlide(index) {
  carousel.style.transform = `translateX(${-index * 100}%)`;
}
function showSlideMobile(index) {
    carouselMobile.style.transform = `translateX(${-index * 100}%)`;
  }

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showSlide(index);
    // Remove the 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    // Add the 'active' class to the clicked button
    button.classList.add('active');
  });
});
buttonsMobile.forEach((button, index) => {
    button.addEventListener('click', () => {
      showSlideMobile(index);
      // Remove the 'active' class from all buttons
      buttonsMobile.forEach(btn => btn.classList.remove('active'));
      // Add the 'active' class to the clicked button
      button.classList.add('active');
    });
  });

const emailInput = document.getElementById("input_type_email");
emailInput.addEventListener("input", function() {
  this.value = this.value.trim().toLowerCase();
  console.log(this.value)
});

document.querySelectorAll(".footer__button__option").forEach(function(button) {
    button.addEventListener("click", function(e) {
      e.preventDefault();
  
      // Remove the "active__button" class from all elements with the class "footer__button__option"
      document.querySelectorAll(".footer__button__option").forEach(function(el) {
        el.classList.remove("active__button");
      });
  
      // Add the "active__button" class to the clicked button
      this.classList.add("active__button");
    });
  });

        