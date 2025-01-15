// document.addEventListener("DOMContentLoaded", function () {
//     const imageSets = [
//         {img: "carouselImage1", border: "movingBorder1", srcs: [
//             "./images/6AC3F473-CE4F-4FF0-9F26-6B7823B973E2_1800x1800.webp",
//             "./images/14684898-167C-412E-8A49-1E7F4517E459_1800x1800.webp",
//             "./images/16_f171dfaa-5cc1-4567-91fb-7b86945c12b6_1800x1800.png.webp"]},

//         {img: "carouselImage2", border: "movingBorder2", srcs: [
//             "./images/6AC3F473-CE4F-4FF0-9F26-6B7823B973E2_1800x1800.webp",
//             "./images/14684898-167C-412E-8A49-1E7F4517E459_1800x1800.webp",
//             "./images/16_f171dfaa-5cc1-4567-91fb-7b86945c12b6_1800x1800.png.webp"]},

//         {img: "carouselImage3", border: "movingBorder3", srcs: [
//             "./images/6AC3F473-CE4F-4FF0-9F26-6B7823B973E2_1800x1800.webp",
//             "./images/14684898-167C-412E-8A49-1E7F4517E459_1800x1800.webp",
//             "./images/16_f171dfaa-5cc1-4567-91fb-7b86945c12b6_1800x1800.png.webp"]},

//         {img: "carouselImage4", border: "movingBorder4", srcs: [
//             "./images/6AC3F473-CE4F-4FF0-9F26-6B7823B973E2_1800x1800.webp",
//             "./images/14684898-167C-412E-8A49-1E7F4517E459_1800x1800.webp",
//             "./images/16_f171dfaa-5cc1-4567-91fb-7b86945c12b6_1800x1800.png.webp"]},

//     ];
//     imageSets.forEach(set => {
//         const carouselImage = document.getElementById(set.img);
//         const movingBorder = document.getElementById(set.border);
//         let currentIndex = 0;

//         function changeImage() {
//             carouselImage.style.opacity = 0; // Start the fade-out effect
//             movingBorder.style.width = "100%"; // Start the border movement
//             setTimeout(() => {
//                 currentIndex = (currentIndex + 1) % set.srcs.length;
//                 carouselImage.src = set.srcs[currentIndex];
//                 carouselImage.style.opacity = 1; // Fade in the new image
//                 if (currentIndex === 0) {
//                     movingBorder.style.display = "bolck"; // Reset the border for the next cycle
//                 }
//             }, 500); // This matches the CSS transition duration
//         }

//         carouselImage.addEventListener("mouseenter", function () {
//             intervalId = setInterval(changeImage, 3000); // Change image every 3 seconds
//             movingBorder.style.width = "100%"; // Start the border movement
//         });

//         carouselImage.addEventListener("mouseleave", function () {
//             clearInterval(intervalId);
//             carouselImage.style.opacity = 1; // Ensure the image is fully visible
//             movingBorder.style.width = "0"; // Stop the border movement
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const images = ["./images/1.1.webp", "./images/1.2.webp", "./images/1.3.webp"]; // Add your image URLs here
//     const carouselImage = document.getElementById("carouselImage1");
//     const movingBorder = document.getElementById("movingBorder1");
//     let currentIndex = 0;
//     let intervalId;

//     function changeImage() {
//         carouselImage.style.opacity = 0; // Start the fade-out effect
//         movingBorder.style.width = "100%"; // Start the border movement
//         setTimeout(() => {
//             currentIndex = (currentIndex + 1) % images.length;
//             carouselImage.src = images[currentIndex];
//             carouselImage.style.opacity = 1; // Fade in the new image
//             if (currentIndex === 0) {
//                 setTimeout(() => {
//                     movingBorder.style.width = "0"; // Reset the border for the next cycle
//                 }, 3000); // Sync with the border movement duration
//             }
//         }, 500); // This matches the CSS transition duration
//     }

//     carouselImage.addEventListener("mouseenter", function () {
//         intervalId = setInterval(changeImage, 3000); // Change image every 3 seconds
//         movingBorder.style.width = "100%"; // Start the border movement
//     });

//     carouselImage.addEventListener("mouseleave", function () {
//         clearInterval(intervalId);
//         carouselImage.style.opacity = 1; // Ensure the image is fully visible
//         movingBorder.style.width = "0"; // Reset the border movement
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const images = ["./images/1.1.webp", "./images/8.2.webp", "./images/3.3.webp"]; // Add your image URLs here
//     const carouselImage = document.getElementById("carouselImage1");
//     const movingBorder = document.getElementById("movingBorder1");
//     let currentIndex = 0;
//     let intervalId;

//     const totalDuration = 3000; // Duration for each image + border movement (3 seconds)
//     const borderDuration = 3000; // Duration for the border to move from 0 to 100%

//     // Function to change the image with a fade effect
//     function changeImage() {
//         carouselImage.style.opacity = 0; // Start the fade-out effect
//         setTimeout(() => {
//             currentIndex = (currentIndex + 1) % images.length;
//             carouselImage.src = images[currentIndex];
//             carouselImage.style.opacity = 1; // Fade in the new image
//         }, 500); // This matches the CSS transition duration
//     }

//     // Function to move the border from 0 to 100%
//     function moveBorder() {
//         movingBorder.style.transition = `width ${borderDuration / 1000}s linear`; // Make sure the border takes the full duration
//         movingBorder.style.width = "100%"; // Start the border movement

//         // After the border reaches 100%, reset it to 0% and start again
//         setTimeout(() => {
//             movingBorder.style.width = "0"; // Reset the border to 0 width
//         }, borderDuration); // Wait for the full duration of the border movement before resetting
//     }

//     // Start the carousel (image change and border movement)
//     function startCarousel() {
//         changeImage(); // Change the image immediately
//         moveBorder();  // Start the border movement immediately

//         intervalId = setInterval(() => {
//             changeImage(); // Change image every 'totalDuration'
//             moveBorder();  // Move the border every 'totalDuration'
//         }, totalDuration);
//     }

//     // When mouse enters the image, start the carousel
//     carouselImage.addEventListener("mouseenter", function () {
//         startCarousel(); // Start the carousel on mouse enter
//     });

//     // When mouse leaves the image, stop the carousel
//     carouselImage.addEventListener("mouseleave", function () {
//         clearInterval(intervalId); // Stop the interval when the mouse leaves
//         carouselImage.style.opacity = 1; // Ensure the image is fully visible
//         movingBorder.style.width = "0"; // Reset the border movement to 0%
//     });
// });







const border = document.querySelector(".border");
document.querySelector(".image-container").addEventListener("mouseover", () => {
  border.style.animationPlayState = "running";
});
document.querySelector(".image-container").addEventListener("mouseout", () => {
  border.style.animationPlayState = "paused";
});
