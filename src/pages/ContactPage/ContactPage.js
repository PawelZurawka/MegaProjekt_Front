import React from 'react';
import { SocialIcons } from '../../components/SocialIcons/SocialIcons';

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
      <SocialIcons />
    </div>
  );
};
