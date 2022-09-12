import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React from 'react';
import LineChart from '../components/LineChart';
import axios from 'axios';
import { Input } from 'antd';
import { CircleSpinner } from 'loplat-ui';

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

  return (
    <Container>
      <div>
        <TextBox>
          <Search placeholder="중고 물품을 검색하세요!" onSearch={onSearch} style={{ width: 600, height: 60 }} />
        </TextBox>

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

const CenterDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`