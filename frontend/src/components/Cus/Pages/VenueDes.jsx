import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaWhatsapp } from "react-icons/fa";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import venue5 from "../../../assets/images/venue5.jpg";
import venue6 from "../../../assets/images/venue6.jpg";
import venue7 from "../../../assets/images/venue7.jpg";
import venue8 from "../../../assets/images/venue8.jpg";
import { Modal } from "react-bootstrap";
import StarRating from "./Ratings";
import axios from "axios";
import { useEffect } from "react";

const VenueDes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const packageCount = queryParams.get("packageCount");
  const uid = queryParams.get("euid");
  const pac_id = queryParams.get("id");
  console.log(pac_id);
  console.log(uid);
  const event_id = queryParams.get("event_id");
  const column_id = Number(queryParams.get("column"));
  console.log(`column_id ${column_id}`);
  const [comparePackages, setcomparePackages] = useState(packageCount);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [data, setData] = useState("");
  const [venuePackage, setVenuePackage] = useState("");
  const [loading, setLoading] = useState(false);
  const [halls, setHalls] = useState([]);
  const [loading1, setLoading1] = useState(false);
  
  useEffect(() => {
    axios
      .get(`/api/customer/viewVenuePackageDetails?uid=${uid}`)
      .then((response) => {
        // setVenuePackage(response.data)
        console.log(response.data);
        const services = response.data.map((venue) => ({
          title: venue.package_title,
          pack_id: venue.package_id,
          user_id: venue.userid,
          name: venue.package_op_title,
          location: venue.package_address,
          price: venue.package_price,
          guestCount: venue.package_op_count,
          area: venue.package_op_area,
          type: venue.package_op_type,
          sp_images:venue.sp_images
        }));
        setHalls(services);
      
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });

      // const selectedHall = halls.find((hall) => hall.pack_id === pac_id);
      // setSelectedHall(selectedHall);
      // console.log(selectedHall);
  }, [loading]);

  
  useEffect(()=>{

    axios
      .get(`/api/customer/viewVenuePackDetails?pack_id=${pac_id}`)
      .then((response) => {
        console.log(response.data);
        // setVenuePackage(response.data)
        console.log(response.data);
        const service = response.data.map((venue) => ({
          title: venue.package_title,
          pack_id: venue.package_id,
          user_id: venue.userid,
          name: venue.package_op_title,
          location: venue.package_address,
          price: venue.package_price,
          guestCount: venue.package_op_count,
          area: venue.package_op_area,
          type: venue.package_op_type,
          sp_images:venue.sp_images
        }));
        ;
        console.log(service);
        setSelectedHall(service[0]);
      
        setLoading1(false);
      })
      .catch((error) => {
        console.log(error);
        // setError(error);
        setLoading1(false);
      });

  },[loading1])
  // console.log(halls);

  // const halls = [
  //     { name: "Hall Phoenix", location: "No:49, Canel Rd, Colombo", price: "LKR 24,500", guestCount: 200, area: "1200sqft", type: "Indoor" },
  //     { name: "Rose Veranda", location: "No:49, Canel Rd, Colombo", price: "LKR 30,000", guestCount: 150, area: "1000sqft", type: "Outdoor" },
  //     { name: "Hall Draffodils", location: "No:49, Canel Rd, Colombo", price: "LKR 18,000", guestCount: 100, area: "800sqft", type: "Indoor" }
  // ];

  const [selectedHall, setSelectedHall] = useState(null);

  

  const handleHallSelection = (hall) => {
    setSelectedHall(hall);
    // console.log(selectedHall.sp_images);
  };

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const HandleAddToEvent=()=>{
    const eventData = {
      event_id: event_id,
      package_id: selectedHall.pack_id,
      service:'Venue' // Modify this to match your data structure
      // ... Add other necessary data for your POST request
    };
    axios.get(`/api/customer/checkVenueStatus?event_id=${event_id}`)
    .then((response)=>{
      if (response.data === true) {
        axios.post(`/api/customer/addVenuetoEvent?pack_id=${selectedHall.pack_id}&event_id=${event_id}`)
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
    console.log(pack);
   
    if (column_id !== 0) {
        const selectedPackage = selectedHall;
        const eventData = {
            event_id: event_id,
            package_id: selectedPackage.pack_id, // Modify this to match your data structure
            column_id:column_id
            // ... Add other necessary data for your POST request
        };
        axios
          .post("/api/customer/addvenuePackToCompareTable", eventData)
          .then((response) => {
            const packCount = response.data;
            console.log(packCount);
            // Perform navigation after successful POST
            navigate(`/customer/event/VenueCompare?event_id=${event_id}`);
          })
          .catch((error) => {
            console.error("Error adding event:", error);
            // Handle error if needed
          });

    } else {
      if (pack > 1) {
      } else {
        setcomparePackages(pack + 1);
        const selectedPackage = selectedHall; // Use the selected hall/package
        const eventData = {
          event_id: event_id,
          package_id: selectedPackage.pack_id, // Modify this to match your data structure
          // ... Add other necessary data for your POST request
        };
        axios
          .post("/api/customer/addvenuePackToCompare", eventData)
          .then((response) => {
            const packCount = response.data;
            console.log(packCount);
            // Perform navigation after successful POST
            navigate(`/Venue?event_id=${event_id}&packageCount=${packCount}`);
          })
          .catch((error) => {
            console.error("Error adding event:", error);
            // Handle error if needed
          });
        // navigate(`/Venue?event_id=${event_id}&packageCount=${pack + 1}`)
      }
    }
  };
  const openModal = () => {
    console.log(showModal);
    setShowModal(true);
    console.log(showModal);
  };

  const openModal1 = () => {
    // setShowForm(false    )
    setShowModal1(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const handleAddToEvent = () => {
    const selectedPackage = selectedHall; // Use the selected hall/package
    const eventData = {
      event_id: event_id,
      package_id: selectedPackage.pack_id, // Modify this to match your data structure
      // ... Add other necessary data for your POST request
    };

    axios
      .post("/api/customer/addvenuePackToEvent", eventData)
      .then((response) => {
        console.log("Event added successfully:", response.data);
        // Perform navigation after successful POST
        navigate(`/customer/eventdetails?id=${event_id}`);
      })
      .catch((error) => {
        console.error("Error adding event:", error);
        // Handle error if needed
      });
    // navigate(`/customer/eventdetails?id=${event_id}`)
  };
  console.log(halls.length);

  if (halls.length === 0) {
    return <div>Loading...</div>;
  } else {
    console.log(selectedHall);
    return (
      <>
        {event_id !== null ? (
          <div style={{ display: "flex" }}>
            <Container>
              <Row>
                <Col>
                  <Col md={10}>
                    <Image src={venue5} thumbnail className="venueDesImg" />
                  </Col>
                  <Col md={10}>
                    <Image src={venue6} thumbnail className="venueDesImg" />
                  </Col>
                  <br />
                  {/* <Link to={`/customer/eventdetails`}> */}
                  <Button
                    className="addToEvent-btn"
                    variant="primary"
                    size="lg"
                    onClick={toggleForm}
                  >
                    Add to Compare
                  </Button>{" "}
                  {/* </Link> */}
                  <Link to={`/ChatDes`}>
                    <Button
                      variant="success"
                      className="addToEvent-btn chat-btn"
                      size="lg"
                    >
                      <FaWhatsapp />
                    </Button>{" "}
                  </Link>
                </Col>

                <Col>
                  <Col md={10}>
                    <Image src={venue7} thumbnail className="venueDesImg" />
                  </Col>

                  <Col md={10}>
                    <Image src={venue8} thumbnail className="venueDesImg" />
                  </Col>
                </Col>
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
                              added to the event or do you want to compare this
                              package with another package?
                            </Form.Text>
                          </Form.Group>

                          <Button variant="primary" onClick={HandleAddToEvent}>
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
                      ) : Number(packageCount) === 1 || column_id!==0  ? (
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
                            to={`/customer/event/VenueCompare?event_id=${event_id}`}
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
                <Col>
                  <h2>Araliya Beach Hotel</h2>
                  <StarRating initialRating={4} />
                  {selectedHall !== null ? 
                  <Image src={`../../src/assets/images/uploads/${selectedHall.sp_images}`} thumbnail />:
                  <Image  thumbnail />
                  }

                  <Dropdown>
                    {selectedHall !== null ? ( // Add a check before rendering Dropdown.Toggle content
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {selectedHall.name}
                      </Dropdown.Toggle>
                    ) : (
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Select Hall Name
                      </Dropdown.Toggle>
                    )}
                    {/* <Dropdown.Item>Select one</Dropdown.Item> */}

                    <Dropdown.Menu>
                      {halls.map((hall) => (
                        <Dropdown.Item
                          key={hall.name}
                          onClick={() => handleHallSelection(hall)}
                        >
                          {" "}
                          {hall.name}
                        </Dropdown.Item>
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
            </Container>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <Sidebar />
            <Container>
              <Row>
                <Col>
                  <Col md={10}>
                    <Image src={venue5} thumbnail className="venueDesImg" />
                  </Col>
                  <Col md={10}>
                    <Image src={venue6} thumbnail className="venueDesImg" />
                  </Col>
                  <br />
                  {/* <Link to={`/customer/eventdetails`}> */}
                  <Button
                    className="addToEvent-btn"
                    variant="primary"
                    size="lg"
                    onClick={openModal}
                  >
                    Add to Compare
                  </Button>{" "}
                  {/* </Link> */}
                  <Link to={`/ChatDes`}>
                    <Button
                      variant="success"
                      className="addToEvent-btn chat-btn"
                      size="lg"
                    >
                      <FaWhatsapp />
                    </Button>{" "}
                  </Link>
                </Col>

                <Col>
                  <Col md={10}>
                    <Image src={venue7} thumbnail className="venueDesImg" />
                  </Col>

                  <Col md={10}>
                    <Image src={venue8} thumbnail className="venueDesImg" />
                  </Col>
                </Col>

                <Col>
                  <h2>Araliya Beach Hotel</h2>
                  <StarRating initialRating={4} />
                  <Image src={venue6} thumbnail />

                  <Dropdown>
                    {selectedHall !== null ? ( // Add a check before rendering Dropdown.Toggle content
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {selectedHall.name}
                      </Dropdown.Toggle>
                    ) : (
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Select Hall Name
                      </Dropdown.Toggle>
                    )}
                    {/* <Dropdown.Item>Select one</Dropdown.Item> */}

                    <Dropdown.Menu>
                      {halls.map((hall) => (
                        <Dropdown.Item
                          key={hall.name}
                          onClick={() => handleHallSelection(hall)}
                        >
                          {" "}
                          {hall.name}
                        </Dropdown.Item>
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
            </Container>

            <Modal show={showModal} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>EventXpress Policy</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Before You Select a Package Please Create An Event</p>
                <Link to={`/customer/myEvents`}>
                  <Button
                    className="addToEvent-btn"
                    variant="primary"
                    size="lg"
                  >
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

            <Modal show={showModal1} onHide={closeModal1}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>You Were Added Two Packages Before</p>
                <Link to={`/customer/event/VenueCompare?event_id=${event_id}`}>
                  <Button
                    className="addToEvent-btn"
                    variant="primary"
                    size="lg"
                  >
                    Go To Compare
                  </Button>{" "}
                </Link>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </>
    );
  }
};

export default VenueDes;
