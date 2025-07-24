import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='flex flex-col md:block gap-y-5 md:gap-0'>
                <div className="header-container bg-white text-[#0451cd] p-5 flex justify-between md:justify-around items-center">
                    <div className="logo flex items-center">
                        <FaUserDoctor size={40} />
                        <span className='text-3xl font-extrabold'>HealthPort</span>
                    </div>

                    <div className="hidden md:flex nav-links items-center md:gap-x-7 lg:gap-x-15 gap-x-5">
                        <Link to={'/'} className='text-2xl hover:text-[#0451cdaf]'>Home</Link>
                        <Link to={'/services'} className='text-2xl hover:text-[#0451cdaf]'>Services</Link>
                        <Link to={'/'} className='text-2xl hover:text-[#0451cdaf]'>About Us</Link>
                        <Link to={'/'} className='text-2xl hover:text-[#0451cdaf]'>Contact</Link>
                    </div>

                    <div className="register">
                        <button onClick={() => navigate('/register')} className='bg-[#0451cd] text-white p-2 md:px-4 text-xl font-bold cursor-pointer rounded-xl'>Register</button>
                    </div>
                </div>

                <div className="flex md:hidden nav-links items-center md:gap-x-15 gap-x-5 text-[#0451cd] font-bold w-full justify-around mb-5">
                    <Link to={'/'} className='text-2xl text-center hover:text-[#0451cdaf]'>Home</Link>
                    <Link to={'/services'} className='text-2xl text-center hover:text-[#0451cdaf]'>Services</Link>
                    <Link to={'/'} className='text-2xl text-center hover:text-[#0451cdaf]'>About Us</Link>
                    <Link to={'/'} className='text-2xl text-center hover:text-[#0451cdaf]'>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Header