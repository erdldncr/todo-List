import React from "react";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoList />
      <AddTodo/>
    </div>
  );
}