<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { formatReadableTime, formatDate } from "../../lib/utils";

const AdminAppointments = () => {
  const [appointments, setappointments] = useState();
  const [loading, setloading] = useState(true);
  const [patient, setpatient] = useState({});
  const [status, setstatus] = useState("");

  const navigate = useNavigate();

  const editStatus = async (id, localStatus) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/appointments/${id}`,
        { status: localStatus }
      );

      if (!data.status === 200) {
        console.log(data.message);
        setloading(false);
        return;
      }

      toast.success(data.message);
      // setstatus(data.data.status);
      getAllAppointments();
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  };

  const DeleteAppointment = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/appointments/${id}`
      );

      if (!data.status === 200) {
        console.log(data.message);
        setloading(false);
      }

      toast.success(data.message);
      // setstatus(data.data.status);
      getAllAppointments();
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  };

  const getAppointmentHistory = async (userId) => {
    setloading(true);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/history/${userId}`
      );

      if (!data.status === 200) {
        setloading(false);
        return;
      }

      setappointments(data.data); // this will only show that user's history
      toast.success("Fetched appointment history");
      setloading(false);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  };

  const getAllAppointments = async () => {
    setloading(true);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-appointments`
      );

      if (!data.status === 200) {
        setloading(false);
      }

      setappointments(data.data);
      toast.success(data.message);
      setloading(false);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  };

  useEffect(() => {
    getAllAppointments();
  }, []);

  const handleEdit = (patient) => {
    setpatient(patient);
    let localStatus;
    toast((t) => (
      <span className="p-2 flex items-center justify-center text-lg flex-col w-[200px]">
        <h3 className="text-[#0451cd] font-bold mb-3">Edit Status</h3>
        <select
          className="cursor-pointer border-2 border-[#0451cd] rounded-lg text-lg font-bold"
          defaultValue={patient.status}
          onChange={(e) => (localStatus = e.target.value)}
        >
          <option value={"pending"}>Pending</option>
          <option value={"accepted"}>Accepted</option>
          <option value={"rejected"}>Rejected</option>
        </select>
        <div className="flex justify-between items-center w-full mt-5">
          <button
            className="bg-red-500 cursor-pointer p-1 px-2 text-white rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>

          <button
            className="border-1 cursor-pointer p-1 px-2 bg-[#0451cd] text-white rounded-md"
            onClick={() => {
              editStatus(patient.id, localStatus);
              toast.dismiss(t.id);
            }}
          >
            Save
          </button>
        </div>
      </span>
    ));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#0451cd] flex flex-col max-w-screen justify-start items-center py-10 px-5 md:p-10">
        <h1 className="text-3xl font-bold text-white mb-3">Appointment List</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="max-w-full overflow-auto">
            <table className="border-2 border-white text-white overflow-auto">
              <thead className="p-2 bg-white text-[#0451cd] text-md md:text-lg">
                <tr>
                  <th className="p-5 text-center">S.No</th>
                  <th className="p-5 text-center">Patient ID</th>
                  <th className="p-5 text-center">Patient Name</th>
                  <th className="p-5 text-center">Number</th>
                  <th className="p-5 text-center">Description</th>
                  <th className="p-5 text-center">Visit Date</th>
                  <th className="p-5 text-center">Visit Time</th>
                  <th className="p-5 text-center">Status</th>
                  <th className="p-5 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="text-lg">
                {appointments.map((patient, index) => (
                  <tr
                    key={index}
                    className="border-2 border-white even:bg-white even:text-[#0451cd] odd:bg-[#0451cd] odd:text-white"
                  >
                    <td className="p-5 text-center">{index + 1}</td>
                    <td className="p-5 text-center">{patient.patientId}</td>
                    <td className="p-5 text-center">{patient.name}</td>
                    <td className="p-5 text-center">{patient.phoneNumber}</td>
                    <td className="p-5 text-start">{patient.discreption}</td>
                    <td className="p-5 text-center">
                      {formatDate(patient.date)}
                    </td>
                    <td className="p-5 text-center">
                      {formatReadableTime(patient.time)}
                    </td>
                    <td className="p-5 text-center">{patient.status}</td>
                    <td className="p-5 text-center">
                      <div className="flex gap-5">
                        <FaHistory
                          size={21}
                          onClick={() =>
                            navigate(
                              `/admin/appointments/history/${patient.userId}`
                            )
                          }
                          className="cursor-pointer"
                        />
                        <MdOutlineEdit
                          size={21}
                          onClick={() => handleEdit(patient)}
                          className="cursor-pointer"
                        />{" "}
                        <MdDeleteOutline
                          onClick={() => {
                            setpatient(patient);
                            DeleteAppointment(patient.id);
                          }}
                          className="cursor-pointer"
                          color="red"
                          size={21}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminAppointments;
=======
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import toast from 'react-hot-toast';
import axios from 'axios';
import { formatReadableTime, formatDate } from "../../lib/utils"


const AdminAppointments = () => {
    const [appointments, setappointments] = useState()
    const [loading, setloading] = useState(true)
    const [patient, setpatient] = useState({})
    const [status, setstatus] = useState("")
    // const appointments = [
    //     {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'accepted'
    //     },
    //     {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'pending'
    //     }, {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'rejected'
    //     }, {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'pending'
    //     }, {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'pending'
    //     }, {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'pending'
    //     }, {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'pending'
    //     }, {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'pending'
    //     }, {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'pending'
    //     }, {
    //         patient_id: '#PAT9878',
    //         name: 'John Doe',
    //         number: '+91 9876543210',
    //         date: '20/03/2025',
    //         time: '11:30',
    //         status: 'pending'
    //     },
    // ]

    const editStatus = async (id, localStatus) => {
        try {
            const { data } = await axios.patch(`http://192.168.1.44:8000/api/appointments/${id}`, { status: localStatus })

            if (!data.status === 200) {
                console.log(data.message)
                setloading(false)
                return
            }

            toast.success(data.message);
            // setstatus(data.data.status);
            getAllAppointments();

        } catch (error) {
            console.log(error.response?.data?.message || error)
        }
    }

    const DeleteAppointment = async (id) => {
        try {
            const { data } = await axios.delete(`http://192.168.1.44:8000/api/appointments/${id}`)

            if (!data.status === 200) {
                console.log(data.message)
                setloading(false)
            }

            toast.success(data.message);
            // setstatus(data.data.status);
            getAllAppointments();

        } catch (error) {
            console.log(error.response?.data?.message || error)
        }
    }

    const getAllAppointments = async () => {
        setloading(true)

        try {
            const { data } = await axios.get('http://192.168.1.44:8000/api/all-appointments')

            if (!data.status === 200) {
                setloading(false)
            }

            setappointments(data.data)
            toast.success(data.message)
            setloading(false)

        } catch (error) {
            console.log(error.response?.data?.message || error)
        }
    }

    useEffect(() => {
        getAllAppointments();
    }, [])

    const handleEdit = (patient) => {
        setpatient(patient);
        let localStatus;
        toast((t) => (
            <span className='p-2 flex items-center justify-center text-lg flex-col w-[200px]'>
                <h3 className='text-[#0451cd] font-bold mb-3'>Edit Status</h3>
                <select className='cursor-pointer border-2 border-[#0451cd] rounded-lg text-lg font-bold' defaultValue={patient.status} onChange={(e) => localStatus = e.target.value}>
                    <option value={'pending'}>Pending</option>
                    <option value={'accepted'}>Accepted</option>
                    <option value={'rejected'}>Rejected</option>
                </select>
                <div className='flex justify-between items-center w-full mt-5'>
                    <button className='bg-red-500 cursor-pointer p-1 px-2 text-white rounded-md' onClick={() => toast.dismiss(t.id)}>
                        Dismiss
                    </button>

                    <button className='border-1 cursor-pointer p-1 px-2 bg-[#0451cd] text-white rounded-md' onClick={() => { editStatus(patient.id, localStatus); toast.dismiss(t.id) }}>
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
                {loading
                    ?
                    <h1>Loading...</h1>
                    :
                    <div className='max-w-full overflow-auto'>
                        <table className='border-2 border-white text-white overflow-auto'>
                            <thead className='p-2 bg-white text-[#0451cd] text-md md:text-lg'>
                                <tr>
                                    <th className='p-5 text-center'>Patient ID</th>
                                    <th className='p-5 text-center'>Patient Name</th>
                                    <th className='p-5 text-center'>Number</th>
                                    <th className='p-5 text-center'>Description</th>
                                    <th className='p-5 text-center'>Visit Date</th>
                                    <th className='p-5 text-center'>Visit Time</th>
                                    <th className='p-5 text-center'>Status</th>
                                    <th className='p-5 text-center'>Action</th>
                                </tr>
                            </thead>

                            <tbody className='text-lg'>
                                {appointments.map((patient, index) => (
                                    <tr key={index} className='border-2 border-white even:bg-white even:text-[#0451cd] odd:bg-[#0451cd] odd:text-white'>
                                        <td className='p-5 text-center'>{patient.patientId}</td>
                                        <td className='p-5 text-center'>{patient.name}</td>
                                        <td className='p-5 text-center'>{patient.phoneNumber}</td>
                                        <td className='p-5 text-start'>{patient.discreption}</td>
                                        <td className='p-5 text-center'>{formatDate(patient.date)}</td>
                                        <td className='p-5 text-center'>{formatReadableTime(patient.time)}</td>
                                        <td className='p-5 text-center'>{patient.status}</td>
                                        <td className='p-5 text-center'><div className='flex gap-5'><MdOutlineEdit size={21} onClick={() => handleEdit(patient)} className='cursor-pointer' /> <MdDeleteOutline onClick={() => { setpatient(patient); DeleteAppointment(patient.id) }} className='cursor-pointer' color='red' size={21} /></div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>

            {/* <div className="appointments-container min-h-[90vh] flex justify-center items-center flex-col bg-[#0451cd]">
                <h1 className='text-white font-bold text-3xl mt-5'>Appointment List</h1>
                {loading
                    ?
                    <h1>Loading...</h1>
                    :
                    <div className='appointments flex items-start w-full justify-center gap-10 p-10 flex-wrap'>
                        {appointments.map(patient => (
                            <div key={patient.id} className="appointment-card bg-white p-3 rounded-2xl flex flex-col justify-center items-center h-[400px] w-[250px] min-w-[250px]">
                                <span className='text-center mb-5'>{patient.patientId}</span>
                                <h1 className='text-xl font-bold'>{patient.name}</h1>
                                <div className='flex flex-col'>
                                    <span>Number:</span>
                                    <span className='text-center mb-5'>{patient.phoneNumber}</span>
                                </div>
                                <span className='text-center mb-5'>{patient.discreption}</span>
                                <span className='text-center mb-5'>{new Intl.DateTimeFormat('en-GB').format(new Date(patient.date))}</span>
                                <span className='text-center mb-5'>{patient.time}</span>
                                <span className='text-center mb-5'>{patient.status}</span>
                                <div className='w-full px-3 flex justify-between items-center'>
                                    <button className='bg-[#0451cd] cursor-pointer rounded-lg text-white p-1 px-2 font-bold text-lg'>Edit</button>
                                    <button className='bg-red-500 cursor-pointer rounded-lg text-white p-1 px-2 font-bold text-lg'>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div> */}
            <Footer />
        </>
    )
}

export default AdminAppointments
>>>>>>> origin/main
