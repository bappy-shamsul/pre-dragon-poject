import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const NavBar = () => {
    const {logOutUser} = useContext(AuthContext)

    const handleSignOut = () =>{
        
        logOutUser()
        .then(()=>{
            console.log('sign out')
        })
        .catch(error =>{
            console.error(error)
        })
    }
    const navLink = <div className="flex gap-4 text-xl text-red-800 bg-blue-300">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Sign in</NavLink>
        <NavLink to='/orders'>Orders</NavLink>
    </div>

   
    return (
        <div className="navbar bg-blue-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl"> Home</a> */}
                <div>
                    <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a onClick={handleSignOut} className="btn">Sign out</a>
            </div>
        </div>
    );
};

export default NavBar;