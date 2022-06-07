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
      { "x": "7일 전", "y": 333333 },
      { "x": "6일 전", "y": 550000 },
      { "x": "5일 전", "y": 500000 },
      { "x": "4일 전", "y": 450000 },
      { "x": "3일 전", "y": 444444 },
      { "x": "2일 전", "y": 350000 },
      { "x": "1일 전", "y": 360000 },
      { "x": "오늘", "y": 410000 }]
  }
]

var ChartData_3 = [
  {
    "id": "갤럭시 버즈",
    "color": 'hsl(336, 70%, 50%)',
    "data": [
      { "x": "7일 전", "y": 110000 },
      { "x": "6일 전", "y": 120000 },
      { "x": "5일 전", "y": 130000 },
      { "x": "4일 전", "y": 110000 },
      { "x": "3일 전", "y": 90000 },
      { "x": "2일 전", "y": 80000 },
      { "x": "1일 전", "y": 78000 },
      { "x": "오늘", "y": 55000 }]
  }
]

var ChartData_4 = [
  {
    "id": "애플워치4",
    "color": 'hsl(336, 70%, 50%)',
    "data": [
      { "x": "7일 전", "y": 600000 },
      { "x": "6일 전", "y": 550000 },
      { "x": "5일 전", "y": 777777 },
      { "x": "4일 전", "y": 450000 },
      { "x": "3일 전", "y": 400000 },
      { "x": "2일 전", "y": 222222 },
      { "x": "1일 전", "y": 360000 },
      { "x": "오늘", "y": 410000 }]
  }
]

var ChartData_5 = [
  {
    "id": "아이폰13",
    "color": 'hsl(336, 70%, 50%)',
    "data": [
      { "x": "7일 전", "y": 444444 },
      { "x": "6일 전", "y": 550000 },
      { "x": "5일 전", "y": 888888 },
      { "x": "4일 전", "y": 333333 },
      { "x": "3일 전", "y": 400000 },
      { "x": "2일 전", "y": 350000 },
      { "x": "1일 전", "y": 600000 },
      { "x": "오늘", "y": 410000 }]
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
        <Button type="primary" style={{ marginRight: 20 }} onClick={() =>setChartData(ChartData_4)}> 애플워치4 </Button>
        <Button type="primary" style={{ marginRight: 20 }} onClick={() =>setChartData(ChartData_5)}> 아이폰13 </Button>
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