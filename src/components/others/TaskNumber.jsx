import React from 'react'

const TaskNumber = ({loggedEmployeeData}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 py-6'>
      <div className='bg-red-700 h-30 rounded-3xl flex flex-col items-center justify-center gap-2 m-2'>
        <h1 className='text-[25px] font-bold '>New Task</h1>
        <span className='text-[18px] font-semibold '>{loggedEmployeeData.taskNumbers.newTask}</span>
      </div>
      <div className='bg-green-700 h-30 rounded-3xl flex flex-col items-center justify-center gap-2 m-2'>
        <h1 className='text-[25px] font-bold text-center'>Accepted Task</h1>
        <span className='text-[18px] font-semibold '>{loggedEmployeeData.taskNumbers.active}</span>
      </div>
      <div className='bg-blue-700 h-30 rounded-3xl flex flex-col items-center justify-center gap-2 m-2'>
        <h1 className='text-[25px] font-bold text-center'>Completed Task</h1>
        <span className='text-[18px] font-semibold '>{loggedEmployeeData.taskNumbers.completed}</span>
      </div>
      <div className='bg-pink-800 h-30 rounded-3xl flex flex-col items-center justify-center gap-2 m-2'>
        <h1 className='text-[25px] font-bold '>Failed Task</h1>
        <span className='text-[18px] font-semibold '>{loggedEmployeeData.taskNumbers.failed}</span>
      </div>
    </div>
  )
}

export default TaskNumber
