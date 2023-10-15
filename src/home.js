import React from "react";
import {
  BsCurrencyBitcoin,
  BsArrowUpShort,
  BsArrowDownShort,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LuListOrdered } from "react-icons/lu";
import { FcSalesPerformance } from "react-icons/fc";
import Productcell from "./productcell";
function Home() {
  const data = [
    {
      name: "Jan",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Sept",
      pv: 9800,
      amt: 2290,
    },
    {
      name: "oct",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Nov",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "dec",
      pv: 3800,
      amt: 2500,
    },
  ];

  const data1 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <>
      <main className="main-container">
        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h3>Earnings</h3>
              <BsCurrencyBitcoin className="card_icon" />
            </div>
            <h1>$198k</h1>
            <h1>
              <BsArrowUpShort style={{ color: "green" }} />
              <span style={{ color: "green" }}>37.8%</span> this month
            </h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Orders</h3>
              <LuListOrdered className="card_icon" />
            </div>
            <h1>$2.4k</h1>
            <h1>
              <BsArrowDownShort style={{ color: "red" }} />
              <span style={{ color: "red" }}>2%</span> this month
            </h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Balance</h3>
              <MdOutlineAccountBalanceWallet className="card_icon" />
            </div>
            <h1>$2.4k</h1>
            <h1>
              <BsArrowDownShort style={{ color: "red" }} />
              <span style={{ color: "red" }}>2%</span> this month
            </h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Total Sales</h3>
              <FcSalesPerformance className="card_icon" />
            </div>
            <h1>$89k</h1>
            <h1>
              <BsArrowUpShort style={{ color: "green" }} />
              <span style={{ color: "green" }}>11%</span> this month
            </h1>
          </div>
        </div>

        <div className="charts">
          <ResponsiveContainer
            width="100%"
            height="100%"
            style={{ backgroundColor: "rgb(250, 214, 214)" }}
          >
            <div className="container1">
              <h3>Overview </h3>
              <p>monthly Earnings</p>
              <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                  top: 8,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />

                <Bar dataKey="pv" fill="#8884d8" />
              </BarChart>
            </div>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <div className="container">
              <h3>Customers </h3>
              <p>customers that buy products</p>
              <PieChart width={400} height={400}>
                <Pie
                  data={data1}
                  cx="80%"
                  cy="40%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </ResponsiveContainer>
        </div>
        <Productcell />
      </main>
    </>
  );
}

export default Home;
