import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import "../styles/Navbar.css"

const path = window.location.pathname

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='site-title'>
                Telemedicine
            </Link>
            <ul className='navbar-links'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/services">Services</CustomLink>
                <CustomLink to="/about-us">About Us</CustomLink>
            </ul>
            <div className='navbar-icons'>
                <Link to="#">
                    <i className='fas fa-search'></i>
                </Link>
                <Link to="#">
                    <i className='fas fa-user'></i>
                </Link>
            </div>
        </nav>
    );
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar