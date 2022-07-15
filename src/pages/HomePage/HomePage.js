import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Posts } from '../../components/Posts/Posts';
import { Sidebar } from '../../components/SideBar/Sidebar';
import { apiUrl } from '../../config/api';

import './home.scss';

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${apiUrl}/posts/${search}`);
      setPosts(res.data);
    };
    void getPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        {posts.length > 0 ? <Posts posts={posts} /> : <h1 className="home__posts-error">No posts found in {search.slice(10)} category</h1>}
        <Sidebar />
      </div>
    </>
  );
};
