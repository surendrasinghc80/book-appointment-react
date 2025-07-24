import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Services from './pages/Services';
import Booking from './pages/Booking';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/booking' element={<Booking />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
