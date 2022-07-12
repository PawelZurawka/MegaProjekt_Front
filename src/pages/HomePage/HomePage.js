import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Posts } from '../../components/Posts/Posts';
import { Sidebar } from '../../components/SideBar/Sidebar';
import { useLocation } from 'react-router-dom';

import './home.scss';

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    (async () => {
      const res = await fetch(`/posts/${search}`);
      const data = await res.json();
      setPosts(data);
    })();
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
