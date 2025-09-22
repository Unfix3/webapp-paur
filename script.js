let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");

// slide navigation
function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// widget Clock
function updateClock() {
  let now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);


// widget Counter
let count = 0;
function increaseCounter() {
  count++;
  document.getElementById("counterValue").innerText = count;
}
