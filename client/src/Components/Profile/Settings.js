import React from 'react';
import '../Profile/Settings.css'
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft, FaWrench, FaUserShield, FaUserLock, FaUserEdit } from 'react-icons/fa';

// import Profile from './Profile'

const Settings = () => {
  return (
    <div className='page-wrapper'>
      <div className='page-section'>
        <div className='page-section'>
          <div className='page-row-1'>
            <div className='page-row-1-a'>
              <FaWrench/>Settings</div>
            <div className='page0row-1-b'>
              <Link to='/profile' >
                <FaRegArrowAltCircleLeft className='remove-padd' />
              </Link>
            </div>
          </div>
          <div className='page-row-2'>
            {/*start of settings */}
            <div className='settings-wrapper'>
            <div className='settings-col-1'> 
              <div className='edit-profile-row-1'>Profile</div>
                <div className='edit-profile-row-2'><Link to='/profile/edit'>
                <FaUserEdit className='settings-icon-grp'/>
                </Link></div>
                <div className='edit-profile-row-3'>
                  <Link to='/profile/edit'>Update Profile</Link>
                </div>
            </div>
            <div className='settings-col-2'> 
              <div className='change-profile-row-1'>Password</div>
                <div className='change-profile-row-2'>
                  <Link to='/profile/change-password'>
                  <FaUserLock className='settings-icon-grp'/>
                  </Link>
                </div>
                <div className='change-profile-row-3'>
                  <Link to='/profile/change-password'>Change Password</Link>
                </div>
            </div>
            <div className='settings-col-3'> 
              <div className='delete-account-row-1'>Account</div>
                <div className='delete-account-row-2'><Link to='/profile/delete-account'>
                  <FaUserShield className='settings-icon-grp'/>
                </Link></div>
                <div className='delete-account-row-3'>
                  <Link to='/profile/delete-account'>Delete Account</Link>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings