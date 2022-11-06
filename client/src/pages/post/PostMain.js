import React from 'react';
import PostList from './PostList';
import styled from 'styled-components';
import "antd/dist/antd.css";
import { Pagination } from "antd";

const PostMain = props => {
  return (
    <>
      <Notice>전체 5건&nbsp;&nbsp; 1/1페이지</Notice>
      <PostList />
      <Pagination total={50} />
    </>
  )
}

export default PostMain;

const Notice = styled.h2`
  font: normal normal 20px Pretendard;
  font-weight: 500;
  color: #191919;
  text-align: left;
  padding-top: 76px;
  padding-bottom: 34.93px;
  letter-spacing: -0.5px;
`