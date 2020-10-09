const BTN = document.querySelector(".will-it-be-yours p");
const NOTE = document.querySelector(".will-it-be-yours h3");
const LINK = document.querySelector(".will-it-be-yours a");

BTN.classList.remove("hide");
NOTE.classList.add("hide");

function reveal(e) {
  e.preventDefault();
  BTN.classList.toggle("hide");
  NOTE.classList.toggle("hide");
}

LINK.addEventListener("click", reveal, false);
LINK.addEventListener("click", function() {console.log ("The link was clicked!");}, false);
