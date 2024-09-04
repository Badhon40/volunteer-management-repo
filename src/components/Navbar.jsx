import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)

    const [theme,setTheme]=useState('light')
    console.log(user)

    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const localTheme=localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])


    const handleTheme=e=>{
        if(e.target.checked){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
    const navLink=<>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/needVolunteer'>Need Volunteer</NavLink>
        </li>
        <li>
            <NavLink to='/myProfile' className="dropdown dropdown-end">My Profile</NavLink>
        </li>
        </>
    return (
        <div className="navbar shadow-md bg-base-100 md:px-10">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                {
                    navLink
                }
            </ul>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-logo">VolunteerHub</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">
            
            {
                navLink
            }
            </ul>
        </div>
        <div className="navbar-end gap-4">
        <label className="grid cursor-pointer place-items-center">
            <input onChange={handleTheme}
                type="checkbox"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
            <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            </label>
            {
                user?.email? <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL} />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 gap-4 shadow">
                    <li>
                      {
                        user?.displayName
                      }
                    </li>
                   <li>
                    {
                        user?.email
                    }
                   </li>
                    <li><button onClick={()=>logOut()}>Logout</button></li>
                </ul>
                </div> :  
                <Link to='/login'><button className="btn">Login</button></Link>
            }

        </div>
        </div>
    );
};

export default Navbar;