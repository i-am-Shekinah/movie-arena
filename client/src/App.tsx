import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import AOS from 'aos';
import { Toaster } from 'react-hot-toast';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import MyBookings from './pages/MyBookings';
import SeatLayout from './pages/SeatLayout';

const App = () => {
  const isAdminRoute: boolean = useLocation().pathname.startsWith("/admin");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="seat-layout" element={<SeatLayout />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
