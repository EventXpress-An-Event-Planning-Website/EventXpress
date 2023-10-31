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
import { Modal } from "react-bootstrap";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import photo9 from '../../../assets/images/photo9.png';
import photo10 from '../../../assets/images/photo10.png';
import photo11 from '../../../assets/images/photo11.png';
import photo12 from '../../../assets/images/photo12.png';

const PhotographyDes = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const packageCount = queryParams.get("packageCount");
    const event_id = queryParams.get("event_id");
    const column_id = Number(queryParams.get("column"));
    const package_id = queryParams.get("pac");
    // console.log(`column_id ${column_id}`);
    const [comparePackages, setcomparePackages] = useState(packageCount);
    const [showModal, setShowModal] = useState(false);
    const [photographyPackage, setPhotographyPackage] = useState([]);

    const [dropDown, setdropDown] = useState("Dropdown Button");
    const navigate = useNavigate();
    // const setHallName = (name) => {
    //     setdropDown(name);
    // };
    const openModal = () => {
        //   console.log(showModal);
        setShowModal(true);
        //   console.log(showModal);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    const HandleAddToEvent=()=>{
        const eventData = {
          event_id: event_id,
          package_id: photographyPackage[0].package_id,
          service:'Photography' // Modify this to match your data structure
          // ... Add other necessary data for your POST request
        };
    
        axios.post(`/api/customer/addPhotographyEvent?pack_id=${package_id}&event_id=${event_id}`)
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
        //   console.log(pack);

        if (column_id !== 0) {

            const eventData = {
                event_id: event_id,
                package_id: photographyPackage[0].package_id, // Modify this to match your data structure
                column_id: column_id
                // ... Add other necessary data for your POST request
            };
            axios
                .post("/api/customer/addPhotographyPackToCompareTable", eventData)
                .then((response) => {
                    const packCount = response.data;
                    //   console.log(packCount);
                    // Perform navigation after successful POST
                    navigate(`/customer/event/PhotographyCompare?event_id=${event_id}`);
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
                    package_id: photographyPackage[0].package_id, // Modify this to match your data structure
                    // ... Add other necessary data for your POST request
                };
                axios
                    .post("/api/customer/addPhotographyPackToCompare", eventData)
                    .then((response) => {
                        const packCount = response.data;
                        //   console.log(packCount);
                        // Perform navigation after successful POST
                        navigate(`/customer/event/Photography?event_id=${event_id}&packageCount=${packCount}`);
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
            .get(`/api/customer/viewPhotographyPackageDetails?pac=${package_id}`)
            .then((response) => {
                setPhotographyPackage(response.data);
            })
            .catch((error) => {
                //   console.log(error);
                setError(error);
                setLoading(false);
            });
    }, []);
    // console.log(photographyPackage);

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };
    if (photographyPackage.length === 0) {
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
                                        <Image src={`../../src/assets/images/uploads/${photographyPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>

                                    <Col md={10} >
                                        <Image src={`../../src/assets/images/uploads/${photographyPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>
                                    <br />
                                    {/* <Link to={`/customer/eventdetails`}> */}
                                    <Button className="addToEvent-btn" size="lg" onClick={openModal}>Add to Compare</Button>{' '}
                                    {/* </Link> */}

                                    <Link to={`/ChatDes`}>
                                        <Button className="chat-btn" size="lg"><FaWhatsapp /></Button>{' '}
                                    </Link>
                                </Col>

                                <Col>
                                    <Col md={10} >
                                        <Image src={`../../src/assets/images/uploads/${photographyPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>

                                    <Col md={10} >
                                        <Image src={`../../src/assets/images/uploads/${photographyPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>
                                </Col>


                                <Col>
                                    <h2>{photographyPackage[0].package_title}</h2>
                                    <p>by {photographyPackage[0].package_busname}</p>
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
                                                <td>Price</td>
                                                <td>LKR {photographyPackage[0].package_price}</td>
                                            </tr>
                                            <tr>
                                                <td>Location</td>
                                                <td>{photographyPackage[0].package_price}</td>

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
                ) : (
                    <div style={{ display: "flex" }}>
                        {/* <Sidebar /> */}
                        <Container>
                            <Row>
                                <Col>
                                    <Col md={10}>
                                        <Image
                                            src={`../../src/assets/images/uploads/${photographyPackage[0].sp_images}`}
                                            thumbnail
                                            className="venueDesImg"
                                        />
                                    </Col>

                                    <Col md={10}>
                                        <Image
                                            src={`../../src/assets/images/uploads/${photographyPackage[0].sp_images}`}
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
                                                            to={`/customer/event/PhotographyCompare?event_id=${event_id}`}
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
                                            src={`../../src/assets/images/uploads/${photographyPackage[0].sp_images}`}
                                            thumbnail
                                            className="venueDesImg"
                                        />
                                    </Col>

                                    <Col md={10}>
                                        <Image
                                            src={`../../src/assets/images/uploads/${photographyPackage[0].sp_images}`}
                                            thumbnail
                                            className="venueDesImg"
                                        />
                                    </Col>
                                </Col>

                                <Col>
                                    <h2>{photographyPackage[0].package_title} </h2>
                                    <p>by {photographyPackage[0].package_busname}</p>
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
                                                <td>{photographyPackage[0].package_price}</td>
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
                                        <li>{photographyPackage[0].package_description}</li>
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



export default PhotographyDes;