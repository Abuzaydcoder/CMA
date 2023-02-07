import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import './AccountCreated.css'

const AccountCreated = () => {
  return (
      <div className='acct-created-wrapper'>
          <div className='acct-created-row-1'>
              <FaCheckCircle className='created-icon'/>Account Created</div>
          <div className='acct-created-row-2'>
              Thank you for signing up with us, a verification email has been sent to you
              &nbsp;
              <strong>example@email.com</strong>, click the link in your email to verify your account
          </div>
          <div className='acct-created-row-3'>
              Redirecting to login page in 10s
          </div>
      </div>
  )
}

export default AccountCreated