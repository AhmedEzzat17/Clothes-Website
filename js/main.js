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
    400: {
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
    });}
window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);
