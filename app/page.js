"use client";

import React, { useState, useEffect } from "react";
import TodoEntry from "./components/TodoEntry";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component renders on the client-side
  }, []);

  // Prevent rendering before the component mounts on the client
  if (!isClient) return null;

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

      <div className="todo-list overflow-y-scroll scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-slate-500 h-80 w-72 mx-auto mb-4 bg-white bg-opacity-20 rounded-lg scrollbar-thumb-rounded-full p-3">
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
          className="rounded-l-lg border-gray-300 focus:border-blue-500 p-2.5"
          type="text"
          placeholder="Add a todo"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              addTodo(e.target.value.trim());
              e.target.value = "";
            }
          }}
        />

        <button
          className="rounded-r-lg bg-blue-700 text-white px-3"
          onClick={() => {
            const input = document.querySelector('input[type="text"]');
            const value = input.value.trim();
            if (value !== "") {
              addTodo(value);
              input.value = "";
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
