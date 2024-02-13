const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");

document.addEventListener("keydown", function (event) {
  jump();
});
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}
let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusleft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusleft < 50 && cactusleft > 0 && dinoTop >= 140) {
    alert("game over");
  }
}, 10);
