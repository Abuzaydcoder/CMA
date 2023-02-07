import React, { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState();


  const navigate = useNavigate();

  const HandleLogin = (e) => {
    e.preventDefault();
    console.log('starting login..............');

    //validation
    console.log(`Email:${email}`);
    console.log(`Password:${password}`);

    // authentication
    //fake user details 
    const userDetails = {
      id: 2,
      email: 'adekemi487@gmail.com',
      password: 'Abuzayd2021#',
    };

    // if creadentials match
    if (email === userDetails.email && password === userDetails.password) {
       
       navigate(`/profile/${userDetails.id}`);
     } else {
      navigate(`/login`);
      setError('incorrect login details');
     }

    // if credentials don't match

    



    
}

  return (
    <div className='login-wrapper' >
      <div className='login-heading'>Login</div>
      <span style={{ color:'red', fontSize: '12px' }}>{error}</span>
      <div className='login-body'>
      <form action='' method='post' className='login-form-wrapper' onSubmit={HandleLogin}>
        

        

        
          
            
        
       
          
        

        

        

        


        <div className='login-rows'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='email/username' onChange={(e) => setEmail(e.target.value)}/>
        </div>

        

        <div className='login-rows'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='password' onChange={(e) =>  setPassword(e.target.value)}/>
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