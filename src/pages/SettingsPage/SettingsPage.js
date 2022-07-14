import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Sidebar } from '../../components/SideBar/Sidebar';
import { PUBLIC_FOLDER } from '../../config/config';

import './settings-page.scss';

export const SettingsPage = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleUpdate = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
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
      updatedUser.profilePicture = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
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
            {user.profilePicture ? (
              <img
                className="settings-page__form-profile-picture"
                src={file ? URL.createObjectURL(file) : `${PUBLIC_FOLDER}${user.profilePicture}`}
                alt="profile"
              />
            ) : (
              <img
                className="settings-page__form-profile-picture"
                src={`${PUBLIC_FOLDER}/default-profile-picture.jpg`}
                alt="profile"
              />
            )}

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
            required
            minLength="2"
            maxLength="50"
            type="text"
            placeholder={user.username}
            onChange={e => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            required
            minLength="2"
            maxLength="50"
            type="email"
            placeholder={user.email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            required
            minLength="4"
            maxLength="150"
            type="password"
            placeholder="New password"
            autoComplete="off"
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="settings-page__form-submit-btn"
            type="submit">
            Update
          </button>
          {success && <span>Profile has been updated</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
