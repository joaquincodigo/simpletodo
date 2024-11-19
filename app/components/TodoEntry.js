'use client'
import react from 'react'

export default function todoentry({ todo, index, removeTodo }) {
	return (
    <li key={index}>
      <div className='bg-slate-100 min-h-14 p-3 flex flex-row items-center mb-3 rounded-xl'>

        <div className='flex-[7] overflow-hidden whitespace-normal break-words'>
          {todo} 
        </div>



        <button 
          onClick={() => removeTodo(index)} 
          className='hover:bg-slate-300 ml-2 rounded-full p-1 aspect-square flex-[1] flex items-center justify-center'
        >
          <img src="/images/icons/trashcan-icon.svg" alt="icon" className='w-4 h-4' />
        </button>

      </div>
    </li>
	)
}



