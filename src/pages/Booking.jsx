import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { ContextState } from "../context";
import toast from "react-hot-toast";

const Booking = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    phone: "",
    description: "",
    date: "",
    time: "",
    specialistIn: "",
    doctorId: "",
  });
  const [timeLimits, setTimeLimits] = useState({ min: "07:00", max: "19:00" });

  const updateTimeLimits = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (day === 0 || day === 6) {
      // Sat-Sun
      setTimeLimits({ min: "10:00", max: "17:00" });
    } else {
      // Mon-Fri
      setTimeLimits({ min: "07:00", max: "19:00" });
    }
  };

  const { token } = ContextState();
  const navigate = useNavigate();

  // Specialist List
  const specialistList = [
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Gynecologist",
    "Orthopedic Surgeon",
    "ENT (Ear, Nose, Throat)",
    "Dentistry",
    "Neurologist",
    "Psychiatry",
    "General Physician",
  ];

  // Mapping specialist → doctor
  const doctorMapping = {
    Cardiologist: { id: 1, name: "Dr. Rajesh Sharma" },
    Dermatologist: { id: 2, name: "Dr. Kavita Joshi" },
    Pediatrician: { id: 3, name: "Dr. Meera Kapoor" },
    Gynecologist: { id: 4, name: "Dr. Priya Menon" },
    "Orthopedic Surgeon": { id: 5, name: "Dr. Anil Verma" },
    "ENT (Ear, Nose, Throat)": { id: 6, name: "Dr. Neha Singh" },
    Dentistry: { id: 7, name: "Dr. Ramesh Iyer" },
    Neurologist: { id: 8, name: "Dr. Manoj Gupta" },
    Psychiatry: { id: 9, name: "Dr. Pooja Bansal" },
    "General Physician": { id: 10, name: "Dr. Suresh Patil" },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials((prev) => {
      let updated = { ...prev, [name]: value };
      // Auto-select doctor when specialist is chosen
      if (name === "specialistIn") {
        updated.doctorId = doctorMapping[value]?.id || "";
      }
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/addappointments`,
        {
          name: credentials.name,
          discreption: credentials.description,
          phoneNumber: credentials.phone,
          date: credentials.date,
          time: credentials.time,
          specialistIn: credentials.specialistIn,
          doctorId: credentials.doctorId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.status !== 201) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
      setcredentials({
        name: "",
        phone: "",
        description: "",
        date: "",
        time: "",
        specialistIn: "",
        doctorId: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message || "Booking failed");
    }
  };

  return (
    <>
      <Header />
      <div className="overflow-hidden flex flex-col justify-center items-center min-h-screen md:h-screen p-10 bg-linear-to-r from-white to-[#0451cd]">
        <div className="w-[80vw] md:w-[70vw] flex items-center justify-center flex-col md:flex-row">
          <div className="image h-[30%] w-full md:w-[50%] md:h-full">
            <img
              className="h-full w-full"
              src="https://images.axios.com/rseGAk89vuIlIcOMwtFzdPfRUzI=/117x0:1197x1080/1600x1600/2023/01/17/1673986436931.jpg"
              alt="image"
            />
          </div>
          <div className="form-container w-full md:w-[50%] md:h-full bg-white flex flex-col justify-center p-5">
            <h2 className="text-2xl font-extrabold text-[#0451cd] mb-5 text-center">
              Book An Appointment
            </h2>

            <form
              className="flex flex-col gap-y-5 w-full"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div className="flex flex-col gap-y-1">
                <label className="font-bold" htmlFor="name">
                  Name:
                </label>
                <input
                  className="text-lg p-1 px-2 border-2 border-black rounded-md"
                  id="name"
                  name="name"
                  value={credentials.name}
                  type="text"
                  placeholder="John Doe"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-y-1">
                <label className="font-bold" htmlFor="phone">
                  Phone No:
                </label>
                <input
                  minLength={10}
                  maxLength={10}
                  className="text-lg p-1 px-2 border-2 border-black rounded-md"
                  id="phone"
                  name="phone"
                  value={credentials.phone}
                  type="tel"
                  placeholder="9876543210"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-y-1">
                <label className="font-bold" htmlFor="description">
                  Description:
                </label>
                <textarea
                  rows={4}
                  className="resize-none text-lg p-1 px-2 border-2 border-black rounded-md"
                  id="description"
                  name="description"
                  value={credentials.description}
                  placeholder="description..."
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Specialist Dropdown */}
              <div className="flex flex-col gap-y-1">
                <label className="font-bold" htmlFor="specialistIn">
                  Specialist In:
                </label>
                <select
                  id="specialistIn"
                  name="specialistIn"
                  value={credentials.specialistIn}
                  onChange={handleChange}
                  required
                  className="text-lg p-1 px-2 border-2 border-black rounded-md"
                >
                  <option value="">Select Specialist</option>
                  {specialistList.map((spec, idx) => (
                    <option key={idx} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              {/* Doctor Dropdown */}
              {credentials.specialistIn && (
                <div className="flex flex-col gap-y-1">
                  <label className="font-bold" htmlFor="doctorId">
                    Select Doctor:
                  </label>
                  <select
                    id="doctorId"
                    name="doctorId"
                    value={credentials.doctorId}
                    onChange={handleChange}
                    required
                    className="text-lg p-1 px-2 border-2 border-black rounded-md"
                  >
                    <option value="">Select Doctor</option>
                    <option value={doctorMapping[credentials.specialistIn].id}>
                      {doctorMapping[credentials.specialistIn].name}
                    </option>
                  </select>
                </div>
              )}

              {/* Date & Time */}
              <div className="flex justify-between items-center gap-1">
                <div className="flex flex-col gap-y-1 w-full">
                  <label className="font-bold" htmlFor="date">
                    Date:
                  </label>
                  <input
                    onClick={(e) => e.target.showPicker?.()}
                    className="w-full text-lg p-1 px-2 border-2 border-black rounded-md"
                    id="date"
                    name="date"
                    value={credentials.date}
                    type="date"
                    required
                    onChange={(e) => {
                      handleChange(e);
                      updateTimeLimits(e.target.value); // now using the renamed function
                    }}
                  />
                </div>

                <div className="flex flex-col gap-y-1 w-full">
                  <label className="font-bold" htmlFor="time">
                    Time:
                  </label>
                  <input
                    onClick={(e) => e.target.showPicker?.()}
                    className="w-full text-lg p-1 px-2 border-2 border-black rounded-md"
                    id="time"
                    name="time"
                    value={credentials.time}
                    type="time"
                    required
                    min={timeLimits.min}
                    max={timeLimits.max}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="text-white bg-[#0451cd] w-fit p-1 px-2 rounded-md text-lg cursor-pointer"
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
