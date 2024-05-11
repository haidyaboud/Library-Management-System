import React from 'react';
//import { Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from '../components/Navbar';
import Carousel from '../components/slider';



function Home() {
    return (
        <div id='home'>
           <Navbar />
           <Carousel />
        </div>
    );
}

export default Home;
