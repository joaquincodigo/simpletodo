"use client";

import React, { useState, useEffect } from "react";

import { useLocalStorage } from "./hooks/useLocalStorage";

import NewTaskInput from "./components/NewTaskInput";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import ToggleCompleted from "./components/ToggleCompleted";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [isClient, setIsClient] = useState(false);
  const [showCompleted, setShowCompleted] = useState(true)

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

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted)
  }

  return (
    <div>

      <Title/>
      

      <TodoList todos={todos} toggleTodo={toggleTodo} showCompleted={showCompleted} removeTodo={removeTodo} />

      <ToggleCompleted toggleShowCompleted={toggleShowCompleted} />

      <NewTaskInput addTodo={addTodo} />


    </div>
  );
}
