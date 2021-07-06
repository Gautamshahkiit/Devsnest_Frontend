let mult = document.querySelector(".outer");
for (let i = 0; i < 400; i++) {
  mult.innerHTML += '<div class="box"></div>';
}
const defaultWhite = [
  129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
  190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
  250, 252, 266, 268, 271, 273,
];
const deft = document.querySelectorAll(".box");
defaultWhite.forEach( (item) => {
  deft[item].classList.add('boxclicked');
})

const boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (box.classList.contains("boxclicked")) {
      box.classList.remove("boxclicked");
    } else {
      box.classList.add("boxclicked");
    }
  });
});
