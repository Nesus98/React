import React from "react";
import CounterReducer from "./Counter"; // Importa el componente CounterReducer

import classes from "./FilterReducer.module.css";
import { useReducer } from "react";

const lorem = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, liber2o",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libe3ro",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libe4ro",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, lib1ero",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libe5ro",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, lib6ero",
];

const initialState = [
  {
    id: 1,
    task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libero!",
    done: false,
  },
  {
    id: 2,
    task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libero!",
    done: false,
  },
  {
    id: 3,
    task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libero!",
    done: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "Remove":
      return state.filter((item) => item.id !== action.payload);
    case "Toggle":
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
};

function FilterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNewTask = () => {
    let lastElementPosition = state.length - 1;
    let loremSize = lorem.length - 1;
    let id = lastElementPosition >= 0 ? state[lastElementPosition].id + 1 : 0;

    let newTask = lorem[Math.floor(Math.random() * (loremSize + 1))];
    let done = Math.floor(Math.random() * 2) === 1 ? true : false;
    const finishedTask = {
      id,
      task: newTask,
      done,
    };

    dispatch({ type: "Add", payload: finishedTask });
  };

  return (
    <div className={classes["tasks-list"]}>
      <h1>To do app</h1>
      <CounterReducer /> {/* Renderiza el componente CounterReducer */}
      <ul>
        {state.map((item) => (
          <li key={item.id}>
            <span className={item.done ? classes.done : ""}>
              {item.task}, id:{item.id}
            </span>
            <div className={classes.actions}>
              <button
                onClick={() => dispatch({ type: "Toggle", payload: item.id })}
                className={classes.toggle}
              >
                Toggle
              </button>
              <button
                onClick={() => dispatch({ type: "Remove", payload: item.id })}
                className={classes.remove}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleNewTask} className={classes["new-task"]}>
        Add
      </button>
    </div>
  );
}

export default FilterReducer;
