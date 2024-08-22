// hamburger menu
const hamburgerMenuIcon = document.querySelector(".hamburger-icon");
const hamburgerMenuContainer = document.querySelector(".hamburger-menu");
const hamburgerMenuList = document.querySelector(".ham-list");
let hamburgerMenuFlag = false;
// ---------------------------hamburger menu--------------------------

hamburgerMenuIcon.addEventListener("click", () => {
  if (hamburgerMenuFlag) {
    hamburgerMenuContainer.style.visibility = "hidden";
    hamburgerMenuContainer.style.height = "0";
    hamburgerMenuList.style.fontSize = "0";
    hamburgerMenuIcon.src = "./assets/navbar/menu.png";
    hamburgerMenuFlag = false;
  } else {
    hamburgerMenuContainer.style.visibility = "visible";
    hamburgerMenuContainer.style.height = "50vh";
    hamburgerMenuList.style.fontSize = "15px";
    hamburgerMenuIcon.src = "./assets/navbar/close.png";
    hamburgerMenuFlag = true;
  }
});
