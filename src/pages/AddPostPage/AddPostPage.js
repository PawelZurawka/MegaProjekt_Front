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
          <label
            className="add-post-page__add-file-label"
            htmlFor="file-input">
            Add photo to post<i className="add-post-page__form-icon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
          />
          <div className="add-post-page__form-title-wrapper">
            <input
              className="add-post-page__form-input add-post-page__form-input--title"
              type="text"
              placeholder="Title"
              autoFocus={true}
            />
          </div>
        </div>
        <div className="add-post-page__form-group">
          <textarea
            className="add-post-page__form-input add-post-page__form-input--textarea"
            placeholder="Write post"></textarea>
        </div>
        <div className="add-post-page__btn-wrapper">
          <button className="add-post-page__submit-btn">Add post</button>
        </div>
      </form>
    </div>
  );
};
