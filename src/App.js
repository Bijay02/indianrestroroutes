import './App.css';
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './Navbar';
import './styles.css';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Body />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
