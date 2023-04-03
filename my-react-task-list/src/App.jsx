import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import data from "./components/data.json";
import TaskList from "./components/TaskList";
import TareaForm from "./components/TareaForm";

function App() {
  const [tareas, setTareas] = useState(data);

  const onComplete = (id) => {
    setTareas(
      tareas.map((tarea) => {
        return tarea.id === Number(id)
          ? { ...tarea, completed: !tarea.completed }
          : { ...tarea };
      })
    );
  };
  const onDeleteItem = (id) => {
    setTareas([...tareas].filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    const newItem = { id: +new Date(), task: newTodo, completed: false };
    setTareas([...tareas, newItem]);
  };

  return (
    <div className="container">
      <Header />
      <TaskList
        tareas={tareas}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
      <TareaForm addTodo={addTodo} />
    </div>
  );
}

export default App;
