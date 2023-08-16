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

import venue5 from '../../../assets/images/venue5.jpg';
import venue6 from '../../../assets/images/venue6.jpg';
import venue7 from '../../../assets/images/venue7.jpg';
import venue8 from '../../../assets/images/venue8.jpg';
import deco10 from '../../../assets/images/deco10.jpg';
import deco11 from '../../../assets/images/deco11.jpg';
import deco12 from '../../../assets/images/deco12.jpg';
import deco13 from '../../../assets/images/deco13.jpg';
import deco3 from '../../../assets/images/deco3.jpg';

const DecorationDes = () => {

    const [dropDown, setdropDown] = useState('Dropdown Button')

    const setHallName = (name) => {
        setdropDown(name)
    }

    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <Container>
                    <Row>
                        <Col>
                            <Col md={10} >
                                <Image src={deco3} thumbnail className="venueDesImg" />
                            </Col>

                            <Col md={10} >
                                <Image src={deco11} thumbnail className="venueDesImg" />
                            </Col>
                            <br />
                            <Link to={`/customer/eventdetails`}>
                                <Button className="addToEvent-btn" variant="primary" size="lg">Add to Compare</Button>{' '}
                            </Link>

                            <Link to={`/ChatDes`}>
                                <Button variant="success" className="chat-btn" size="lg"><FaWhatsapp /></Button>{' '}
                            </Link>
                        </Col>

                        <Col>
                            <Col md={10} >
                                <Image src={deco13} thumbnail className="venueDesImg" />
                            </Col>

                            <Col md={10} >
                                <Image src={deco10} thumbnail className="venueDesImg" />
                            </Col>
                        </Col>


                        <Col>
                            <h2>21st Birthday Package</h2>
                            <p>by Party House Decor</p>
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
                                        <td>Package price - LKR 16660</td>
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
                                <li>Bride to Be Sash with Gold letters</li>
                                <li>“Bride to be” Script Letter Foil Balloon Banner</li>
                                <li>Diamond Ring Foil Balloon</li>
                                <li>10Pcs Chrome Metallic Latex Balloons</li>
                                <li>Champagne Bottle / Wine Bottle Foil 10 Balloons</li>
                                <li>“Bride” Tiara Headband</li>
                                <li>10Pcs Chrome Metallic Heart Latex Balloons</li>
                                <li>Our team will arrange all the decorations at your place. A transport fee will be charged beyond suburbs of Colombo.</li>
                                <li>Our office is open on weekdays from 8.00 a.m. to 5.00p.m. & on Saturdays 8.00a.m to 1.00 p.m. except on Sundays and Mercantile Holidays.</li>
                            </ul>
                        </Col>
                    </Row>

                </Container >
            </div >
        </>
    );
};



export default DecorationDes;