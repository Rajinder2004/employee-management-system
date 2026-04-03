import React, { useContext } from 'react'
import { AuthContext } from '../../context/ProvideContext';

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext);
  // console.log(userData);

  return (
    <div className='bg-[#333] mt-4 '>
      <div className='p-2 grid grid-cols-5 bg-green-600 text-white mb-2 font-bold text-[16px] sm:text-[18px]'>
        <span className='text-center '>Employee Name</span>
        <span className='text-center ml-2'>New Task</span>
        <span className='text-center -ml-3'>Active Task</span>
        <span className='text-center -ml-2'>Completed</span>
        <span className='text-center ml-5'>Failed</span>
      </div>

      <div id='allTask' className='flex flex-col gap-2 h-52 overflow-y-auto '>
        {userData.map( (employee, idx) => {
          return <div key={idx} className='px-1 py-2 grid grid-cols-5 bg-white text-black'>
            <span className='font-bold text-center'>{employee.firstname}</span>
            <span className='text-red-600 font-semibold text-center'>{employee.taskNumbers.newTask}</span>
            <span className='text-green-600 font-semibold text-center'>{employee.taskNumbers.active}</span>
            <span className='text-blue-600 font-semibold text-center'>{employee.taskNumbers.completed}</span>
            <span className='text-pink-600 font-semibold text-center'>{employee.taskNumbers.failed}</span>
          </div>
        })}
        
      </div>
    </div>
  )
}

export default AllTask
