import React from 'react';
import styled from 'styled-components';
import PostMain from './post/PostMain';
function IssuePage(props) {
    return (
        <Container>
            <CenterDiv>
                <div style={{position:"relative", alignItems:"center"}}>
                    <div>
                        <IssueImg src={process.env.PUBLIC_URL + '/img/Issue.jpg'}/>    
                    </div>
                    <ImgText>
                        <p style={{font:"normal normal 800 50px Pretendard", marginBottom:"14px"}}>이슈</p>
                        <p style={{font:"normal normal 500 26px Pretendard", letterSpacing:"-0.65px"}}>리셀뷰어의 주요 이슈를 알려드립니다.</p>
                    </ImgText>
                </div>
            
                <NewsContainer>
                    <NewsInfo>
                        <p style={{font:"normal normal 24px Pretendard", color:"#525252",letterSpacing:"-0.6px", marginBottom:"5px", marginLeft:"2px"}}>사기 조회하고 거래하세요!</p>
                        <p style={{font:"normal normal 38px Pretendard", color:"#191919",letterSpacing:"-0.95px", marginBottom:"60px", marginLeft:"2px"}}><b>중고거래 사기 뉴스</b><span style={{display:"inline-block",fontSize:"38px", fontWeight:"1000", color:"#1D2088", marginLeft:"8px"}}>.</span></p>
                    </NewsInfo>
                    <NewsList>
                        <Platform>
                            <a href="https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0" target="_blank">
                                <PlatformImg src={process.env.PUBLIC_URL + '/img/Naver.jpg'}/>
                            </a>
                            <a href="https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0" target="_blank">
                                <NewsLogo>
                                    <img src={process.env.PUBLIC_URL + '/img/NaverLogo.png'}/>
                                    <NaverFont>네이버 바로가기</NaverFont>
                                </NewsLogo>
                            </a>
                        </Platform>
                        <Platform>
                            <a href="https://news.google.com/search?q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98%20%EC%82%AC%EA%B8%B0&hl=ko&gl=KR&ceid=KR%3Ako" target="_blank">
                                <PlatformImg src={process.env.PUBLIC_URL + '/img/Google.jpg'}/>
                            </a>
                            <a href="https://news.google.com/search?q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98%20%EC%82%AC%EA%B8%B0&hl=ko&gl=KR&ceid=KR%3Ako" target="_blank"> 
                                <NewsLogo>
                                    <img src={process.env.PUBLIC_URL + '/img/GoogleLogo.png'}/>
                                    <GoogleFont>구글 바로가기</GoogleFont>
                                </NewsLogo>
                            </a>
                        </Platform>
                        <Platform>
                            <a href="https://search.daum.net/search?w=news&q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98%20%EC%82%AC%EA%B8%B0&DA=YZR&spacing=0" target="_blank">
                                <PlatformImg src={process.env.PUBLIC_URL + '/img/Daum.jpg'}/>
                            </a>
                            <a href="https://search.daum.net/search?w=news&q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98%20%EC%82%AC%EA%B8%B0&DA=YZR&spacing=0" target="_blank">
                                <NewsLogo>
                                    <img src={process.env.PUBLIC_URL + '/img/DaumLogo.png'}/>
                                    <DaumFont>다음 바로가기</DaumFont>
                                </NewsLogo>
                            </a>
                        </Platform>
                    </NewsList>
                </NewsContainer>
                <NoticeContainer>
                    <NoticeBoard>
                        <div>
                            <PostMain />
                        </div>
                        {/* <img style={{width:"100%", height:"70%", alignItems:"center"}} src={process.env.PUBLIC_URL + '/img/BoardDummy.png'}/> */}
                    </NoticeBoard>
                </NoticeContainer>
                <TheCheatContainer>
                    <TheCheat>
                        <a href="https://thecheat.co.kr/rb/?mod=_search" target="_blank">
                            <img src={process.env.PUBLIC_URL + '/img/TheCheat.png'} />
                        </a>
                    </TheCheat>
                </TheCheatContainer>
            </CenterDiv>
        </Container>
    );
}

export default IssuePage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    padding-top: 100px;
    overflow: hidden;
    /* border: 5px solid orange; */
`

const IssueImg = styled.img`
    max-width: 1920px;
    /* height: 497px; */
    opacity: 0.97;
`

const ImgText = styled.div`
    position: absolute;
    text-align: center;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    vertical-align: center;
    align-items: center;
    /* border 지우고 440px로 */
    height: 430px;
    margin: 76px 0 90px 0;
    /* border: 5px solid blue; */
    @media screen and (min-width: 781px) and (max-width: 1230px) {
        margin: 56px 0 70px 0;
        height: 340px;
    }
    @media screen and (max-width: 780px) {
        height: 735px;
    }
`
const NewsInfo = styled.div`
    width: 100%;
    max-width: 1380px;
    /* border: 3px solid orange; */

    @media screen and (max-width: 780px) {
        text-align: center;
    }
`
const NewsList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1380px;
    justify-content: space-between;
    /* border: 3px solid yellow; */

    @media screen and (max-width: 780px) {
        /* align-items: center; */
        flex-direction: column;
    }
`
const Platform = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    min-width: 400px;
    height: 265px;
    max-height: 265px;
    min-height: 265px;
    /* border: 3px solid black; */
    border-radius: 10px;
    opacity: 0.75;
    @media screen and (min-width: 781px) and (max-width: 1230px) {
        width: 256.25px;
        max-width: 256.25px;
        min-width: 256.25px;
        height: 169.76px;
        max-height: 169.76px;
        min-height: 169.76px;
    }
    @media screen and (max-width: 780px) {
        width: 780px;
        max-width: 780px;
        min-width: 780px;
        height: 169px;
        max-height: 169px;
        min-height: 169px;
        margin-bottom: 30px;
    }
`
const PlatformImg = styled.img`
    width: 100%;
    height: auto;
    @media screen and (max-width: 780px) {
        width: 90vw;
        height: 100%;
        padding-left: 50px;
        overflow: hidden;
    }
`
const NewsLogo = styled.div`
    position: absolute;
    top: 42px;
    left: 38px;
    @media screen and (min-width: 781px) and (max-width: 1230px) {
        top: 30px;
        left: 27px;
    }
    @media screen and (max-width: 780px) {
        /* text-align: center; */
        top: 30px;
        left: 27px;
        padding-left: 63px;
    }
`
const NaverFont = styled.p`
    font: normal normal 600 24px Pretendard;
    color: #191919; 
    margin-top: 125px; 
    letter-spacing: -0.9px;
    @media screen and (max-width: 1230px) {
        margin-top: 55px;
    }
`

const GoogleFont = styled.p`
    font: normal normal 600 24px Pretendard;
    color: #191919; 
    margin-top: 116px; 
    letter-spacing: -0.9px;
    @media screen and (max-width: 1230px) {
        margin-top: 46px;
    }
`

const DaumFont = styled.p`
    font: normal normal 600 24px Pretendard;
    color: #191919; 
    margin-top: 110px; 
    letter-spacing: -0.9px;
    @media screen and (max-width: 1230px) {
        margin-top: 45px;
    }
`
const NoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    height: 848px;
    vertical-align: center;
    align-items: center;
    background-color: #FAFAFA;
    /* border: 3px solid black;   */
`
const NoticeBoard = styled.div`
    width: 100%;
    max-width: 1380px;
    height: 848px;
    /* border: 3px solid yellow; */
`
const TheCheatContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    height: 250px;
    vertical-align: center;
    align-items: center;
    background-color: #FAFAFA;
    /* margin-top: -210px; */
    background: #006CB5;
    
    /* border: 3px solid black;   */
`
const TheCheat = styled.div`
    width: 100%;
    max-width: 1380px;
    height: 300px;
    text-align: center;
    /* border: 3px solid yellow; */
`
const CenterDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  /* margin-left: 80%; */
  width: 100%;
`