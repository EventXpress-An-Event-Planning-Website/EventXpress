import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaWhatsapp } from "react-icons/fa";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import StarRating from "./Ratings";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

import venue5 from "../../../assets/images/venue5.jpg";
import venue6 from "../../../assets/images/venue6.jpg";
import venue7 from "../../../assets/images/venue7.jpg";
import venue8 from "../../../assets/images/venue8.jpg";
import deco10 from "../../../assets/images/deco10.jpg";
import deco11 from "../../../assets/images/deco11.jpg";
import deco12 from "../../../assets/images/deco12.jpg";
import deco13 from "../../../assets/images/deco13.jpg";
import deco3 from "../../../assets/images/deco3.jpg";

const DecorationDes = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const packageCount = queryParams.get("packageCount");
  const event_id = queryParams.get("event_id");
  const column_id = Number(queryParams.get("column"));
  const package_id = queryParams.get("pac");
  const [dropDown, setdropDown] = useState("Dropdown Button");
  const [decorationPackage, setDecorationPackage] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [resultArray, setResultArray] = useState([]);
  const [comparePackages, setcomparePackages] = useState(packageCount);
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`/api/customer/viewDecorationPackageDetails?pac=${package_id}`)
      .then((response) => {
        setDecorationPackage(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (decorationPackage[0] !== undefined) {
      const splitArray = decorationPackage[0].package_description.split(".");
      setResultArray(splitArray);
    }
  }, [decorationPackage[0]]);
  console.log(decorationPackage);
  const HandleAddToEvent=()=>{
    const eventData = {
      event_id: event_id,
      package_id: decorationPackage[0].package_id,
      service:'Decoration' // Modify this to match your data structure
      // ... Add other necessary data for your POST request
    };

    axios.post(`/api/customer/addDecotoEvent?pack_id=${package_id}&event_id=${event_id}`)
    .then((response)=>{
        const result= response.data
        if (result===true) {
            toast.success("Package Added Successfully")
        }else{
            toast.error('Please Add Package again')
        }
        navigate(`/customer/eventdetails?id=${event_id}`)
    })
    .catch((error)=>{

    })
  }
  const HandleAddCompare = () => {
    let pack = Number(comparePackages);
    console.log(pack);
   
    if (column_id !== 0) {
        
        const eventData = {
            event_id: event_id,
            package_id: decorationPackage[0].package_id, // Modify this to match your data structure
            column_id:column_id
            // ... Add other necessary data for your POST request
        };
        axios
          .post("/api/customer/addDecoPackToCompareTable", eventData)
          .then((response) => {
            const packCount = response.data;
            console.log(packCount);
            // Perform navigation after successful POST
            navigate(`/customer/event/DecoCompare?event_id=${event_id}`);
          })
          .catch((error) => {
            console.error("Error adding event:", error);
            // Handle error if needed
          });

    } else {
      if (pack > 1) {
      } else {
        setcomparePackages(pack + 1);
         // Use the selected hall/package
        const eventData = {
          event_id: event_id,
          package_id: decorationPackage[0].package_id, // Modify this to match your data structure
          // ... Add other necessary data for your POST request
        };
        axios
          .post("/api/customer/addDecoPackToCompare", eventData)
          .then((response) => {
            const packCount = response.data;
            console.log(packCount);
            // Perform navigation after successful POST
            navigate(`/customer/event/Decoration?event_id=${event_id}&packageCount=${packCount}`);
          })
          .catch((error) => {
            console.error("Error adding event:", error);
            // Handle error if needed
          });
        // navigate(`/Venue?event_id=${event_id}&packageCount=${pack + 1}`)
      }
    }
  };

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const openModal = () => {
    console.log(showModal);
    setShowModal(true);
    console.log(showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  if (decorationPackage.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {event_id === null ? (
          <div style={{ display: "flex" }}>
            <Sidebar />
            <Container>
              <Row>
                <Col>
                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${decorationPackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>

                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${decorationPackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>
                  <br />
                  
                    <Button
                      className="addToEvent-btn"
                      variant="primary"
                      size="lg"
                      onClick={openModal}
                    >
                      Add to Compare
                    </Button>{" "}
                  

                  <Link to={`/ChatDes`}>
                    <Button variant="success" className="chat-btn" size="lg">
                      <FaWhatsapp />
                    </Button>{" "}
                  </Link>
                </Col>

                <Col>
                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${decorationPackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>

                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${decorationPackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>
                </Col>

                <Col>
                  <h2>{decorationPackage[0].package_title}</h2>
                  <p>by {decorationPackage[0].package_busname}</p>
                  <StarRating initialRating={3} />

                  {/* <Image src={venue6} thumbnail /> */}

                  {/* <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {dropDown}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setHallName("Hall Phoenix")}>Hall Phoenix</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setHallName("Rose Veranda")} >Rose Veranda</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setHallName("Hall Draffodils")}>Hall Draffodils</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                  <br />
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>
                          Package price - LKR{" "}
                          {decorationPackage[0].package_price}
                        </td>
                      </tr>
                      {/* <tr>
                                        <td>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</td>
                                    </tr> */}
                    </tbody>
                  </Table>
                  <ul className="bullet-list">
                    {/* <li>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</li>
                                <li>Package price(for one person) - LKR 6660</li> */}
                    <br />
                    <h3>Package included with, </h3>
                    {/* <li>Bride to Be Sash with Gold letters</li>
                                <li>“Bride to be” Script Letter Foil Balloon Banner</li>
                                <li>Diamond Ring Foil Balloon</li>
                                <li>10Pcs Chrome Metallic Latex Balloons</li>
                                <li>Champagne Bottle / Wine Bottle Foil 10 Balloons</li>
                                <li>“Bride” Tiara Headband</li>
                                <li>10Pcs Chrome Metallic Heart Latex Balloons</li>
                                <li>Our team will arrange all the decorations at your place. A transport fee will be charged beyond suburbs of Colombo.</li>
                                <li>Our office is open on weekdays from 8.00 a.m. to 5.00p.m. & on Saturdays 8.00a.m to 1.00 p.m. except on Sundays and Mercantile Holidays.</li> */}
                    {resultArray.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <Container>
              <Row>
                <Col>
                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${decorationPackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>

                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${decorationPackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>
                  <br />
                 
                    <Button
                      className="addToEvent-btn"
                      variant="primary"
                      size="lg"
                      onClick={toggleForm}
                    >
                      Add to Compare
                    </Button>{" "}
                

                  {showForm && (
                    <div className="popup-overlay">
                      <div className="popup-content">
                        {Number(packageCount) < 1 ? (
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Text>
                                Do you want to add this selected packages to be
                                added to the event or do you want to compare
                                this package with another package?
                              </Form.Text>
                            </Form.Group>

                            <Button 
                              variant="primary"
                              onClick={HandleAddToEvent}
                            >Add to Event</Button>

                            {/* <Link to={`/Venue?packageCount=2`}> */}
                            <Button
                              onClick={HandleAddCompare}
                              className="compare-btns-2"
                            >
                              Compare More
                            </Button>
                          </Form>
                        ) : Number(packageCount) === 1 || column_id !== 0 ? (
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Text>
                                Do you want to add this selected packages to be
                                added to the event or compare selected packages?
                              </Form.Text>
                            </Form.Group>

                            <Button
                              variant="primary"
                              className="compare-btns"
                                onClick={HandleAddToEvent}
                            >
                              Add to Event
                            </Button>

                            <Button
                              variant="primary"
                              className="compare-btns-2"
                              onClick={HandleAddCompare}
                            >
                              Compare
                            </Button>
                          </Form>
                        ) : (
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Text>
                                Already You Added Two Packages To Compare. Goto
                                Compare And Select Package
                              </Form.Text>
                            </Form.Group>
                            <Link
                              to={`/customer/event/DecoCompare?event_id=${event_id}`}
                            >
                              <Button
                                className="addToEvent-btn"
                                variant="primary"
                                size="lg"
                              >
                                Go To Compare
                              </Button>{" "}
                            </Link>
                          </Form>
                        )}
                      </div>
                    </div>
                  )}

                  <Link to={`/ChatDes`}>
                    <Button variant="success" className="chat-btn" size="lg">
                      <FaWhatsapp />
                    </Button>{" "}
                  </Link>
                </Col>

                <Col>
                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${decorationPackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>

                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${decorationPackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>
                </Col>

                <Col>
                  <h2>{decorationPackage[0].package_title}</h2>
                  <p>by {decorationPackage[0].package_busname}</p>
                  <StarRating initialRating={3} />

                  {/* <Image src={venue6} thumbnail /> */}

                  {/* <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                {dropDown}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setHallName("Hall Phoenix")}>Hall Phoenix</Dropdown.Item>
                                <Dropdown.Item onClick={() => setHallName("Rose Veranda")} >Rose Veranda</Dropdown.Item>
                                <Dropdown.Item onClick={() => setHallName("Hall Draffodils")}>Hall Draffodils</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                  <br />
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>
                          Package price - LKR{" "}
                          {decorationPackage[0].package_price}
                        </td>
                      </tr>
                      {/* <tr>
                                    <td>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</td>
                                </tr> */}
                    </tbody>
                  </Table>
                  <ul className="bullet-list">
                    {/* <li>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</li>
                            <li>Package price(for one person) - LKR 6660</li> */}
                    <br />
                    <h3>Package included with, </h3>
                    {/* <li>Bride to Be Sash with Gold letters</li>
                            <li>“Bride to be” Script Letter Foil Balloon Banner</li>
                            <li>Diamond Ring Foil Balloon</li>
                            <li>10Pcs Chrome Metallic Latex Balloons</li>
                            <li>Champagne Bottle / Wine Bottle Foil 10 Balloons</li>
                            <li>“Bride” Tiara Headband</li>
                            <li>10Pcs Chrome Metallic Heart Latex Balloons</li>
                            <li>Our team will arrange all the decorations at your place. A transport fee will be charged beyond suburbs of Colombo.</li>
                            <li>Our office is open on weekdays from 8.00 a.m. to 5.00p.m. & on Saturdays 8.00a.m to 1.00 p.m. except on Sundays and Mercantile Holidays.</li> */}
                    {resultArray.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>EventXpress Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Before You Select a Package Please Create An Event</p>
            <Link to={`/customer/myEvents`}>
              <Button className="addToEvent-btn" variant="primary" size="lg">
                Create Event
              </Button>{" "}
            </Link>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};

export default DecorationDes;
