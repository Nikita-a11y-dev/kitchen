let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 3;
  } else if (currentSlide > totalSlides - 3) {
    currentSlide = 0;
  }

  const offset = -currentSlide * (100 / 3);
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}
