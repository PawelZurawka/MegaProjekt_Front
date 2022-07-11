import React from 'react';
import Photo from '../../assets/images/header.jpg';
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__titles">
        <span className="header__title-small">MegaProject</span>
        <span className="header__title-large">Blog</span>
      </div>
      <img
        className="header__image"
        src={Photo}
        alt="header"
      />
    </div>
  );
};
