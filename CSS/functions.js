const hamburgerToggle = document.querySelector("#hamburger-toggle");   /* This stores a reference to the Hamburger-menu in this variable we've created */
const navbar = document.querySelector("#navbar");

hamburgerToggle.addEventListener("click", onHamburgerClick);       /* On that variable ("hamburgerToggle")- we can add an event listener, to listen for the "click"-event (event = something that happens with elements) */
                                                                   /* And on that event -> we want to run the function "onHamburgerClick" */
function onHamburgerClick() {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
    } else {
        navbar.classList.remove("open");
    }
}