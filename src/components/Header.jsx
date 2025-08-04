<<<<<<< HEAD
"use client";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Stethoscope, Menu, Phone, User, LogOut, X } from "lucide-react";
import { ContextState } from "../context";
import toast from "react-hot-toast";

const Header = () => {
  const { user, setuser, settoken } = ContextState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // <-- Detect current path

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    setuser(null);
    settoken(null);
    navigate("/");
    toast.success("Logged Out Successfully!");
  };

  const isActive = (path) => location.pathname === path; // <-- Simple check

  const NavLinks = ({ mobile = false }) => {
    const linkClass = (path) =>
      mobile
        ? `block py-3 text-lg font-medium transition-colors border-b border-gray-100 last:border-b-0 ${
            isActive(path)
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-700"
          }`
        : `text-lg font-medium relative group ${
            isActive(path)
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-700"
          }`;

    const underlineClass =
      "absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300";

    return (
      <>
        <Link to="/" className={linkClass("/")}>
          Home
          {!mobile && (
            <span
              className={`${underlineClass} ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          )}
        </Link>

        <Link to="/services" className={linkClass("/services")}>
          Services
          {!mobile && (
            <span
              className={`${underlineClass} ${
                isActive("/services") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          )}
        </Link>

        <Link
          to={
            user?.role === "admin" ? "/admin/appointments" : "/my/appointments"
          }
          className={linkClass(
            user?.role === "admin" ? "/admin/appointments" : "/my/appointments"
          )}
        >
          {user?.role === "admin" ? "All Appointments" : "Your Appointments"}
          {!mobile && (
            <span
              className={`${underlineClass} ${
                isActive(
                  user?.role === "admin"
                    ? "/admin/appointments"
                    : "/my/appointments"
                )
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          )}
        </Link>

        {user?.role !== "admin" && (
          <Link to="/booking" className={linkClass("/booking")}>
            Book Appointment
            {!mobile && (
              <span
                className={`${underlineClass} ${
                  isActive("/booking") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            )}
          </Link>
        )}
      </>
    );
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 p-2 rounded-full group-hover:bg-blue-700 transition-colors">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                HealthPort
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLinks />
            </nav>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-2 text-blue-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 1800 1800 22</span>
            </div>

            {/* Auth Section */}
            <div className="flex items-center space-x-3">
              {!user ? (
                <div className="hidden sm:flex items-center space-x-2">
                  <Link
                    to="/login"
                    className={`px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium ${
                      isActive("/login") ? "bg-blue-50" : ""
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium ${
                      isActive("/register") ? "ring-2 ring-blue-400" : ""
                    }`}
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="hidden sm:flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                    <User className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">
                      Hi, {user.name.split(" ")[0]}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 px-3 py-2 border border-red-500 text-red-500 hover:bg-red-50 rounded-lg font-medium transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Stethoscope className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-blue-600">
                    HealthPort
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 py-6">
                <NavLinks mobile />
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 space-y-4">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">+91 1800 1800 22</span>
                </div>

                {!user ? (
                  <div className="flex flex-col space-y-3">
                    <Link
                      to="/login"
                      className="w-full px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                      <User className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">
                        Hi, {user.name.split(" ")[0]}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-red-500 text-red-500 hover:bg-red-50 rounded-lg font-medium transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
=======
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
>>>>>>> origin/main
