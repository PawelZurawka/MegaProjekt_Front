import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { SocialIcons } from '../SocialIcons/SocialIcons';

import './navbar.scss';
import { PUBLIC_FOLDER } from '../../config/config';

export const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

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
          <li
            className="navbar__center-list-item"
            onClick={handleLogout}>
            {user && 'Logout'}
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        {user ? (
          <Link to="/settings">
            {user.profilePicture ? (
              <img
                className="navbar__right-image"
                src={`${PUBLIC_FOLDER}${user.profilePicture}`}
                alt="profile"
              />
            ) : (
              <img
                className="navbar__right-image"
                src={`${PUBLIC_FOLDER}/default-profile-picture.jpg`}
                alt="profile"
              />
            )}
          </Link>
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
