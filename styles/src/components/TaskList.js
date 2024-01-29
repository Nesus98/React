// TaskList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    'Learn database management!',
    'Create RESTful API',
    'Create a project!',
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={styles.taskList}>
      <h2>Post a Task</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} text={task} />
        ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default TaskList;