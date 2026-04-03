import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../taskList/TaskList'

const EmployeeDashboard = ({setUser, loggedEmployeeData}) => {
  // console.log(loggedEmployeeData);
  
  return (
    <div className='py-4 px-4 sm:px-15'>
      <Header setUser={setUser} loggedEmployeeData={loggedEmployeeData} />
      <TaskNumber loggedEmployeeData={loggedEmployeeData} />
      <TaskList loggedEmployeeData={loggedEmployeeData} />
    </div>
  )
}

export default EmployeeDashboard
