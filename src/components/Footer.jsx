<<<<<<< HEAD
"use client";
import { Stethoscope, Clock, MapPin, Calendar } from "lucide-react";

// Mock context - replace with your actual context
const useContextState = () => {
  const user = { role: "user" }; // or "admin"
  return { user };
};

const Footer = () => {
  const { user } = useContextState();

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <footer className="bg-blue-50 border-t border-blue-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">HealthPort</span>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 7AM-7PM | Sat-Sun: 10AM-5PM</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>123 Wellness Street, New Delhi</span>
            </div>
          </div>

          {/* Booking Button */}
          <div>
            {user && user.role === "admin" ? (
              <button
                onClick={() => handleNavigation("/admin/appointments")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
                size="sm"
              >
                <Calendar className="h-4 w-4 mr-1" />
                Appointments
              </button>
            ) : (
              <button
                onClick={() => handleNavigation("/booking")}
                className="flex justify-center items-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
                size="sm"
              >
                <Calendar className="h-4 w-4 mr-1" />
                Book Now
              </button>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-4 border-t border-blue-200">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} HealthPort Hospital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
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
>>>>>>> origin/main
