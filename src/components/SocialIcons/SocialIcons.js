import React from 'react';
import './social-icons.scss';

export const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.facebook.com"
        rel="noopener noreferrer"
        target="_blank"
        className="social-icons__facebook social-icons__icon">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a
        href="https://www.twitter.com"
        rel="noopener noreferrer"
        target="_blank"
        className="social-icons__twitter social-icons__icon">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://www.pinterest.com"
        rel="noopener noreferrer"
        target="_blank"
        className="social-icons__pinterest social-icons__icon">
        <i className="fa-brands fa-pinterest"></i>
      </a>
    </div>
  );
};
