import Header from '../components/Header'
import Footer from '../components/Footer'

const Services = () => {
    const services = [
        {
            id: 1,
            image: 'https://www.safehospitalguntur.com/assets/img/services/cardiology.jpg',
            name: 'Cardiology',
            description: 'Expert care for heart-related conditions, including hypertension, arrhythmias, and heart disease.'
        },
        {
            id: 2,
            image: 'https://charlestondermatology.com/wp-content/uploads/2023/03/skin-care.png',
            name: 'Dermatology',
            description: 'Diagnosis and treatment of skin, hair, and nail disorders such as acne, eczema, and psoriasis.'
        },
        {
            id: 3,
            image: 'https://www.vickerypediatrics.com/wp-content/uploads/2023/04/vickery-newborn-pediatrics-cumming.jpg',
            name: 'Pediatrics',
            description: 'Comprehensive health care services for infants, children, and adolescents from birth to age 18.'
        },
        {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQai_J3E8tBWnXfQbm9E08C7RtY2bBnRSG5Cg&s',
            name: 'Gynecology',
            description: 'Women’s health services including menstrual care, fertility, pregnancy, and menopause support.'
        },
        {
            id: 5,
            image: 'https://www.chaudharyhospital.in/wp-content/uploads/2020/05/Orthopedics-1-1.png',
            name: 'Orthopedics',
            description: 'Treatment for bone, joint, and muscle conditions like fractures, arthritis, and sports injuries.'
        },
        {
            id: 6,
            image: 'https://scshospitals.com/wp-content/uploads/2021/08/ent.png',
            name: 'ENT (Ear, Nose, Throat)',
            description: 'Care for issues related to hearing, sinus problems, sore throat, and related infections.'
        },
        {
            id: 7,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFVQsXpWvkJSjwbaxD01ii56YETbAzBRRVw&s',
            name: 'Dentistry',
            description: 'Full range of dental services including cleanings, fillings, root canals, and orthodontics.'
        },
        {
            id: 8,
            image: 'https://hindumissionhospital.in/wp-content/uploads/2022/09/neurology-human.webp',
            name: 'Neurology',
            description: 'Specialized care for brain and nervous system disorders like migraines, epilepsy, and stroke.'
        },
        {
            id: 9,
            image: 'https://mpowerminds.com/assetOLD/images/New-content-for-old-blog.png',
            name: 'Psychiatry',
            description: 'Mental health support for conditions like anxiety, depression, bipolar disorder, and more.'
        },
        {
            id: 10,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBz0oXX6brW5dVVKnjAyw_jTpBT867u3dfvQ&s',
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
                        <div className="service-card bg-white p-3 rounded-lg flex flex-col items-center h-[400px] w-[250px] min-w-[250px]">
                            <div className='p-4 w-full'><img className='rounded-lg mb-2 h-[150px] w-full' src={service.image} /></div>
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