import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className='bg-pink-100 text-[#111] w-[98%] sm:w-[50vh] p-4 rounded-2xl flex flex-col justify-between h-60
                      transition-transform duration-300 ease-in-out hover:scale-95 shrink-0 '>
        <div className='flex justify-between items-center'>
          <span className='bg-white rounded-xl px-3 py-1 text-[16px] font-medium text-pink-600'>{task.category}</span>
          <span className='font-bold text-[15px]'>{task.taskDate}</span>
        </div>
        <div>
          <h1 className='text-[22px] font-bold '>{task.taskTitle}</h1>
          <p className='text-[15px] leading-tight text-justify hyphens-auto'>{task.taskDesc}</p>
        </div>
        <div className=''>
          <button className='w-full bg-white py-2 text-pink-600 font-semibold rounded-full text-center'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
