import React from 'react';
import { Link } from 'react-router-dom';

import './post.scss';

export const Post = ({ post }) => {
  const { photo, title, _id, createdAt, content, categories } = post;

  const publicFolder = 'http://localhost:3001/images/';

  return (
    <div className="post">
      {photo && (
        <img
          className="post__image"
          src={`${publicFolder}/${photo}`}
          alt="post"
        />
      )}
      <div className="post__info">
        <div className="post__categories">
          {categories.map((category, i) => (
            <span
              className="post__category"
              key={i}>
              {category}
            </span>
          ))}
        </div>
        <Link to={`/post/${_id}`}>
          <span className="post__title">{title}</span>
        </Link>
        <span className="post__date">{new Date(createdAt).toDateString()}</span>
      </div>
      <p className="post__description">{content}</p>
    </div>
  );
};
