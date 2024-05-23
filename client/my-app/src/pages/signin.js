import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import Navbar from '../components/Navbar';
import React from 'react';
import axios from 'axios';


const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/signin', formData);
      console.log(response.data.message);

      // If successful, navigate to the home page or a protected route
      navigate('/');
    } catch (error) {
      // Display error message if credentials are incorrect
      setErrorMessage(error.response.data.message || 'Invalid credentials');
    }
  };

  return (
    <>
      <Navbar />
      <div className="background-image"></div>
      <div className="loginBox">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="text"
            name="username"
            placeholder="user name"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
          <a href="/signup">If you don't have an account, Sign Up here</a>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
