let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
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
  centeredSlides: true,
});


document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.forEach(function(navLink) {
        navLink.classList.remove('active');
      });
        link.classList.add('active');
    });
  });
});


document.querySelectorAll(".register-button").forEach(function (button) {
  button.addEventListener("click", function () {
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


window.addEventListener("load", function () {
  const navbar = document.querySelector(".navbar");
  const carousel = document.querySelector(".carousel");
  const carousel_caption = document.querySelector(".carousel-caption");
  navbar.classList.add("visible");
  carousel.classList.add("visible");
  carousel_caption.classList.add("visible");
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


const cards = document.querySelectorAll(".card.hidden");
function revealOnScroll() {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      card.classList.add("visible");
      if (card.classList.contains("hidden")) {
        if (card.closest(".product-section").id === "men") {
          card.classList.add("from-left");
        } else {
          card.classList.add("from-right");
        }
      }
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);


document.addEventListener("DOMContentLoaded", function () {
  const imageSets = [
    {
      img: "productImage1",
      border: "movingBorder1",
      srcs: [
        "../images/1.1.webp",
        "../images/1.2.webp",
        "../images/1.3.webp",
        "../images/1.4.webp",
        "../images/1.5.webp",
      ],
    },
    {
      img: "productImage2",
      border: "movingBorder2",
      srcs: [
        "../images/2.1.webp",
        "../images/2.2.webp",
        "../images/2.3.webp",
        "../images/2.4.webp",
        "../images/2.5.webp",
      ],
    },
    {
      img: "productImage3",
      border: "movingBorder3",
      srcs: [
        "../images/3.1.webp",
        "../images/3.2.webp",
        "../images/3.3.webp",
        "../images/3.4.webp",
        "../images/3.5.webp",
      ],
    },
    {
      img: "productImage4",
      border: "movingBorder4",
      srcs: [
        "../images/4.1.webp",
        "../images/4.2.webp",
        "../images/4.3.webp",
        "../images/4.4.webp",
        "../images/4.5.webp",
      ],
    },
    {
      img: "productImage5",
      border: "movingBorder5",
      srcs: [
        "../images/5.1.webp",
        "../images/5.2.webp",
        "../images/5.3.webp",
        "../images/5.4.webp",
        "../images/5.5.webp",
      ],
    },
    {
      img: "productImage6",
      border: "movingBorder6",
      srcs: [
        "../images/6.1.webp",
        "../images/6.2.webp",
        "../images/6.3.webp",
        "../images/6.4.webp",
        "../images/6.5.webp",
      ],
    },
    {
      img: "productImage7",
      border: "movingBorder7",
      srcs: [
        "../images/7.1.webp",
        "../images/7.2.webp",
        "../images/7.3.webp",
        "../images/7.4.webp",
      ],
    },
    {
      img: "productImage8",
      border: "movingBorder8",
      srcs: [
        "../images/8.1.webp",
        "../images/8.2.webp",
        "../images/8.3.webp",
        "../images/8.4.webp",
        "../images/8.5.webp",
        "../images/8.6.webp",
      ],
    },
    {
      img: "productImage11",
      border: "movingBorder11",
      srcs: [
        "../images/11.1.webp",
        "../images/11.2.webp",
        "../images/11.3.webp",
        "../images/11.4.webp",
        "../images/11.5.webp",
      ],
    },
    {
      img: "productImage12",
      border: "movingBorder12",
      srcs: [
        "../images/12.1.webp",
        "../images/12.2.webp",
        "../images/12.3.webp",
        "../images/12.4.webp",
      ],
    },
    {
      img: "productImage13",
      border: "movingBorder13",
      srcs: [
        "../images/13.1.webp",
        "../images/13.2.webp",
        "../images/13.3.webp",
        "../images/13.4.webp",
        "../images/13.5.webp",
      ],
    },
    {
      img: "productImage14",
      border: "movingBorder14",
      srcs: [
        "../images/14.1.webp",
        "../images/14.2.webp",
        "../images/14.3.webp",
        "../images/14.4.webp",
      ],
    },
    {
      img: "productImage15",
      border: "movingBorder15",
      srcs: [
        "../images/15.1.webp",
        "../images/15.2.webp",
        "../images/15.3.webp",
      ],
    },
    {
      img: "productImage16",
      border: "movingBorder16",
      srcs: [
        "../images/16.1.webp",
        "../images/16.2.webp",
        "../images/16.3.jpg",
        "../images/16.4.webp",
        "../images/16.5.webp",
        "../images/16.6.webp",
      ],
    },
    {
      img: "productImage17",
      border: "movingBorder17",
      srcs: [
        "../images/17.1.webp",
        "../images/17.2.webp",
        "../images/17.3.webp",
        "../images/17.4.webp",
        "../images/17.5.webp",
        "../images/17.6.webp",
      ],
    },
    {
      img: "productImage18",
      border: "movingBorder18",
      srcs: [
        "../images/18.1.webp",
        "../images/18.2.webp",
        "../images/18.3.webp",
        "../images/18.4.webp",
      ],
    },
  ];

  imageSets.forEach((set) => {
    const carouselImage = document.getElementById(set.img);
    let currentIndex = 0;
    let intervalId;
    const totalImages = set.srcs.length;
    const timePerImage = 1500;

    function changeImage() {
      carouselImage.style.opacity = 0;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % totalImages; // تغيير الصورة
        carouselImage.src = set.srcs[currentIndex];
        carouselImage.style.opacity = 1; // إظهار الصورة بعد التغيير
      }, 500); // إضافة تأخير صغير لإخفاء الصورة أثناء التبديل
    }

    function startCycle() {
      intervalId = setInterval(changeImage, timePerImage); // تسريع التبديل بين الصور
    }

    function resetCycle() {
      clearInterval(intervalId);
      carouselImage.style.opacity = 1;
    }

    carouselImage.addEventListener("mouseenter", function () {
      startCycle();
    });

    carouselImage.addEventListener("mouseleave", function () {
      resetCycle();
    });
  });
});
