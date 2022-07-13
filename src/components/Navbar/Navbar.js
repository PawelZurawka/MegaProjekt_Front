import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { SocialIcons } from '../SocialIcons/SocialIcons';
import Photo from '../../assets/images/profile.jpg';

import './navbar.scss';

export const Navbar = () => {
  const { user } = useContext(Context);
  return (
    <div className="navbar">
      <div className="navbar__left">
        <SocialIcons />
      </div>
      <div className="navbar__center">
        <ul className="navbar__center-list">
          <li className="navbar__center-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__center-list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar__center-list-item">
            <Link to="/add-post">Add post</Link>
          </li>
          <li className="navbar__center-list-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar__center-list-item">{user && 'Logout'}</li>
        </ul>
      </div>
      <div className="navbar__right">
        {user ? (
          <img
            className="navbar__right-image"
            src={Photo}
            alt="profile"
          />
        ) : (
          <ul className="navbar__center-list">
            <li className="navbar__center-list-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="navbar__center-list-item">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
        <i className="navbar__right-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
