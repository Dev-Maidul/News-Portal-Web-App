import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets//user.png";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Button from "daisyui/components/button";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(()=>{
        alert('Successfully Log out')
    })
    .catch((error)=>{
        console.log(error);
    })
  };
  return (
    <div className="flex gap-2 w-10/12 mx-auto items-center justify-between py-4">
      <div className="nav-left"></div>
      <div className="nav-middle flex gap-3 items-center">
        <NavLink to="/" className="text-accent">
          Home
        </NavLink>
        <NavLink to="/about" className="text-accent">
          About
        </NavLink>
        <NavLink to="/career" className="text-accent">
          Career
        </NavLink>
      </div>
      <div className="nav-right flex items-center gap-3">
        <img src={userIcon} alt="" />
        
        {
            user ? <button onClick={handleLogout} className="btn btn-primary p-6 text-lg">Log Out</button>: <Link to="/auth/login" className="btn btn-primary p-6 text-lg">
            Login
          </Link>
        }
          
         
      
      </div>
    </div>
  );
};

export default Navbar;
