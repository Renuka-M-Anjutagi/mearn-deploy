import React ,{ useState} from 'react';
import LoginPage from '../../components/layout/LoginPage';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';

const Login = () => {

  
  const [email, setEmail] = useState(" ");
  const [password, setpassword] = useState(" ");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const url='http://localhost:8080/api/v1/auth/login';
    try {
    const res = await axios.post(url, {email, password})
    console.log(res.data);
    if(res.data.success)
    {
    navigate('/dashborad')
    }
    } catch (error) {
    console.log(error);
    }
    }
  return (
  
    <LoginPage title="Login Ecommerce">

        <div class="v-stack gap-4">
          <h1 class="h3">Login</h1>
          <p>Enter your email and password to login:</p>
        </div>
   
    <div className='login'>
    <form onSubmit={handleSubmit} className="w-50 row gy-2 gx-3 align-items-center">
     
      <div className="mb-3">
    
      <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)}  placeholder="Enetr Your Email"></input>
      </div>

      <div className="mb-3">
    
    <input type="password" className="form-control"  onChange={(e) => setpassword(e.target.value)}  placeholder="Enetr Your password"></input>
    </div>

          <div className="outer">
          
            <button  className="w-100 h-90 rounded-0 btn text">Login</button>
            </div>
                <div>
                    <span className="text-subdued">Don't have an account?</span>
                    <a href="/register" className="link-faded">Sign up</a>
                  </div>
          <Link to="/login/Reset">Forgot password?</Link>
    </form>
    </div>

   
 
  
</LoginPage>
  )
}

export default Login
