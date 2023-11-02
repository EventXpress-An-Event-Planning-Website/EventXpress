import React from "react";
import dp1 from "../../assets/images/adp1.jpg";
import dp2 from "../../assets/images/adp2.jpeg";
import dp from "../../assets/images/adp3.jpg";
// import chart from "../../assets/images/chart.png";
import { GoPersonAdd } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { PureComponent } from "react";
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
import card from "@material-tailwind/react/theme/components/card";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const MainDashboard = () => {
  const [serviceProviderscount, setServiceProviderscount] = useState([]);
  const [customerCount, setCustomerCount] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [newRequests, setNewRequests] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [complains, setComplains] = useState([]);
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/admin/getAllServiceProvidersCount`)
      .then((response) => {
        setServiceProviderscount(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

  useEffect(() => {
    axios
      .get(`/api/admin/getEventData`)
      .then((response) => {
        setEventData(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

  const firstThreeEvents = eventData.slice(0, 3);

  useEffect(() => {
    axios
      .get(`/api/admin/getAllCustomerCount`)
      .then((response) => {
        setCustomerCount(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

  useEffect(() => {
    axios
      .get(`/api/admin/getAllUserCount`)
      .then((response) => {
        setTotalCount(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

  useEffect(() => {
    axios
      .get(`/api/admin/getAllNewRequestCount`)
      .then((response) => {
        setNewRequests(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

  useEffect(() => {
    axios
      .get(`/api/admin/getAllComplain`)
      .then((response) => {
        setComplains(response.data.combinedComplainDidntHandleDetails);
        // console.log(complains);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

  const getCustomer = async (id) => {
    try {
      axios
      .get(`/api/admin/getCustomer?customerId=${id}`)
      .then((response) => {
        setCustomer(response.data);
        // console.log(complains);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  const firstThreeComplain = complains.slice(0, 3);

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

  //  ////////////////////////////////////////////////////////////////////////

  // data for charts
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

  return (
    <div className="main">
      <h2 className="title">Hello Pabodi !</h2>
      <div className="top">
        {/* Revenue chart start here */}
        <div className="topRightChart">
          <Card>
            <Card.Header
              as="h5"
              style={{ fontWeight: "bold", color: "#6D004F" }}
            >
              Revenue
            </Card.Header>
            <Card.Body>
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
                <XAxis dataKey="eventtitle" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#6D004F" />
              </BarChart>
            </ResponsiveContainer>

              <Link to="/Revenue">
                <Button variant="primary">Revenue</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        {/* Revenue chart end here */}

        {/* complains and support tab start here */}
        <div className="topLeftTickets">
          <div className="ticketsTopic">
            <h3 style={{ fontWeight: "bold" }}>Complains & Support</h3>
          </div>

          {firstThreeComplain.map((complain) => (
                <Link to={`/AdminSupportView?complainId=${complain.complainId}&complain=${complain.complain}&customerId=${complain.customerId}&cusName=${complain.customerName}&handled=${complain.handled}`}>
                  <div className="ticketChat">
                    <img className="dp" src={dp} />
                    <div className="message">
                      {" "}
                     {complain.complain}
                    </div>
                  </div>
                </Link>
             ))}
          <Link to="/TicketSupports">
            <Button varient="primary" className="ticketButton">
              View More
            </Button>
          </Link>
        </div>
      </div>

      <Link to="/AdminEvents">
        <div className="middle">
          <table className="admin-table">
            <tr>
              <th className="tableTopic">Event Name</th>
              <th className="tableTopic">No. Of Tickets(sold)</th>
              <th className="tableTopic">Income</th>
            </tr>
            {firstThreeEvents.map((event) => (
              <tr className="tableRow">
                <td className="tableContent">{event.eventtitle}</td>
                <td className="tableContent">{event.soldtickets}</td>
                <td className="tableContent">{event.revenue}</td>
              </tr>
            ))}
          </table>
        </div>
      </Link>
      <div className="bottom">
        <div className="bottomcolom">
          <GoPersonAdd size={25} /> New Requests <br />{" "}
          <span className="bottomNumbers">{newRequests}</span>
        </div>
        <div className="bottomcolom">
          <FaRegUser size={25} /> Total Users <br />{" "}
          <span className="bottomNumbers">{totalCount}</span>{" "}
        </div>
        <div className="bottomcolom">
          <FaRegUser size={25} /> Service Providers <br />{" "}
          <span className="bottomNumbers"> {serviceProviderscount} </span>
        </div>
        <div className="bottomcolom">
          <HiOutlineUserGroup size={25} /> Customers <br />{" "}
          <span className="bottomNumbers">{customerCount}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
