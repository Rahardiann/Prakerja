import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-custom-grey pt-12 text-white p-4">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-black mr-8">Management</h1>
      </div>
      <div className="flex items-center">
        <FaUserCircle className="text-4xl cursor-pointer mr-4 text-black" />
        <h1 className="text-2xl font-semibold text-black mr-8">
          Alexander Moraless
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
