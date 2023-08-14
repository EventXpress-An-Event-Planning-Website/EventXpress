import React from "react";
import { GoPersonAdd } from "react-icons/go";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AdminEventsMain() {
  return (
    <div className="main">
      <h2 className="title">Ticket Selling Events</h2>

      <div>
        <table className="admin-table" style={{ width: "95%", marginLeft: "10px" }}>
          <tr>
            <th className="eventTableTh">Event Name</th>
            <th className="eventTableTh">Event Date</th>
            <th className="eventTableTh">No. Of Tickets(Total)</th>
            <th className="eventTableTh">No. Of Tickets(Sold)</th>
            <th className="eventTableTh">Income(lkr)</th>
            <th></th>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">A Night at the Opera Tour</td>
            <td className="userTableContent"> 09.12.2023 </td>
            <td className="userTableContent">400</td>
            <td className="userTableContent">750</td>
            <td className="userTableContent">650000</td>
            <td>
              <Link to='/AdminEventDetails'>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#6D004F",
                  marginLeft: "10px",
                  color: "white",
                }}
              >
                View
              </Button>
              </Link>
            </td>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">A Night at the Opera Tour</td>
            <td className="userTableContent"> 09.12.2023 </td>
            <td className="userTableContent">400</td>
            <td className="userTableContent">750</td>
            <td className="userTableContent">650000</td>
            <td>
            <Link to='/AdminEventDetails'>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#6D004F",
                  marginLeft: "10px",
                  color: "white",
                }}
              >
                View
              </Button>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AdminEventsMain;
