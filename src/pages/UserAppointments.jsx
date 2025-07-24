import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


const UserAppointments = () => {
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

    return (
        <>
            <Header />
            <div className='min-h-screen bg-[#0451cd] flex flex-col max-w-screen justify-start items-center py-10 px-5 md:p-10'>
                <h1 className='text-3xl font-bold text-white mb-3'>My Appointment List</h1>
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

export default UserAppointments