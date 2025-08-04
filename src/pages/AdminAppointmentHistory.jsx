import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../../lib/utils";

const AdminAppointmentHistory = () => {
  const { userId } = useParams();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHistory = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/history/${userId}`
      );

      if (data.success) {
        setHistory(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#0451cd] p-10 text-white">
        <h1 className="text-3xl font-bold mb-5">
          Appointment History (User ID: {history[0]?.patientId || userId})
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : history.length === 0 ? (
          <p>No history found.</p>
        ) : (
          <table className="border-2 border-white w-full">
            <thead className="bg-white text-[#0451cd]">
              <tr>
                <th className="p-3">S.No</th>
                <th className="p-3">Patient ID</th>
                <th className="p-3">Description</th>
                <th className="p-3">Visit Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr
                  key={index}
                  className="border-2 border-white even:bg-white even:text-[#0451cd] odd:bg-[#0451cd] odd:text-white"
                >
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3 text-center">{item.patientId}</td>
                  <td className="p-3">{item.discreption}</td>
                  <td className="p-3 text-center">{formatDate(item.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminAppointmentHistory;
