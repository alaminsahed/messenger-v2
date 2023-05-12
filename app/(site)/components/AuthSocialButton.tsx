import React from 'react';

const AuthSocialButton = ({ Icon, onClick }) => {
    return (
        <button type="button" onClick={onClick} className='ring-1 ring-inset inline-flex w-full py-2 px-4 rounded-md bg-white justify-center shadow ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'>
            <Icon />
        </button>
    );
};

export default AuthSocialButton;


