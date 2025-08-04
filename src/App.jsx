<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import AdminAppointments from "./pages/AdminAppointments";
import AdminAppointmentHistory from "./pages/AdminAppointmentHistory";
import UserAppointments from "./pages/UserAppointments";
import { ContextState } from "./context";
import { useEffect } from "react";

function App() {
  const { user, setuser, token, settoken } = ContextState();
  const getUser = async () => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!user || !token) {
      setuser();
      settoken();
      return;
    }

    setuser(JSON.parse(user));
    settoken(token);
  };

  useEffect(() => {
    getUser();
  }, []);

  // useEffect(() => {
  //   getUser();
  // }, [user, token])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/register"
            element={user ? <Home /> : <Signup />}
          />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route exact path="/services" element={<Services />} />
          <Route
            exact
            path="/booking"
            element={!user ? <Login /> : <Booking />}
          />
          <Route
            exact
            path="/admin/appointments"
            element={!user ? <Login /> : <AdminAppointments />}
          />
          <Route
            path="/admin/appointments/history/:userId"
            element={<AdminAppointmentHistory />}
          />
          <Route
            exact
            path="/my/appointments"
            element={!user ? <Login /> : <UserAppointments />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Services from './pages/Services';
import Booking from './pages/Booking';
import AdminAppointments from './pages/AdminAppointments';
import UserAppointments from './pages/UserAppointments';
import { ContextState } from './context';
import { useEffect } from 'react';

function App() {
  const { user, setuser, token, settoken } = ContextState();
  const getUser = async () => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if (!user || !token) {
      setuser();
      settoken();
      return
    }

    setuser(JSON.parse(user))
    settoken(token)
  }

  useEffect(() => {
    getUser();
  }, [])

  // useEffect(() => {
  //   getUser();
  // }, [user, token])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={user ? <Home /> : <Signup />} />
          <Route exact path='/login' element={user ? <Home /> : <Login />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/booking' element={!user ? <Login /> : <Booking />} />
          <Route exact path='/admin/appointments' element={!user ? <Login /> : <AdminAppointments />} />
          <Route exact path='/my/appointments' element={!user ? <Login /> : <UserAppointments />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
>>>>>>> origin/main
