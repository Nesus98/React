// import './CounterReducer.css';
import { useEffect, useReducer } from "react";
import { initialState, counterReducer } from "../reducers/counterReducer";


function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const buttonStyle ={
    backgroundColor: "dodgerblue",
    padding: ".5em 1em",
    margin: "3em",
    color: "white",
    borderRadius:".25rem",

  };
  return (
    <div>
      <button onClick={()=>dispatch({type: "INCREMENT"})} style={buttonStyle}>Increment</button>
      <button onClick={()=>dispatch({type: "DECREMENT"})} style={buttonStyle}>Decrement</button>
      <span style={{...buttonStyle, display:"block", width:"30%"}}>{state}</span>
    </div>
  );
}

export default Counter;

// import React, { useReducer } from "react";

// // Definimos el estado inicial y el reducer
// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const CounterReducer = () => {
//   // Utilizamos useReducer para manejar el estado y las acciones
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//     </div>
//   );
// };

// export default CounterReducer;
