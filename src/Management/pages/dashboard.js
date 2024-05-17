import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { FaPhone, FaUser, FaHouseUser, FaUserEdit, FaAddressBook } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-custom-grey">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        <Navbar />

        <div className="bg-custom-grey p-4 md:p-8 lg:p-12 xl:p-16 rounded ">
          <div className="text-left text-4xl text-black">
            <h1 className="font-bold">Hello! Welcome 👋</h1>
          </div>
          <div className="text-left text-xl text-black">
            <h1 className="mt-2">
              Selamat datang di Dashboard Manajer website
            </h1>
          </div>
        </div>

        <div className="ml-24 text-2xl text-main">
          <h1 className="font-bold">User Overview</h1>
        </div>

        <div className="ml-16 mt-8 flex flex-wrap">
          <div className="bg-white shadow-lg w-64 h-36 rounded-lg p-6 flex flex-row items-center justify-center mr-8 mb-8">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-orange-400 mr-4 overflow-hidden">
              <FaPhone className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-500 mb-1">
                Semua data
              </h1>
              <h1 className="text-5xl font-semibold text-black">190</h1>
            </div>
          </div>

          <div className="bg-white shadow-lg w-64 h-36 rounded-lg p-6 flex flex-row items-center justify-center mr-8 mb-8">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-yellow-500 mr-4 overflow-hidden">
              <FaAddressBook className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-500 mb-1">
                Jumlah Admin
              </h1>
              <h1 className="text-5xl font-semibold text-black">190</h1>
            </div>
          </div>

          <div className="bg-white shadow-lg w-64 h-36 rounded-lg p-6 flex flex-row items-center justify-center mr-8 mb-8">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-biru mr-4 overflow-hidden">
              <FaUserPen className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-500 mb-1">
                Jumlah Koordinator
              </h1>
              <h1 className="text-5xl font-semibold text-black">190</h1>
            </div>
          </div>

          <div className="bg-white shadow-lg w-64 h-36 rounded-lg p-6 flex flex-row items-center justify-center mr-8 mb-8">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-500 mr-4 overflow-hidden">
              <FaUser className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-500 mb-1">
                Jumlah User
              </h1>
              <h1 className="text-5xl font-semibold text-black">190</h1>
            </div>
          </div>
        </div>

        <div className="ml-16 mt-8 flex flex-wrap">
          <div className="p-4 w-auto md:w-10/12 lg:w-10/12 xl:w-6/12 md:p-8 lg:p-12 xl:p-16">
            <div className="bg-white p-2 md:p-4 lg:p-8 xl:pr-12 rounded shadow-lg">
              <h1 className="text-lg ml-20 mb-8 font-semibold text-gray-500 mb-1">
                Rekap Data
              </h1>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart
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
                  <Bar
                    dataKey="pv"
                    fill="#8884d8"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                  />
                  <Bar
                    dataKey="uv"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                  <Bar
                    dataKey="amt"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="p-4 w-auto md:w-10/12 lg:w-10/12 xl:w-6/12 md:p-8 lg:p-12 xl:p-16">
            <div className="bg-white p-2 md:p-4 lg:p-8 xl:pr-12 rounded shadow-lg">
              <h1 className="text-lg ml-20 mb-8 font-semibold text-gray-500 mb-1">
                Admin
              </h1>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart
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
                  <Bar
                    dataKey="pv"
                    fill="#8884d8"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                  />
                  <Bar
                    dataKey="uv"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                  <Bar
                    dataKey="amt"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
