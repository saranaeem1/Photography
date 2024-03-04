import React from "react";
import {
  BsCameraFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsCalendar2CheckFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";

function Dashboard() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="dashboard-main-container">
        <div className="dashboard-main-title">
          <h3>DASHBOARD</h3>
        </div>

        <div className="dashboard-main-cards">
          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <h3>GENRES</h3>
              <BsFillGrid3X3GapFill className="dashboard-card_icon" />
            </div>
            <h1>6</h1>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <h3>PHOTOGRAPHERS</h3>
              <BsCameraFill className="dashboard-card_icon" />
            </div>
            <h1>12</h1>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <h3>USERS</h3>
              <BsPeopleFill className="dashboard-card_icon" />
            </div>
            <h1>33</h1>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <h3>BOOKINGS</h3>
              <BsCalendar2CheckFill className="dashboard-card_icon" />
            </div>
            <h1>20</h1>
          </div>
        </div>

        <div className="dashboard-charts">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
