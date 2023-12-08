import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="header  flex justify-between bg-slate-500 h-10">
      <NavLink
        to="/"
        className="w-8 h-7 mx-10 my-1 px-7 font-medium bg-white rounded-lg  shadow-md flex justify-center items-center text-sm"
      >
        <p>Store</p>
      </NavLink>
      <nav className=" flex mx-10  gap-5 font-medium text-lg ">
      <NavLink
        to="/"
        className={({isActive})=> isActive?"text-red-900": "text-black"}
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/cart"
        className={({isActive})=> isActive?"text-red-900": "text-black"}
      >
        <p>cart:0</p>
      </NavLink>

      </nav>
    </header>
  );
}

export default NavBar;
