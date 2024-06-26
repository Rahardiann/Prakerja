import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBox,
  FaCubes,
  FaHistory,
  FaSignOutAlt,
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaAddressBook,
  FaUser,
} from "react-icons/fa";
import Logosidebar from "../../assets/logo.png"; // Assuming logo.png is directly in the public directory

import { FaPerson, FaUserPen } from "react-icons/fa6";

const Sidebar = () => {
  const [minimized, setMinimized] = useState(window.innerWidth <= 768);
  const [masterOpen, setMasterOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMinimized(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMaster = () => {
    setMasterOpen(!masterOpen);
  };

  return (
    <div
      className={`flex flex-col h-screen ${
        minimized ? "w-16" : "w-64"
      } bg-white transition-all ease-in-out duration-300`}
      style={{
        maxWidth: minimized && window.innerWidth <= 768 ? "50px" : "220px",
      }}
    >
      <div className="p-3">
        <img
          src={Logosidebar}
          alt="Logo"
          className={`size-32 w-full ${minimized ? "mx-auto" : "mt-8"}`}
        />
      </div>
      <ul className="flex-grow">
        <li className="my-4">
          <Link
            to="/dashboard"
            className={`flex items-center text-gray-400 text-base sidebar-item ${
              minimized ? "pl-2" : "pl-4"
            } hover:text-gray-400`}
            onClick={() => setMinimized(window.innerWidth <= 768)}
          >
            <FaHome className={`ml-2 ${minimized ? "ml-3" : "mr-4"}`} />{" "}
            {!minimized && <span>Dashboard</span>}
          </Link>
        </li>
        <li className="my-10">
          <Link
            to="/data"
            className={`flex items-center text-gray-400 text-base sidebar-item ${
              minimized ? "pl-2" : "pl-4"
            } hover:text-gray-400`}
            onClick={() => setMinimized(window.innerWidth <= 768)}
          >
            <FaBox className={`ml-2 ${minimized ? "ml-3" : "mr-4"}`} />{" "}
            {!minimized && <span>Data</span>}
          </Link>
        </li>
        <li className="my-10">
          <Link
            to="/admin"
            className={`flex items-center text-gray-400 text-base sidebar-item ${
              minimized ? "pl-2" : "pl-4"
            } hover:text-gray-400`}
            onClick={() => setMinimized(window.innerWidth <= 768)}
          >
            <FaAddressBook className={`ml-2 ${minimized ? "ml-3" : "mr-4"}`} />{" "}
            {!minimized && <span>Admin</span>}
          </Link>
        </li>
        <li className="my-10">
          <Link
            to="/koordinator"
            className={`flex items-center text-gray-400 text-base sidebar-item ${
              minimized ? "pl-2" : "pl-4"
            } hover:text-gray-400`}
            onClick={() => setMinimized(window.innerWidth <= 768)}
          >
            <FaUserPen className={`ml-2 ${minimized ? "ml-3" : "mr-4"}`} />{" "}
            {!minimized && <span>Koordinator</span>}
          </Link>
        </li>
        

        <li className="my-10">
          <Link
            to="/user"
            className={`flex items-center text-gray-400 text-base sidebar-item ${
              minimized ? "pl-2" : "pl-4"
            } hover:text-gray-400`}
            onClick={() => setMinimized(window.innerWidth <= 768)}
          >
            <FaUser className={`ml-2 ${minimized ? "ml-3" : "mr-4"}`} />{" "}
            {!minimized && <span>User</span>}
          </Link>
        </li>
        <li className="my-10">
          <Link
            to="/logout"
            className={`flex items-center text-gray-400 text-base sidebar-item ${
              minimized ? "pl-2" : "pl-4"
            } hover:text-gray-400`}
            onClick={() => setMinimized(window.innerWidth <= 768)}
          >
            <FaSignOutAlt className={`ml-2 ${minimized ? "ml-3" : "mr-4"}`} />{" "}
            {!minimized && <span>Logout</span>}
          </Link>
        </li>
      </ul>
      {window.innerWidth <= 768 && !minimized && (
        <div className="p-4">
          <button
            className="bg-blue-200 text-gray-400 btn btn-blue py-2 rounded"
            onClick={() => setMinimized(window.innerWidth <= 768)}
          >
            <FaBars />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
