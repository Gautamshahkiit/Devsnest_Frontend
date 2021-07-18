console.log("hello day 10");
// const inner = document.querySelector(".outer");
// for (let i = 0; i < 20; i++) {
//   inner.innerHTML += '<div class="box"></div>';
// }

let words = [
  "sharique",
  "emin",
  "amit",
  "akshansh",
  "prasanna",
  "shimanshu",
  "sumit",
  "monika",
  "popoye",
  "gauti",
];
words = [...words, ...words];
console.log(words);

function randomize() {
  return Math.floor(Math.random() * words.length);
}
console.log(randomize());

let moves = 0;
let matches = 0;
const n = words.length;

for (let i = 1; i <= n; i++) {
  const card = document.createElement("div");
  card.classList.add("flip-card");

  const inner = document.createElement("div");
  inner.classList.add("flip-inner");

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  const rand = randomize();
  back.innerHTML = "<h2>" + words[rand] + "</h2>";
  words.splice(rand, 1);
  // console.log(words);

  back.classList.add("back");
  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);
  document.querySelector("#grid").appendChild(card);
}

let clicked;
let cards = document.querySelectorAll(".flip-card");
let gameActive = true;

for (let card of cards) {
  card.addEventListener("click", (e) => {
    if (!gameActive) return;
    moves++;
    document.querySelector("span").innerHTML = moves;

    if (clicked) {
      card.firstChild.classList.add("flipped");
      console.log(card);
      gameActive = false;
      setTimeout(() => {
        if (
          card.firstChild.lastChild.innerHTML !==
          clicked.firstChild.lastChild.innerHTML && card.firstChild.classList.contains("flipped")
        ) {
          card.firstChild.classList.remove("flipped");
          clicked.firstChild.classList.remove("flipped");
        } else {
          matches++;
          card.style.visibility = "hidden";
          clicked.style.visibility = "hidden";
        }
        clicked = undefined;
        gameActive = true;
      }, 500);
    } else {
      clicked = card;
      card.firstChild.classList.add("flipped");
      console.log(card);
    }
  });
}

setInterval(() => {
  if (matches === 10) {
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".popup > div > h2").innerHTML = "You Won !!!";
  }
}, 100);

document.querySelector("#reload").addEventListener("click", (e) => {
  window.location.reload();
});

// const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//   })
// })
