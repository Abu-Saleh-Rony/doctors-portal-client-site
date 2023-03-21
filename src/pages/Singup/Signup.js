import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";


const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, handleGoogleSignIn } = useContext(AuthContext);


    const handleSignup = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.log(error));

        handleGoogleSignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.log(error));

    }


    return (

        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h2 className='text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "User Name is required",
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required",
                        })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters or longer" }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password Must be Strong" }
                        })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <button className='btn btn-accent w-full' type='submit'>Signup</button>

                </form>
                <p>Already Have An Account? <Link className='text-secondary' to="/Login">Please Login </Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleSignIn} value="submit" >continue with google</button>
            </div>
        </div>
    );

};

export default Signup;