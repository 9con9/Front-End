/* eslint-disable */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React from 'react';
import LineChart from '../components/LineChart';
import axios from 'axios';
import { Input, Button, Carousel } from 'antd';
import { CircleLoading, black } from 'loplat-ui';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {Modal} from 'antd';
import chartcss from './Chartpage.module.css';

const { Search } = Input;

//import axios from 'axios';
//yarn add @nivo/core @nivo/line
//npm install d3@3
//yarn upgrade

//당일날 받아올 데이터
const data = 
{
'dangn':[640000,635000,600000,610000,450000,470000,550000],
'joongna':[570000,600000,600000,500000,600000,550000,570000],
'bunjang':[580000,600000,600000,580000,630000,520000,490000],
'all':[600000,550000,600000,590000,630000,520000,530000],
}

function ChartPage() {
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(data)
  const [size, setSize] = useState('large');
  
  const startPy = async (keyword) => {
    setLoading(true)
    try {
      await axios('http://23.22.235.3:5000/chart', {
        method: "get",
        params: {
          value: keyword
        }
      })
        .then(res => {
          setChartData(res.data)          
          window.localStorage.setItem("chartData", JSON.stringify(res.data));
        })
        .catch(function(error){
          console.log(error);
          alert("❗ 400 error")
        })
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  //로컬스토리지 확인
  useEffect(() => {
    if (window.localStorage.getItem("chartData")) {
      let temp = JSON.parse(window.localStorage.getItem("chartData"))
      setChartData(temp)
    }
  }, [])

  const onSearch = (value) => {
    console.log("검색어 :" + value)
    if(loading){
      alert("❗ 이미 검색이 진행되고 있어요.")
      return
    }
    if(value==""){
      alert("❗ 검색어를 입력해 주세요.")
      return
    }

    alert("서비스 점검 중입니다.")
    // startPy(value)
  }

  //카테고리 검색
  const categorySearch = (str) => {
    console.log("카테고리 검색어 :"+str)
    if(loading){
      alert("❗ 이미 검색이 진행되고 있어요.")
      return
    }
    alert("서비스 점검 중입니다.")
    // startPy(str)
  }

  //Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
 

  return (
    <Container id={chartcss.con}>
      
      <div style={{position:"relative", alignItems:"center"}}>
        <div>
          <img src={process.env.PUBLIC_URL +'/img/chart1.jpg'} style={{maxWidth:"1920px"}}/>
        </div>
        <div className={chartcss.cone} style={{position:"absolute", width:"100%", top:"50%", textAlign:"center", height:"100vw"}}>
          <h2 style={{font:"normal normal 800 3rem/2rem Pretendard", color:"white"}}>
            차트
          </h2>
          <p id='chart_1' style={{font:"normal normal 1.6rem/2rem Pretendard", fontSize:"normal", color:"white"}}>
            중고 상품의 최근 1주일 시세를 <br className={chartcss.bro}></br>
            볼 수 있는 차트를 제공합니다.
          </p>
        </div>
      </div>
    <center className={chartcss.cen}>
      <div className={chartcss.input} style={{display:"flex",  textAlign:"left", marginTop:"5%", marginBottom:"10%"}}>
        <div className={chartcss.mr} style={{font:"normal normal 600  Pretendard"}}>
          <p className={chartcss.text} style={{whiteSpace:"nowrap", fontSize:"25px", fontFamily:"Pretendard"}}>중고물품을 <br className={chartcss.bo}></br>
          검색해보세요!</p>
        </div>

        <div className={chartcss.alser}>
        <TextBox>
        <Ser className={chartcss.ser} id={chartcss.hi}>
          <QuestionCircleOutlined className={chartcss.qr} style={{fontSize: '25px', color: '#08c', marginRight:"10px", position:"relative" }} onClick={showModal}/>
          <Search className={chartcss.ho} id={chartcss.ha} placeholder="예) 천안 아이패드 에어3" onSearch={(e)=>onSearch(e)} style={{ width: 600, height: 60}} />
        </Ser>
        </TextBox>

        <Modal title="정보 및 주의사항" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p style={{ marginTop: '1%' }}> 중고 상품의 최근 1주일 시세를 볼 수 있는 차트입니다. </p>
          <br/>
          <p> 시세는 가격의 이상치를 제거한 중앙 값입니다. </p>
          <br/>
          <p> 현재 당근 마켓, 번개장터, 중고나라 3개의 플랫폼이 동시에 검색됩니다.</p>
          <br/>
          <p>검색까지 <span style={{color:'red'}}>약 1분의 </span>시간이 소요되며 페이지를 이동해서는 안 됩니다.</p>
          <br></br>
        </Modal>
        
        <div>
        {loading &&
          <CenterDiv>
            <CircleLoading
              aria-describedby="example"
              aria-labelledby="example"
              duration={1000}
              scale={1}
            />
            <h3 style={{whiteSpace:"nowrap", color: '#148CFF', marginTop:8}}>시세 데이터를 수집하고 있어요.</h3>
          </CenterDiv>}
        </div>
        
        </div>
      </div>
      </center>
      <Recom>
          <center style={{display:"block"}}>
           {/* <p style={{fontWeight:"800", fontSize:"20px"}}>인기 검색어</p> */}
           <h4>중고거래 인기상품</h4>

          <div className={chartcss.items}>
            <Carousel autoplay>
              <div className={chartcss.car}>
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("천안 아이폰 12") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>아이폰 12</Button>&nbsp;&nbsp;
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("인천 아이폰 x") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>아이폰 XS</Button>&nbsp;&nbsp;
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("인천 노트20") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>노트 20 울트라</Button>&nbsp;&nbsp;<br className={chartcss.bro} /><br className={chartcss.bro} />
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("천안 삼성 노트북") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>삼성 노트북</Button>&nbsp;&nbsp;
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("천안 아이패드 에어3") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>아이패드 에어 3</Button>
              </div>

              <div>
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("천안 맥북프로") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>맥북 프로 m1</Button>&nbsp;&nbsp;
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("천안 삼성 모니터") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>삼성 모니터</Button>&nbsp;&nbsp;
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("천안 그래픽카드") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>그래픽 카드</Button>&nbsp;&nbsp;<br className={chartcss.bro} /><br className={chartcss.bro} />
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("천안 키보드") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>키보드</Button>&nbsp;&nbsp;
                <Button id={chartcss.btn} ghost={true} onClick={(str) => { categorySearch("인천 아이패드 프로") }} type="primary" shape="round" size={size} style={{ borderColor: "#B1B1B1", color: "#5A5A5A", fontFamily: "Pretendard" }}>아이패드 프로</Button>
              </div>

            </Carousel>
          </div>
        </center>
        </Recom>
        
      <LineChart items={chartData} ></LineChart>
      
      

    </Container>  
  );
}

export default ChartPage

const chartText = styled.div`
position: absolute;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  fontSize:50px;
  max-width:100%;
  overflow-x:hidden;
  overflow-y:hidden;
`

const TextBox = styled.div`
  display:flex;
  align-items:center;
  margin-top:10px;
  margin-left: 50%;
  width: 100%;
`

const CenterDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin-left: 80%;
  width: 100%;
  margin-top: 20px;
`

const Ser = styled.div`
`

const Recom = styled.div`
  width: 50rem;
  
  alignItems: center;
  marginBottom:100%;
}
  @media screen and (min-width: 850px) and (max-width: 1001px){
    width: 50rem;
    line-height:20px;
  }
  @media screen and (min-width: 390px) and (max-width: 850px){
    width: 35rem;
  }
`

