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

import photo9 from '../../../assets/images/photo9.png';
import photo10 from '../../../assets/images/photo10.png';
import photo11 from '../../../assets/images/photo11.png';
import photo12 from '../../../assets/images/photo12.png';

const PhotographyDes = () => {

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
                                <Image src={photo9} thumbnail className="venueDesImg" />
                            </Col>

                            <Col md={10} >
                                <Image src={photo10} thumbnail className="venueDesImg" />
                            </Col>
                            <br />
                            <Link to={`/customer/eventdetails`}>
                                <Button className="addToEvent-btn" size="lg">Add to Compare</Button>{' '}
                            </Link>

                            <Link to={`/ChatDes`}>
                                <Button className="chat-btn" size="lg"><FaWhatsapp /></Button>{' '}
                            </Link>
                        </Col>

                        <Col>
                            <Col md={10} >
                                <Image src={photo11} thumbnail className="venueDesImg" />
                            </Col>

                            <Col md={10} >
                                <Image src={photo12} thumbnail className="venueDesImg" />
                            </Col>
                        </Col>


                        <Col>
                            <h2>Silver Package</h2>
                            <p>by Candy Click</p>
                            <StarRating initialRating={4} />

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
                                <h3>Package included with, </h3>
                                <li>10 x 24 Album</li>
                                <li>50 Pages</li>
                                <li>Two Tone Album Cover & Box</li>
                                <li>02 – 16” x 24” Framed Photos</li>
                                <li>02 – 12” x 18” Photos Without Frame</li>
                                <li>100 – 6 x 8 One Side Thank You Cards</li>
                                <li>10Pcs Chrome Metallic Heart Latex Balloons</li>
                                <li>8 x 24 Family Album with 100 Photos</li>
                                <li>A transport fee will be charged beyond suburbs of Colombo.</li>
                                <li>Our office is open on weekdays from 8.00 a.m. to 5.00p.m. & on Saturdays 8.00a.m to 1.00 p.m. except on Sundays and Mercantile Holidays.</li>
                            </ul>
                        </Col>
                    </Row>

                </Container >
            </div >
        </>
    );
};



export default PhotographyDes;