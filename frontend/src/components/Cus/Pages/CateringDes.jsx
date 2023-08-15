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

import burger1 from '../../../assets/images/burger1.jpg';
import burger2 from '../../../assets/images/burger2.jpg';
import burger3 from '../../../assets/images/burger3.jpg';
import burger4 from '../../../assets/images/burger4.jpg';
import catering2 from '../../../assets/images/catering2.jpg';
const CateringDes = () => {

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
                        <Col className="imgs-size">
                            <Col>
                                <Image src={burger1} thumbnail className="venueDesImg" />
                            </Col>

                            <Col>
                                <Image src={burger2} thumbnail className="venueDesImg" />
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
                            <Col  >
                                <Image src={burger3} thumbnail className="venueDesImg" />
                            </Col>

                            <Col  >
                                <Image src={burger4} thumbnail className="venueDesImg" />
                            </Col>
                        </Col>


                        <Col className="details-size">
                            <h2>Elite Catering</h2>
                            {/* <Image src={catering2} thumbnail />

                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {dropDown}
                                </Dropdown.Toggle> */}
                            {/* 
                                <Dropdown.Menu>
                                    <Dropdown.Item>Hall Phoenix</Dropdown.Item>
                                    <Dropdown.Item>Rose Veranda</Dropdown.Item>
                                    <Dropdown.Item>Hall Draffodils</Dropdown.Item>
                                </Dropdown.Menu> */}
                            {/* </Dropdown> */}
                            <br />
                            <Table striped bordered hover>

                                <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td>No:49, Canel Rd, Colombo</td>
                                        {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                                    </tr>
                                </tbody>
                            </Table>
                            <br />
                            <h3>Menu</h3>
                            <Table striped bordered hover>
                            <tbody>
                            <tr>
                                        <td>Package price(for one person) - LKR 6660</td>
                                    </tr>
                                    <tr>
                                        <td>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</td>
                                    </tr>
                                    
                                </tbody>
                                </Table>
                            <ul className="bullet-list">
                                {/* <li>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</li>
                                <li>Package price(for one person) - LKR 6660</li> */}
                                <br/>
                                <h3>More Details</h3>
                                <li>Minimum order for Outdoor catering is 25 pax</li>
                                <li>Please inform if any changes required and final number of Covers 3 days prior to the function date.</li>
                                <li>Upon placing the order please make an advance payment of 50% of the total value and balance payment to be paid two (02) days before the function date.
                                    We accept Credit and Debit cards.</li>
                                <li>In the event of a cancellation of an order prior to 48 hours, only 50% of the advance payment will be refunded.</li>
                                <li>Welcome drink is not included in the Menu, but will be provided at an additional cost of Rs.150/= Per Glass of Fruit Drink- (Cordial), Rs.200/= Per Glass of Ice Coffee & Rs.250/= Per Glass of Fresh Mixed Fruit Juice.</li>
                                <li>Buffet Tables (size 6, x 3′), Tables, Chairs, Drinking Water and Ice have to be provided by the client.</li>
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



export default CateringDes;