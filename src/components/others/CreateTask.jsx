import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/ProvideContext';
import NewTask from '../taskList/NewTask';

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [category, setCategory] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');

  const [userData, setUserData] = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(`task added: ${taskTitle}, ${taskDate}, ${assignTo}, ${category}, ${taskDesc}`);

    const findEmployee = userData.find( item => item.firstname.toLowerCase() === assignTo.toLowerCase());
    // console.log(findEmployee);
    let id = findEmployee.tasks.reduce( (acc, cur) => {
      return cur.id
    }, 0)
    // console.log(id)

    const task = {
      id:id+1,
      taskTitle,
      taskDate,
      category,
      taskDesc,
      newTask:true,
      active:false,
      completed:false,
      failed:false,
    }
    
    const data = userData;
    // console.log(data);

    data.map( (employee) => {         
      if(employee.firstname.toLowerCase() === assignTo.toLowerCase()){
        // console.log(employee, employee.firstname);
        employee.tasks.push(task);
        employee.taskNumbers.newTask = employee.taskNumbers.newTask+1;
      }
    })
    setUserData(data);
    localStorage.setItem('employees', JSON.stringify(data));

    setTaskTitle('');
    setTaskDesc('');
    setCategory('');
    setTaskDate('');
    setAssignTo('');
  }

  

  return (
    <div className='bg-[#222] mt-6 flex flex-col items-center gap-4 p-4 rounded-xl'>
        <h1 className='text-[20px] font-bold text-center '>Assign New task to employees</h1>
        <form  
          className='flex flex-col lg:flex-row gap-4 lg:gap-10'
          onSubmit={ (e) => submitHandler(e)}>
          <div className='flex flex-col gap-4'>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-4 lg:gap-2'>
              <label htmlFor="taskname" className='font-medium'>Task Title</label>
              <input required
                className='bg-[#333] text-[16px] font-medium px-5 py-4 sm:py-3 
                            mt-2 w-[280px] sm:w-[400px] rounded-xl outline-none '
                type="text" id='taskname'
                placeholder='enter task name'
                value={taskTitle}
                onChange={ (e) => setTaskTitle(e.target.value)}
              />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-4 lg:gap-2'>
              <label htmlFor="taskDate" className='font-medium'>Task Date</label>
              <input required
                className='bg-[#333] text-[16px] font-medium px-5 py-4 sm:py-3 
                            mt-2 w-[280px] sm:w-[400px] rounded-xl outline-none  '
                type="date" id='taskDate'
                placeholder='enter deadline for task'
                value={taskDate}
                onChange={ (e) => setTaskDate(e.target.value)}
              />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-4 lg:gap-2'>
              <label htmlFor="employeeName" className='font-medium'>Assign To</label>
              <input required
                className='bg-[#333] text-[16px] font-medium px-5 py-4 sm:py-3 
                            mt-2 w-[280px] sm:w-[400px] rounded-xl outline-none  '
                type="text" id='employeeName'
                placeholder='enter employee name'
                value={assignTo}
                onChange={ (e) => setAssignTo(e.target.value)}
              />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-4 lg:gap-2'>
              <label htmlFor="taskCategory" className='font-medium'>Category </label>
              <input required
                className='bg-[#333] text-[16px] font-medium px-5 py-4 sm:py-3 
                            mt-2 w-[280px] sm:w-[400px] rounded-xl outline-none  '
                type="text" id='taskCategory'
                placeholder='enter task category'
                value={category}
                onChange={ (e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div className='flex flex-col items-start '>
            <div className='flex flex-col items-start'>
              <label htmlFor="taskDesc" className='font-medium'>Task Description</label>
              <textarea required
                className='bg-[#333] text-[16px] font-medium px-5 py-4 sm:py-3 
                            mt-2 w-[280px] sm:w-[75vh] lg:w-[70vh] rounded-xl outline-none  '
                id='taskDesc'
                placeholder='enter task details'
                rows={7}
                value={taskDesc}
                onChange={ (e) => setTaskDesc(e.target.value)}
              />
            </div>
            <div className='flex justify-center w-full'>
              <button
              className='bg-green-600 hover:bg-green-700 w-full  py-3 rounded-3xl 
                            transition-transform duration-300 ease-in-out hover:scale-95 
                            font-semibold text-[16px] mt-4'
              type='submit'
            >Assign</button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
