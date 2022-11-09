import React from 'react';
import styled from 'styled-components';
import  './LineChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function LineChart(props) {
  let dangn = props.items.dangn;
  let joongna = props.items.joongna;
  let bunjang = props.items.bunjang;
  let all = props.items.all;

  const options = {
    responsive: true,
    hidden:true,
    plugins: {
      title: {
        display: true,
        text: "중고상품 시세변동",
      },
    },
  };

  let labels = ['7일 전', '6일 전', '5일 전', '4일 전', '3일 전', '2일 전','오늘'];

  const data = {
    labels,
    datasets: [
      {
        label: '중고나라',
        data: joongna,
        borderColor: '#27ae60',
        backgroundColor: '#2ecc71',
      },
      {
        label: '당근마켓',
        data:dangn,
        borderColor: '#fa6616',
        backgroundColor: '#ff9f43',
      },
      {
        label: '번개장터',
        data: bunjang,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',  
      },
      {
        label: '평균',
        data: all,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',  
      },
    ]
  };

  return <Box id='box'> <Line options={options} data={data} /> </Box>
}

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 450px;
`