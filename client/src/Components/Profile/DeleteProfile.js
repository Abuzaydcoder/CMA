import React from 'react'
import './DeleteProfile.css';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft, FaUserShield } from 'react-icons/fa';


const DeleteProfile = () => {
  return (
    <div className='page-wrapper'>
      <div className='page-section'>
        <div className='page-section'>
          <div className='page-row-1'>
            <div className='page-row-1-a'>
            <FaUserShield />Delete Account
                  </div>
            <div className='page-row-1-b'>
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
                                <label htmlFor='password'>Current Password</label>
                                <input type='text' id='password' placeholder='Current Password'/>
                            </div>

                            
                            
                           

        
        

        
        

        
        
        

        
        
        
        <div className='signup-rows'>
          <button className='submit'>Confirm Delete Account</button>
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

export default DeleteProfile