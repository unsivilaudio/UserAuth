import React from 'react'
import { signout } from '../../../helpers/auth';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Button = () => {
    const history = useHistory();
  return (
    <button
                  onClick={() => {
                    signout(() => {
                      history.push('/login')  
                      toast.error('Signout Successfully');
                      history.replace('/')
                    });
                  }}
                  >
                  <i className='fas fa-sign-out-alt  w-6  -ml-2' />
                  <span className='ml-3'>Signout</span>
                </button>
  )
}

export default Button ; 
