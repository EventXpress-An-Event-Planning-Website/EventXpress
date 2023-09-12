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
import { Link } from "react-router-dom";
import { useState } from "react";
import StarRating from "./Ratings";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import cake9 from "../../../assets/images/cake9.png";
import cake10 from "../../../assets/images/cake10.png";
import cake11 from "../../../assets/images/cake11.png";
import cake12 from "../../../assets/images/cake12.png";

const CakeDes = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const packageCount = queryParams.get("packageCount");
  const event_id = queryParams.get("event_id");
  const column_id = Number(queryParams.get("column"));
  const package_id = queryParams.get("pac");
  console.log(`column_id ${column_id}`);
  const [comparePackages, setcomparePackages] = useState(packageCount);
  const [showModal, setShowModal] = useState(false);
  const [cakePackage, setCakePackage] = useState([]);

  const [dropDown, setdropDown] = useState("Dropdown Button");
  const navigate = useNavigate();
  const setHallName = (name) => {
    setdropDown(name);
  };
  const openModal = () => {
    // console.log(showModal);
    setShowModal(true);
    // console.log(showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const HandleAddCompare = () => {
    let pack = Number(comparePackages);
    // console.log(pack);

    if (column_id !== 0) {
        
        const eventData = {
            event_id: event_id,
            package_id: cakePackage[0].package_id, // Modify this to match your data structure
            column_id:column_id
            // ... Add other necessary data for your POST request
        };
        axios
          .post("/api/customer/addCakePackToCompareTable", eventData)
          .then((response) => {
            const packCount = response.data;
            console.log(packCount);
            // Perform navigation after successful POST
            navigate(`/customer/event/CakeCompare?event_id=${event_id}`);
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
          package_id: cakePackage[0].package_id, // Modify this to match your data structure
          // ... Add other necessary data for your POST request
        };
        axios
          .post("/api/customer/addCakePackToCompare", eventData)
          .then((response) => {
            const packCount = response.data;
            // console.log(packCount);
            // Perform navigation after successful POST
            navigate(`/customer/event/Cakes?event_id=${event_id}&packageCount=${packCount}`);
          })
          .catch((error) => {
            console.error("Error adding event:", error);
            // Handle error if needed
          });
        // navigate(`/Venue?event_id=${event_id}&packageCount=${pack + 1}`)
      }
    }
  };
  useEffect(() => {
    axios
      .get(`/api/customer/viewCakePackageDetails?pac=${package_id}`)
      .then((response) => {
        setCakePackage(response.data);
      })
      .catch((error) => {
        // console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);
  // console.log(cakePackage);

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  if (cakePackage.length === 0) {
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
                      src={`../../src/assets/images/uploads/${cakePackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>
                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${cakePackage[0].sp_images}`}
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
                      src={`../../src/assets/images/uploads/${cakePackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>

                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${cakePackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>
                </Col>

                <Col>
                  <h2>{cakePackage[0].package_title} </h2>
                  <p>by {cakePackage[0].package_busname}</p>
                  <StarRating initialRating={3} />
                  {/* <Image src={cake12} thumbnail />

                            <Dropdown>
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
                      {/* <tr>
                                        <td>Location</td>
                                        <td>No:49, Canel Rd, Colombo</td>
                                        {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                      {/* </tr> */}
                      <tr>
                        <td>Price</td>
                        <td>LKR {cakePackage[0].package_price}</td>
                        {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                      </tr>

                      <tr>
                        <td>Serving Size</td>
                        <td>10-12</td>
                      </tr>
                      {/* <tr>
                                        <td>Hall area</td>
                                        <td>1200sqft</td>
                                    </tr>
                                    <tr>
                                        <td>Hall type</td>
                                        <td>Indoor</td>
                                    </tr> */}
                    </tbody>
                  </Table>

                  <ul className="bullet-list">
                    {/* <li>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</li>
                                <li>Package price(for one person) - LKR 6660</li> */}
                    <br />
                    <li>{cakePackage[0].package_description}</li>
                    <br />
                    <h3>More Details</h3>

                    <li>
                      We offer the best and most delectable range of cakes made
                      to stringent quality standards using the finest
                      ingredients for our valued customers.
                    </li>
                    <li>
                      Cakes are baked by our own in-house pastry chefs who have
                      years of experience in confectioneries.
                    </li>
                    <li>
                      Please mention the cake wording and the special
                      instructions at the checkout.
                    </li>
                    <li>Cake wording will be free of charge.</li>
                    <br />
                    <h3>Allergy Information</h3>
                    <li>
                      Our products are Inclusive of dairy, wheat, soy, eggs, and
                      nuts.
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            {/* <Sidebar /> */}
            <Container>
              <Row>
                <Col>
                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${cakePackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>

                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${cakePackage[0].sp_images}`}
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

                            >
                              Add to Event
                            </Button>

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
                            //   onClick={handleAddToEvent}
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
                              to={`/customer/event/CakeCompare?event_id=${event_id}`}
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

                  {/* <Link to={`/ChatDes`}>
                            <Button variant="success" className="chat-btn" size="lg"><FaWhatsapp /></Button>{' '}
                        </Link> */}
                </Col>

                <Col>
                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${cakePackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>

                  <Col md={10}>
                    <Image
                      src={`../../src/assets/images/uploads/${cakePackage[0].sp_images}`}
                      thumbnail
                      className="venueDesImg"
                    />
                  </Col>
                </Col>

                <Col>
                  <h2>{cakePackage[0].package_title} </h2>
                  <p>by {cakePackage[0].package_busname}</p>
                  <StarRating initialRating={3} />
                  {/* <Image src={cake12} thumbnail />

                        <Dropdown>
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
                      {/* <tr>
                                    <td>Location</td>
                                    <td>No:49, Canel Rd, Colombo</td>
                                    {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                      {/* </tr> */}
                      <tr>
                        <td>Price</td>
                        <td>{cakePackage[0].package_price}</td>
                        {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                      </tr>

                      <tr>
                        <td>Serving Size</td>
                        <td>10-12</td>
                      </tr>
                      {/* <tr>
                                    <td>Hall area</td>
                                    <td>1200sqft</td>
                                </tr>
                                <tr>
                                    <td>Hall type</td>
                                    <td>Indoor</td>
                                </tr> */}
                    </tbody>
                  </Table>

                  <ul className="bullet-list">
                    {/* <li>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</li>
                            <li>Package price(for one person) - LKR 6660</li> */}
                    <br />
                    <li>{cakePackage[0].package_description}</li>
                    <br />
                    <h3>More Details</h3>

                    <li>
                      We offer the best and most delectable range of cakes made
                      to stringent quality standards using the finest
                      ingredients for our valued customers.
                    </li>
                    <li>
                      Cakes are baked by our own in-house pastry chefs who have
                      years of experience in confectioneries.
                    </li>
                    <li>
                      Please mention the cake wording and the special
                      instructions at the checkout.
                    </li>
                    <li>Cake wording will be free of charge.</li>
                    <br />
                    <h3>Allergy Information</h3>
                    <li>
                      Our products are Inclusive of dairy, wheat, soy, eggs, and
                      nuts.
                    </li>
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

export default CakeDes;
