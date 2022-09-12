import React from 'react';
import PostList from './PostList';

const PostMain = props => {
  return (
    <>
      <h2 align="center" style={{marginBottom:25}}>공지사항</h2><br></br>
      <PostList />
    </>
  )
}

export default PostMain;