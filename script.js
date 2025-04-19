document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav a");
  
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
          });
        }
      });
    });
  });

let currentIndex = 0;

const images = document.querySelectorAll('.biz-item');
const totalImages = images.length;

function updateSliderPosition() {
  const container = document.getElementById('bizContainer');
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextBiz() {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
}

function prevBiz() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1;
  }
  updateSliderPosition();
}

setInterval(() => {
  nextBiz();
}, 5000);


  