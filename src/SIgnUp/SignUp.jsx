import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
    }
    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp</h1>
                        <p className="py-6">Explore Our page</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" 
                                name="email" 
                                value={email}
                                onChange={(e)=>setEmail(e.email.value)} 
                                className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" 
                                name="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type="submit" className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                        {/*if error found*/}
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <p>Already have an account? <Link to="/signIn">Sign In</Link></p>

                        {/*another login process*/}
                        <div className="flex my-5 justify-center gap-6">

                            <button className="pt-2"><FaGoogle /></button>
                            <button className="pt-2"><FaFacebook /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;