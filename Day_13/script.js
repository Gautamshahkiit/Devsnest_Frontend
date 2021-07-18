console.log("Hello day 13");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((data) => {
      document.querySelector("#quote").innerHTML = data.content;
      document.querySelector('#author').innerHTML ="- " + data.author+ " -";
    })
    .catch((err) => console.log(err));
};

const random = document.querySelector('.randomize');
random.addEventListener('click', () => {
  getQuote();
})
