import React,{ useState} from 'react'
import RegisterPage from '../../components/layout/RegisterPage';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
const [name, setName] = useState(" ");
const [email, setEmail] = useState(" ")
const [password, setpassword] = useState(" ")
const [phone, setphone] = useState(" ")
const [address, setaddress] = useState(" ")
const navigate = useNavigate();
// handleSubmit

const handleSubmit = async (e) => {
e.preventDefault();
console.log(name, email, password, address, phone);
const url='http://localhost:8080/api/v1/auth/Register';
try {
const res = await axios.post(url, {name, email, password, address, phone})
console.log(res.data);
if(res.data.success)
{
navigate('/login')
}
} catch (error) {
console.log(error);
}
}

return (
<RegisterPage title="Register Ecommerce">
<div className='register'>
        <div class="v-stack gap-4">
          <h1 class="h3">SIGN UP</h1>
          <p>Please fill in the information below:</p>
        </div>
<form onSubmit={handleSubmit} className='w-50'>
<div className="w-100 mb-3">
<input type="text" placeholder='Enter your Name'  onChange={(e) => setName(e.target.value)} className="w-100 form-control" id="exampleInputName"  />
</div>
<div className="mb-3"> 
<input type="text"  onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter your Name' />
</div>
<div className="mb-3"> 
<input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputName" placeholder='Email' />
</div>
<div className="mb-3"> 
<input type="password"  onChange={(e) => setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Password' />
</div>

        <div className="outer">
         
            <button  type="submit" className="w-100 h-90 rounded-0 btn text">Sign Up</button>
         
          </div>

</form>

</div>
</RegisterPage>

)
}

export default Register
