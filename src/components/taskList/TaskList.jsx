import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({loggedEmployeeData}) => {
  // console.log(loggedEmployeeData);
  
  return (
    <div id='taskList' className='flex justify-start gap-2 overflow-x-auto'>
      { 
        loggedEmployeeData.tasks.length >0 ?
          loggedEmployeeData.tasks.map( (task, idx) => {
            if(task.newTask){
              return <NewTask key={idx} task={task} />
            }
            if(task.active){
              return <AcceptTask key={idx} task={task} />
            }
            if(task.completed){
              return <CompleteTask key={idx} task={task} />
            }
            if(task.failed){
              return <FailedTask key={idx} task={task} />
            }
          }) : (
          <div className='flex items-center justify-center h-full w-full'>
            <h1 className='text-[25px] font-bold mt-10 '>No Task Assign yet</h1>
          </div>
        )
      }
    </div>
  )
}

export default TaskList
