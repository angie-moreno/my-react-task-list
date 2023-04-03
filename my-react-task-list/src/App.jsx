import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import data from "../data.json";

function App() {
  const [tareas, setTareas] = useState(data);

  console.log(tareas);

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
