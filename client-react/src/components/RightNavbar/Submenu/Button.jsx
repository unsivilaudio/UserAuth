import React from 'react';
import { signout } from '../../../helpers/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => {
                signout(() => {
                    navigate('/login', { replace: true });
                    toast.error('Signout Successfully');
                });
            }}>
            <i className='fas fa-sign-out-alt  w-6  -ml-2' />
            <span className='ml-3'>Signout</span>
        </button>
    );
};

export default Button;
