'use client';

import clsx from 'clsx';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;

}


const Button: React.FC<> = ({
    type = 'button',
    fullWidth,
    children,
    onClick,
    danger,
    disabled,
    secondary
}) => {
    return (
        <button onClick={onClick} type={type} disabled={disabled} className={clsx(`flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2   focus-visible:outline-offset-2 `, disabled && 'opacity-50 cursor-default', fullWidth && 'w-full', danger && 'bg-rose-600', secondary ? "text-gray-900" : "text-white", !secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600')}>
            {children}
        </button>
    );
};

export default Button;


