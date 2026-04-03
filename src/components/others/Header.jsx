import React from 'react'

const Header = ({setUser, loggedEmployeeData}) => {

  const userName = loggedEmployeeData ? loggedEmployeeData.firstname : "Admin";

  return (
    <div className='flex justify-between '>
        <h1 className='hover:text-emerald-400 text-[24px] leading-tight font-bold '>
          Hello <br /> <span className='text-[22px] font-semibold'>{userName} 👋</span>
        </h1>
        <div className='flex items-center'>
          <button
            onClick={ () => {
              setUser('');
              localStorage.removeItem('loggedUser');
            }}
            className='bg-red-600 py-3 px-6 text-[18px] font-semibold rounded-full '
          >Logout</button>
        </div>
      </div>
  )
}

export default Header
