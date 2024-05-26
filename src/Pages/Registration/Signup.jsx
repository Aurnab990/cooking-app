import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
    const {createUser} = useAuth();
    const {googleLogin} = useAuth();
    const handleGoogleSignup = () =>{
        googleLogin();
    }
    const handleSignup = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password);
    }
    return (
        <div className='pl-28 pr-28'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create an Account</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to={"/login"}><a href="#" className="label-text-alt link link-hover">Already have an Account?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign-up</button>
                                <h2 className='text-center'>OR</h2>
                            </div>
                            <div className='flex gap-5 justify-center'>
                                <button onClick={handleGoogleSignup} className='bg-red-400  p-3 rounded font-semibold '>GOOGLE</button>
                                <button className='bg-blue-400 p-3 rounded font-semibold '>FACEBOOK</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;