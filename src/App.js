import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import PropertyDetails from './pages/PropertyDetails';
function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      {/* <Home /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
