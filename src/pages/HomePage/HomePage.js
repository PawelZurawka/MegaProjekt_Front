import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { Posts } from '../../components/Posts/Posts';
import { Sidebar } from '../../components/SideBar/Sidebar';
import { useLocation } from 'react-router-dom';

import './home.scss';

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`/posts/${search}`);
      setPosts(res.data);
    };
    void getPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};
