import React, { useEffect } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

import ReactFullpage from '@fullpage/react-fullpage';
import {Link} from 'react-router-dom';
import './main.css';

class Mainpage extends React.Component {
    onLeave(origin, destination, directicon) {
      console.log("Leaving section " + origin.index);
    }
    afterLoad(origin, destination, direction) {
      console.log("After load: " + destination.index);
    }

    render() {
      return (
        <Container>
            <ReactFullpage
         
              navigation
              navigationPosition='right'
          
              onLeave={this.onLeave.bind(this)}
              afterLoad={this.afterLoad.bind(this)}
              slidesNavPosition
              render={({ state, fullpageApi }) => {
                return (
                  <div id="fullpage-wrapper">
                    <div className='section' id='first'>
                      <div id='first_one'>
                      <Fade left>
                      <p className='first_section' id='fs'>최적의 중고상품을<br/>
                      비교해주는 리셀뷰어
                      </p>
                      </Fade>
                      </div>
                      <Jump auto>
                      <div className='circle'>
                        <div className='circle2'>
                        <div className='circle1'></div>
                        </div>
                      </div>
                      </Jump>
                
                    </div>

                    <div className="section" id='second'>
                      <Fade left>
                      <div id='second_one'>
                        <p className='market'>MARKET.</p><br/><br/>
                        <p className='second_section'><span>한번에 중고 제품</span>
                          가격을 비교해 보세요.</p>
                        <br/><br/>
                        <p id='market_2'>
                          검색어에 지역을 포함하여 검색하면<br/>
                          지역에 맞는 상품들을 조회할 수 있습니다.
                        </p>
                        <a className='ja' href='/product' style={{color:"#191919", font:"normal normal bold 20px/56px Roboto"}}>자세히 보기 →</a>
                      </div>
                      </Fade>
                      <div id='image2'>
                        <Fade bottom>
                        <img id='img1' src={process.env.PUBLIC_URL +'/img/cart.png'}/>
                        </Fade>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Fade top>
                        <img id='img2' src={process.env.PUBLIC_URL +'/img/enter.png'}/>
                        </Fade>
                      </div>
                    </div>

                    <div className="section" id='third'>
                        <div id='mar'>
                          <Fade right>
                          <div id='inner'>
                          <p className='market'>CHART.</p><br/><br/>
                          <p className='second_section'>차트를 보면서 제품의 <br/>
                            시세를 분석해 보세요.</p>
                          <p id='chart_2' style={{fontSize:"120%", font:"Pretendard", color:"color: #6C6C6C;"}}>
                            최근 일주일간의 시세를 비교할 수 <br/>
                            있도록 데이터를 시각화하여 보여줍니다.
                          </p>
                          <br/><br/>
                          <a href='/chart' style={{color:"#191919", font:"normal normal bold 20px/56px Roboto"}}>자세히 보기 →</a>
                          </div>
                          </Fade>
                        </div>
                    </div>

                    <div className="section" id='fourth'>
                     <Fade top>
                    <div id='fourth_one'>
                        <p className='market'>ISSUE.</p><br/>
                        <p className='fourth_section'>리셀뷰어에서 한 번에<br/>
                          중고 거래 관련 정보를<br/>
                          받아보세요.
                        </p>
                        <br/><br/>
                        <p id='issue_2'>
                          사기 피해를 방지하기 위해 중고 거래 사기<br/>
                          수법 뉴스와 더치트 링크를 제공합니다.<br/>
                        </p>
                        <br className='bro'/><br className='bro'/><br className='bro'/><br/>
                        <a href='/issue' style={{color:"#191919", font:"normal normal bold 20px/56px Roboto"}}>자세히 보기 →</a>
                    </div>
                    </Fade>
                    <Fade bottom>
                      <div id='issue_3'>
                        <img id='img0' src={process.env.PUBLIC_URL +'/img/is.jpg'}/>
                      </div>
                      </Fade>
                    </div>

                    <div className='section' id='footersec' style={{width:'100%'}}>
                      <div style={{width:'100%', height:'100%', backgroundColor:"#f7f7f7"}}>
                        <footer>
                          <div id='footset'>
                            <br/><br/>
                            <p id='foot_1'>CONTACT US .</p>
                            <p id='foot_2'>리셀뷰어에 궁금한 점을 문의해주세요</p>
                            <br />
                            <p id='foot_3'>문의하기</p>
                            <br/>
                          </div>
                        </footer>

                      </div>
                    </div>

                  </div>
                );
              }}
            />          
        </Container>  
      );
    }
  }

  export default Mainpage

  const Container = styled.div`
    background-color: white;
    display: block;
    fontSize: 20px;
  `