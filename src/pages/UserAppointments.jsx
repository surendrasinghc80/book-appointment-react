import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";
import { formatReadableTime, formatDate } from "../../lib/utils";

const UserAppointments = () => {
  const [appointments, setappointments] = useState();
  const [loading, setloading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  console.log();

  const getAppointments = async () => {
    setloading(true);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/appointments/${userId}`
      );

      if (data.status !== 200) {
        toast.error(data.message);
        setloading(false);
        return;
      }

      toast.success(data.message);
      setappointments(data.data);
      setloading(false);
    } catch (error) {
      console.log(error.response?.data?.message || error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#0451cd] flex flex-col max-w-screen justify-start items-center py-10 px-5 md:p-10">
        <h1 className="text-3xl font-bold text-white mb-3">
          My Appointment List
        </h1>
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
                  <th className="p-5 text-center">Visit Date</th>
                  <th className="p-5 text-center">Visit Time</th>
                  <th className="p-5 text-center">Status</th>
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
                    <td className="p-5 text-center">
                      {formatDate(patient.date)}
                    </td>
                    <td className="p-5 text-center">
                      {formatReadableTime(patient.time)}
                    </td>
                    <td className="p-5 text-center">{patient.status}</td>
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

export default UserAppointments;
