import React, { useState } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";

function AdminTicketSupport() {
  const [key, setKey] = useState("tab1");

  const handleTabChange = (selectedKey) => {
    setKey(selectedKey);
  };

  return (
    <div className="main">
      <h2 className="title">Hello Pabodi !</h2>

      <Dropdown as={ButtonGroup}>
        <Button
          variant="Primery"
          style={{ backgroundColor: "#6D004F", color: "white" }}
        >
          Sort By
        </Button>

        <Dropdown.Toggle
          split
          variant="Primery"
          id="dropdown-split-basic"
          style={{ backgroundColor: "#6D004F", color: "white" }}
        />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Newest first</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Oldest first</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="userMiddle">
        <Tabs
          activeKey={key}
          onSelect={handleTabChange}
          className="justify-content-end" // Add this class for right alignment
        >
          <Tab eventKey="tab1" title="Unread">
            <table className="admin-table">
              <tr className="tableRow">
                <td className="userTableContent">
                  <GrNotification size={45} style={{ color: "#6D004F" }} />
                </td>
                <td className="userTableContent"></td>
                <td className="userTableContent">
                  need help to do the payment for adding packaged. can you send
                  me the explanation...
                </td>
                <td>
                  <Link to="/AdminSupportView">
                    <Button variant="primary" className="viewButton">
                      View
                    </Button>
                  </Link>
                </td>
              </tr>
            </table>
          </Tab>
          <Tab eventKey="tab2" title="Responded">
            <table className="admin-table">
              <tr className="tableRow">
                <td className="userTableContent">
                  <GrNotification size={45} style={{ color: "#6D004F" }} />
                </td>
                <td className="userTableContent"></td>
                <td className="userTableContent">
                  need help to do the payment for adding packaged. can you send
                  me the explanation...
                </td>
                <td>
                  <Link to="/AdminSupportView">
                    <Button
                      variant="primary"
                      className="viewButton"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      View
                    </Button>
                  </Link>
                </td>
              </tr>
            </table>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default AdminTicketSupport;
