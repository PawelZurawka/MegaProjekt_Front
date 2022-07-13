import React from 'react';
import { Link } from 'react-router-dom';

import './register-page.scss';

export const RegisterPage = () => {
  return (
    <div className="register-page">
      <span className="register-page__title">Register</span>
      <form className="register-page__form">
        <label>User name</label>
        <input
          className="register-page__form-input"
          type="text"
          placeholder="Enter your user name"
        />
        <label>Email</label>
        <input
          className="register-page__form-input"
          type="email"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="register-page__form-input"
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
        />
        <button className="register-page__form-register-btn">Register</button>
      </form>
      <button className="register-page__form-login-btn">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};
