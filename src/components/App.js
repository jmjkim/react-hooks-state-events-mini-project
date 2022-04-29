import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from 'uuid';

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const tasksWithId = TASKS.map(task => Object.assign(task, {id: uuidv4()}));
  const [taskArray, setTask] = useState(tasksWithId);
  const [filterBy, setFilterBy] = useState("All");
  const [isSelected, setIsSelected] = useState(false);

  function handleDelete(id) {
    const newTaskArray = taskArray.filter(task => task.id !== id);
    setTask(newTaskArray);
  }

  function handleSelected(event) {
    setIsSelected(!isSelected);
    return event.target.classList = (!isSelected) ? "selected" : null;
  }

  function handleFilterBy(event) {
    setFilterBy(event.target.id);
  }

  function handleNewTask(newTask) {
    setTask([...taskArray, newTask]);
  }

  const taskToDisplay = taskArray.filter((task) => {
    if (filterBy === "All") return true;
    else return task.category === filterBy;
  });


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSelected={handleSelected} handleFilterBy={handleFilterBy} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask} />
      <TaskList tasks={taskToDisplay} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
