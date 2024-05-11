import {useState}from 'react';
import './signup.css'; // Import your CSS file
import React from "react";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };


  return (
    <>
    <div className="background-image"> </div>
    <div className="loginBox">
    <form  onSubmit={handleSubmit}>
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
      <a href="/login">Already have an account? Log in here</a>
    </form>
    </div>
    </>
  );
};

export default SignUpForm;