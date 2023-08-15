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
import Form from 'react-bootstrap/Form';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import venue5 from '../../../assets/images/venue5.jpg';
import venue6 from '../../../assets/images/venue6.jpg';
import venue7 from '../../../assets/images/venue7.jpg';
import venue8 from '../../../assets/images/venue8.jpg';

const Catering = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const packageCount = queryParams.get('packageCount');
    console.log(packageCount);
    const [comparePackages, setcomparePackages] = useState(packageCount)
    const halls = [
        { name: "Hall Phoenix", location: "No:49, Canel Rd, Colombo", price: "LKR 24,500", guestCount: 200, area: "1200sqft", type: "Indoor" },
        { name: "Rose Veranda", location: "No:49, Canel Rd, Colombo", price: "LKR 30,000", guestCount: 150, area: "1000sqft", type: "Outdoor" },
        { name: "Hall Draffodils", location: "No:49, Canel Rd, Colombo", price: "LKR 18,000", guestCount: 100, area: "800sqft", type: "Indoor" }
    ];

    const [selectedHall, setSelectedHall] = useState(halls[0]);

    const handleHallSelection = (hall) => {
        setSelectedHall(hall);
    };

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const HandleAddCompare = () => {
        let pack = Number(comparePackages)
        setcomparePackages(pack + 1)
        navigate(`/Venue?packageCount=${pack + 1}`)

    }


    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <Container>
                    <Row>
                        <Col>
                            <Col md={10} >
                                <Image src={venue5} thumbnail className="venueDesImg" />
                            </Col>

                            <Col md={10} >
                                <Image src={venue6} thumbnail className="venueDesImg" />
                            </Col>
                            <br />
                            {/* <Link to={`/customer/eventdetails`}> */}
                            <Button className="addToEvent-btn" variant="primary" size="lg" onClick={toggleForm}>Add to Compare</Button>{' '}
                            {/* </Link> */}

                            <Link to={`/ChatDes`}>
                                <Button variant="success" className="addToEvent-btn chat-btn" size="lg"><FaWhatsapp /></Button>{' '}
                            </Link>
                        </Col>

                        <Col>
                            <Col md={10} >
                                <Image src={venue7} thumbnail className="venueDesImg" />
                            </Col>

                            <Col md={10} >
                                <Image src={venue8} thumbnail className="venueDesImg" />
                            </Col>
                        </Col>
                        {showForm && (
                            <div className="popup-overlay">
                                <div className="popup-content">
                                    {Number(packageCount) < 1 ?
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Text>
                                                    Do you want to add this selected packages to be added to the event or do you
                                                    want to compare this package with another package?
                                                </Form.Text>
                                            </Form.Group>

                                            <Link to={`/customer/eventdetails?id=1`}>
                                                <Button variant="primary" type="submit" className="compare-btns">Add to Event</Button>
                                            </Link>

                                            {/* <Link to={`/Venue?packageCount=2`}> */}
                                            <Button onClick={HandleAddCompare} type="submit" className="compare-btns-2">Compare More</Button>




                                        </Form> :
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Text>
                                                    Do you want to add this selected packages to be added to the event or compare selected packages?
                                                </Form.Text>
                                            </Form.Group>

                                            <Link to={`/customer/eventdetails?id=1`}>
                                                <Button variant="primary" type="submit" className="compare-btns">Add to Event</Button>
                                            </Link>

                                            <Link to={`/customer/event/VenueCompare`}>
                                                <Button type="submit" className="compare-btns-2">Compare</Button>
                                            </Link>



                                        </Form>}

                                </div>
                            </div>
                        )}
                        <Col>
                            <h2>Araliya Beach Hotel</h2>
                            <Image src={venue6} thumbnail />

                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {selectedHall.name}
                                </Dropdown.Toggle>
                                {/* <Dropdown.Item>Select one</Dropdown.Item> */}

                                <Dropdown.Menu>
                                    {halls.map((hall) => (
                                        <Dropdown.Item key={hall.name} onClick={() => handleHallSelection(hall)}> {hall.name}</Dropdown.Item>
                                        // <Dropdown.Item onClick={() => setHallName("Rose Veranda")} >Rose Veranda</Dropdown.Item>
                                        // <Dropdown.Item onClick={() => setHallName("Hall Draffodils")}>Hall Draffodils</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <br />
                            {selectedHall && (
                                <Table striped bordered hover>

                                    <tbody>
                                        <tr>
                                            <td>Location</td>
                                            <td>{selectedHall.location}</td>
                                            {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>{selectedHall.price}</td>
                                            {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                                        </tr>

                                        <tr>
                                            <td>Maximum guest count</td>
                                            <td>{selectedHall.guestCount}</td>
                                        </tr>
                                        <tr>
                                            <td>Hall area</td>
                                            <td>{selectedHall.area}</td>
                                        </tr>
                                        <tr>
                                            <td>Hall type</td>
                                            <td>{selectedHall.type}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            )}
                        </Col>
                    </Row>

                </Container >
            </div >
        </>
    );
};



export default Catering;