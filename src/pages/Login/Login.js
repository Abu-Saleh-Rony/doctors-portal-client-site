import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h2 className='text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email")} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="text" />
                </form>
                <p>New to doctor portals? <Link className='text-secondary' to="/Signup">Create a new account </Link> </p>
                <div className="divider">OR</div>
                <input className='btn btn-outline w-full' value="continue with google" type="text" />
            </div>
        </div>
    );
};

export default Login;