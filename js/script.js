const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


let cartCount = 0;

const cartNumber = document.querySelector(".cart span");
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        cartNumber.textContent = cartCount;

        const originalText = button.textContent;

        button.textContent = "Added ✓";

        setTimeout(function () {
            button.textContent = originalText;
        }, 1000);

    });

});


const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Welcome to the Loom ♡ Your little notes are on the way.";

    newsletterForm.reset();

});