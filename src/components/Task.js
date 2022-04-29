import React from "react";

function Task({ id, text, category, handleDelete }) {
  return (
    <div className="task" key={id}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(id)}>X</button>
    </div>
  );
}

export default Task;
