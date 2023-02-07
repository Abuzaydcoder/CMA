import React from 'react'
import { Link } from 'react-router-dom';


const ProfileCol1 = (props) => {
    const {userPhoto} = props;
    return (
        <div className='profile-col-1'>
              <div className='profile-col-1-sub-1'>
                  <div className='profile-photo-round'>
                  <img src={userPhoto} alt= 'User' />
                  </div>
                
              </div>
            <div className='profile-col-1-sub-2'>first last ademola adelakun olueakemi</div>
            <div className='profile-col-1-sub-3'>last seen 2/2/2023 03:31:57 pm</div>
              <div className='profile-col-1-sub-4'>
                <Link to='/Profile/settings'>Settings</Link>
                <Link to='/'>Logout</Link>
              
              </div>
    </div>
  )
}

export default ProfileCol1