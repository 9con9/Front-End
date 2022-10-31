import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React from 'react';
import LineChart from '../components/LineChart';
import axios from 'axios';
import { Input } from 'antd';
import { CircleSpinner } from 'loplat-ui';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {Modal} from 'antd';
import chartcss from './Chartpage.css';


const { Search } = Input;

//import axios from 'axios';
//yarn add @nivo/core @nivo/line
//npm install d3@3
//yarn upgrade

function ChartPage() {
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({})

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
    <Container>

      <div style={{position:"relative", alignItems:"center"}}>
        <div>
          <img  src={process.env.PUBLIC_URL +'/img/chart1.jpg'}/>
        </div>
        <div id='chart_one' style={{position:"absolute", width:"100%", top:"50%", textAlign:"center"}}>
          <h2 style={{font:"normal normal 800 3rem/2rem Pretendard", color:"white"}}>
            차트
          </h2>
          <p id='chart_1' style={{font:"normal normal 1.6rem/2rem Pretendard", fontSize:"normal", color:"white"}}>
            중고 상품의 최근 1주일 시세를<br id='bro'></br>
            볼 수 있는 차트를 제공합니다.
          </p>
        </div>
      </div>

      <div style={{display:"flex", width:"100%", textAlign:"left", marginTop:"5%"}}>
        <div style={{font:"normal normal 800 24px/36px Pretendard",marginLeft:"25%", marginRight:"10%"}}>
          <p style={{whiteSpace:"nowrap"}}>중고물품을<br/>
          검색해보세요!</p>
        </div>

        <div>
        <TextBox>
          <QuestionCircleOutlined style={{ fontSize: '25px', color: '#08c', marginRight:'15px', marginBottom:'27px' }} onClick={showModal}/>
          <Search placeholder="중고 물품을 검색하세요!" onSearch={onSearch} style={{ width: 600, height: 60 }} />
        </TextBox>

        <Modal title="정보 및 주의사항" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p style={{ marginTop: '1%' }}> 중고 상품의 최근 1주일 시세를 볼 수 있는 차트입니다. </p>
          <br/>
          <p> 시세는 가격의 이상치를 제거한 중앙 값입니다. </p>
          <br/>
          <p> 현재 당근 마켓, 번개장터, 중고나라 3개의 플랫폼이 동시에 검색됩니다.</p>
          <br/>
          <p>검색까지 <sapn style={{color:'red'}}>약 1분의 </sapn>시간이 소요되며 페이지를 이동해서는 안 됩니다.</p>
          <br></br>
        </Modal>

        <div>
        {loading &&
          <CenterDiv>
            <CircleSpinner
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
  margin-top:30px;
  margin-bottom:-30px;
`

const CenterDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`