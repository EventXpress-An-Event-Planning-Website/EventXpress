import React, { useEffect, useState } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminTicketSupport() {
  const [complains, setComplains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState("tab1");

  const handleTabChange = (selectedKey) => {
    setKey(selectedKey);
  };

  useEffect(() => {
    axios
      .get(`/api/admin/getAllComplain`)
      .then((response) => {
        setComplains(response.data);
        console.log(complains);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

 
  return (
    <div className="main">
      <h2 className="title">Hello Admin !</h2>

      <div className="userMiddle">
        <Tabs
          activeKey={key}
          onSelect={handleTabChange}
          className="justify-content-end" // Add this class for right alignment
        >
          <Tab eventKey="tab1" title="Unread">
            <table className="admin-table">
              {complains.combinedComplainDidntHandleDetails
                ? complains.combinedComplainDidntHandleDetails.map(
                    (complain) => (
                      <tr className="tableRow">
                        <td className="userTableContent">
                          <GrNotification
                            size={25}
                            style={{ color: "#6D004F" }}
                          />
                        </td>
                        <td className="userTableContent"></td>
                        <td className="userTableContent">
                         {complain.customerName}
                        </td>
                        <td>
                        <Link to={`/AdminSupportView?complainId=${complain.complainId}&complain=${complain.complain}&customerId=${complain.customerId}&cusName=${complain.customerName}&handled=${complain.handled}`}>
                            <Button variant="primary" className="viewButton">
                              View
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    )
                  )
                : null}
            </table>
          </Tab>
          <Tab eventKey="tab2" title="Responded">
            <table className="admin-table">
              {complains.combinedComplainHandleDetails
                ? complains.combinedComplainHandleDetails.map((complain) => (
                    <tr className="tableRow">
                      <td className="userTableContent">
                        <GrNotification
                          size={25}
                          style={{ color: "#6D004F" }}
                        />
                      </td>
                      <td className="userTableContent"></td>
                      <td className="userTableContent">{complain.customerName}</td>
                      <td>
                      <Link to={`/AdminSupportView?complainId=${complain.complainId}&complain=${complain.complain}&customerId=${complain.customerId}&cusName=${complain.customerName}&handled=${complain.handled}`}>
                            <Button variant="primary" className="viewButton">
                              View
                            </Button>
                          </Link>
                      </td>
                    </tr>
                  ))
                : null}{" "}
            </table>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default AdminTicketSupport;
