import React from "react";
import dp from "../../assets/images/Dp.jpeg";
import chart from "../../assets/images/chart.png";
import { GoPersonAdd } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Button from 'react-bootstrap/Button';

const MainDashboard = () => {
  return (
    <div className="main">
      <h1 className="title">Hello Pabodi !</h1>
      <div className="top">
        <div className="topRightChart">
        <img  src={chart}  />
        </div>
        <div className="topLeftTickets">
          <div className="ticketsTopic">
            <h3 style={{ fontWeight: "bold" }}>Support Tickets</h3>
          </div>
          <div className="ticketChat">
            <img className="dp" src={dp} />
            <div className="message">
              {" "}
              need help to do the payment for adding packaged. can you...
            </div>
          </div>
          <div className="ticketChat">
            <img className="dp" src={dp} />
            <div className="message">
              {" "}
              need help to do the payment for adding packaged. can you...
            </div>
          </div>
          <div className="ticketChat">
            <img className="dp" src={dp} />
            <div className="message">
              {" "}
              need help to do the payment for adding packaged. can you...
            </div>
          </div>
          <div className="ticketChat">
            <img className="dp" src={dp} />
            <div className="message">
              {" "}
              need help to do the payment for adding packaged. can you...
            </div>
          </div>

          <Button varient='primary' className="ticketButton" >View More</Button>
        </div>
      </div>

      <div className="middle">
        <table className="table">
          <tr>
            <th className="tableTopic">Event Name</th>
            <th className="tableTopic">No. Of Tickets(sold)</th>
            <th className="tableTopic">Income</th>
          </tr>
          <tr className="tableRow">
            <td className="tableContent">Bron to shine</td>
            <td className="tableContent">501</td>
            <td className="tableContent">18,890,200</td>
          </tr>
          <tr className="tableRow">
            <td className="tableContent">Bawaal</td>
            <td className="tableContent">222</td>
            <td className="tableContent">2,345,190</td>
          </tr>
          <tr className="tableRow">
            <td className="tableContent">Black Pink</td>
            <td className="tableContent">450</td>
            <td className="tableContent">10,445,521</td>
          </tr>
        </table>
      </div>
      <div className="bottom">
        <div className="bottomcolom">
          <GoPersonAdd size={45} /> New Requests <br />{" "}
          <span className="bottomNumbers">010</span>
        </div>
        <div className="bottomcolom">
          <FaRegUser size={45} /> Total Users <br />{" "}
          <span className="bottomNumbers">1782</span>{" "}
        </div>
        <div className="bottomcolom">
          <FaRegUser size={45} /> Service Providers <br />{" "}
          <span className="bottomNumbers">534</span>{" "}
        </div>
        <div className="bottomcolom">
          <HiOutlineUserGroup size={45} /> Customers <br />{" "}
          <span className="bottomNumbers">764</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
