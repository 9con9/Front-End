import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React from 'react';
import LineChart from '../components/LineChart';
import axios from 'axios';
import { Input } from 'antd';
import { CircleLoading } from 'loplat-ui';
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
'joongna':[600000,600000,600000,500000,600000,550000,570000],
'bunjang':[580000,600000,600000,580000,630000,520000,490000],
'all':[570000,550000,600000,590000,630000,520000,530000],
}

function ChartPage() {
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(data)

  const onSearch = value => { startPy(value) }

  const startPy = async (keyword) => {
    setLoading(true)
    try {
      await axios('http://54.153.1.214:5000/chart', {
        method: "get",
        params: {
          value: keyword
        }
      })
        .then(res => setChartData(res.data))
        .catch(function(error){
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
            중고 상품의 최근 1주일 시세를<br className={chartcss.bro}></br>
            볼 수 있는 차트를 제공합니다.
          </p>
        </div>
      </div>
    <center>
      <div className={chartcss.input} style={{display:"flex",  textAlign:"left", marginTop:"5%", marginBottom:"10%"}}>
        <div className={chartcss.mr} style={{font:"normal normal 600  Pretendard"}}>
          <p className={chartcss.text} style={{whiteSpace:"nowrap", fontSize:"25px", fontFamily:"Pretendard"}}>중고물품을 <br className={chartcss.bo}></br>
          검색해보세요!</p>
        </div>

        <div className={chartcss.alser}>
        <TextBox>
        <Ser className={chartcss.ser} id={chartcss.hi}>
          <QuestionCircleOutlined className={chartcss.qr} style={{fontSize: '25px', color: '#08c', marginRight:"10px" }} onClick={showModal}/>
          <Search className={chartcss.ho} id={chartcss.ha} placeholder="예) 천안 아이패드 에어3" onSearch={onSearch} style={{ width: 600, height: 60}} />
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
              duration={1300}
              scale={1}
              zIndex={0}
            
            />
            <h3>검색 중입니다. 잠시만 기다려주세요.</h3>
          </CenterDiv>}
        </div>
        </div>
      </div>
      </center>
      <LineChart items={chartData}></LineChart>
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
`

const Ser = styled.div`
`

