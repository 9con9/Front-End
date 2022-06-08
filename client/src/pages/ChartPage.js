import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import React from 'react';
// import axios from 'axios';

//yarn add @nivo/core @nivo/line
//npm install d3@3
//yarn upgrade
import { Line } from "@nivo/line";

//Data
var ChartData_1 = [
  {
    "id": "에어팟 프로",
    "color": 'hsl(336, 70%, 50%)',
    "data": [
      { "x": "7일 전", "y": 83900 },
      { "x": "6일 전", "y": 118889 },
      { "x": "5일 전", "y": 94600 },
      { "x": "4일 전", "y": 112857 },
      { "x": "3일 전", "y": 108000 },
      { "x": "2일 전", "y": 110080 },
      { "x": "1일 전", "y": 133286 },
      { "x": "오늘", "y": 114412 }]
  }
]

var ChartData_2 = [
  {
    "id": "아이패드 에어3",
    "color": 'hsl(336, 70%, 50%)',  
    "data": [
      { "x": "7일 전", "y": 422533 },
      { "x": "6일 전", "y": 419478 },
      { "x": "5일 전", "y": 362042 },
      { "x": "4일 전", "y": 396278 },
      { "x": "3일 전", "y": 452000 },
      { "x": "2일 전", "y": 434410 },
      { "x": "1일 전", "y": 445219 },
      { "x": "오늘", "y": 429717 }]
  }
]

var ChartData_3 = [
  {
    "id": "갤럭시 버즈",
    "color": 'hsl(336, 70%, 50%)',
    "data": [
      { "x": "7일 전", "y": 67911 },
      { "x": "6일 전", "y": 72583 },
      { "x": "5일 전", "y": 72725 },
      { "x": "4일 전", "y": 77444 },
      { "x": "3일 전", "y": 76982 },
      { "x": "2일 전", "y": 76887 },
      { "x": "1일 전", "y": 78133 },
      { "x": "오늘", "y": 77766 }]
  }
]

var ChartData_4 = [
  {
    "id": "천안 애플워치se 44mm",
    "color": 'hsl(336, 70%, 50%)',
    "data": [
      { "x": "7일 전", "y": 269250 },
      { "x": "6일 전", "y": 265000 },
      { "x": "5일 전", "y": 244333 },
      { "x": "4일 전", "y": 255182 },
      { "x": "3일 전", "y": 261167 },
      { "x": "2일 전", "y": 243264 },
      { "x": "1일 전", "y": 270000 },
      { "x": "오늘", "y": 262062 }]
  }
]

var ChartData_5 = [
  {
    "id": "로지텍 G102",
    "color": 'hsl(336, 70%, 50%)',
    "data": [
      { "x": "7일 전", "y": 12091 },
      { "x": "6일 전", "y": 12764 },
      { "x": "5일 전", "y": 12308 },
      { "x": "4일 전", "y": 9833 },
      { "x": "3일 전", "y": 14800 },
      { "x": "2일 전", "y": 15676 },
      { "x": "1일 전", "y": 13000 },
      { "x": "오늘", "y": 15060 }]
  }
]


function ChartPage() {
  // DB 연동해서 차트 그릴 때 사용
  // const [ChartData, setChartData] = useState(ChartSetting)
  // useEffect(() => {
  //   axios.get('http://localhost:3001/chart/test')
  //     .then(res => setChartData(res.data))
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // })
  const [ChartData, setChartData] = useState(ChartData_1)

  return (
    <Container>
      <div>
        <Button type="primary" style={{ marginRight: 20 }} onClick={() =>setChartData(ChartData_1)}> 에어팟 프로 </Button>
        <Button type="primary" style={{ marginRight: 20 }} onClick={() =>setChartData(ChartData_2)}> 아이패드 에어3 </Button>
        <Button type="primary" style={{ marginRight: 20 }} onClick={() =>setChartData(ChartData_3)}> 갤럭시 버즈 </Button>
        <Button type="primary" style={{ marginRight: 20 }} onClick={() =>setChartData(ChartData_4)}> 애플워치se 44mm </Button>
        <Button type="primary" style={{ marginRight: 20 }} onClick={() =>setChartData(ChartData_5)}> 로지텍 G102 </Button>
      </div>

      <h1> {ChartData.id} </h1>
      <Line
        width={900}
        height={500}
        data={ChartData} // Data 넣는 곳
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '날짜',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 2,
          tickPadding: 5,
          tickRotation: 0,
          legend: '가격',
          legendOffset: -50,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'accent' }}
        lineWidth={4} //선 굵기
        pointSize={10}
        pointColor="white"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
      />
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