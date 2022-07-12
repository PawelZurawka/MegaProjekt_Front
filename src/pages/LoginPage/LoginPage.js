import React from 'react';
import './login-page.scss';

export const LoginPage = () => {
  return (
    <div className="login-page">
      <span className="login-page__title">Login</span>
      <form className="login-page__form">
        <label>Email</label>
        <input
          className="login-page__form-input"
          type="email"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="login-page__form-input"
          type="password"
          placeholder="Enter your password"
        />
        <button className="login-page__form-login-btn">Login</button>
      </form>
      <button className="login-page__form__register-btn">Register</button>
    </div>
  );
};
