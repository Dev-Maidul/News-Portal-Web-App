import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Findon = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-5">Find on Us</h2>
    
        <div className="join join-vertical w-full">
          <button className="btn join-item justify-start"> <FaFacebook size={26}></FaFacebook> Facebook</button>
          <button className="btn join-item justify-start"><FaTwitter size={26}></FaTwitter>Twitter</button>
          <button className="btn join-item justify-start"><FaInstagram size={26}></FaInstagram>Instagram</button>
       
      </div>
    </div>
  );
};

export default Findon;
