
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import signInImage from "../assets/login2.jpg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const SignIn = () => {

    const {signIn}=useContext(AuthContext)

    const backgroundImageStyle = {
        backgroundImage: `url(${signInImage})`,
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Do not repeat the image
    };
    const handleSignIn=e=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        

        signIn(email,password)
        .then(result=>{
            const user=result.user
            console.log(user);
        })
        .catch(error=>
            console.log(error)
        )
    }

    
    return (
        <>
            <div className="hero min-h-screen" style={backgroundImageStyle}>
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignIn</h1>
                        <p className="py-6">Explore Our page</p>
                    </div>
                    <div className="card  w-full max-w-lg bg-transparent">
                        <form onSubmit={handleSignIn} className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name="email"
                                    className="input input-bordered bg-transparent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password"
                                     className="input input-bordered bg-transparent" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button  type="submit" value="Submit"  className="btn  bg-transparent">SignIn</button>
                            </div>
                        </form>
                        {/*if error found*/}
                       

                        <p className="text-center">Already have an account? <Link to="/signUp">Sign In</Link></p>

                        {/*another login process*/}
                        <div className="flex my-5 justify-center gap-6">

                            <button className="pt-2"><FaGoogle /></button>
                            <button className="pt-2"><FaFacebook/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;