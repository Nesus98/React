import classes from "./App.module.css";
import data from "./mockedDB/task.json";
import TaskInput from "./components/Tasks/TaskInput";
import TaskList from "./components/Tasks/TaskList";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(data);
  const addTaskHandler = (text) => {
    setValue((prevTask) => {
      const updatedTasks = [...prevTask];
      updatedTasks.unshift({
        id: Math.random().toString(16).substring(2),
        text,
      });
      return updatedTasks;
    });
  };
  const deleteHandler = (id) => {
    setValue((prevTask) => {
      const updatedTasks = prevTask.filter((task) => task.id !== id);
      return updatedTasks;
    });
  };

  let content = (
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
  );
  if (value.length > 0) {
    content = <TaskList items={value} onDeleteItem={deleteHandler}></TaskList>;
  }
  return (
    <main>
      <section className={classes["task-form"]}>
        <TaskInput onAddTask={addTaskHandler}></TaskInput>
      </section>
      <section className={classes["task-content"]}>{content}</section>
    </main>
  );
}

export default App;
