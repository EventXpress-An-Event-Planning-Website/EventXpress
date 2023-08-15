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

import venue5 from '../../../assets/images/venue5.jpg';
import venue6 from '../../../assets/images/venue6.jpg';
import venue7 from '../../../assets/images/venue7.jpg';
import venue8 from '../../../assets/images/venue8.jpg';
import sound9 from '../../../assets/images/sound9.jpg';
import sound10 from '../../../assets/images/sound10.jpg';
import sound11 from '../../../assets/images/sound11.jpg';
import sound12 from '../../../assets/images/sound12.jpg';

const SoundAndLightDes = () => {

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
                                <Image src={sound12} thumbnail className="venueDesImg"/>
                            </Col>

                            <Col md={10} >
                                <Image src={sound10} thumbnail className="venueDesImg"/>
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
                                <Image src={sound9} thumbnail className="venueDesImg"/>
                            </Col>

                            <Col md={10} >
                                <Image src={sound11} thumbnail className="venueDesImg"/>
                            </Col>
                        </Col>


                        <Col>
                            <h2>Pure AV</h2>
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
        </>
    );
};



export default SoundAndLightDes;