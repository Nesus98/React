// TaskForm.js
import React, { useState } from 'react';
import styles from './TaskForm.module.css';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSaveTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className={styles.taskForm}>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleSaveTask}>Save</button>
    </div>
  );
};

export default TaskForm;