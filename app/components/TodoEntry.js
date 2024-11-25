"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


export default function todoentry({
  todo,
  completed,
  index,
  removeTodo,
  toggleTodo,
}) {
  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      toggleTodo(index);
    }
  };

  return (
    <li key={index}>
      <div
        onClick={handleClick}
        className={`cursor-pointer min-h-14 p-3 flex flex-row items-center mb-3 rounded-xl border-2 border-slate-100  hover:border-white ${completed ? "bg-slate-300 border-slate-300" : "bg-slate-100" }`}
      >





        <div
          className={`flex-[7] overflow-hidden whitespace-normal break-words ${completed ? "text-gray-400 line-through" : "" }`}
        >
          {todo}
        </div>

        


        <button
          onClick={(e) => {
            e.stopPropagation();
            removeTodo(index);
          }}
          className="hover:bg-slate-200 ml-2 rounded-full p-1 aspect-square flex-[1] flex items-center justify-center"
        >
          <img
            src={`${basePath}/images/icons/trashcan-icon.svg`}
            alt="icon"
            className="w-4 h-4"
          />
        </button>




      </div>
    </li>
  );
}
