import React, { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Booking = () => {
    const [credentials, setcredentials] = useState({ name: '', phone: '', email: '', date: '', time: '' })

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Header />
            <div className='overflow-hidden flex flex-col justify-center items-center h-screen bg-linear-to-r from-white from-50% to-[#0451cd] to-50%'>
                <div className='w-[80vw] md:w-[70vw] flex items-center justify-center flex-col md:flex-row'>
                    <div className="image h-[30%] w-full md:w-[50%] md:h-full">
                        <img className='h-full w-full' src='https://images.axios.com/rseGAk89vuIlIcOMwtFzdPfRUzI=/117x0:1197x1080/1600x1600/2023/01/17/1673986436931.jpg' alt='image' />
                    </div>
                    <div className="form-container w-full md:w-[50%] md:h-full bg-white flex flex-col justify-center p-5">
                        <h2 className='text-2xl font-extrabold text-[#0451cd] mb-5 text-center'>Book An Appointment</h2>

                        <form className='flex flex-col gap-y-5 w-full'>
                            <div className='flex flex-col gap-y-1'>
                                <label className='font-bold' htmlFor='name'>Name:</label>
                                <input className='text-lg p-1 px-2 border-2 border-black rounded-md' id='name' name='name' value={credentials.name} type='text' placeholder='John Doe' required onChange={handleChange} />
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <label className='font-bold' htmlFor='phone'>Phone No:</label>
                                <input className='text-lg p-1 px-2 border-2 border-black rounded-md' id='phone' name='phone' value={credentials.phone} type='number' placeholder='9876543210' required onChange={handleChange} />
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <label className='font-bold' htmlFor='email'>Email:</label>
                                <input className='text-lg p-1 px-2 border-2 border-black rounded-md' id='email' name='email' value={credentials.email} type='email' placeholder='john@doe.com' required onChange={handleChange} />
                            </div>

                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col gap-y-1 w-50'>
                                    <label className='font-bold' htmlFor='date'>Date:</label>
                                    <input className='w-full text-lg p-1 px-2 border-2 border-black rounded-md' id='date' name='date' value={credentials.date} type='date' required onChange={handleChange} />
                                </div>

                                <div className='flex flex-col gap-y-1 w-50'>
                                    <label className='font-bold' htmlFor='time'>Time:</label>
                                    <input className='w-full text-lg p-1 px-2 border-2 border-black rounded-md' id='time' name='time' value={credentials.time} type='time' required onChange={handleChange} />
                                </div>
                            </div>

                            <div className='text-center'>
                                <button type='submit' className='text-white bg-[#0451cd] w-fit p-1 px-2 rounded-md text-lg cursor-pointer'>SignUp</button>
                            </div>

                            <div className='text-center text-lg'>
                                <span>Already Have a Account? <Link className='text-[#0451cd]' to={'/login'}>Login</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Booking