import React from 'react'
import './Signup.css';
import { Link} from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup-wrapper'>
      <div className='signup-heading'>Signup</div>
      <div className='signup-body'>
      <form action='' method='' className='signup-form-wrapper'>
        <div className='signup-rows'>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' id='firstname' placeholder='firtname'/>
        </div>

        <div className='signup-rows'>
          <label htmlFor='lasttname'>Last Name</label>
          <input type='text' id='lasname' placeholder='lastname'/>
        </div>

        <div className='signup-rows'>
            { /*<label htmlFor=''>Gender</label>*/}
          
            <span>
              Gender:
              <label htmlFor='male'>
                <input type='radio' name='gender' id='male'/>
                Male
                
              </label>
              <label htmlFor='gender'>
                <input type='radio' name='gender' id='female'/>
                Female
                
              </label>
            </span>
          
            <span>
              
            </span>
          
        </div>

        <div className='signup-rows'>
          <label htmlFor='dateofBirth'>DOB</label>
          <input type='date' id='date'/>
        </div>

        <div className='signup-rows'>
          <label htmlFor='country'>Country</label>
          <select name='' id='country'>
          <option value=''>Select Country</option>
          </select>
          
        </div>

        <div className='signup-rows'>
          <label htmlFor='state'>State</label>
          <select name='' id='state'>
          <option value=''>Select State</option>
          </select>
          
        </div>

        <div className='signup-rows'>
          <label htmlFor='city'>City</label>
          <select name='' id='city'>
          <option value=''>Select City</option>
          </select>
          
        </div>

        <div className='signup-rows'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' placeholder='username'/>
        </div>


        <div className='signup-rows'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' placeholder='example@gmail.com'/>
        </div>

        <div className='signup-rows'>
          <label htmlFor='tel'>Phone Number</label>
          <input type='tel' id='tel' placeholder='tel'/>
        </div>

        <div className='signup-rows'>
          <label htmlFor='password'>Password</label>
          <input type='text' id='password' placeholder='password'/>
        </div>

        <div className='signup-rows'>
          <label htmlFor='cpassword'>Confirm Password</label>
          <input type='text' id='cpassword' placeholder='confirm password'/>
        </div>

        <div className='signup-rows'>
          <label htmlFor='termsAndConditions'>
            <input type='checkbox' id='termsAndCondition' />By signing up, you agree to our terms and conditions
          </label>
          
        </div>
        <div className='signup-rows'>
          <button className='submit'>Register</button>
        </div>
        
        
      </form>
      </div>
     
      <div className='signup-footer'>
        already have an account <Link to='/login'>Login here</Link>
      </div>
    </div>
  );
};

export default Signup;