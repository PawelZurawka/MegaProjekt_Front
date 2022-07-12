import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Posts } from '../../components/Posts/Posts';
import { Sidebar } from '../../components/SideBar/Sidebar';

import './home.scss';

export const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/posts');
      const data = await res.json();
      setPosts(data);
    })();
  }, []);

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
