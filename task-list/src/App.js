import classes from "./App.module.css";
import TaskInput from "./components/Tasks/TaskInput";
import TaskList from "./components/Tasks/TaskList";
import { useEffect, useState } from "react";
import HourGlass from "./components/UI/Spinners/HourGlass";
// import Item from "./components/Tasks/Item";

const BASE_URL =
  "https://task-list-cc239-default-rtdb.europe-west1.firebasedatabase.app/";

function App() {
  const [task, setNewTask] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const fetchTaskHandler = async (
    method = "GET",
    task = { id: "", text: "" }
  ) => {
    try {
      setPending(true);
      setError(null);

      let response = null;

      if (method === "DELETE") {
        response = await fetch(
          BASE_URL + "tasks/" +
            task.id +
            ".json",
          { method }
        );
      } else if (method === "PATCH") {
        response = await fetch(
          BASE_URL + "tasks/" +
            task.id +
            ".json",
          {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: task.text }),
          }
        );
      } else {
        response = await fetch(
          BASE_URL + "tasks.json",
          {
            method,
            headers: {
              "Content-Type": method !== "GET" ? "application/json" : "",
            },
            body:
              method !== "GET" ? JSON.stringify({ title: task.text }) : null,
          }
        );
      }

      if (response.ok) {
        const data = await response.json();
        if (method === "GET") {
          setNewTask(data);
        } else {
          fetchTaskHandler();
        }
      }
    } catch (error) {
      setError({
        message: error.message || "Something went wrong!",
      });
    }
    setPending(false);
  };

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
        {!pending && task !== null && error === null && (
          <TaskList
            items={task}
            onDeleteItem={deleteHandler}
            onEditItem={updateItemHandler}
          ></TaskList>
        )}
        {!pending && task === null && !error && (
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
}

export default App;
