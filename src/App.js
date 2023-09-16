import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/Main/AboutUs';
import Schools from './Components/Main/Schools';
import Sponsorship from './Components/Main/Sponsorship';
import Fixture from './Components/Main/Fixture';
import Training from './Components/Main/Training';
import Fees from './Components/Main/Fees';
import ContactUs from './Components/Main/ContactUs';
import Join from './Components/Main/Join';
import Home from './Components/Main/Main';


function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Sponsorship" element={<Sponsorship />} />
        <Route path="/Schools" element={<Schools />} />
        <Route path="/Fixture" element={<Fixture />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Fees" element={<Fees />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Join" element={<Join />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
