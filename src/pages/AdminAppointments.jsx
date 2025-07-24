import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import toast from 'react-hot-toast';


const AdminAppointments = () => {
    const appointments = [
        {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'accepted'
        },
        {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'pending'
        }, {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'rejected'
        }, {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'pending'
        }, {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'pending'
        }, {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'pending'
        }, {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'pending'
        }, {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'pending'
        }, {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'pending'
        }, {
            patient_id: '#PAT9878',
            name: 'John Doe',
            number: '+91 9876543210',
            date: '20/03/2025',
            time: '11:30',
            status: 'pending'
        },
    ]

    const [patient, setpatient] = useState({})
    const [status, setstatus] = useState("")

    const handleEdit = (patient) => {
        setpatient(patient);
        toast((t) => (
            <span className='p-2 flex items-center justify-center text-lg flex-col w-[200px]'>
                <h3 className='text-[#0451cd] font-bold mb-3'>Edit Status</h3>
                <select className='cursor-pointer border-2 border-[#0451cd] rounded-lg text-lg font-bold' defaultValue={patient.status} onChange={(e) => setstatus(e.target.value)}>
                    <option value={'pending'}>Pending</option>
                    <option value={'accepted'}>Accepted</option>
                    <option value={'rejected'}>Rejected</option>
                </select>
                <div className='flex justify-between items-center w-full mt-5'>
                    <button className='bg-red-500 cursor-pointer p-1 px-2 text-white rounded-md' onClick={() => toast.dismiss(t.id)}>
                        Dismiss
                    </button>

                    <button className='border-1 cursor-pointer p-1 px-2 bg-[#0451cd] text-white rounded-md' onClick={() => toast.dismiss(t.id)}>
                        Save
                    </button>
                </div>
            </span>
        ));
    }

    return (
        <>
            <Header />
            <div className='min-h-screen bg-[#0451cd] flex flex-col max-w-screen justify-start items-center py-10 px-5 md:p-10'>
                <h1 className='text-3xl font-bold text-white mb-3'>Appointment List</h1>
                <div className='max-w-full overflow-auto'>
                    <table className='border-2 border-white text-white overflow-auto'>
                        <thead className='p-2 bg-white text-[#0451cd] text-md md:text-lg'>
                            <tr>
                                <th className='p-5 text-center'>Patient ID</th>
                                <th className='p-5 text-center'>Patient Name</th>
                                <th className='p-5 text-center'>Number</th>
                                <th className='p-5 text-center'>Visit Date</th>
                                <th className='p-5 text-center'>Visit Time</th>
                                <th className='p-5 text-center'>Status</th>
                                <th className='p-5 text-center'>Action</th>
                            </tr>
                        </thead>

                        <tbody className='text-lg'>
                            {appointments.map((patient, index) => (
                                <tr key={index} className='border-2 border-white even:bg-white even:text-[#0451cd] odd:bg-[#0451cd] odd:text-white'>
                                    <td className='p-5 text-center'>{patient.patient_id}</td>
                                    <td className='p-5 text-center'>{patient.name}</td>
                                    <td className='p-5 text-center'>{patient.number}</td>
                                    <td className='p-5 text-center'>{patient.date}</td>
                                    <td className='p-5 text-center'>{patient.time}</td>
                                    <td className='p-5 text-center'>{patient.status}</td>
                                    <td className='p-5 text-center flex  gap-5'><MdOutlineEdit size={21} onClick={() => handleEdit(patient)} className='cursor-pointer' /> <MdDeleteOutline onClick={() => setpatient(patient)} className='cursor-pointer' color='red' size={21} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminAppointments