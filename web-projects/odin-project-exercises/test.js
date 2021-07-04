const btn = document.querySelector("#btn");

function alertFunction(e) {
  e.target.style.background = "blue";
}

btn.addEventListener("click", alertFunction);
