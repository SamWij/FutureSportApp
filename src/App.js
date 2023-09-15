import React from 'react';
import './App.css';
import NavigationBar from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import MainSection from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
