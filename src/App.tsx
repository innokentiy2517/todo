import React from "react";
import "./App.scss";
import TodoHeader from "./Components/TodoHeader";
import TodoAddField from "./Components/TodoAddField";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="todo">
      <TodoHeader />
      <TodoAddField />
      <TodoList />
    </div>
  );
}

export default App;
