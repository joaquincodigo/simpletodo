import React from "react";

export default function ToggleCompleted({toggleShowCompleted}) {
  return (
    <div className="toggler-wrapper flex justify-center mb-8">
			<div className="text-sm text-slate-800">Show completed</div>
      <div className="flex items-center ms-2">
        <label className="relative inline-block w-10 h-5">
					<input type="checkbox" onChange={toggleShowCompleted} className="peer sr-only" />
          <div className="w-full h-full bg-gray-300 bg-opacity-50 border border-slate-700 border-opacity-50 rounded-full peer-checked:bg-indigo-500 transition-colors"></div>
          <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
        </label>
      </div>
    </div>
  );
}
