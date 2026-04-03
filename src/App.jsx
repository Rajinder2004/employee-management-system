import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/dashboard/AdminDashboard';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import { AuthContext } from './context/ProvideContext';

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedEmployeeData, setLoggedEmployeeData] = useState(null);
  const [userData, setserData] = useContext(AuthContext);
  // console.log(userData);

  useEffect( () => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if(loggedUser){
      // console.log(loggedUser);
      setUser(loggedUser.role);
      setLoggedEmployeeData(loggedUser.data);
    }
  }, [])

  const handleLogin = (email, password) => {
    
    if(email === "admin@example.com" && password === "123"){
      console.log(`Admin Login Successfully with email:${email} and password:${password}`);
      setUser('admin');
      localStorage.setItem('loggedUser', JSON.stringify({role:'admin'}));
    } else if(Array.isArray(userData) && userData.length > 0){
      const employee = userData.find( item => item.email === email && item.password === password);
      if(employee){
        console.log(`Employee Login Successfully with email:${email} and password:${password}`);
        setUser('employee');
        setLoggedEmployeeData(employee);
        localStorage.setItem('loggedUser', JSON.stringify({role:'employee', data:employee}));
      }
      else{
        console.log("not found");
        alert(`No user available with email:${email} and password:${password}`);
      }
    } else {
         alert("Employee data not loaded yet. Please refresh.");
      }
    
  }

  return (
    <div className='min-h-screen text-[#fff] bg-[#111] '>
      {!user ? <Login handleLogin={handleLogin} /> : 
      user === 'admin' ? <AdminDashboard setUser={setUser} /> : user === 'employee' ? <EmployeeDashboard setUser={setUser} loggedEmployeeData={loggedEmployeeData} /> : null}
    </div>
  )
}

export default App
