const menuToggle = document.querySelector("#menu-togle");
const mobileNavContainer = document.querySelector("#mobile-nav");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("menu-icon-active");
  mobileNavContainer.classList.toggle("mobile-nav--active");
};

function viewdiv(id) {
  var el = document.getElementById(id);
  var link = document.getElementById("toggleLink");
  if (el.style.display == "grid") {
    el.style.display = "none";
    link.innerText = link.getAttribute("data-text-hide");
  } else {
    el.style.display = "grid";
    link.innerText = link.getAttribute("data-text-show");
  }
}
