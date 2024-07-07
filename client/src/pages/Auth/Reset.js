import React,{useState} from 'react'
import ResetPassword from '../../components/layout/ResetPassword';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
 
         
  const [email, setEmail] = useState(" ");
  const [password, setpassword] = useState(" ");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const  url ='http://localhost:8080/api/v1/auth/login/reset';
   
    try {
    const  res   = await axios.post(url, {email});
    console.log(res.data);
    if(res.data)
    {
      navigate('/setpassword');
      //console.log(res.data.success);
    }
    } catch (error) {
        console.log(error);
    }
    }
   
 
     return (
       
        <ResetPassword title="Reset Password Ecommerce">

                <h1 className='text-center'>Reset Password</h1>
            
                <div className='login'>
                <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center">
                
                <div className="mb-3">
                
                <input type="text" className="form-control" id="exampleInputName" onChange={(e) => setEmail(e.target.value)}  placeholder="Enetr Your Email"></input>
                </div>

                
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                  
                    </form>
                </div>

            
        </ResetPassword>
    
    
  )
}

export default Reset
