import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getPostByNo } from '../../PostData';
import styled from 'styled-components';
import './Post.css';

const PostView = ({ history, location, match }) => {
  const [ data, setData ] = useState({});

  const { no } = useParams();

  useEffect(() => {
    setData(getPostByNo(no));
  }, [ ]);

  const navigate = useNavigate();
  
  return (
    <>
      <div className="post-view-wrapper" style={{paddingTop:"150px"}}>
        {
          data ? (
            <>
            
              <div className="post-view-row" style={{paddingTop:"100px", paddingBottom:"30px", borderBottom:"2px solid #d3d3d3", alignItems:"center"}}>
                <div style={{ width:"100%"}}>
                  <PostHeader>{data.title}</PostHeader>
                </div>
              </div>
              <div className="post-view-row" style={{borderBottom:"2px solid #d3d3d3"}}>
                <PostInfo> 작성자 :&nbsp; {data.writer}</PostInfo>
                <PostInfo style={{textAlign:"right"}}>{data.createDate}</PostInfo>
              </div>
              <div className="post-view-row" style={{display:"flex", flexDirection:"column", padding:"0", paddingTop:"50px", paddingBottom:"50px", borderBottom:"2px solid #d3d3d3"}}>
                <div style={{marginBottom:"50px"}}>
                  <img src={data.link} style={{width: "100%"}}/>
                </div>
                {/* <label>내용</label> */}
                <PostContent>
                  {data.content}
                </PostContent>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
      }
        <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
          <button className="post-view-go-list-btn" onClick={() => navigate(-1)} style={{margin:"0 auto"}}>목록으로 돌아가기</button>
        </div>
    </div>
    </>
  )
}

export default PostView;

const PostHeader = styled.h2`
  margin-bottom: 0;
  white-space: nowrap;
  
  @media screen and (max-width:430px) {
    font: normal normal 18px Pretendard;
    margin-left: 0;
  }

  @media screen and (min-width:431px) and (max-width:950px) {
    font: normal normal 26px Pretendard;
    margin-left: 0;
  }

  @media screen and (min-width: 951px) {
    font: normal normal 40px Pretendard;
  }
`

const PostInfo = styled.p`
  width: 100%;
  padding-top: 13px;
  
  @media screen and (max-width:430px) {
    font: normal normal 12px Pretendard;
    margin-left: 0;
    padding-left: 0;
  }
  @media screen and (min-width: 431px) and (max-width:950px) {
    font: normal normal 14px Pretendard;
    margin-left: 0;
    padding-left: 0;
  }
  @media screen and (min-width: 951px) {
    font: normal normal 16px Pretendard;
    padding-left: 4px;
  }
`

const PostContent = styled.div`

  @media screen and (max-width: 430px) {
    font: noraml normal 10px Pretendard;
    white-space: pre-wrap;
  }

  @media screen and (min-width:431px) and (max-width:950px){
    font: normal normal 16px Pretendard;
    white-space: pre-wrap;
  }

  @media screen and (min-width:951px) {
    font: normal normal 20px Pretendard;
    white-space: pre-wrap;
  }
`