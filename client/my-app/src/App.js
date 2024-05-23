import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/signup'; // Ensure correct import path
import AddBook from './pages/AddBook';
import SignIn from './pages/signin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/AddBook" element={<AddBook />} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
