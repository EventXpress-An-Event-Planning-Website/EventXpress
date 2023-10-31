import React from "react";
import { GoPersonAdd } from "react-icons/go";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import moment from 'moment';

function AdminEventsMain() {
  const [eventDetails, setEventDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`/api/admin/getEventDataForEventsPage`)
      .then((response) => {
        console.log(response.data);
        setEventDetails(response.data);  
        setLoading(false)
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

  
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

{eventDetails.length > 0 ? eventDetails.map ((event) => (
          
          <tr className="tableRow">
            <td className="userTableContent">{event.eventtitle}</td>
            <td className="userTableContent"> {moment(event.eventdate).format('YYYY-MM-DD')} </td>
            <td className="userTableContent">{event.totaltickets}</td>
            <td className="userTableContent">{event.soldtickets}</td>
            <td className="userTableContent">{event.revenue}</td>
            <td>
            <Link to={`/AdminEventDetails?ticketId=${event.ticketid}`}>
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
            
            )) : <tr><td>No Data</td></tr>}
        </table>
      </div>
    </div>
  );
}

export default AdminEventsMain;
