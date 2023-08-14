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

import cake9 from '../../../assets/images/cake9.png';
import cake10 from '../../../assets/images/cake10.png';
import cake11 from '../../../assets/images/cake11.png';
import cake12 from '../../../assets/images/cake12.png';

const CakeDes = () => {

    const [dropDown,setdropDown] = useState('Dropdown Button')

    const setHallName =(name)=>{
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
                                <Image src={cake10} thumbnail className="venueDesImg"/>
                            </Col>

                            <Col md={10} >
                                <Image src={cake11} thumbnail className="venueDesImg"/>
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
                                <Image src={cake9} thumbnail className="venueDesImg"/>
                            </Col>

                            <Col md={10} >
                                <Image src={cake12} thumbnail className="venueDesImg"/>
                            </Col>
                        </Col>


                        <Col>
                            <h2>Black Forest Cake 1KG </h2>
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
                                        <td>LKR 5900</td>
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
                                <br/>
                                <li>This delicious black forest sponge cake is layered soaked in a cherry brandy syrup and covered in whipped cream and shaved chocolate. 
                                    Unfold the taste of mysterious cherries with classical whipped cream filling, it's light and perfectly sweet which makes a great addition to your next celebration.</li>
                                    <br/>
                                    <h3>More Details</h3>

                                <li>We offer the best and most delectable range of cakes made to stringent quality standards using the finest ingredients for our valued customers.</li>
                                <li>Cakes are baked by our own in-house pastry chefs who have years of experience in confectioneries.</li>
                                <li>Please mention the cake wording and the special instructions at the checkout.</li>
                                <li>Cake wording will be free of charge.</li>
                                <br/>
                                <h3>Allergy Information</h3>
                                <li>Our products are Inclusive of dairy, wheat, soy, eggs, and nuts.</li>
                            </ul>
                        </Col>
                    </Row>

                </Container >
            </div >
        </>
    );
};



export default CakeDes;