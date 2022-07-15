import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import { apiUrl } from '../../config/api';

import './login-page.scss';

export const LoginPage = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { error, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(`${apiUrl}/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login-page">
      <span className="login-page__title">Login</span>
      <form
        className="login-page__form"
        onSubmit={handleSubmit}>
        <label>User name</label>
        <input
          required
          minLength="2"
          maxLength="50"
          className="login-page__form-input"
          type="text"
          placeholder="Enter your user name"
          ref={userRef}
        />
        <label>Password</label>
        <input
          required
          minLength="4"
          maxLength="150"
          className="login-page__form-input"
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="login-page__form-login-btn"
          disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="login-page__form__register-btn">
        <Link to="/register">Register</Link>
      </button>
      {error && <div className="login-page__error">User name or password is incorrect</div>}
    </div>
  );
};
