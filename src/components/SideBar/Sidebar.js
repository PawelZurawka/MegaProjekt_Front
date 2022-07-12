import React, { useEffect, useState } from 'react';
import Photo from '../../assets/images/sidebar.jpg';
import { SocialIcons } from '../SocialIcons/SocialIcons';

import './sidebar.scss';

export const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/categories');
      const data = await res.json();
      setCategories(data);
    })();
  }, []);
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
          {categories.map(category => (
            <li
              className="sidebar__list-item"
              key={category.id}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__item-title">Follow us</span>
        <SocialIcons />
      </div>
    </div>
  );
};
