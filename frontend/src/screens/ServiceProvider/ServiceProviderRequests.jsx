import SPSidebar from "../../components/ServiceProvider/SPSidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ServiceProviderRequests = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("/api/serviceProvider/getAllNotifications")
      .then((response) => {
        setNotifications(response.data.getNotifications);
        console.log("Hi", response.data.getNotifications);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  const handleAccept = (notify_id) => {
    axios
    .put(`/api/serviceProvider/updateNotificationStatus/accept/${notify_id}`, {
      status: 'accept',
    })
    .then((response) => {
      console.log(`Notification ${notify_id} has been accepted.`);
      // After accepting, fetch the updated notifications
      axios
        .get("/api/serviceProvider/getAllNotifications")
        .then((response) => {
          setNotifications(response.data.getNotifications);
          console.log("Notifications updated:", response.data.getNotifications);
        })
        .catch((error) => {
          console.error("Error fetching updated notifications:", error);
        });
    })
    .catch((error) => {
      // Handle the error, if any
      console.error(`Error accepting notification ${notify_id}:`, error);
    });
  };

  const handleDecline = (notify_id) => {
    axios
      .put(`/api/serviceProvider/updateNotificationStatus/decline/${notify_id}`, {
        status: 'decline',
      })
      .then((response) => {
        console.log(`Notification ${notify_id} has been declined.`);
        // After declining, fetch the updated notifications
        axios
          .get("/api/serviceProvider/getAllNotifications")
          .then((response) => {
            setNotifications(response.data.getNotifications);
            console.log("Notifications updated:", response.data.getNotifications);
          })
          .catch((error) => {
            console.error("Error fetching updated notifications:", error);
          });
      })
      .catch((error) => {
        // Handle the error, if any
        console.error(`Error declining notification ${notify_id}:`, error);
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <SPSidebar />
      </div>
      <div style={{ flex: 3, padding: "20px"}}>
        <h1>Service Provider Requests</h1>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ddd",
          }}
        >
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Notify ID</th>
              <th style={tableHeaderStyle}>Event ID</th>
              <th style={tableHeaderStyle}>User ID</th>
              <th style={tableHeaderStyle}>Package ID</th>
              <th style={tableHeaderStyle}>Send User ID</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Service</th>
              <th style={tableHeaderStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.notify_id}>
                <td style={tableCellStyle}>{notification.notify_id}</td>
                <td style={tableCellStyle}>{notification.event_id}</td>
                <td style={tableCellStyle}>{notification.user_id}</td>
                <td style={tableCellStyle}>{notification.package_id}</td>
                <td style={tableCellStyle}>{notification.send_user_id}</td>
                <td style={tableCellStyle}>{notification.status}</td>
                <td style={tableCellStyle}>{notification.service}</td>
                <td style={tableCellStyle}>
                  <div>
                    <button
                      style={acceptButtonStyle}
                      onClick={() => handleAccept(notification.notify_id)}
                    >
                      Accept
                    </button>
                    <button
                      style={declineButtonStyle}
                      onClick={() => handleDecline(notification.notify_id)}
                    >
                      Decline
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  background: "#f2f2f2",
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const acceptButtonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "5px 10px",
  border: "none",
  cursor: "pointer",
  marginRight: "5px",
};

const declineButtonStyle = {
  backgroundColor: "#f44336",
  color: "white",
  padding: "5px 10px",
  border: "none",
  cursor: "pointer",
};

export default ServiceProviderRequests;
