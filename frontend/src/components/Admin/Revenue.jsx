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
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

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
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     name: "January",
//     Income: 3500,
//   },
//   {
//     name: "Febraury",
//     Income: 3000,
//   },
//   {
//     name: "March",
//     Income: 2000,
//   },
//   {
//     name: "April",
//     Income: 2780,
//   },
//   {
//     name: "May",
//     Income: 1890,
//   },
//   {
//     name: "June",
//     Income: 2390,
//   },
//   {
//     name: "July",
//     Income: 3490,
//   },
// ];

function Revenue() {
  

  const [dataa, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/admin/getAllRevenueData`)
      .then((response) => {
        // console.log(response.data[0]);
        setData(response.data[0]);
      })
      .catch((error) => {
        // console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);


  const [revData, setRevData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/admin/getRevenueData`)
      .then((response) => {
        
        setRevData(response.data);
      })
      .catch((error) => {
        // console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <SideBar value="5" />
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
                data={revData}
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
            <Card>
              <Card.Header
                as="h5"
                style={{ fontWeight: "bold", color: "#6D004F" }}
              >
                Total Revenue
              </Card.Header>
              <Card.Body>
                <h4 style={{ fontWeight: "bold", padding: "0%" }}>
                  Total revenue    </h4>
                <p style={{ fontWeight: "bold", marginLeft: "60%" }}>
                  LKR. {dataa.totrev}.00
                </p>
                <h4 style={{ fontWeight: "bold", padding: "0%" }}>
                  Income from ticket comission
                </h4>
                <p style={{ fontWeight: "bold", marginLeft: "60%" }}>
                  LKR. {dataa.totCommision}
                </p>
              </Card.Body>
            </Card>
{console.log(revData)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
