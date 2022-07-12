import React from 'react';
import './single-post-page.scss';
import { Sidebar } from '../../components/SideBar/Sidebar';
import { SinglePost } from '../../components/SinglePost/SinglePost';

export const SinglePostPage = () => {
  return (
    <div className="single-post-page">
      <SinglePost />
      <Sidebar />
    </div>
  );
};
