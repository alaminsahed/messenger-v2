'use client';

import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { BsGithub, BsFillEnvelopeAtFill } from "react-icons/bs";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/inputs/Button";
import AuthSocialButton from "./AuthSocialButton";

type variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState < variant > ('LOGIN');
    const [isLoading, setIsLoading] = useState < boolean > (false);

    const { register, handleSubmit, formState: { errors } } = useForm < FieldValues > ({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const toggleVariant = useCallback(() => {
        setVariant(variant === 'LOGIN' ? 'REGISTER' : 'LOGIN');
    }, [variant]);

    const onsubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 sm:px-10 sm:rounded-lg shadow">
                <div>
                    <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
                        {
                            variant === 'REGISTER' && (
                                <Input id="name" label="name" register={register} disabled={isLoading} errors={errors} required />
                            )
                        }
                        <Input id="email" label="Email" register={register} disabled={isLoading} errors={errors} required />
                        <Input id="password" label="Password" register={register} disabled={isLoading} errors={errors} required />
                        <Button disabled={isLoading} fullWidth type="submit">{variant === 'LOGIN' ? "Login" : "Register"}</Button>
                    </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <AuthSocialButton Icon={BsGithub} />

                            <AuthSocialButton Icon={BsFillEnvelopeAtFill} />

                        </div>

                        <div className="mt-2">
                            <p className="mt-2 text-sm text-gray-600 text-center"> Already have an account? <button onClick={toggleVariant} className="font-medium text-sky-600 hover:text-sky-500">{variant}</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;