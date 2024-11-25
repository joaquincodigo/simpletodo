import React from "react";

import TodoEntry from "./TodoEntry";

export default function TodoList({ todos, removeTodo, toggleTodo, showCompleted }) {
  return (
    <div className="todo-list shadow-lg overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-400 h-80 w-72 mx-auto mb-2 bg-white bg-opacity-20 rounded-lg scrollbar-thumb-rounded-full p-3">
      {todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center pb-20 h-full text-slate-700 opacity-50">
          <p className="tWrite-center">Add a new task</p>
          <p className="text-center">and start planning your day.</p>
        </div>
      ) : (
        <ul>
            {showCompleted ?
            
            todos
              .sort((a, b) => a.completed - b.completed) // Sort by completion status
              .map((todo, index) => (
                <TodoEntry
                  key={index}
                  todo={todo.text}
                  completed={todo.completed}
                  index={index}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
            ))
              :
              todos
              .filter((todo)=>todo.completed === false)
              .map((todo, index) => (
                <TodoEntry
                  key={index}
                  todo={todo.text}
                  completed={todo.completed}
                  index={index}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
            ))
          }
        </ul>
      )}
    </div>
  );
}
