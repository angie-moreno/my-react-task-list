import React from "react";

export default function Task({ tarea, onComplete, onDeleteItem }) {
  const getStyle = () => {
    return {
      textDecoration: tarea.completed ? "line-through" : "none",
      margin: "20px",
      border: "1px solid white",
      backgroundColor: "cadetblue",
    };
  };
  return (
    <div style={getStyle()}>
      <input
        type="checkbox"
        checked={tarea.completed}
        onChange={() => onComplete(tarea.id)}
      />
      {tarea.task}
      <button className="add-btn" onClick={() => onDeleteItem(tarea.id)}>
        X
      </button>
    </div>
  );
}
