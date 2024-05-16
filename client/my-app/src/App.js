import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/signup';
//import EditBook from './pages/EditBook';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from './pages/AddBook';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define other routes as needed */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/AddBook" element={<AddBook />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
