import React, {useState, useEffect}  from 'react';
import { useParams, } from 'react-router-dom';
import '../Profile/Profile.css';
import photo from '../../assets/images/users/IMG_8750.JPG'

import ProfileCol1 from './ProfileCol1';
import ProfileCol2 from './ProfileCol2';
import fakeUsers from './fakeUsers';
import fakeContacts from './fakeContacts';

const Profile = () => {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState({
    photo: '',
    firrstname: '',
    lastname: '',
    lastseen: '',
  });

  
  useEffect(() => {
    
    try { 
      // GET: localhost:5000/api/users
      const foundUser = fakeUsers.filter((user) => user.id.toString() === id);
      setUserDetails({
        photo: foundUser.photo,
        firrstname: foundUser.firrstname,
        lastname: foundUser.lastname,
        lastseen: foundUser.lastseen,
      });
      

    } catch (error) {
      console.log(error);
    }
    
    // return () => {
      // cleanup;
    // };
  }, [id]);
  console.log(userDetails.firrstname);

  



  return (
      <div className='profile-wrapper'>
          
          <ProfileCol1 userPhoto={ photo} userDetails ={userDetails} />    
        <ProfileCol2/>    
          
          
          


          
      </div>
  )
}

export default Profile