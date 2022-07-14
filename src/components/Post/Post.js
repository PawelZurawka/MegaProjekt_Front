import React from 'react';
import { Link } from 'react-router-dom';

import './post.scss';
import { PUBLIC_FOLDER } from '../../config/config';

export const Post = ({ post }) => {
  const { photo, title, _id, createdAt, content, categories } = post;

  return (
    <div className="post">
      {photo && (
        <img
          className="post__image"
          src={`${PUBLIC_FOLDER}/${photo}`}
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
