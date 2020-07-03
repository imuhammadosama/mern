import React from 'react';
import PostsThumbnails from './components/postsThumbnails';

export default function Client() {
  return (
    <div className='container'>
      <div className='row my-5'>
        <h1 className='logo-text'>Blog</h1>
      </div>

      <PostsThumbnails />
    </div>
  );
}
