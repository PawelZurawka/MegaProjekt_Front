import React from 'react';
import Photo from '../../assets/images/post.jpg';
import './post.scss';

export const Post = () => {
  return (
    <div className="post">
      <img
        className="post__image"
        src={Photo}
        alt="post"
      />
      <div className="post__info">
        <div className="post__categories">
          <span className="post__category">Technology</span>
          <span className="post__category">Fashion</span>
        </div>
        <span className="post__title">Lorem Ipsum Title</span>
        <span className="post__date">3 months ago</span>
      </div>
      <p className="post__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad culpa cum dolorem enim modi numquam quas saepe unde voluptatem! Culpa
        doloribus, expedita ipsa maiores numquam perspiciatis quia quos rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad
        culpa cum dolorem enim modi numquam quas saepe unde voluptatem! Culpa doloribus, expedita ipsa maiores numquam perspiciatis quia
        quos rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad culpa cum dolorem enim modi numquam quas saepe unde
        voluptatem! Culpa doloribus, expedita ipsa maiores numquam perspiciatis quia quos rerum.
      </p>
    </div>
  );
};
