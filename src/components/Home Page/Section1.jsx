import React from 'react'
import Doctor from '../../assets/Doctor.png'
import { Link } from 'react-router-dom'

const Section1 = () => {
    return (
        <>
            <div className="section-container bg-[#0451cd] h-[90vh] w-full flex justify-between items-center">
                <div className="book-content w-full md:w-[50%] text-white flex flex-col items-center md:items-start md:gap-10 gap-20 md:px-10 px-20">
                    <h1 className='text-6xl/19 font-extrabold text-center md:text-start'>Book Your Doctor Appointment Online</h1>
                    <span className='text-2xl md:text-xl text-center md:text-start'>A Healthier Tomorrow Starts Today: Schedule Your Appointment Your Wellness, Our Expertise: Set Up Your Appointment Today.</span>
                    <Link to={'/booking'} className='bg-white text-[#0451cd] w-fit rounded-lg font-bold p-2 px-3 text-lg cursor-pointer'>Book An Appointment</Link>
                </div>
                <div className="doctor-image md:w-[50%] h-full hidden md:block">
                    <img className='h-full' src={Doctor} alt='doctor' />
                </div>
            </div>
        </>
    )
}

export default Section1