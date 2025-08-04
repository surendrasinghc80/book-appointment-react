import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { ContextState } from '../context';
import toast from 'react-hot-toast';

const Booking = () => {
    const [credentials, setcredentials] = useState({ name: '', phone: '', description: '', date: '', time: '' })
    const { user, token } = ContextState();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/addappointments`, { name: credentials.name, discreption: credentials.description, phoneNumber: credentials.phone, date: credentials.date, time: credentials.time }, { headers: { Authorization: `Bearer ${token}` } })

            if (data.status !== 201) {
                toast.error(data.message)
            }

            toast.success(data.message);
            setcredentials({ name: '', phone: '', description: '', date: '', time: '' });
            navigate('/')

        } catch (error) {
            console.log(error.response?.data?.message)
        }
    }

    return (
        <>
            <Header />
            <div className='overflow-hidden flex flex-col justify-center items-center min-h-screen md:h-screen p-10 bg-linear-to-r from-white to-[#0451cd]'>
                <div className='w-[80vw] md:w-[70vw] flex items-center justify-center flex-col md:flex-row'>
                    <div className="image h-[30%] w-full md:w-[50%] md:h-full">
                        <img className='h-full w-full' src='https://images.axios.com/rseGAk89vuIlIcOMwtFzdPfRUzI=/117x0:1197x1080/1600x1600/2023/01/17/1673986436931.jpg' alt='image' />
                    </div>
                    <div className="form-container w-full md:w-[50%] md:h-full bg-white flex flex-col justify-center p-5">
                        <h2 className='text-2xl font-extrabold text-[#0451cd] mb-5 text-center'>Book An Appointment</h2>

                        <form className='flex flex-col gap-y-5 w-full' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-y-1'>
                                <label className='font-bold' htmlFor='name'>Name:</label>
                                <input className='text-lg p-1 px-2 border-2 border-black rounded-md' id='name' name='name' value={credentials.name} type='text' placeholder='John Doe' required onChange={handleChange} />
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <label className='font-bold' htmlFor='phone'>Phone No:</label>
                                <input minLength={10} maxLength={10} className='text-lg p-1 px-2 border-2 border-black rounded-md' id='phone' name='phone' value={credentials.phone} type='tel' placeholder='9876543210' required onChange={handleChange} />
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <label className='font-bold' htmlFor='description'>Description:</label>
                                <textarea rows={4} className='resize-none text-lg p-1 px-2 border-2 border-black rounded-md' id='description' name='description' value={credentials.description} type='text' placeholder='description...' required onChange={handleChange} />
                            </div>

                            <div className='flex justify-between items-center gap-1'>
                                <div className='flex flex-col gap-y-1 w-full'>
                                    <label className='font-bold' htmlFor='date'>Date:</label>
                                    <input onClick={(e) => e.target.showPicker?.()} className='w-full text-lg p-1 px-2 border-2 border-black rounded-md' id='date' name='date' value={credentials.date} type='date' required onChange={handleChange} />
                                </div>

                                <div className='flex flex-col gap-y-1 w-full'>
                                    <label className='font-bold' htmlFor='time'>Time:</label>
                                    <input onClick={(e) => e.target.showPicker?.()} className='w-full text-lg p-1 px-2 border-2 border-black rounded-md' id='time' name='time' value={credentials.time} type='time' required onChange={handleChange} />
                                </div>
                            </div>

                            <div className='text-center'>
                                <button type='submit' className='text-white bg-[#0451cd] w-fit p-1 px-2 rounded-md text-lg cursor-pointer'>Book</button>
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