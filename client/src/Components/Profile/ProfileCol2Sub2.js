import React from 'react'
import { Link } from 'react-router-dom';

const ProfileCol2Sub2 = () => {
  return (
    <div className='profile-col-2-sub-2'>
                <div className='cont-box'>
                    <div className='cont-box-item'>Abdulafeez</div>
                    <div className='cont-box-item'>Abdulazeez</div>
                    <div className='cont-box-item'>adekemi487@gmail.com</div>
                    <div className='cont-box-item'>08054094310</div>
                    <div className='cont-box--action-grp'>
                      <div className='edit-btn'>
                        <Link to='/contact/edit'>Edit</Link>
                      </div>
                        <div className='edit-btn'>
                        <Link to='/contact/delete'>Delete</Link>
                         
                      </div>
                    </div>
                </div>
            </div>
  )
}

export default ProfileCol2Sub2