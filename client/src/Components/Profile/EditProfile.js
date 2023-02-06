import React from 'react'
import './EditProfile.css';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft, FaUserShield } from 'react-icons/fa';

const EditProfile = () => {
  return    <div className='page-wrapper'>
      <div className='page-section'>
        <div className='page-section'>
          <div className='page-row-1'>
            <div className='page-row-1-a'>Update Profile</div>
            <div className='page0row-1-b'>
              <Link to='/Profile/Settings' >
                <FaRegArrowAltCircleLeft className='remove-padd' />
              </Link>
            </div>
          </div>
          <div className='page-row-2'>
            {/*start of edit */}
                  <div className='edit-class-wrapper'>
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
                                <label htmlFor='dateofBirth'>DOB</label>
                                <input type='date' id='date'disabled/>
                            </div>

        <div className='signup-rows'>
          <label htmlFor='country'>Country</label>
          <select name='' id='country'disabled >
          <option value=''>Select Country</option>
          </select>
          
        </div>

        <div className='signup-rows'>
          <label htmlFor='state'>State</label>
          <select name='' id='state'disabled >
          <option value=''>Select State</option>
          </select>
          
        </div>

        <div className='signup-rows'>
          <label htmlFor='city'disabled >City</label>
          <select name='' id='city' disabled>
          <option value=''>Select City</option>
          </select>
          
        </div>

        <div className='signup-rows'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' placeholder='username'disabled/>
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
          <button className='submit'>Update Profile</button>
        </div>
        
        
      </form>
      </div>
                  </div>
            {/*end of edit */}
           
          </div>
        </div>
      </div>
    </div>
}

export default EditProfile