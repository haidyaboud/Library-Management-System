import React from 'react';
//import { Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from '../components/Navbar';
import Carousel from '../components/slider';
//import Books from '../components/AddBook';
import BooksList from '../components/BookList';
import './home.css';
// import Cardswithinfo from '../components/cardswithinfo';

function Home() {
    return (
        <div id='home'>
           <Navbar />
           <Carousel/>
           <BooksList/>
           {/* <Cardswithinfo /> */}
        </div>
    );
}

export default Home;
