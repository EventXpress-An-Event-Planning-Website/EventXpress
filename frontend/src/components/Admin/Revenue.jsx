import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import dp from "../../assets/images/Dp.jpeg";
// import chart from "../../assets/images/chart.png";
import { GoPersonAdd } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { PureComponent } from "react";
import Modal from 'react-bootstrap/Modal';
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
} from "recharts";

const data = [
  {
    name: "January",
    Income: 3500,

    amt: 2400,
  },
  {
    name: "Febraury",
    Income: 3000,

    amt: 2210,
  },
  {
    name: "March",
    Income: 2000,

    amt: 2290,
  },
  {
    name: "April",
    Income: 2780,

    amt: 2000,
  },
  {
    name: "May",
    Income: 1890,
    amt: 2181,
  },
  {
    name: "June",
    Income: 2390,

    amt: 2500,
  },
  {
    name: "July",
    Income: 3490,

    amt: 2100,
  },
];

function Revenue() {
  const items = [
    ["January", "1200000", "400000", "150000", "10000"],
    ["February", "1400000", "500000", "20000", "10500"],
    ["March", "1500000", "200000", "30000", "10000"],
    ["April", "1500000", "300000", "40000", "15000"],
    ["May", "1400000", "500000", "20000", "20000"],
    ["June", "1450000", "550000", "20000", "25000"],
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const navigateRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      navigateLeft();
    } else if (event.key === "ArrowRight") {
      navigateRight();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <SideBar value='5'/>
      <div className="main">
        <div className="top">
          <div className="topRightChart">
            <div className="chartTopic">
              <h3 style={{ fontWeight: "bold", color: "#6D004F" }}>Revenue</h3>
            </div>
            <ResponsiveContainer width="80%" height="80%">
              <BarChart
                width={400}
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
                <Bar dataKey="Income" fill="#6D004F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="topLeftTickets">
            <div style={{width:'90%',height:'90%',outline: '1px solid black',marginLeft:'25px', marginTop:'25px'} } >
            <div
              className="ticketsTopic"
             
            >
              <div className="content">
                <Button variant="info"
                  className="arrow-button"
                  onClick={navigateLeft}
                  disabled={currentIndex === 0}

                >
                  &lt; &lt;
                </Button>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  <span style={{ margin: "25px" }}>
                    {items[currentIndex][0]}
                  </span>
                </span>
                <Button variant="info"
                  className="arrow-button"
                  onClick={navigateRight}we3drf
                  disabled={currentIndex === items.length - 1}
                >
                  &gt; &gt;
                </Button>
                <br />
                <br />
                <br />
                <h3 style={{ fontWeight: "bold", padding: "5px" }}>
                  Total revenue of the month
                </h3>
                <p style={{fontWeight:'bold', marginLeft:'225px'}}>LKR. {items[currentIndex][1]}.00</p>
                <h3 style={{ fontWeight: "bold", padding: "5px" }}>
                  Income from ticket comission
                </h3>
                <p style={{fontWeight:'bold', marginLeft:'225px'}}>LKR. {items[currentIndex][2]}.00</p>
                <h3 style={{ fontWeight: "bold", padding: "5px" }}>
                  Income from subscription fee
                </h3>
                <p style={{fontWeight:'bold', marginLeft:'225px'}}>LKR. {items[currentIndex][3]}.00</p>
                <h3 style={{ fontWeight: "bold", padding: "5px" }}>
                  Maintenance cost{" "}
                </h3>
                <p style={{fontWeight:'bold', marginLeft:'225px'}}>LKR. {items[currentIndex][4]}.00</p>
                <p style={{fontWeight:'bold', marginLeft:'150px',color:'green'}}>Profite: LKR. {items[currentIndex][1]}.00</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
