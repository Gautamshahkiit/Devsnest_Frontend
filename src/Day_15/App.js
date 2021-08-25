import Button from "./Button";
import { useState } from "react";

function Day15() {
  const [clicked, setButton] = useState(false);

  const click = () => {
    if (clicked) setButton(false);
    else setButton(true);
  };
  console.log(clicked);
  return (
    <div className="App">
      <h1>Hello Day 15 !</h1>
      <p>
        This is Day 15 THA where we have to create a button, which upon clicking
        displays "You Liked This"
      </p>
      {!clicked ? <Button click={click} /> : "You liked this !" }
    </div>
  );
}

export default Day15;
