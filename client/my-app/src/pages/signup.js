import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './signup.css';
import Navbar from '../components/Navbar';
import React from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signup', formData);
      console.log(response.data.message);
      // Redirect to sign-in page or home page after successful signup
      navigate('/signin'); // Redirect to sign-in page
      // navigate('/'); // Redirect to home page
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="background-image"> </div>
      <div className="loginBox">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">SUBMIT</button>
          <a href="/signin">Already have an account? Log in here</a>
        </form>
      </div>
    </>
  );
};

export default SignUp;
