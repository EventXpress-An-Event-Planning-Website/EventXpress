import React from "react";
import dp from "../../assets/images/Dp.jpeg";
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

const MainDashboard = () => {
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
          <Link to="/AdminSupportView">
            <div className="ticketChat">
              <img className="dp" src={dp} />
              <div className="message">
                {" "}
                need help to do the payment for adding packaged. can you...
              </div>
            </div>
          </Link>
          <Link to="/AdminSupportView">
            <div className="ticketChat">
              <img className="dp" src={dp} />
              <div className="message">
                {" "}
                need help to do the payment for adding packaged. can you...
              </div>
            </div>
          </Link>
          <Link to="/AdminSupportView">
            <div className="ticketChat">
              <img className="dp" src={dp} />
              <div className="message">
                {" "}
                need help to do the payment for adding packaged. can you...
              </div>
            </div>
          </Link>

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
            <tr className="tableRow">
              <td className="tableContent">Bron to shine</td>
              <td className="tableContent">501</td>
              <td className="tableContent">8,890,200</td>
            </tr>
            <tr className="tableRow">
              <td className="tableContent">Bawaal</td>
              <td className="tableContent">222</td>
              <td className="tableContent">345,190</td>
            </tr>
            <tr className="tableRow">
              <td className="tableContent">Black Pink</td>
              <td className="tableContent">450</td>
              <td className="tableContent">445,521</td>
            </tr>
          </table>
        </div>
      </Link>
      <div className="bottom">
        <div className="bottomcolom">
          <GoPersonAdd size={25} /> New Requests <br />{" "}
          <span className="bottomNumbers">04</span>
        </div>
        <div className="bottomcolom">
          <FaRegUser size={25} /> Total Users <br />{" "}
          <span className="bottomNumbers">013</span>{" "}
        </div>
        <div className="bottomcolom">
          <FaRegUser size={25} /> Service Providers <br />{" "}
          <span className="bottomNumbers">06</span>{" "}
        </div>
        <div className="bottomcolom">
          <HiOutlineUserGroup size={25} /> Customers <br />{" "}
          <span className="bottomNumbers">07</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
