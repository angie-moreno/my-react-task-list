import React from "react";
import Task from "./Task";

export default function TaskList(props) {
  const { tareas, onComplete, onDeleteItem } = props;
  return (
    <div>
      {tareas.map((tarea, index) => (
        <Task
          key={`tarea-${index}`}
          tarea={tarea}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
