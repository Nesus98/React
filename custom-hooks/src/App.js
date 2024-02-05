import classes from "./App.module.css";
import TaskInput from "./components/Tasks/TaskInput";
import TaskList from "./components/Tasks/TaskList";
import { useEffect, useState } from "react";
import HourGlass from "./components/UI/Spinners/HourGlass";
import useFetch from "./hooks/useFetch";
 



function App() {
  const {pending, error,data,fetchTaskHandler} = useFetch();

  useEffect(() => {
    fetchTaskHandler();
  }, []);

  const addTaskHandler = (enteredText) => {
    fetchTaskHandler("POST", { text: enteredText });
  };

  const deleteHandler = (taskId) => {
    fetchTaskHandler("DELETE", { id: taskId });
  };

  const updateItemHandler = (taskId, taskText) => {
    fetchTaskHandler("PATCH", { id: taskId, text: taskText });
  };

  return (
    <main>
      <section className={classes["task-form"]}>
        <TaskInput onAddTask={addTaskHandler}></TaskInput>
      </section>
      {pending === true && <HourGlass></HourGlass>}
      <section className={classes["task-content"]}>
        {!pending && data !== null && error === null && (
          <TaskList
            items={data}
            onDeleteItem={deleteHandler}
            onEditItem={updateItemHandler}
          ></TaskList>
        )}
        {!pending && data === null && !error && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            No task available. Add one?
          </h2>
        )}
        {!pending && error !== null && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            {error.message}
          </h2>
        )}
      </section>
    </main>
  );
};

export default App;
