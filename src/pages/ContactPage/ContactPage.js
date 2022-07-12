import React from 'react';
import './contact-page.scss';

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-page__title">Contact</h1>
      <p>
        <b>Blog App Ltd.</b>
      </p>
      <p>
        <b>Address:</b> 121 King Street, Melbourne Victoria 3000 Australia
      </p>
      <p>
        <b>E-mail:</b>{' '}
        <a
          href="mailto:blog-app@example.com"
          className="contact-page__email">
          blog-app@example.com
        </a>
      </p>
      <p>
        <b>Phone Number:</b> <a href="tel:+54585256758"> +54 585 256 758</a>
      </p>
      <p className="contact-page__icons-wrapper">
        <a
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
          className="contact-page__facebook contact-page__icon">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
          className="contact-page__twitter contact-page__icon">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.pinterest.com"
          rel="noopener noreferrer"
          target="_blank"
          className="contact-page__pinterest contact-page__icon">
          <i className="fa-brands fa-pinterest"></i>
        </a>
      </p>
    </div>
  );
};
