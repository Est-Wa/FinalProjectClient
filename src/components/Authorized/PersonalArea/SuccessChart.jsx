// import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
    {
      name: "Page A",
      success: 4000,
  
      amt: 2400
    },
    {
      name: "Page B",
      success: 3000,
  
      amt: 2210
    },
    {
      name: "Page C",
      success: 2000,
  
      amt: 2290
    },
    {
      name: "Page D",
      success: 2780,
  
      amt: 2000
    },
    {
      name: "Page E",
      success: 1890,
      amt: 2181
    },
    {
      name: "Page F",
      success: 2390,
      amt: 2500
    },
    {
      name: "Page G",
      success: 3490,
      amt: 2100
    }
  ];
  
  export default function SuccessChart() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="success" stroke='#DB3349' />
      </LineChart>
    );
  }