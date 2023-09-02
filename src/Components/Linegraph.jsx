import React from 'react'
import axios from 'axios'
import { Chart as chartJs,ArcElement, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler, plugins } from 'chart.js'
import { Line } from 'react-chartjs-2'
import "./Linegraph.css"
import { useState,useEffect } from 'react'

chartJs.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export const Linegraph = () => {
  const [data, setData] = useState({ cases: {} });

  useEffect(() => {
    const apiUrl = 'https://disease.sh/v3/covid-19/all';

    axios.get(apiUrl)
      .then((response) => {
        const apiData = response.data;
        setData({ cases: apiData });
      })
      .catch((error) => {
        console.error('Error fetching COVID-19 data:', error);
      });
  }, []);

  const { cases } = data;

  const chartData = {
    labels: Object.keys(cases),
    datasets: [
      {
        label: 'COVID-19 Cases',
        data: Object.values(cases),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Date',
          },
        },
      ],
      y: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Cases',
          },
        },
      ],
    },
  };
  return (
    <div>
      <h2>COVID-19 Cases Line Chart</h2>
      <div className='grid-line'>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}
