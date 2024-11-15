"use client";

import React, { useState } from "react";
import TodoEntry from "./components/TodoEntry";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="title-wrapper text-center mb-4">
        <h1 className="text-4xl font-bold inline-block">Simple ToDo</h1>
      </div>

      <div className="todo-list w-72 mx-auto mb-4 bg-white rounded-lg">
        <ul>
          {todos.map((todo, index) => (
            <TodoEntry
              key={index}
              todo={todo}
              index={index}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      </div>

      <div className="input-wrapper flex justify-center">
        <input
        className="rounded"
          type="text"
          placeholder="Add a todo"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              addTodo(e.target.value.trim());
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
}
