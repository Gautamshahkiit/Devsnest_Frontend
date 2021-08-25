import {useState} from 'react'
import Test from './test'

const Data = () => {
  const [data, setData] = useState([])
  
  const getData = () => {
    fetch("https://incovid.ml/hospital/delhi")
      .then((response) => response.json())
      .then((display) => {
        setData(display)
      });
  }
  return (
    <div>
      <button className="call" onClick={getData}></button>
      {data.map((val, key) => {
        return (
          <Test key={key} Name={val.Name}/>
        )
      })}
    </div>
  );
};

export default Data;
