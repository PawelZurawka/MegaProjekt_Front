import React from 'react';
import './navbar.scss';
import Photo from '../../assets/images/profile.jpg';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <i className="navbar__left-icon fa-brands fa-facebook"></i>
        <i className="navbar__left-icon fa-brands fa-instagram"></i>
        <i className="navbar__left-icon fa-brands fa-twitter"></i>
        <i className="navbar__left-icon fa-brands fa-pinterest"></i>
      </div>
      <div className="navbar__center">
        <ul className="navbar__center-list">
          <li className="navbar__center-list-item">Home</li>
          <li className="navbar__center-list-item">About</li>
          <li className="navbar__center-list-item">Contact</li>
          <li className="navbar__center-list-item">Write</li>
          <li className="navbar__center-list-item">Logout</li>
        </ul>
      </div>
      <div className="navbar__right">
        <img
          className="navbar__right-image"
          src={Photo}
          alt="profile"
        />
        <i className="navbar__right-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
