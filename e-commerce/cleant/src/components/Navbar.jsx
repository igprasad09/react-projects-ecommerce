import React from "react";
import logo from "../assets/admin_assets/logo.png";
import search_icon from "../assets/admin_assets/search_icon.png"
import profile_icon from "../assets/admin_assets/profile_icon.png"
import cart_icon from "../assets/admin_assets/cart_icon.png"
import { NavLink, Link } from "react-router";


function Navbar({handle_search_fuction}) {
  
  return (
    <div className="grid justify-center">
      <nav className="  h-15 w-[100%] mt-3 flex">
        <img src={logo} className="" />

        <div className="flex items-center ml-40">
        <NavLink to='/'>
            <p className=" font-semibold text-gray-600 cursor-grab mr-5">HOME</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden"/>
          </NavLink>
        <NavLink to='/collection'>
            <p className="font-semibold text-gray-600 cursor-grab mr-5">COLLECTION</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden"/>
          </NavLink>
        <NavLink to='/about'>
            <p className="font-semibold text-gray-600 cursor-grab mr-5">ABOUT</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden"/>
          </NavLink>
        <NavLink to='/contact'>
            <p className="font-semibold text-gray-600 cursor-grab mr-5">CONTACT</p>
            <hr className="w-2/3 border-none h-[1.5px] bg-gray-700 hidden"/>
          </NavLink >
          <button className="font-semibold text-[11px] border-1 border-gray-200 bg-white w-28 h-9 rounded-2xl text-gray-600 cursor-grab mr-3">ADMIN PANEL</button>
        </div>
        
        <div className="flex items-center justify-center  ml-40">
           <img src={search_icon} className="size-6 mr-7" onClick={handle_search_fuction}/>
           <img src={profile_icon} className="size-6 mr-7"/>
           <Link to='/cart'>
           <img src={cart_icon} className="size-6 mr-7"/>
           </Link>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
