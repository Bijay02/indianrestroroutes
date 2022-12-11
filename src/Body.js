import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Menu from './routes/Menu';
import Contact from './routes/Contact';

const Body = () => {
  return (
    <Routes>
    <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={ <div> Not found </div> }></Route>
    </Routes>
  )
}

export default Body