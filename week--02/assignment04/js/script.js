// Request 1: Click to Change Text.

const welcomeMessage = document.querySelector(".banner h2");
const banner = document.querySelector(".banner");

banner.addEventListener("click", () => {
    welcomeMessage.textContent = "Have a Good Time!";
})

// Request 2: Click to Show/Close Menu

const menuBar = document.querySelector("nav .figure img");
const hiddenMenu = document.querySelector("nav .text");
const hiddenButton = document.querySelector("nav .text .button");

menuBar.addEventListener("click", () =>{
    hiddenMenu.style.display = "block";
    menuBar.style.display = 'none';
})
hiddenButton.addEventListener("click", () =>{
    hiddenMenu.style.display = 'none';
    menuBar.style.display = 'block';
})

// Request 3: Click to Show More Content Boxes.

const showMoreButton = document.querySelector("footer");
const secondSection = document.querySelector(".second-section");

showMoreButton.addEventListener("click", () => {
    secondSection.style.display = "flex";
})
