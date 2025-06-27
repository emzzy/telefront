import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles/Navbar.css";

const path = window.location.pathname;

const Navbar = () => {
  return (
    <nav className="flex shadow-md  items-center gap-6  bg-slate-600 mx-auto w-full bg-opacity-100">
      <Link to="/" className=" w-[133px] h-[33px] object-contain bg-white mx-auto ">
        Telemedicine
      </Link>
      <ul className="flex  justify-between gap-10 p-8 max-w-[1000px] mx-auto w-full px-2 sm:px-4 lg:px-10 py-4">
        <CustomLink to="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-blue-500">Home</CustomLink>
        <CustomLink to="/services" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-blue-500">Services</CustomLink>
        <CustomLink to="/about-us" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-blue-500">About Us</CustomLink>
        <CustomLink to="/login" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-blue-500">Login/Register</CustomLink>
         <Link to="#">
          <i className=" fas fa-search text-white px-3 py-3  white  mx-auto hover:bg-gray-700 hover:text-blue-500 "></i>
        </Link>
        <Link to="#">
          <i className="fas fa-user  block rounded-md  px-3 py-3 text-gray-300 mx-auto  hover:bg-gray-700 hover:text-blue-500 "></i>
        </Link>
      </ul>
      {/* <div className="navbar-icons">
        <Link to="#">
          <i className="fas fa-search"></i>
        </Link>
        <Link to="#">
          <i className="fas fa-user"></i>
        </Link>
      </div> */}
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
