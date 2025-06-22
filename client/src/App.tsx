import React from "react";

import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import MyBookings from "./pages/MyBookings";
import SeatLayout from "./pages/SeatLayout";

const App = () => {
  const isAdminRoute: boolean = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="my-booking" element={<MyBookings />} />
        <Route path="seat-layout" element={<SeatLayout />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
