const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


