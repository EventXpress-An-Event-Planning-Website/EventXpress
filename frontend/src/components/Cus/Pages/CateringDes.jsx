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
import { useEffect } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import burger1 from '../../../assets/images/burger1.jpg';
import burger2 from '../../../assets/images/burger2.jpg';
import burger3 from '../../../assets/images/burger3.jpg';
import burger4 from '../../../assets/images/burger4.jpg';
import catering2 from '../../../assets/images/catering2.jpg';

const CateringDes = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const packageCount = queryParams.get("packageCount");
    const event_id = queryParams.get("event_id");
    const column_id = Number(queryParams.get("column"));
    const package_id = queryParams.get("pac");
    // console.log(`column_id ${column_id}`);
    const [comparePackages, setcomparePackages] = useState(packageCount);
    const [showModal, setShowModal] = useState(false);
    const [cateringPackage, setCateringPackage] = useState([]);

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
    const HandleAddToEvent=()=>{
        const eventData = {
          event_id: event_id,
          package_id: cateringPackage[0].package_id,
          service:'Catering' // Modify this to match your data structure
          // ... Add other necessary data for your POST request
        };
        axios.get(`/api/customer/checkCateringStatus?event_id=${event_id}`)
        .then((response)=>{
            if (response.data === true) {
                axios.post(`/api/customer/addCateringtoEvent?pack_id=${cateringPackage[0].package_id}&event_id=${event_id}`)
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
      else{
        toast.error('Your request is already accepted. You cannot add another package')
        navigate(`/customer/eventdetails?id=${event_id}`)
      }
    })
    
        
}
    const HandleAddCompare = () => {
        let pack = Number(comparePackages);
        // console.log(pack);

        if (column_id !== 0) {

            const eventData = {
                event_id: event_id,
                package_id: cateringPackage[0].package_id, // Modify this to match your data structure
                column_id: column_id
                // ... Add other necessary data for your POST request
            };
            axios
                .post("/api/customer/addCateringPackToCompareTable", eventData)
                .then((response) => {
                    const packCount = response.data;
                    console.log(packCount);
                    // Perform navigation after successful POST
                    navigate(`/customer/event/CateringCompare?event_id=${event_id}`);
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
                    package_id: cateringPackage[0].package_id, // Modify this to match your data structure
                    // ... Add other necessary data for your POST request
                };
                axios
                    .post("/api/customer/addCateringPackToCompare", eventData)
                    .then((response) => {
                        const packCount = response.data;
                        // console.log(packCount);
                        // Perform navigation after successful POST
                        navigate(`/customer/event/Catering?event_id=${event_id}&packageCount=${packCount}`);
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
            .get(`/api/customer/viewCateringPackageDetails?pac=${package_id}`)
            .then((response) => {
                setCateringPackage(response.data);
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
    if (cateringPackage.length === 0) {
        return <div>Loading...</div>;
    } else {

        return (
            <>
                {event_id === null ? (
                    <div style={{ "display": "flex" }}>
                        <Sidebar />
                        <Container>
                            <Row>
                                <Col className="imgs-size">
                                    <Col>
                                        <Image src={`../../src/assets/images/uploads/${cateringPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>

                                    <Col>
                                        <Image src={`../../src/assets/images/uploads/${cateringPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>
                                    <br />
                                    {/* <Link to={`/customer/eventdetails`}> */}
                                    <Button className="addToEvent-btn" variant="primary" size="lg" onClick={openModal} >Add to Compare</Button>{' '}
                                    {/* </Link> */}

                                    <Link to={`/ChatDes`}>
                                        <Button variant="success" className="chat-btn" size="lg"><FaWhatsapp /></Button>{' '}
                                    </Link>
                                </Col>

                                <Col>
                                    <Col  >
                                        <Image src={`../../src/assets/images/uploads/${cateringPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>

                                    <Col  >
                                        <Image src={`../../src/assets/images/uploads/${cateringPackage[0].sp_images}`} thumbnail className="venueDesImg" />
                                    </Col>
                                </Col>


                                <Col className="details-size">
                                    <h2>{cateringPackage[0].package_title} </h2>
                                    <p>by {cateringPackage[0].package_busname}</p>
                                    <StarRating initialRating={3} />

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
                                                <td>Price</td>
                                                <td>LKR {cateringPackage[0].package_price}</td>
                                                {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                                            </tr>
                                            <tr>
                                                <td>Location</td>
                                                <td>{cateringPackage[0].package_address}</td>
                                                {/* budget, accommodation, facilities, Security, parking, connectivity, vendor restrictions */}
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <br />
                                    <h3>Menu</h3>
                                    <Table striped bordered hover>
                                        <tbody>
                                            {/* <tr>
                                                <td>Package price(for one person) - LKR 6660</td>
                                            </tr> */}
                                            <tr>
                                                <td>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                    <ul className="bullet-list">
                                        {/* <li>This package included one Bacon cheeseburger, French fries, Chicken wings, Stroganoff plate</li>
                                <li>Package price(for one person) - LKR 6660</li> */}
                                        <br />
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

                ) : (
                    <div style={{ display: "flex" }}>
                        {/* <Sidebar /> */}
                        <Container>
                            <Row>
                                <Col>
                                    <Col md={10}>
                                        <Image
                                            src={`../../src/assets/images/uploads/${cateringPackage[0].sp_images}`}
                                            thumbnail
                                            className="venueDesImg"
                                        />
                                    </Col>

                                    <Col md={10}>
                                        <Image
                                            src={`../../src/assets/images/uploads/${cateringPackage[0].sp_images}`}
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
                                                            to={`/customer/event/CateringCompare?event_id=${event_id}`}
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
                                            src={`../../src/assets/images/uploads/${cateringPackage[0].sp_images}`}
                                            thumbnail
                                            className="venueDesImg"
                                        />
                                    </Col>

                                    <Col md={10}>
                                        <Image
                                            src={`../../src/assets/images/uploads/${cateringPackage[0].sp_images}`}
                                            thumbnail
                                            className="venueDesImg"
                                        />
                                    </Col>
                                </Col>

                                <Col>
                                    <h2>{cateringPackage[0].package_title} </h2>
                                    <p>by {cateringPackage[0].package_busname}</p>
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
                                        <br />
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





export default CateringDes;