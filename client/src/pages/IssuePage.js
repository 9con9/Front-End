import styled from 'styled-components'; 
import PostMain from './post/PostMain';
import { Card } from "antd";

const { Meta } = Card;

function IssuePage() {
    return (
        <Container>
            <LogoBox>
                 <a href="https://thecheat.co.kr/rb/?mod=_search" target="_blank">
                    <img src={process.env.PUBLIC_URL + '/img/TheCheat.jpg'} onClick="https://thecheat.co.kr/rb/?mod=_search" alt=""
                    style={{width:"400px", textAlign:"center", verticalAlign:"center"}}/> 
                </a>
            </LogoBox>
            <br></br><br></br><br></br><br></br>
            <hr style={{size:"10px", width:"75%", color:'#e1e2e3'}}></hr>

            <div style={{width: "100%", marginTop:"100px" , marginBottom:"50px"}}>
                <PostMain />
                <br></br><br></br><br></br><br></br><br></br>
                <hr style={{size:"10px", width:"75%", color:'#e1e2e3'}}></hr>
            </div>
            {/* <div style={{marginTop:"100px", textAlign:"center"}}>
                <h1>중고거래 사기 뉴스</h1>
            </div> */}
            <h2 style={{marginTop:"100px", textAlign:"center"}}>중고거래 사기 뉴스</h2> 

            <NewsBox>
                <Card
                    hoverable
                    style={{
                    width: 240, height:300, marginRight:150, textAlign:"center"
                    }}
                    cover={
                        <a href="https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0" target="_blank">
                            <img
                                style={{marginTop:85, marginBottom:7}}
                                width={240}
                                alt="example"
                                src={process.env.PUBLIC_URL + '/img/Naver.png'}
                            />
                        </a>
                    }
                >
                    <Meta title="네이버 뉴스" description="https://www.naver.com" /> 
                    
                </Card>
                <Card
                    hoverable
                    style={{
                    width: 240, height:300, marginRight:150, textAlign:"center"
                    }}
                    cover={
                        <a href="https://news.google.com/search?q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98%20%EC%82%AC%EA%B8%B0&hl=ko&gl=KR&ceid=KR%3Ako" target="_blank">
                            <img
                                style={{marginTop:90, marginBottom:5}}
                                width={200}
                                alt="구글"
                                src={process.env.PUBLIC_URL + '/img/Google.png'}
                            />
                        </a>
                    }
                >
                    <Meta title="구글 뉴스" description="https://www.google.com" />
                </Card>
                <Card
                    hoverable
                    style={{
                    width: 240, height:300, textAlign:"center"
                    }}
                    cover={
                        <a href="https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0" target="_blank">
                            <img
                                style={{marginTop:70}}
                                width={240}
                                alt="다음"
                                src={process.env.PUBLIC_URL + '/img/Daum.jpg'}
                            />
                        </a>
                    }
                >
                    <Meta title="다음 뉴스" description="https://www.daum.net" />
                </Card>
            </NewsBox>
            <br></br><br></br><br></br>
        </Container>
    );
}

export default IssuePage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  float: left;
  justify-content: center;
  vertical-align: center;
  padding-bottom:50px;
  margin-top:50px;
`

const LogoBox = styled.div`
  display: flex;
  background-color: #1f2e4d;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
`

const NewsBox = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`