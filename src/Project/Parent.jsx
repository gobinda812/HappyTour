import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './Index'
import Contact from './Contact';
import Nav from './Nav';
import Error from './Error';
import TourDetails from './TourDetails';
import TourList from './TourList';
import AboutUs from './AboutUs';


const Parent = () => {
  return (
    <>
    <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/tourlist" element={<TourList/>} />
          <Route path="/tourdetails" element={<TourDetails/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
    
  
    </>
  )
}

export default Parent
