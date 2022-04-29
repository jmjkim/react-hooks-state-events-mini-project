import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const categoryOptions = categories.map(category => (category !== "All") ? <option key={category}>{category}</option> : null);
  const [formData, setFormData] = useState({
    text: "",
    category: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuidv4(),
      text: formData.text,
      category: formData.category
    }

    onTaskFormSubmit(newItem);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
