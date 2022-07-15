import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';

import './add-post-page.scss';

export const AddPostPage = () => {
  const { user } = useContext(Context);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`/categories`);
      setCategories(res.data);
    };
    void getCategories();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      content,
      categories: category,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-post-page">
      {file && (
        <img
          className="add-post-page__img"
          src={URL.createObjectURL(file)}
          alt="post"
        />
      )}
      <form
        onSubmit={handleSubmit}
        action=""
        className="add-post-page__form">
        <div className="add-post-page__form-group">
          <label
            className="add-post-page__add-file-label"
            htmlFor="file-input">
            Add photo to post<i className="add-post-page__form-icon fa-solid fa-plus"></i>
          </label>
          <input
            required
            type="file"
            id="file-input"
            style={{ opacity: 0 }}
            onChange={e => setFile(e.target.files[0])}
          />
          <label
            htmlFor="categories"
            className="add-post-page__category-label">
            Select a category:
          </label>
          <select
            defaultValue={'default'}
            name="categories"
            onChange={e => setCategory(e.target.value)}>
            <option
              value="default"
              disabled></option>
            {categories.map(category => (
              <option
                key={category.id}
                value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            className="add-post-page__form-input"
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="add-post-page__form-group">
          <textarea
            className="add-post-page__form-input add-post-page__form-input--textarea"
            placeholder="Write post"
            onChange={e => setContent(e.target.value)}></textarea>
        </div>
        <div className="add-post-page__btn-wrapper">
          <button
            className="add-post-page__submit-btn"
            type="submit">
            Add post
          </button>
        </div>
      </form>
    </div>
  );
};
