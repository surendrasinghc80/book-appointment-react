import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { ContextState } from '../context';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, setuser, settoken } = ContextState();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem('user', "")
        localStorage.setItem('token', "")

        setuser()
        settoken()

        navigate('/')

        toast.success('Logged Out Successfully!')
    }

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
                        <Link to={user && user.role === 'admin' ? '/admin/appointments' : '/my/appointments'} className='text-2xl hover:text-[#0451cdaf] text-center'>{user?.role === 'admin' ? 'Appointments' : 'Your Appointments'}</Link>
                    </div>

                    <div className={`${user ? 'hidden' : 'flex'} register flex-wrap justify-center items-center gap-2`}>
                        <Link className='border-2 border-[#0451cd] p-2 md:px-4 text-xl font-bold cursor-pointer rounded-lg' to={'/login'}>Login</Link>
                        <button onClick={() => navigate('/register')} className='bg-[#0451cd] text-white p-2 md:px-4 text-xl font-bold cursor-pointer rounded-lg'>Register</button>
                    </div>

                    {user &&
                        <div className="user-name flex items-center justify-center">
                            <h1 className='font-bold text-center text-lg md:text-xl me-1 md:me-2'>Hi, {String(user.name).split(" ")[0]}</h1>
                            <button onClick={handleLogout} className='p-1 logout bg-red-600 text-white md:font-bold rounded-lg cursor-pointer'>Logout</button>
                        </div>
                    }
                </div>

                <div className="flex flex-wrap sm:flex-nowrap md:hidden nav-links items-center md:gap-x-15 gap-5 text-[#0451cd] font-bold w-full justify-around mb-5">
                    <Link to={'/'} className='text-2xl text-center hover:text-[#0451cdaf]'>Home</Link>
                    <Link to={'/services'} className='text-2xl text-center hover:text-[#0451cdaf]'>Services</Link>
                    <Link to={'/my/appointments'} className='text-2xl text-center hover:text-[#0451cdaf]'>Your Appointments</Link>
                </div>
            </div >
        </>
    )
}

export default Header