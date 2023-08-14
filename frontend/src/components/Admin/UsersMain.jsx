import React, { useState } from "react";
import { GoPersonAdd } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import img2 from "../../assets/images/img4.jpg";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { useEffect } from 'react';
import axios from 'axios';


function UsersMain() {
  const [key, setKey] = useState("tab1");

  const handleTabChange = (selectedKey) => {
    setKey(selectedKey);
  };

  return (
    <div className="mainUsers ">
      <div className="userTop">
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

      <div className="userMiddle">
        <Tabs activeKey={key} onSelect={handleTabChange}>
          <Tab eventKey="tab1" title="New Requests">
            <div className="userRequestsBox">
              <table className="admin-table">
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={45}
                      style={{ backgroundColor: "F4F1EF", color: "#6D004F" }}
                    />
                  </td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    MR. Naveen Rajan , Hotel De Plaza has requested for
                    registration
                  </td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary" className="viewButton">
                        View
                      </Button>
                    </Link>
                    <Button variant="primary" className="viewButton">
                      Cancel
                    </Button>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={45}
                      style={{ backgroundColor: "F4F1EF", color: "#6D004F" }}
                    />
                  </td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    MR. Naveen Rajan , Hotel De Plaza has requested for
                    registration
                  </td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary" className="viewButton">
                        View
                      </Button>
                    </Link>
                    <Button variant="primary" className="viewButton">
                      Cancel
                    </Button>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={45}
                      style={{ backgroundColor: "F4F1EF", color: "#6D004F" }}
                    />
                  </td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    MR. Naveen Rajan , Hotel De Plaza has requested for
                    registration
                  </td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary" className="viewButton">
                        View
                      </Button>
                    </Link>
                    <Button variant="primary" className="viewButton">
                      Cancel
                    </Button>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={45}
                      style={{ backgroundColor: "F4F1EF", color: "#6D004F" }}
                    />
                  </td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    MR. Naveen Rajan , Hotel De Plaza has requested for
                    registration
                  </td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary" className="viewButton">
                        View
                      </Button>
                    </Link>
                    <Button variant="primary" className="viewButton">
                      Cancel
                    </Button>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={45}
                      style={{ backgroundColor: "F4F1EF", color: "#6D004F" }}
                    />
                  </td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    MR. Naveen Rajan , Hotel De Plaza has requested for
                    registration
                  </td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary" className="viewButton">
                        View
                      </Button>
                    </Link>
                    <Button variant="primary" className="viewButton">
                      Cancel
                    </Button>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={45}
                      style={{ backgroundColor: "F4F1EF", color: "#6D004F" }}
                    />
                  </td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    MR. Naveen Rajan , Hotel De Plaza has requested for
                    registration
                  </td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary" className="viewButton">
                        View
                      </Button>
                    </Link>
                    <Button variant="primary" className="viewButton">
                      Cancel
                    </Button>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={45}
                      style={{ backgroundColor: "F4F1EF", color: "#6D004F" }}
                    />
                  </td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    MR. Naveen Rajan , Hotel De Plaza has requested for
                    registration
                  </td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary" className="viewButton">
                        View
                      </Button>
                    </Link>
                    <Button variant="primary" className="viewButton">
                      Cancel
                    </Button>
                  </td>
                </tr>
              </table>
            </div>
          </Tab>
          <Tab eventKey="tab2" title="Service Providers">
            <div className="userRequestsBox">
              <table className="admin-table">
                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">Sandun Jayawikrama</td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary">View Profile</Button>
                    </Link>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">Sandun Jayawikrama</td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary">View Profile</Button>
                    </Link>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">Sandun Jayawikrama</td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary">View Profile</Button>
                    </Link>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">Sandun Jayawikrama</td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary">View Profile</Button>
                    </Link>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">Sandun Jayawikrama</td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary">View Profile</Button>
                    </Link>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">Sandun Jayawikrama</td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary">View Profile</Button>
                    </Link>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">Sandun Jayawikrama</td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary">View Profile</Button>
                    </Link>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">Sandun Jayawikrama</td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary">View Profile</Button>
                    </Link>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">Sandun Jayawikrama</td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary">View Profile</Button>
                    </Link>
                  </td>
                </tr>
              </table>
            </div>
          </Tab>
          <Tab eventKey="tab3" title="Customers">
          <div className="userRequestsBox">
            <table className="admin-table">
              <tr className="tableRow">
                <td className="userTableContent"></td>
                <td className="userTableContent"></td>
                <td className="userTableContent">Nalaka Perera</td>
                <td>
                  <Link to="/UsersDetails">
                    <Button variant="primary">View Profile</Button>
                  </Link>
                </td>
              </tr>
              <tr className="tableRow">
                <td className="userTableContent"></td>
                <td className="userTableContent"></td>
                <td className="userTableContent">Nalaka Perera</td>
                <td>
                  <Link to="/UsersDetails">
                    <Button variant="primary">View Profile</Button>
                  </Link>
                </td>
              </tr>
              <tr className="tableRow">
                <td className="userTableContent"></td>
                <td className="userTableContent"></td>
                <td className="userTableContent">Nalaka Perera</td>
                <td>
                  <Link to="/UsersDetails">
                    <Button variant="primary">View Profile</Button>
                  </Link>
                </td>
              </tr>
              <tr className="tableRow">
                <td className="userTableContent"></td>
                <td className="userTableContent"></td>
                <td className="userTableContent">Nalaka Perera</td>
                <td>
                  <Link to="/UsersDetails">
                    <Button variant="primary">View Profile</Button>
                  </Link>
                </td>
              </tr>
              <tr className="tableRow">
                <td className="userTableContent"></td>
                <td className="userTableContent"></td>
                <td className="userTableContent">Nalaka Perera</td>
                <td>
                  <Link to="/UsersDetails">
                    <Button variant="primary">View Profile</Button>
                  </Link>
                </td>
              </tr>
              <tr className="tableRow">
                <td className="userTableContent"></td>
                <td className="userTableContent"></td>
                <td className="userTableContent">Nalaka Perera</td>
                <td>
                  <Link to="/UsersDetails">
                    <Button variant="primary">View Profile</Button>
                  </Link>
                </td>
              </tr>
              <tr className="tableRow">
                <td className="userTableContent"></td>
                <td className="userTableContent"></td>
                <td className="userTableContent">Nalaka Perera</td>
                <td>
                  <Link to="/UsersDetails">
                    <Button variant="primary">View Profile</Button>
                  </Link>
                </td>
              </tr>
              <tr className="tableRow">
                <td className="userTableContent"></td>
                <td className="userTableContent"></td>
                <td className="userTableContent">Nalaka Perera</td>
                <td>
                  <Link to="/UsersDetails">
                    <Button variant="primary">View Profile</Button>
                  </Link>
                </td>
              </tr>
              <tr className="tableRow">
                <td className="userTableContent"></td>
                <td className="userTableContent"></td>
                <td className="userTableContent">Nalaka Perera</td>
                <td>
                  <Link to="/UsersDetails">
                    <Button variant="primary">View Profile</Button>
                  </Link>
                </td>
              </tr>
            </table>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default UsersMain;
