import React from 'react';
import PostList from './PostList';
import { withRouter } from 'react-router-dom';

const PostMain = props => {
  return (
    <>
      <h2 align="center">공지사항</h2>
      <PostList />
    </>
  )
}

export default PostMain;