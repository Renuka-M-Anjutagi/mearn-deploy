import React from 'react'
import ResetNewPassword from '../../components/layout/ResetNewPassword'

const ResetNewPassword = (props) => {
  
  return (
    <div>
        <ResetNewPassword>
          
        <h1 className='text-center'>Reset Password</h1>
            
            <div className='login'>
            <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center">
            
            <div className="mb-3">
            
            <input type="password" className="form-control" id="exampleInputName" onChange={(e) => setPassword(e.target.value)}  placeholder="Enter Your Password"></input>
            </div>
            
            <div className="mb-3">
            
            <input type="newpassword" className="form-control" id="exampleInputName" onChange={(e) => setPassword(e.target.value)}  placeholder="Enter Your Password"></input>
            </div>
            

            
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
              
                </form>
            </div>

        </ResetNewPassword>
      
    </div>
  )
}

export default ResetNewPassword
