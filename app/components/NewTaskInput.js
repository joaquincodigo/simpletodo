import React from 'react'

export default function NewTaskInput({addTodo}) {
	return (
		<div>
    <div className="input-wrapper  flex justify-center">
        <input
          className="rounded-l-lg border-gray-300 w-56 p-2.5"
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
          className="rounded-r-lg bg-indigo-500 text-white px-3"
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
		</div>
	)
}
