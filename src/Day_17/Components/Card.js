import { useState } from "react";
import './Styles/Card.css'

// states are immutable.
const Card = () => {
  const [items] = useState([
    {
      id: 1,
      food: "pizza",
      calCount: 266,
    },
    {
      id: 2,
      food: "naan",
      calCount: 110,
    },
    {
      id: 3,
      food: "papad",
      calCount: 37,
    },
    {
      id: 4,
      food: "biryani 100gm",
      calCount: 448,
    },
    {
      id: 5,
      food: "fish curry",
      calCount: 238,
    },
    {
      id: 6,
      food: "dosa",
      calCount: 170,
    },
    {
      id: 7,
      food: "samosa",
      calCount: 262,
    },
    {
      id: 8,
      food: "fried chicken momos",
      calCount: 1200,
    },
    {
      id: 9,
      food: "steam veg momos",
      calCount: 390,
    },
    {
      id: 10,
      food: "khichdi",
      calCount: 200,
    },
  ]);

  return (
    <div className="card">
      {items.map((item) => (
        <div key={item.id} className="carditem">
          <h3>{item.food}</h3>
          <p>Calorie Count = {item.calCount}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
