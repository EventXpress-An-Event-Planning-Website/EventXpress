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
import { useLocation } from "react-router-dom";
import { Modal } from "react-bootstrap";

const VenueDes = () => {

    const location = useLocation()
    const [showModal, setShowModal] = useState(false)
    const queryParams = new URLSearchParams(location.search);
    const event_id= queryParams.get('event_id')
    const [dropDown,setdropDown] = useState('Dropdown Button')
    console.log(event_id);
    const setHallName =(name)=>{
        setdropDown(name)
    }
    const openModal = () => {
        setShowModal(true)
      }
    
      const closeModal = () => {
        setShowModal(false)
      }

    
    return (
        <>
            <div style={{ "display": "flex" }}>
            {event_id === null ? <Sidebar /> :null}
                <Container>
                    <Row>
                        <Col>
                            <Col md={10} >
                                <Image src={venue5} thumbnail />
                            </Col>

                            <Col md={10} >
                                <Image src={venue6} thumbnail />
                            </Col>
                            <br />
                            {event_id !== null ? 
                            <Link to={`/customer/event/VenueCompare`}>
                            <Button className="addToEvent-btn" variant="primary" size="lg">Add to Compare</Button>{' '}
                            </Link>
                            :
                            <Button onClick={openModal} className="addToEvent-btn" variant="primary" size="lg">Add to Compare</Button>
                            }

                            <Link to={`/ChatDes`}>
                            <Button variant="success" size="lg"><FaWhatsapp />Chat</Button>{' '}
                            </Link>
                        </Col>

                        <Col>
                            <Col md={10} >
                                <Image src={venue7} thumbnail />
                            </Col>

                            <Col md={10} >
                                <Image src={venue8} thumbnail />
                            </Col>
                        </Col>


                        <Col>
                            <h2>Araliya Beach Hotel</h2>
                            <Image src={venue6} thumbnail />

                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {dropDown}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setHallName("Hall Phoenix")}>Hall Phoenix</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setHallName("Rose Veranda")} >Rose Veranda</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setHallName("Hall Draffodils")}>Hall Draffodils</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br />
                            <Table striped bordered hover>

                                <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td>No:49, Canel Rd, Colombo</td>
                                        {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>LKR 24,500</td>
                                        {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                                    </tr>

                                    <tr>
                                        <td>Maximum guest count</td>
                                        <td>200</td>
                                    </tr>
                                    <tr>
                                        <td>Hall area</td>
                                        <td>1200sqft</td>
                                    </tr>
                                    <tr>
                                        <td>Hall type</td>
                                        <td>Indoor</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container >
            </div >
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                  <Modal.Title>EventXpree Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Before You Select a Package Please Create An Event</p>
                    <Link to={`/customer/myEvents`}>
                        <Button className="addToEvent-btn" variant="primary" size="lg">Create Event</Button>{' '}
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
};



export default VenueDes;