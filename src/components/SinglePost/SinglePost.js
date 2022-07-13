import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import './single-post.scss';

export const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const { photo, title, username, createdAt, content } = post;

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
    };
    void getPost();
  }, [path]);

  return (
    <div className="single-post">
      <div className="single-post__wrapper">
        {photo && (
          <img
            className="single-post__image"
            src={photo}
            alt="single-post"
          />
        )}
        <h1 className="single-post__title">
          {title}
          <div className="single-post__edit">
            <i className="single-post__edit-icon fa-solid fa-pen-to-square"></i>
            <i className="single-post__edit-icon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="single-post__info">
          <span className="single-post__info-author">
            Author:{' '}
            <Link to={`/?user=${username}`}>
              <b>{username}</b>
            </Link>
          </span>
          <span className="single-post__info-date">{new Date(createdAt).toDateString()}</span>
        </div>
        <p className="single-post__description">{content}</p>
      </div>
    </div>
  );
};
