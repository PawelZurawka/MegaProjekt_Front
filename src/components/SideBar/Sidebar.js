import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SidebarPhoto from '../../assets/images/sidebar.jpg';
import { SocialIcons } from '../SocialIcons/SocialIcons';

import './sidebar.scss';

export const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('/categories');
      setCategories(res.data);
    };
    void getCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__item-title">About us</span>
        <img
          className="sidebar__image"
          src={SidebarPhoto}
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
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/?category=${category.name}`}>
              <li
                key={category.id}
                className="sidebar__list-item">
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__item-title-social sidebar__item-title">Follow us</span>
        <SocialIcons />
      </div>
    </div>
  );
};
