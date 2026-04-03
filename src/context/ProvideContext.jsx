import React, { createContext, useEffect, useState } from 'react'
import {getLocalStorage, setLocalStorage} from '../utils/localStorage'

export const AuthContext = createContext();

const ProvideContext = (props) => {
  // localStorage.clear()
  // console.log(props);
  
  const [userData, setUserData] = useState([]);
  useEffect( () => {
    // setLocalStorage();
    const data = getLocalStorage();
    setUserData(data?.employees || []);
  }, [])
  
  
  
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {props.children}
      </AuthContext.Provider>
    </div>
  )
}

export default ProvideContext
