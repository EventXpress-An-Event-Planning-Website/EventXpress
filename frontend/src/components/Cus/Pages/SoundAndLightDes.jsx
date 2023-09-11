import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
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

import venue5 from '../../../assets/images/venue5.jpg';
import venue6 from '../../../assets/images/venue6.jpg';
import venue7 from '../../../assets/images/venue7.jpg';
import venue8 from '../../../assets/images/venue8.jpg';
import sound9 from '../../../assets/images/sound9.jpg';
import sound10 from '../../../assets/images/sound10.jpg';
import sound11 from '../../../assets/images/sound11.jpg';
import sound12 from '../../../assets/images/sound12.jpg';

const SoundAndLightDes = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const packageCount = queryParams.get("packageCount");
    const event_id = queryParams.get("event_id");
    const column_id = Number(queryParams.get("column"));
    const package_id = queryParams.get("pac");
    console.log(`column_id ${column_id}`);
    const [comparePackages, setcomparePackages] = useState(packageCount);
    const [showModal, setShowModal] = useState(false);
    const [soundAndLightPackage, setSoundAndLightPackage] = useState([]);

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
                package_id: soundAndLightPackage[0].package_id, // Modify this to match your data structure
                column_id: column_id
                // ... Add other necessary data for your POST request
            };
            axios
                .post("/api/customer/addSoundAndLightPackToCompareTable", eventData)
                .then((response) => {
                    const packCount = response.data;
                    // console.log(packCount);
                    // Perform navigation after successful POST
                    navigate(`/Venue?event_id=${event_id}&packageCount=${packCount}`);
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
                    package_id: soundAndLightPackage[0].package_id, // Modify this to match your data structure
                    // ... Add other necessary data for your POST request
                };
                axios
                    .post("/api/customer/addSoundAndLightPackToCompare", eventData)
                    .then((response) => {
                        const packCount = response.data;
                        // console.log(packCount);
                        // Perform navigation after successful POST
                        navigate(`/customer/event/SoundAndLight?event_id=${event_id}&packageCount=${packCount}`);
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
            .get(`/api/customer/viewSoundAndLightPackageDetails?pac=${package_id}`)
            .then((response) => {
                setSoundAndLightPackage(response.data);
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
    if (soundAndLightPackage.length === 0) {
        return <div>Loading...</div>;
    } else {

        return (
            <>
                {event_id === null ? (
                    <div style={{ "display": "flex" }}>
                        <Sidebar />
                        <Container>
                            <Row>
                                <Col>
                                    <Col md={10} >
                                        <Image src={`../../src/assets/images/uploads/${soundAndLightPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>

                                    <Col md={10} >
                                        <Image src={`../../src/assets/images/uploads/${soundAndLightPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>
                                    <br />
                                    {/* <Link to={`/customer/eventdetails`}> */}
                                    <Button className="addToEvent-btn" variant="primary" size="lg" onClick={openModal}>Add to Compare</Button>{' '}
                                    {/* </Link> */}

                                    <Link to={`/ChatDes`}>
                                        <Button variant="success" className="chat-btn" size="lg"><FaWhatsapp /></Button>{' '}
                                    </Link>
                                </Col>

                                <Col>
                                    <Col md={10} >
                                        <Image src={`../../src/assets/images/uploads/${soundAndLightPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>

                                    <Col md={10} >
                                        <Image src={`../../src/assets/images/uploads/${soundAndLightPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>
                                </Col>


                                <Col>
                                    <h2>Pure AV</h2>
                                    <StarRating initialRating={4} />
                                    {/* <Image src={venue6} thumbnail />

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
                                            <tr>
                                                <td>Package price - LKR 16660</td>
                                            </tr>
                                            <tr>
                                                <td>Location - No:49, Canel Rd, Colombo</td>

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
                                        <li>DJ Booth</li>
                                        <li>2 LED Moving Head Dance Lights</li>
                                        <li>2 x Powered Speaker</li>
                                        <li>1 x Powered Subwoofer</li>
                                        <li>1 x Wireless Microphone</li>
                                        <li>Fog Machine Machine</li>
                                        <li>Black Tufted Tower Covers</li>
                                        <li>1 x Wireless Microphone</li>
                                        <li>A transport fee will be charged beyond suburbs of Colombo.</li>
                                        <li>Our office is open on weekdays from 8.00 a.m. to 5.00p.m. & on Saturdays 8.00a.m to 1.00 p.m. except on Sundays and Mercantile Holidays.</li>
                                    </ul>
                                </Col>
                            </Row>

                        </Container >
                    </div >

                ) : (
                    <div style={{ display: "flex" }}>
                        {/* <Sidebar /> */}
                        <Container>
                            <Row>
                                <Col>
                                    <Col md={10}>
                                        <Image
                                            src={`../../src/assets/images/uploads/${soundAndLightPackage[0].sp_images}`}
                                            thumbnail
                                            className="venueDesImg"
                                        />
                                    </Col>

                                    <Col md={10}>
                                        <Image
                                            src={`../../src/assets/images/uploads/${soundAndLightPackage[0].sp_images}`}
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
                                                            to={`/customer/event/SoundAndLightCompare?event_id=${event_id}`}
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
                                            src={`../../src/assets/images/uploads/${soundAndLightPackage[0].sp_images}`}
                                            thumbnail
                                            className="venueDesImg"
                                        />
                                    </Col>

                                    <Col md={10}>
                                        <Image
                                            src={`../../src/assets/images/uploads/${soundAndLightPackage[0].sp_images}`}
                                            thumbnail
                                            className="venueDesImg"
                                        />
                                    </Col>
                                </Col>

                                <Col>
                                    <h2>{soundAndLightPackage[0].package_title} </h2>
                                    <p>by {soundAndLightPackage[0].package_busname}</p>
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
                                            <tr>
                                                <td>Package price - LKR 16660</td>
                                            </tr>
                                            <tr>
                                                <td>Location - No:49, Canel Rd, Colombo</td>

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
                                        <li>DJ Booth</li>
                                        <li>2 LED Moving Head Dance Lights</li>
                                        <li>2 x Powered Speaker</li>
                                        <li>1 x Powered Subwoofer</li>
                                        <li>1 x Wireless Microphone</li>
                                        <li>Fog Machine Machine</li>
                                        <li>Black Tufted Tower Covers</li>
                                        <li>1 x Wireless Microphone</li>
                                        <li>A transport fee will be charged beyond suburbs of Colombo.</li>
                                        <li>Our office is open on weekdays from 8.00 a.m. to 5.00p.m. & on Saturdays 8.00a.m to 1.00 p.m. except on Sundays and Mercantile Holidays.</li>
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


export default SoundAndLightDes;