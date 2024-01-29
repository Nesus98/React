// TaskItem.js
import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ text }) => {
  return <li className={styles.taskItem}>{text}</li>;
};

export default TaskItem;