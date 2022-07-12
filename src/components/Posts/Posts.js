import React from 'react';
import { Post } from '../Post/Post';
import './posts.scss';

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};
