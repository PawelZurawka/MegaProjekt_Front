import React from 'react';
import Photo from '../../assets/images/post.jpg';
import { useLocation } from 'react-router-dom';

import './single-post.scss';

export const SinglePost = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="single-post">
      <div className="single-post__wrapper">
        <img
          className="single-post__image"
          src={Photo}
          alt="single-post"
        />
        <h1 className="single-post__title">
          Lorem Ipsum Title
          <div className="single-post__edit">
            <i className="single-post__edit-icon fa-solid fa-pen-to-square"></i>
            <i className="single-post__edit-icon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="single-post__info">
          <span className="single-post__info-author">
            Author: <b>Paweł Ż</b>
          </span>
          <span className="single-post__info-date">2 months ago</span>
        </div>
        <p className="single-post__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste quibusdam veniam? Alias cum enim quod? Consequuntur deleniti
          ipsum iure mollitia nisi optio possimus quaerat, ratione reiciendis, saepe sequi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ab alias aspernatur debitis dignissimos dolorum eaque esse est et fugit hic inventore iste non nulla odit, quasi
          quo sit tempora unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste quibusdam veniam? Alias cum enim quod?
          Consequuntur deleniti ipsum iure mollitia nisi optio possimus quaerat, ratione reiciendis, saepe sequi. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ab alias aspernatur debitis dignissimos dolorum eaque esse est et fugit hic inventore iste non
          nulla odit, quasi quo sit tempora unde.
        </p>
      </div>
    </div>
  );
};
