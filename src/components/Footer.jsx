import React from 'react'
import { FaUserDoctor } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'
import { ContextState } from '../context';

const Footer = () => {
    const { user } = ContextState();
    const navigate = useNavigate();

    return (
        <>
            <div className="footer-container flex justify-between items-center bg-white text-[#0451cd] p-4 flex-col gap-5 md:flex-row">
                <div className="logo flex items-center">
                    <FaUserDoctor size={40} />
                    <span className='text-3xl font-extrabold'>HealthPort</span>
                </div>

                <div className='border-t-2 border-[#0451cd] w-80 md:hidden'></div>
                <span className='hidden md:block text-6xl'>|</span>

                <div className='w-[60%] p-2'>
                    <h1 className='font-bold text-2xl text-center'>Specialties</h1>
                    <p className='text-lg text-justify'>We offer appointments with a wide range of medical specialists including general physicians, dermatologists, dentists, pediatricians, gynecologists, and cardiologists, ensuring expert care for patients of all ages and needs.</p>
                </div>

                <div className='border-t-2 border-[#0451cd] w-80 md:hidden'></div>
                <span className='hidden md:block text-6xl'>|</span>

                <div className="book">
                    {user && user.role === 'admin'
                        ?
                        <button onClick={() => navigate('/admin/appointments')} className='bg-[#0451cd] text-white p-1 md:px-2 cursor-pointer rounded-md'>Appointments</button>
                        :
                        <button onClick={() => navigate('/booking')} className='bg-[#0451cd] text-white p-1 md:px-2 cursor-pointer rounded-md'>Book An Appointment</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Footer