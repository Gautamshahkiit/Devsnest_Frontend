import { useState, useEffect } from "react";

const App = () => {
  const [templates, setTemplates] = useState([]);
  useEffect(() => {}, []);
  fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      setTemplates(data.data.memes);
      // console.log(data.data.memes);
    });
  return (
    <div className="App">
      <h1>Meme Generator</h1>
    </div>
  );
};

export default App;
