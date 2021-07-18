console.log("Hello day 11");

const questions = [
  {
    question: "When was Star Wars released ?",
    options: ["1975", "1984", "1978", "1991"],
  },
  {
    question: "Who was the father of Luke Skywalker ?",
    options: ["jarjar", "obiWan Kenobi", "Darth Vader", "Han Solo"]
  },
  {
    question: "What is the color of Rey Skywalker's lightsaber ?",
    options: ["bloody-red", "golden-yellow", "vibrant-purple", "sky-red"]
  }
];

let points = 0;

const createOption = (option, answer = false) => {
  const optionHolder = document.createElement("div");
  optionHolder.className = "option";

  const button = document.createElement("button");
  button.innerHTML = option;
  button.addEventListener("click", () => {
    if (answer) {
      if (!button.classList.contains("correct")) {
        points++;
        console.log(points);
      }
      button.classList.add("correct");
      console.log(points);
    }
    button.classList.add("wrong");
  });
  optionHolder.append(button);
  return optionHolder;
};

questions.forEach((current, number) => {
  const container = document.createElement("div");
  container.className = "container";

  const question = document.createElement("div");
  question.className = "question";

  question.innerHTML = `${number + 1}. ${current.question}`;

  container.append(question);

  const options = document.createElement("div");
  options.className = "options";

  const optionArr = [];
  current.options.forEach((option, number) => {
    if (number == 0) {
      optionArr.push(createOption(option, true));
    } else {
      optionArr.push(createOption(option));
    }   
  });

  optionArr.forEach((option) => {
    options.append(option);
  });
  container.append(options);
  document.body.append(container);
});
