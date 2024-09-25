// src/App.js
import React from 'react';
import './App.css';
import Header from './components/header.js';
import Hero from './components/hero.js';
import Footer from './components/footer.js';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
}

export default App;

