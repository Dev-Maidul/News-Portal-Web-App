import React from "react";
import logo from "../assets/logo.png";
import {  format } from "date-fns";
const Header = () => {
  return (
    
    <div className="flex gap-3 flex-col items-center justify-center text-center py-8">
        
      <img className="w-[471px]" src={logo} alt="" />
      <p className="text-accent text-lg">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>

    </div>
  );
};

export default Header;
