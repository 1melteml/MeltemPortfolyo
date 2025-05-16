import React from 'react';
import './App.css';

import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import Sociallinks from './components/sociallinks'; // Bu satır eksikti

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Sociallinks />
            <Footer />
        </div>
    );
}

export default App;
