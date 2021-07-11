const inner = document.querySelector(".outer");
for (let i = 0; i < 42; i++) {
  inner.innerHTML += '<div class="box"></div>';
}

let boxCount = 42;
let boxClickedCount = 0;
let mouseClicked = false;

document.addEventListener("mousedown", (e) => {
  mouseClicked = true;
})
document.addEventListener("mouseup", () => {
  mouseClicked = false;
})

// adding boxclicked class in box
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    if (mouseClicked){
      if (box.classList.contains("boxclicked")) {
        box.classList.remove("boxclicked");
        boxCount++;
        boxClickedCount--;
      } else {
        box.classList.add("boxclicked");
        boxCount--;
        boxClickedCount++;
      }
      // console.log(boxCount, boxClickedCount);
      let booked = document.querySelector("#booked");
      booked.innerText = `${boxClickedCount}`;
      let unbooked = document.querySelector("#unbooked");
      unbooked.innerText = `${boxCount}`;
    }
  });

  box.addEventListener("click", () => {
    if (box.classList.contains("boxclicked")) {
      box.classList.remove("boxclicked");
      boxCount++;
      boxClickedCount--;
    } else {
      box.classList.add("boxclicked");
      boxCount--;
      boxClickedCount++;
    }
    // console.log(boxCount, boxClickedCount);
    let booked = document.querySelector("#booked");
    booked.innerText = `${boxClickedCount}`;
    let unbooked = document.querySelector("#unbooked");
    unbooked.innerText = `${boxCount}`;
  })
});
