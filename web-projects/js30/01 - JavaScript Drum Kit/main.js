function playSound(event) {
  const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
  const audioFile = document.querySelector(
    `audio[data-key = "${event.keyCode}"]`
  );

  if (!audioFile) return;

  audioFile.currentTime = 0;
  audioFile.play();

  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);
