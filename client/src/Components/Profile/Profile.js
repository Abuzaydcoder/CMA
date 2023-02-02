import React from 'react'
import '../Profile/Profile.css';
import photo from '../../assets/images/users/IMG_8750.JPG'
import { Link } from 'react-router-dom';
import {FaSearchLocation} from 'react-icons/fa'

const Profile = () => {
  return (
      <div className='profile-wrapper'>
          <div className='profile-col-1'>
              <div className='profile-col-1-sub-1'>
                  <div className='profile-photo-round'>
                  <img src={photo} alt={photo} ></img>
                  </div>
                
              </div>
            <div className='profile-col-1-sub-2'>first last ademola adelakun olueakemi</div>
            <div className='profile-col-1-sub-3'>last seen 2/2/2023 03:31:57 pm</div>
              <div className='profile-col-1-sub-4'>
                <Link to='/Profile/settings'>Settings</Link>
                <Link to='/'>Logout</Link>
              
              </div>
          </div>
            
          
          <div className='profile-col-2'>
              <div className='profile-col-2-sub-1'>
                  <div className='search-box'>
                      <form action='' method='get'>
                          <span className='search-box-grp'>
                              <FaSearchLocation />
                                  <input className='search-icon' type='search'  placeholder='search contacts'/>
                              </span>
                      </form>
                  </div>
                <div className='no-of-cont'>108 Contacts</div>
                  <div className='add-cont'>
                    <Link to='/add-contact'>Add Contact</Link>
                  </div>
              </div>

              <div className='profile-col-2-sub-2'>
                  <div className='cont-box'>
                      <div className='cont-box-item'>cont-box-item</div>
                      <div className='cont-box-item'>cont-box-item</div>
                      <div className='cont-box-item'>cont-box-item</div>
                      <div className='cont-box-item'>cont-box-item</div>
                      <div className='cont-box--action-grp'>
                          <div className='edit-btn'>edit-btn</div>
                          <div className='delete-btn'>delete-btn</div>
                      </div>
                  </div>
             </div>
            
          </div>

          


          
      </div>
  )
}

export default Profile