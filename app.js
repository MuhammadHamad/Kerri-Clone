let navContainer = document.querySelector("#navContainer");
let logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 150) {
    navContainer.classList.add("navScroll");
    navContainer.style.color = "black";
    logo.src = "./images/logo-dark.png";
  } else {
    navContainer.classList.remove("navScroll");
    navContainer.style.color = "#fff";
    logo.src = "./images/logo.png";
  }
});
