import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landingpage />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
