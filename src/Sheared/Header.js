import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img/azizul_hakim_rony.png'
import logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <div className='sticky top-0'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact z-10 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='text-cyan-500' to="/">Home</Link></li>
                            <li><Link className='text-cyan-500' to="/skills">Skills</Link></li>
                            <li><Link className='text-cyan-500' to="/projects">Projects</Link></li>
                            <li><Link className='text-cyan-500' to="/about">About</Link></li>
                            <li><Link className='text-cyan-500' to="/contact">Contact Me</Link></li>

                        </ul>
                    </div>

                    <div className="w-14 h-14">
                        <img src={logo} alt="" className='rounded-full' />
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='text-cyan-500 text-xl' to="/">Home</Link></li>
                        <li><Link className='text-cyan-500 text-xl' to="/about">About</Link></li>
                        <li><Link className='text-cyan-500 text-xl' to="/skills">Skills</Link></li>
                        <li><Link className='text-cyan-500 text-xl' to="/projects">projects</Link></li>
                        <li><Link className='text-cyan-500 text-xl' to="/contact">Contact</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="w-12 border-2 rounded-full">
                        <img src={img} alt="" className='rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;