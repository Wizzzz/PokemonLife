import React from 'react';
import './App.css';
import Top from './components/Top'
import Pokemon from './components/Pokemon'
import Newsletter from './components/Newsletter'
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <Pokemon />
        <AboutUs/>
        <Newsletter />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
