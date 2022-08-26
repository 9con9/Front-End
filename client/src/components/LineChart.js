import React from 'react';
import styled from 'styled-components';
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
   const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: props.items.title,
      },
    },
  };

  let labels = props.items.date;

  const data = {
    labels,
    datasets: [
      {
        label: '중고나라',
        data: props.items.중고나라,
        borderColor: '#27ae60',
        backgroundColor: '#2ecc71',
      },
      {
        label: '당근마켓',
        data: props.items.당근마켓,
        borderColor: '#fa6616',
        backgroundColor: '#ff9f43',
      },
      {
        label: '번개장터',
        data: props.items.번개장터,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',  
      },
      {
        label: '평균',
        data: props.items.평균,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',  
      },
    ]
  };

  return <Box> <Line options={options} data={data} /> </Box>
}

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 500px;
`