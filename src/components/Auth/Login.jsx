import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail('');
        setPassword('');
    }

  return (
    <div className='h-screen flex flex-col gap-10 items-center pt-40'>
        <h1 className='text-[25px] font-bold text-emerald-400 '>Task Management System</h1>
        <form 
            onSubmit={ (e) => handleSubmit(e) }
            className='flex flex-col gap-4 items-center justify-center border-1
                    border-green-400 py-6 px-5 rounded-2xl '>
            <input required
                className='bg-[#333] text-[16px] font-medium px-5 py-4 sm:py-3 
                            mt-2 w-[280px] sm:w-[300px] rounded-xl outline-none  '
                type="email"
                placeholder='enter your email....'
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
            />
            <input required
                className='bg-[#333] text-[16px] font-medium px-5 py-4 sm:py-3 
                           w-[280px] sm:w-[300px] rounded-xl outline-none ' 
                type="password"
                placeholder='enter password....' 
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
            />
            <button
                className='bg-green-600 hover:bg-green-700 px-8 py-3 rounded-3xl 
                            transition-transform duration-300 ease-in-out hover:scale-95 
                            font-semibold text-[16px]'
                type='submit'
            >Login</button>
        </form>
    
    </div>
  )
}

export default Login
