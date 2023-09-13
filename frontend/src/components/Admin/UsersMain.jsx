import React, { useState } from "react";
import { GoPersonAdd } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import img2 from "../../assets/images/img4.jpg";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

function UsersMain() {
  const [key, setKey] = useState("tab1");
  const [data, setData] = useState([]);
  const [serviceProviders, setServiceProviders] = useState([]);
  const [customer, setCustomer] = useState([]);
  

 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCustomerData = () => {
    axios
      .get(`/api/admin/getAllCustomers`)
      .then((response) => {
        setCustomer(response.data.customers);
        
        // console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };


  const handleTabChange = (selectedKey) => {
    setKey(selectedKey);
    if (selectedKey === "tab3") {
      fetchCustomerData();
    }
  };


  return (
    <div className="mainUsers ">
      <div className="userTop">
        <div className="bottomcolom">
          <GoPersonAdd size={25} /> New Requests <br />{" "}
          <span className="bottomNumbers">03</span>
        </div>
        <div className="bottomcolom">
          <FaRegUser size={25} /> Total Users <br />{" "}
          <span className="bottomNumbers">12</span>{" "}
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

      <div className="userMiddle">
        <Tabs activeKey={key} onSelect={handleTabChange}>
          <Tab eventKey="tab1" title="New Requests">
            <div className="userRequestsBox">
              <table className="admin-table">
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={25}
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
                      Reject
                    </Button>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={25}
                      style={{ backgroundColor: "F4F1EF", color: "#6D004F" }}
                    />
                  </td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    MR. Avishka Induwara , Pilaozz has requested for
                    registration
                  </td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary" className="viewButton">
                        View
                      </Button>
                    </Link>
                    <Button variant="primary" className="viewButton">
                      Reject
                    </Button>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="userTableContent">
                    <GoPersonAdd
                      size={25}
                      style={{ backgroundColor: "F4F1EF", color: "#6D004F" }}
                    />
                  </td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    MRs. Kaveesha Jayawickrama , Kavi DJ has requested for
                    registration
                  </td>
                  <td>
                    <Link to="/UsersDetails">
                      <Button variant="primary" className="viewButton">
                        View
                      </Button>
                    </Link>
                    <Button variant="primary" className="viewButton">
                      Reject
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
                  <td className="userTableContent">
                    Sandun Jayawikrama
                    <br />
                    <span style={{ fontSize: "8px" }}>Photographer</span>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      className="viewButton"
                      style={{ width: "100px" }}
                    >
                      View Profile
                    </Button>
                  </td>
                </tr>

                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    Kasun Weerasinghe
                    <br />
                    <span style={{ fontSize: "8px" }}>Photographer</span>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      className="viewButton"
                      style={{ width: "100px" }}
                    >
                      View Profile
                    </Button>
                  </td>
                </tr>

                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    Sandaru Jayasooriya
                    <br />
                    <span style={{ fontSize: "8px" }}>Photographer</span>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      className="viewButton"
                      style={{ width: "100px" }}
                    >
                      View Profile
                    </Button>
                  </td>
                </tr>

                <tr className="tableRow">
                  <td className="userTableContent"></td>
                  <td className="userTableContent"></td>
                  <td className="userTableContent">
                    Achini Perera
                    <br />
                    <span style={{ fontSize: "8px" }}>Photographer</span>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      className="viewButton"
                      style={{ width: "100px" }}
                    >
                      View Profile
                    </Button>
                  </td>
                </tr>
              </table>
            </div>
          </Tab>

          {/* Customers satrts */}
          <Tab eventKey="tab3"  title="Customers">
            <div className="userRequestsBox">
              {customer.length === 0 ? (
                <p>Loading...</p>
              ) : (
                
                <table className="admin-table">
                  {customer.map((customer) => (
                  <tr className="tableRow">
                    <td className="userTableContent"></td>
                    <td className="userTableContent"></td>
                    <td className="userTableContent">{customer.name}</td>
                    <td>
                      <Button
                        variant="primary"
                        className="viewButton"
                        style={{ width: "80px", fontSize: "10px" }}
                      >
                        View Profile
                      </Button>{" "}
                    </td>
                  </tr>
                  ))}
                </table>
              )}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default UsersMain;
