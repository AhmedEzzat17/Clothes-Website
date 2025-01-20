document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
});


window.addEventListener("load", function () {
    const navbar = document.querySelector(".navbar");
    const carousel = document.querySelector(".carousel");
    const carousel_caption = document.querySelector(".carousel-caption");
    navbar.classList.add("visible");
    carousel.classList.add("visible");
    carousel_caption.classList.add("visible");
  });


  let swiper = new Swiper(".slider-wrapper", { // slider
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



  document.addEventListener("DOMContentLoaded", () => {  // fade in , fade in left
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







  function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = thumbnail.src;
    document.querySelectorAll('.thumbnail-images img').forEach((img) => {
        img.classList.remove('active');
    });
    thumbnail.classList.add('active');
}


function selectSize(button) {
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach((btn) => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

const images = [
    '../images/a.1.jpg',
    '../images/a.2.jpg',
    '../images/a.3.jpg',
    '../images/a.4.jpg',
];

let currentImageIndex = 0;

function openModal(element) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const body = document.body;
    modalImage.src = element.src;
    modal.style.display = "block";
    body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('modal');
    const body = document.body;
    modal.style.display = "none";
    body.classList.remove('modal-open');
}

function changeImage(direction) {
    const modalImage = document.getElementById('modalImage');
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    modalImage.src = images[currentImageIndex];
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

document.getElementById('mainImage').addEventListener('click', function () {
    openModal(this);
});

document.querySelectorAll('.thumbnail-images img').forEach((img) => {
    img.addEventListener('click', function () {
        changeMainImage(this);
    });
});







