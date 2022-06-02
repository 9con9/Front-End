import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import {Link ,Route, Routes } from 'react-router-dom';
import ChartPage from './ChartPage';
import ProductPage from './ProductPage'
import IssuePage from './IssuePage';

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
              scrollOverflow={true}
              navigation={true}
              navigationPosition='right'
              onLeave={this.onLeave.bind(this)}
              afterLoad={this.afterLoad.bind(this)}
              render={({ state, fullpageApi }) => {
                return (
                  <div id="fullpage-wrapper">
                    <div className='section'>
                      <video data-autoPlay loop src={process.env.PUBLIC_URL +'/img/way.mp4'} 
                      style={{width:"100%", height:"100%", background: 'url(/img/way.mp4)', filter:"brightness(50%)"}}/>
                      <div style={{position: "absolute", zIndex:5}}>
                        <p style={{
                          zIndex:5,marginTop:"-550px", fontWeight: 'bold',fontSize:"30px", color:"#e4e8eb", marginLeft:"160px"}}>
                            리셀뷰어를 통해 최적의<p style={{fontSize: "30px"}}>중고상품을 확인해보세요</p>
                        </p>
                      </div>  
                    </div>
                    <div className="section">
                      <img src={process.env.PUBLIC_URL +'/img/pic3.jpg'} 
                      style={{width:"100%", height:"100%", background: 'url(/img/pic3.jpg)'}}/>
                      <div style={{position: "absolute", zIndex:5}}>
                        <p style={{
                        zIndex:5, fontWeight:'normal',marginTop:"-450px", fontWeight: 'bold',fontSize:"30px", color:"#e4e8eb", marginLeft:"1050px"}}>
                          차트를 보면서 제품의<p style={{fontSize: "30px"}}>시세를 분석해보세요.</p>
                        </p>
                            <Button to='/Chart' onClick="activateLasers()" variant="primary"  size="medium"style={{marginLeft:"1050px", fontWeight: 'bold'}}>
                              차트 바로가기
                            </Button>
                      </div>
                    </div>
                    <div className="section">
                        <img src={process.env.PUBLIC_URL +'/img/aurora.jpg'} 
                        style={{width:"100%", height:"100%", zIndex:0}}/>
                        <div style={{position: "absolute", zIndex:5}}>
                          <p style={{
                            zIndex:5,fontWeight: 'normal', marginTop:"-450px", fontWeight: 'bold', fontSize:"30px", color:"#e4e8eb", marginLeft:"620px"}}>
                              한번에 중고제품가격을<p style={{fontSize:"30px"}}>비교해 보세요.</p>
                            </p>
                              <Button to='/Product' style={{marginLeft:"620px", fontWeight: 'bold'}}>
                                마켓 바로가기
                              </Button>
                        </div>
                    </div>
                    <div className="section">
                      <img src={process.env.PUBLIC_URL +'/img/pic4.jpg'}
                       style={{width:"100%", height:"100%"}}/>
                      <div style={{position: "absolute", zInd기x:5}}>
                        <p style={{
                          zIndex:5, fontWeight:'normal', marginTop:"-450px", fontWeight: 'bold', fontSize:"30px", color:"#e4e8eb", marginLeft:"620px"}}>
                            다양한 사기사례를<p style={{fontSize:"30px"}}>확인해 보세요.</p>
                        </p>
                          <Button to='/issue' style={{marginLeft:"620px", fontWeight:"bold"}}>
                            이슈페이지 가기
                          </Button>
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

<main>
  <Route exact path = "/Chart" Component={ChartPage} />
  <Route exact path='/Prodcut' Component={ProductPage}/>
  <Route exact path='/issue' Component={IssuePage}/>
</main>


  export default Mainpage

  const Container = styled.div`
  display: block;
  `

  export const Button = styled(Link)`
    color: white;
    border-radius: 50px;
    background: ${({primary})=> (primary ? '#6A67CE' : '#232323')};
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark ? '#EEEEE' : '#fff')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration-line: none;
    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary})=> (primary ? '#5B4FE8': '#f56217' )}; //뒤에꺼
    }
`