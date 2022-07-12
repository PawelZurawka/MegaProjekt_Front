import React from 'react';
import Photo from '../../assets/images/sidebar.jpg';
import { SocialIcons } from '../SocialIcons/SocialIcons';

import './sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__item-title">About us</span>
        <img
          className="sidebar__image"
          src={Photo}
          alt="sidebar"
        />
        <p className="sidebar__item-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam non pro id elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing in adipiscing.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__item-title">Categories</span>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">Technology</li>
          <li className="sidebar__list-item">Fashion</li>
          <li className="sidebar__list-item">Travel</li>
          <li className="sidebar__list-item">Sport</li>
          <li className="sidebar__list-item">Music</li>
          <li className="sidebar__list-item">Business</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__item-title">Follow us</span>
        <SocialIcons />
      </div>
    </div>
  );
};
