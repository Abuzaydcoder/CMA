import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-wrapper'>
      <div className='login-heading'>Login</div>
      <div className='login-body'>
      <form action='' method='' className='login-form-wrapper'>
        

        

        
          
            
        
       
          
        

        

        

        


        <div className='login-rows'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='email/username'/>
        </div>

        

        <div className='login-rows'>
          <label htmlFor='password'>Password</label>
          <input type='text' id='password' placeholder='password'/>
        </div>

       

        
        <div className='login-rows'>
          <button className='submit'>Login</button>
        </div>
        
        
      </form>
      </div>
     
      <div className='signup-footer'>
        Don't have an account? &nbsp; <Link to='/Signup'>Create account</Link>
      </div>
    </div>
  )
}

export default Login