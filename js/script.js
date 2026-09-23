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

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (formMessage) {
            formMessage.textContent =
                "Welcome to the Loom ♡ Your little notes are on the way.";
        }

        newsletterForm.reset();

    });

}
// PRODUCT PAGE - SIZE SELECTION

const sizeButtons = document.querySelectorAll(".choice-btn");
const sizeHelp = document.getElementById("sizeHelp");

const sizeData = {
    S: "S · Recommended for 4–8 kg",
    M: "M · Recommended for 7–12 kg",
    L: "L · Recommended for 9–14 kg",
    XL: "XL · Recommended for 12–17 kg"
};

sizeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        sizeButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedSize = button.textContent.trim();

        if (sizeHelp) {
            sizeHelp.textContent = sizeData[selectedSize];
        }

    });

});
// PRODUCT PAGE - PACK SELECTION

const packButtons = document.querySelectorAll(".pack-choice");

packButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        packButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});
// PRODUCT PAGE - ADD TO BAG

const pdpAddButton = document.getElementById("pdpAddButton");

if (pdpAddButton) {

    pdpAddButton.addEventListener("click", function () {

        // Find selected size
        const selectedSizeButton =
            document.querySelector(".choice-btn.active");

        // Find selected pack
        const selectedPackButton =
            document.querySelector(".pack-choice.active");

        const selectedSize = selectedSizeButton
            ? selectedSizeButton.textContent.trim()
            : "M";

        const selectedPack = selectedPackButton
            ? selectedPackButton.childNodes[0].textContent.trim()
            : "48";

        // Save product for cart page
        const cartItem = {
            name: "CloudSoft Diapers",
            price: 699,
            size: selectedSize,
            pack: selectedPack,
            quantity: 1,
            image: "images/cloudsoft.png"
        };

        localStorage.setItem("babyloomCart", JSON.stringify(cartItem));

        // Update bag number
        if (cartNumber) {
            cartNumber.textContent = "1";
        }

        // Button feedback
        pdpAddButton.textContent = "Added to Bag ✓";

        setTimeout(function () {
            pdpAddButton.textContent = "View Bag →";
        }, 900);

    });

}