let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    345: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


document.querySelectorAll(".register-button").forEach(function(button) {
  button.addEventListener("click", function() {
    window.open("https://www.google.com", "_blank");
  });
});


let div = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 500) {
    div.classList.add("show");
  } else {
    div.classList.remove("show");
  }
};
div.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};


window.addEventListener('load', function() {
  const navbar = document.querySelector('.navbar');
  const carousel = document.querySelector('.carousel');
  const carousel_caption = document.querySelector('.carousel-caption');
  navbar.classList.add('visible');
  carousel.classList.add('visible');
  carousel_caption.classList.add('visible');
});


document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-left");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  fadeInElements.forEach((el) => {
    observer.observe(el);
  });
});


const cards = document.querySelectorAll('.card.hidden');
function revealOnScroll() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      card.classList.add('visible');
      if (card.classList.contains('hidden')) {
        if (card.closest('.product-section').id === "men") {
          card.classList.add('from-left');
        } else {
          card.classList.add('from-right');
        }
      }
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);



document.addEventListener("DOMContentLoaded", function () {
  const imageSets = [
      {img: "productImage1", border: "movingBorder1", srcs: [
          "../images/1.1.webp",
          "../images/1.2.webp",
          "../images/1.3.webp", 
          "../images/1.4.webp",
          "../images/1.5.webp"
        ]},
      {img: "productImage2", border: "movingBorder2", srcs: [
          "../images/2.1.webp",
          "../images/2.2.webp", 
          "./images/2.3.webp",
          "./images/2.4.webp",
          "./images/2.5.webp"
        ]},
      {img: "productImage3", border: "movingBorder3", srcs: [
          "../images/3.1.webp",
          "../images/3.2.webp", 
          "./images/3.3.webp",
          "./images/3.4.webp",
          "./images/3.5.webp"
        ]},
      {img: "productImage4", border: "movingBorder4", srcs: [
          "../images/4.1.webp",
          "../images/4.2.webp", 
          "./images/4.3.webp",
          "./images/4.4.webp",
          "./images/4.5.webp"
        ]},
      {img: "productImage5", border: "movingBorder5", srcs: [
          "../images/5.1.webp",
          "../images/5.2.webp", 
          "./images/5.3.webp",
          "./images/5.4.webp",
          "./images/5.5.webp"
        ]},
      {img: "productImage6", border: "movingBorder6", srcs: [
          "../images/6.1.webp",
          "../images/6.2.webp", 
          "./images/6.3.webp",
          "./images/6.4.webp",
          "./images/6.5.webp"
        ]},
      {img: "productImage7", border: "movingBorder7", srcs: [
          "../images/7.1.webp",
          "../images/7.2.webp", 
          "./images/7.3.webp",
          "./images/7.4.webp",
        ]},
      {img: "productImage8", border: "movingBorder8", srcs: [
          "../images/8.1.webp",
          "../images/8.2.webp", 
          "./images/8.3.webp",
          "./images/8.4.webp",
          "./images/8.5.webp",
          "./images/8.6.webp"
        ]},
  ];

  imageSets.forEach(set => {
      const carouselImage = document.getElementById(set.img);
      const movingBorder = document.getElementById(set.border);
      let currentIndex = 0;
      let intervalId;
      const totalImages = set.srcs.length;
      const timePerImage = 1500; // الوقت الذي تستغرقه كل صورة (بالميلي ثانية)
      const totalTime = totalImages * timePerImage; // الوقت الكامل لتغيير الصور

      function changeImage() {
          carouselImage.style.opacity = 0;
          movingBorder.style.transitionDuration = `${totalTime}ms`; // تحديد وقت الانتقال للبوردر ليكون نفس الوقت الكامل
          movingBorder.style.width = "100%";  // تمدد البوردر بالكامل
          setTimeout(() => {
              currentIndex = (currentIndex + 1) % totalImages;
              carouselImage.src = set.srcs[currentIndex];
              carouselImage.style.opacity = 1;
              if (currentIndex === 0) {
                  movingBorder.style.display = "block";  // إعادة البوردر إلى البداية عند التكرار
              }
          }, timePerImage);
      }

      function startCycle() {
          intervalId = setInterval(changeImage, timePerImage); // تغيير الصورة كل timePerImage
          movingBorder.style.width = "100%"; // تحرك البوردر عند بداية التمرير
      }

      function resetCycle() {
          clearInterval(intervalId);
          movingBorder.style.width = "0"; // إعادة البوردر إلى البداية
          carouselImage.style.opacity = 1; // إظهار الصورة الحالية
      }

      carouselImage.addEventListener("mouseenter", function () {
          startCycle();
      });

      carouselImage.addEventListener("mouseleave", function () {
          resetCycle();
      });
  });
});







