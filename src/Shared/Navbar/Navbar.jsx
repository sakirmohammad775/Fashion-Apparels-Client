import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
  
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    const navItems = <>
        <Link className="mr-5" to='/'>Home</Link>
        <Link className="mr-5" to='/addBrand'>AddProduct</Link>
        <Link className="mr-5" to='/myCart'>MyCart</Link>
        <Link className="mr-5" to='/Contact'>Contact</Link>
        <Link className="mr-5" to='/Blog'>Blog</Link>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Fashion Brand</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? (
                        <>
                            <span>{user.displayName}</span>
                            {user.PhotoUrl && (<img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />)}
                            <button onClick={handleLogOut} className="btn btn-ghost text-white bg-orange-600 px-10">Log Out</button>
                        </>) : <> <Link to='/signIn' className="btn">SignIn</Link></>

                    }
                </div>
                {/* toggle */}
                
            </div>
        </>
    );
};

export default Navbar;