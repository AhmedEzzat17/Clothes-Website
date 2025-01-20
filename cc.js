function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;

    const allThumbnails = document.querySelectorAll('.thumbnail-images img');
    allThumbnails.forEach(img => {
        img.classList.remove('active');
    });

    element.classList.add('active');
}


function selectSize(button) { // size
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach((btn) => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}


function openModal(element) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const body = document.body;

    // تعيين مصدر الصورة في النافذة المنبثقة
    modalImage.src = element.src;

    // عرض النافذة
    modal.style.display = "block";

    // إضافة تأثير الشفافية على العناصر الخلفية
    body.classList.add('modal-open');
}
function closeModal() {
    const modal = document.getElementById('modal');
    const body = document.body;

    // إخفاء النافذة
    modal.style.display = "none";

    // إزالة تأثير الشفافية على العناصر الخلفية
    body.classList.remove('modal-open');
}
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');

    // إذا كان الضغط في أي مكان خارج الصورة، أغلق النافذة
    if (event.target === modal) {
        closeModal();
    }
});
document.getElementById('mainImage').addEventListener('click', function() {
    openModal(this);
});
document.querySelector('.close').addEventListener('click', closeModal);



const images = [
    './images/7.1.webp',
    './images/5.1.webp',
    './images/2.1.webp',
    './images/6.2.webp',
    './images/1.1.webp'
];

let currentImageIndex = 0;

function openModal(element) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const body = document.body;

    modalImage.src = element.src;
    currentImageIndex = images.indexOf(element.src);
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
    const modalContent = document.querySelector('.modal-content');

    if (event.target === modal) {
        closeModal();
    }
});
document.querySelectorAll('.thumbnail-images img').forEach((img) => {
    img.addEventListener('click', function() {
        openModal(this);
    });
});


