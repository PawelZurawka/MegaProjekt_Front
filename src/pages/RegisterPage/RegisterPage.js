import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './register-page.scss';

export const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register-page">
      <span className="register-page__title">Register</span>
      <form
        className="register-page__form"
        onSubmit={handleSubmit}>
        <label>User name</label>
        <input
          className="register-page__form-input"
          type="text"
          placeholder="Enter your user name"
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="register-page__form-input"
          type="email"
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="register-page__form-input"
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="register-page__form-register-btn">
          Register
        </button>
      </form>
      <button className="register-page__form-login-btn">
        <Link to="/login">Login</Link>
      </button>
      {error && <span className="register-page__form-error-info">User already exist.</span>}
    </div>
  );
};
