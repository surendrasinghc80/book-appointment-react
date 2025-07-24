import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Services = () => {
    const services = [
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'Cardiology',
            description: 'Expert care for heart-related conditions, including hypertension, arrhythmias, and heart disease.'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'Dermatology',
            description: 'Diagnosis and treatment of skin, hair, and nail disorders such as acne, eczema, and psoriasis.'
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'Pediatrics',
            description: 'Comprehensive health care services for infants, children, and adolescents from birth to age 18.'
        },
        {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'Gynecology',
            description: 'Women’s health services including menstrual care, fertility, pregnancy, and menopause support.'
        },
        {
            id: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'Orthopedics',
            description: 'Treatment for bone, joint, and muscle conditions like fractures, arthritis, and sports injuries.'
        },
        {
            id: 6,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'ENT (Ear, Nose, Throat)',
            description: 'Care for issues related to hearing, sinus problems, sore throat, and related infections.'
        },
        {
            id: 7,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'Dentistry',
            description: 'Full range of dental services including cleanings, fillings, root canals, and orthodontics.'
        },
        {
            id: 8,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'Neurology',
            description: 'Specialized care for brain and nervous system disorders like migraines, epilepsy, and stroke.'
        },
        {
            id: 9,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'Psychiatry',
            description: 'Mental health support for conditions like anxiety, depression, bipolar disorder, and more.'
        },
        {
            id: 10,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
            name: 'General Medicine',
            description: 'Primary care services for common illnesses, routine checkups, and chronic disease management.'
        }
    ];


    return (
        <>
            <Header />
            <div className="services-container min-h-[90vh] flex justify-center items-center flex-col bg-[#0451cd]">
                <h1 className='text-white font-bold text-3xl mt-5'>Our Services</h1>
                <div className='services flex items-start w-full justify-center gap-10 p-10 flex-wrap'>
                    {services.map(service => (
                        <div className="service-card bg-white p-3 rounded-2xl flex flex-col items-center h-[400px] w-[250px] min-w-[250px]">
                            <div className='p-4'><img className='rounded-2xl mb-2' src={service.image} /></div>
                            <h1 className='text-xl font-bold'>{service.name}</h1>
                            <span className='text-center mb-5'>{service.description}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services