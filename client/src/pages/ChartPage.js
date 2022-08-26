import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import React from 'react';
import LineChart from '../components/LineChart';
import axios from 'axios';
import { Input } from 'antd';
const { Search } = Input;

//import axios from 'axios';

//yarn add @nivo/core @nivo/line
//npm install d3@3
//yarn upgrade

var tempData = {
  "중고나라": [
    9515535,
    9785074,
    9217250,
    9530606,
    9530606,
    9177778,
    9027528,
  ],
  "당근마켓": [
    10014100,
    9919200,
    9984400,
    9948300,
    9961500,
    10013000,
    9931400,
  ],
  "번개장터": [
    10081157,
    10240583,
    10218469,
    10313950,
    10630480,
    10711589,
    10824474,
  ],
  "평균":[
    10313950,
    10313950,
    10313950,
    10313950,
    10313950,
    10313950,
    10313950
  ],
  "date": [
    "7일 전",
    "6일 전",
    "5일 전",
    "4일 전",
    "3일 전",
    "2일 전",
    "1일 전",
  ]
}

function ChartPage() {
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({})
  //const onSearch = value => { startPy(value) }
  useEffect(() => {
    setChartData(tempData)
  }, [])
  
  return (
    <Container>
      <div>
        <TextBox>
          <Search placeholder="중고 물품을 검색하세요! " style={{ width: 600, height: 60 }} />
        </TextBox>

      </div>
      <LineChart items={chartData}></LineChart>
    </Container>  
  );
}

export default ChartPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top:30px;
`

const TextBox = styled.div`
  display:flex;
  align-items:center;
  margin-top:30px;
  margin-bottom:-30px;
`