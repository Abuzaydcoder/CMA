import React from 'react'
import '../Profile/Profile.css';
import photo from '../../assets/images/users/IMG_8750.JPG'

import ProfileCol1 from './ProfileCol1';
import ProfileCol2 from './ProfileCol2';
// import fakeUsers from './fakeUsers';
// import fakeContacts from './fakeContacts';

const Profile = () => {




  return (
      <div className='profile-wrapper'>
          
          <ProfileCol1 userPhoto={ photo} />    
        <ProfileCol2/>    
          
          
          


          
      </div>
  )
}

export default Profile