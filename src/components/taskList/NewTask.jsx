import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/ProvideContext';

const NewTask = ({task}) => {

  const [userData, setUserData] = useContext(AuthContext);
  const [disable, setDisable] = useState(false);

  return (
    <div className='bg-red-100 text-[#111] w-[98%] sm:w-[50vh] p-4 rounded-2xl flex flex-col justify-between h-60
                      transition-transform duration-300 ease-in-out hover:scale-95 shrink-0'>
        <div className='flex justify-between items-center'>
          <span className='bg-white rounded-xl px-3 py-1 text-[16px] font-medium text-red-600'>{task.category}</span>
          <span className='font-bold text-[15px]'>{task.taskDate}</span>
        </div>
        <div>
          <h1 className='text-[22px] font-bold '>{task.taskTitle}</h1>
          <p className='text-[15px] leading-tight text-justify hyphens-auto'>{task.taskDesc}</p>
        </div>
        <div className=''>
          <button disabled={disable}
            onClick={ () => {
              // console.log(task);
              const data = userData;
              data.forEach( (item) => {
                const employeeWithSameId = item.tasks.find( (elem) => elem.id === task.id)

                if(employeeWithSameId){
                  employeeWithSameId.newTask = false;
                  employeeWithSameId.active = true;
                  employeeWithSameId.completed = false;
                  employeeWithSameId.failed = false;
                  item.taskNumbers.newTask = item.taskNumbers.newTask-1;
                  item.taskNumbers.active = item.taskNumbers.active+1;
                }
              })
              setDisable(true);
              setUserData(data);
              localStorage.setItem('employees', JSON.stringify(data));
            }}
           className='w-full bg-white py-2 text-red-600 font-semibold rounded-full text-center'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
