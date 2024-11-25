import React from 'react';

export default function NewTaskInput({ addTodo }) {
  return (
    <div className="shadow-lg mx-auto input-wrapper rounded-xl bg-red-500 flex overflow-hidden focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-blue-400 focus-within:ring-offset-purple-200 w-64">

      <input
        className="border-none flex-1 p-2.5 focus:outline-none"
        type="text"
        placeholder="Write a new task"
        onKeyDown={(e) => {
          const value = e.target.value.trim();
          if (e.key === "Enter" && value !== "") {
            addTodo({ text: value, completed: false });
            e.target.value = "";
          }
        }}
      />

      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white ps-2 pe-3"
        onClick={() => {
          const input = document.querySelector('input[type="text"]');
          const value = input.value.trim();
          if (value !== "") {
            addTodo({ text: value, completed: false });
            input.value = "";
          }
        }}
      >
        Add
      </button>

    </div>
  );
}
