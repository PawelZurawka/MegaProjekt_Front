import React from 'react';
import { Sidebar } from '../../components/SideBar/Sidebar';
import Photo from '../../assets/images/profile.jpg';

import './settings-page.scss';

export const SettingsPage = () => {
  return (
    <div className="settings-page">
      <div className="settings-page__wrapper">
        <div className="settings-page__title">
          <span className="settings-page__title-update">Update Your account</span>
          <span className="settings-page__title-delete">Delete account</span>
        </div>
        <form className="settings-page__form">
          <label>Profile picture</label>
          <div className="settings-page__form-profile-picture-wrapper">
            <img
              className="settings-page__form-profile-picture"
              src={Photo}
              alt="profile"
            />
            <label htmlFor="file-input">
              <i className="settings-page__form-profile-picture-icon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="file-input"
              style={{ display: 'none' }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="User name"
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="User email"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Current password"
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
