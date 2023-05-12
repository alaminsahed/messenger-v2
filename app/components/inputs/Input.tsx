"use client";
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean,

}

const Input: React.FC<InputProps> = ({ id, register, disabled, errors, required, label, type = "text" }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-900">{label}</label>
            <div>
                <input id={id} type={type} autoComplete={id} disabled={disabled} {...register(id, { required: "This field is required" })} className={clsx(`form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:inset-2 focus:ring-inset, focus:ring-sky-600, sm:text-sm, sm:leading-6`, errors[id] && 'focus:ring-rose-500', disabled && 'opacity-50 cursor-default')} />
            </div>
            {errors[id] && <p className="mt-2 text-sm text-rose-600 font-normal" id="email-error">{errors[id].message}</p>}
        </div>
    );
};

export default Input;