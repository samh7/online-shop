const hemMenu = document.getElementById("hammenu");
const hamScreen = document.getElementById("hamburger-screen");
const CategoriesExpnanded = document.getElementById("categories-expanded");
const cartOvverlay = document.getElementById("hamburger-screen-2");
CategoriesExpnanded.classList.add("categories-hidden");

cartOvverlay.classList.add("categories-hidden");
const header = document.getElementById("header");

let lastScrolltop = 0;
window.addEventListener("", function () {
  CategoriesExpnanded.classList.add("categories-hidden");
});
window.addEventListener("scroll", function () {
  let scrollTop = this.document.documentElement.scrollTop;
  if (scrollTop >= lastScrolltop) {
    header.style.transform = "translateY(-100%)";
    CategoriesExpnanded.classList.add("categories-hidden");
  } else if (scrollTop < lastScrolltop) {
    header.style.transform = "translateY(0)";
  } else {
    header.style.transform = "translateY(-100%)";
  }
  lastScrolltop = scrollTop;
});

hemMenu.addEventListener("click", function () {
  hemMenu.classList.toggle("open");
  hamScreen.classList.toggle("ham-screen-expand");
  header.classList.toggle("transparent");
});

const productsButtonClicked = () => {
  window.location.href = "#products";
  hemMenu.classList.remove("open");
  hamScreen.classList.remove("ham-screen-expand");
};

window.addEventListener("resize", function (e) {
  const height = window.innerHeight;
  const width = window.innerWidth;
  if (width > 500) {
    hemMenu.classList.remove("open");
    hamScreen.classList.remove("ham-screen-expand");
  }
});

const expandCategories = () => {
  CategoriesExpnanded.classList.toggle("categories-hidden");
};

// categories-hidden

const openCart = () => {
  cartOvverlay.classList.toggle("categories-hidden");
};

const closeCart = () => {
  cartOvverlay.classList.add("categories-hidden");
};

const categoriesHamScreen = document.getElementById("categories-ham-screen");
const toggleCloseMenu = () => {
  categoriesHamScreen.classList.remove("toggle-categories-ham-screen");
};
document.getElementById("selected-prod").style.transform = "translateY(-40%);";

const closeSelecteItemOverlay = () => {
  console.log("hello ,weo");
  document
    .getElementById("selected-prod")
    .classList.toggle("selected-prod-close");
};

window.addEventListener("load", function () {
  this.document
    .getElementById("loader-index")
    .classList.add("loader-index-hide");
});

// footer
const footerElement = document.getElementById("footer");
const footerContent = document.createElement("DIV");
footerContent.innerHTML = `
<div class=" bg-black text-white flex w-full items-center footer-attr-bg-color center-footer-content">
<div class="text-sm  flex items-center">
    Copyright &copy; 2024, All Rights Reserved
    <div class="flex footer-name"> <a href="https://github.com/samh7/">samh7</a></div>
</div>
</div>
`;

footerElement.append(footerContent);
