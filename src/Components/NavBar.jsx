import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => setIsMenuOpen(false);
    return (
        <div>
            <header className="fixed w-full top-0 z-50 backdrop-blur-lg   uppercase">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">

                        <div>
                            <a href="">
                                <img src="https://easycreativesolution.com/wp-content/uploads/2025/05/ECS-LOGO.svg" alt="Logo" className="h-[50px] w-[50px]" />
                            </a>
                        </div>


                        <nav className="hidden md:flex flex-1/3 justify-center gap-6">
                            <NavLink to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600  font-semibold-300" : "hover:text-blue-600 duration-300 text-white"
                                }>Home</NavLink>
                            <NavLink to="/portfolio" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600  font-semibold-300" : "hover:text-blue-600 duration-300 text-white"
                                }>Our Portfolio</NavLink>
                            <NavLink to="/about-us" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600  font-semibold-300" : "hover:text-blue-600 duration-300 text-white"
                                }>About</NavLink>
                            <NavLink to="/contact-us" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600  font-semibold-300" : "hover:text-blue-600 duration-300 text-white"
                                }>Contact</NavLink>
                        </nav>


                        <div className="flex items-center gap-4 md:hidden">
                            {isMenuOpen ? (
                                // Close Button (X)
                                <button onClick={toggleMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </button>
                            ) : (
                                // Hamburger Menu
                                <>
                                    <button onClick={toggleMenu}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                        </svg>

                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className={`md:hidden w-full overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <nav className="flex flex-col items-start px-3  gap-6 py-4 bg-black text-white">
                            <NavLink onClick={closeMenu} to="/" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600  font-semibold-300" : "hover:text-blue-600 duration-300 text-white"
                                }>
                                Home
                            </NavLink>
                            <NavLink onClick={closeMenu} to="/portfolio" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600  font-semibold-300" : "hover:text-blue-600 duration-300 text-white"
                                }>
                                Our Portfolio
                            </NavLink>
                            <NavLink onClick={closeMenu} to="/about-us" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600  font-semibold-300" : "hover:text-blue-600 duration-300 text-white"
                                }>
                                About
                            </NavLink>
                            <NavLink onClick={closeMenu} to="/contact-us" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600  font-semibold-300" : "hover:text-blue-600 duration-300 text-white"
                                }>
                                Contact
                            </NavLink>
                        </nav>
                    </div>




                </div>
            </header>

        </div>
    );
};

export default NavBar;