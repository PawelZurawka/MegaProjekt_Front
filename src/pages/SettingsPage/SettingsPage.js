import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Sidebar } from '../../components/SideBar/Sidebar';

import './settings-page.scss';

export const SettingsPage = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user } = useContext(Context);

  const handleUpdate = async e => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.avatar = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.put(`/users/${user._id}`, updatedUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-page__wrapper">
        <div className="settings-page__title">
          <span className="settings-page__title-update">Update Your account</span>
          <span className="settings-page__title-delete">Delete account</span>
        </div>
        <form
          className="settings-page__form"
          onSubmit={handleUpdate}>
          <label>Profile picture</label>
          <div className="settings-page__form-profile-picture-wrapper">
            <img
              className="settings-page__form-profile-picture"
              src={user.avatar}
              alt="profile"
            />
            <label htmlFor="file-input">
              <i className="settings-page__form-profile-picture-icon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="file-input"
              style={{ display: 'none' }}
              onChange={e => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={e => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Current password"
            autoComplete="off"
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="settings-page__form-submit-btn"
            type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
