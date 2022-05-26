import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getPostByNo } from '../../PostData';
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
      <h2 align="center" style={{marginTop:50}}>게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {
          data ? (
            <>
              <div className="post-view-row" style={{marginTop:50}}>
                <label>게시글 번호</label>
                <label>{ data.no }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{ data.createDate }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                  {
                    data.content
                  }
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={() => navigate(-1)} style={{marginTop:50}}>목록으로 돌아가기</button>
      </div>
    </>
  )
}

export default PostView;