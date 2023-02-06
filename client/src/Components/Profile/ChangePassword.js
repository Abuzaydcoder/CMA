import React from 'react'
import './ChangePassword.css';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft, FaUserShield, FaUserLock } from 'react-icons/fa';


const ChangePassword = () => {
  return (
      <div className='page-wrapper'>
      <div className='page-section'>
        <div className='page-section'>
          <div className='page-row-1'>
                      <div className='page-row-1-a'>
                        <FaUserShield />
                        Change Password
                      </div>
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
                                <label htmlFor='oldpassword'>Old Password</label>
                                <input type='text' id='oldpassword' placeholder='Old Password'/>
                            </div>

                            <div className='signup-rows'>
                                <label htmlFor='newpassword'>New Password</label>
                                <input type='text' id='newpassword' placeholder='New Password'/>
                            </div>
                                  
                            <div className='signup-rows'>
                                <label htmlFor='cnewpassword'>Confirm New Password</label>
                                <input type='text' id='cnewpassword' placeholder='New Password'/>
                            </div>

                           

        
        

        
        

        
        
        

        
        
        
        <div className='signup-rows'>
          <button className='submit'>Update Password</button>
        </div>
        
        
      </form>
      </div>
                  </div>
            {/*end of edit */}
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword