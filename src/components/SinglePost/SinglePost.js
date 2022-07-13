import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';

import './single-post.scss';

export const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const { photo, username, createdAt } = post;
  const publicFolder = 'http://localhost:3001/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setContent(res.data.content);
    };
    void getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${path}`, { data: { username: user.username } });
      window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, { username: user.username, title, content });
      setUpdate(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single-post">
      <div className="single-post__wrapper">
        {photo && (
          <img
            className="single-post__image"
            src={`${publicFolder}/${photo}`}
            alt="single-post"
          />
        )}
        {update ? (
          <input
            className="single-post__title-input"
            type="text"
            value={title}
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="single-post__title">
            {title}
            {post.username === user?.username && (
              <div className="single-post__edit">
                <i
                  className="single-post__edit-icon fa-solid fa-pen-to-square"
                  onClick={() => setUpdate(true)}></i>
                <i
                  className="single-post__edit-icon fa-solid fa-trash-can"
                  onClick={handleDelete}></i>
              </div>
            )}
          </h1>
        )}
        <div className="single-post__info">
          <span className="single-post__info-author">
            Author:{' '}
            <Link to={`/?user=${username}`}>
              <b>{username}</b>
            </Link>
          </span>
          <span className="single-post__info-date">{new Date(createdAt).toDateString()}</span>
        </div>
        {update ? (
          <textarea
            className="single-post__description-input"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        ) : (
          <p className="single-post__description">{content}</p>
        )}
        {update && (
          <button
            className="single-post__btn"
            onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};
