import "./App.css";
import { useState } from "react";
import Person from "./Person"
import ShowCounter from "./ShowCounter"

function App() {
  const [count, setCount] = useState(0);
    
  const handlePlusOne = ()=>{
    setCount(count +1)
  }
  const handleTimesFive = ()=>{
    setCount(count *5)
  }
  const handleMinusOne = ()=>{
    setCount(count *5)
  }
  const handleDivideByHundred = ()=>{
    if (count !== 0) {
      setCount(count /100)
    } else{
      console.log("Division is not allowed");
    }
  }
  return (
    <div>
      <ShowCounter count={count}></ShowCounter>
      {/* <p>Has clicado {count} veces </p> */}
      <button onClick={handlePlusOne}>Pulsame para sumar 1</button>
      <button onClick={handleTimesFive}>Pulsame para multiplicar por 5</button>
      <button onClick={handleMinusOne}>Pulsame para restar -1</button>
      <button onClick={handleDivideByHundred}>Pulsame para dividir por 100</button>
    </div>
  );
}

export default App;
