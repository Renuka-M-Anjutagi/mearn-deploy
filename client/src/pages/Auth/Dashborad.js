import React,{useState} from 'react'
import DashboradPage from '../../components/layout/DashboradPage'
import Login from './Login';

const Dashborad = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
};
  return (
    <div>
      {!isLoggedin ? (
        <Login />
      ):(
        <DashboradPage />
      
      )
    }
    </div>
  )
}

export default Dashborad
