import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({setUser}) => {
  return (
    <div className='py-4 px-6 sm:px-10 md:px-20 lg:px-4 '>
      
      <Header setUser={setUser} />
      <CreateTask />
      <AllTask />
      
    </div>
  )
}

export default AdminDashboard
