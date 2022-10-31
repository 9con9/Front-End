// function IssuePage() {
//     return (
//         <Container>
//             <LogoBox>
//                  <a href="https://thecheat.co.kr/rb/?mod=_search" target="_blank">
//                     <img src={process.env.PUBLIC_URL + '/img/TheCheat.jpg'} onClick="https://thecheat.co.kr/rb/?mod=_search" alt=""
//                     style={{width:"400px", textAlign:"center", verticalAlign:"center"}}/> 
//                 </a>
//             </LogoBox>
//             <br></br><br></br><br></br><br></br>
//             <UnderLine />

//             <div style={{width: "100%", marginTop:"80px"}}>
//                 <PostMain />
//                 <br></br><br></br><br></br><br></br><br></br>
//                 <UnderLine />
//             </div> 
//             <h2 style={{marginTop:"80px", textAlign:"center"}}>중고거래 사기 뉴스</h2> 

//             <NewsBox>
//                 <Card
//                     hoverable
//                     style={{
//                     width: 240, height:300, marginRight:150, textAlign:"center"
//                     }}
//                     cover={
//                         <a href="https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0" target="_blank">
//                             <img
//                                 style={{marginTop:85, marginBottom:7}}
//                                 width={240}
//                                 alt="example"
//                                 src={process.env.PUBLIC_URL + '/img/Naver.png'}
//                             />
//                         </a>
//                     }
//                 >
//                     <Meta title="네이버 뉴스" description="https://www.naver.com" /> 
                    
//                 </Card>
//                 <Card
//                     hoverable
//                     style={{
//                     width: 240, height:300, marginRight:150, textAlign:"center"
//                     }}
//                     cover={
//                         <a href="https://news.google.com/search?q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98%20%EC%82%AC%EA%B8%B0&hl=ko&gl=KR&ceid=KR%3Ako" target="_blank">
//                             <img
//                                 style={{marginTop:90, marginBottom:5}}
//                                 width={200}
//                                 alt="구글"
//                                 src={process.env.PUBLIC_URL + '/img/Google.png'}
//                             />
//                         </a>
//                     }
//                 >
//                     <Meta title="구글 뉴스" description="https://www.google.com" />
//                 </Card>
//                 <Card
//                     hoverable
//                     style={{
//                     width: 240, height:300, textAlign:"center"
//                     }}
//                     cover={
//                         <a href="https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0" target="_blank">
//                             <img
//                                 style={{marginTop:70}}
//                                 width={240}
//                                 alt="다음"
//                                 src={process.env.PUBLIC_URL + '/img/Daum.jpg'}
//                             />
//                         </a>
//                     }
//                 >
//                     <Meta title="다음 뉴스" description="https://www.daum.net" />
//                 </Card>
//             </NewsBox>
//             <br></br><br></br><br></br>
//         </Container>
//     );
// }

// export default IssuePage

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
//   vertical-align: center;
//   background-color: #FFFFFF;
// `

// const LogoBox = styled.div`
//   display: flex;
//   background-color: #1f2e4d;
//   align-items: center;
//   justify-content: center;
//   margin-left: 10%;
//   margin-right: 10%;
// `

// const NewsBox = styled.div`
//   display: flex;
//   flex-direction:row;
//   align-items: center;
//   justify-content: center;
//   margin-top: 50px;
//   margin-left: 10%;
//   margin-right: 10%;
// `

// const UnderLine = styled.hr`
//     size: 10px;
//     width: 80%;
//     border-top: 3px rgba(232,232,232);
// `

import React from 'react';
import styled from 'styled-components';

function IssuePage(props) {
    return (
        <Container>
            <div style={{position:"relative", height:"497px"}}>
                <img src={process.env.PUBLIC_URL + '/img/Issue.jpg'} style={{maxWidth:"1920px"}}/>
                <ImgText>
                    <p style={{fontSize:"50px", fontWeight:"800", marginBottom:"14px"}}>이슈</p>
                    <p style={{fontSize:"26px", letterSpacing:"-0.65px"}}>리셀뷰어의 주요 이슈를 알려드립니다.</p>
                </ImgText>    
            </div>
            <NewsContainer>
                <NewsInfo>
                    <p style={{fontSize:"24px", color:"#525252",letterSpacing:"-0.6px", marginBottom:"5px"}}>사기 조회하고 거래하세요!</p>
                    <p style={{fontSize:"38px", color:"#191919",letterSpacing:"-0.95px", marginBottom:"60px"}}><b>중고거래 사기 뉴스</b><span style={{fontSize:"38px", fontWeight:"1000", color:"#1D2088", marginLeft:"8px"}}>.</span></p>
                </NewsInfo>
                <NewsList>
                    <Platform>
                        <a href="https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0" target="_blank">
                            <PlatformImg src={process.env.PUBLIC_URL + '/img/Naver.jpg'}/>
                        </a>
                        <a href="https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0" target="_blank">
                            <NewsLogo>
                                <img src={process.env.PUBLIC_URL + '/img/NaverLogo.png'}/>
                                <p style={{fontSize:"24px", fontWeight:"600", color:"#191919", marginTop:"125px", letterSpacing:"-0.9px"}}>네이버 바로가기</p>
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
                                <p style={{fontSize:"24px", fontWeight:"600", color:"#191919", marginTop:"116px", letterSpacing:"-0.9px"}}>구글 바로가기</p>
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
                                <p style={{fontSize:"24px", fontWeight:"600", color:"#191919", marginTop:"110px", letterSpacing:"-0.9px"}}>다음 바로가기</p>
                            </NewsLogo>
                        </a>
                    </Platform>
                </NewsList>
            </NewsContainer>
            <NoticeContainer>
                <NoticeBoard>
                
                </NoticeBoard>
            </NoticeContainer>
        </Container>
    );
}

export default IssuePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    vertical-align: center;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    padding-top: 100px;
    /* border: 5px solid orange; */
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
    height: 445px;
    margin: 76px 0 90px 0;
    /* border: 5px solid blue; */
`
const NewsInfo = styled.div`
    width: 100%;
    max-width: 1380px;
    /* border: 3px solid orange; */
`
const NewsList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1380px;
    justify-content: space-between;
    /* border: 3px solid green; */
`
const Platform = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    min-width: 400px;
    height: 265px;
    max-height: 265px;
    min-height: 265px;

    /* @media screen and (max-width: 1230px) {
        max-width: 256.25px;
        min-width: 256.25px;
        height: 169.76px;
        max-height: 169.76px;
        min-height: 169.76px;
    } */
`
const PlatformImg = styled.img`
    width: 100%;

    @media screen and (max-width: 1230px) {
        width: 70%;
    }
`
const NewsLogo = styled.div`
    position: absolute;
    top: 42px;
    left: 38px;
`
const NoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    height: 983px;
    vertical-align: center;
    align-items: center;
    background-color: #FAFAFA;
    /* border: 3px solid black;   */
`
const NoticeBoard = styled.div`
    width: 100%;
    max-width: 1380px;
    height: 983px;
    /* border: 3px solid yellow; */
`