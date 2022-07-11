import React from 'react';
import Photo from '../../assets/images/post.jpg';

import './add-post-page.scss';

export const AddPostPage = () => {
  return (
    <div className="add-post-page">
      <img
        src={Photo}
        alt="post"
        className="add-post-page__img"
      />
      <form
        action=""
        className="add-post-page__form">
        <div className="add-post-page__form-group">
          <label htmlFor="file-input">
            <i className="add-post-page__form-icon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
          />
          <input
            className="add-post-page__form-input"
            type="text"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="add-post-page__form-group">
          <textarea
            className="add-post-page__form-input add-post-page__form-input--textarea"
            placeholder="Write something interesting"></textarea>
        </div>
        <button className="add-post-page__submit-btn">Add</button>
      </form>
    </div>
  );
};
