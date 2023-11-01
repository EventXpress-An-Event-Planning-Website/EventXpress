import React, { useState, useEffect } from "react";
import Sidebar from "../../Cus/PrePackages/Sidebar";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import deco9 from "../../../assets/images/deco9.jpg";
import sound5 from "../../../assets/images/sound5.jpg";
import photo4 from "../../../assets/images/photo4.jpg";
import catering4 from "../../../assets/images/catering-4.webp";
import cake4 from "../../../assets/images/cake4.jpg";
import venue5 from "../../../assets/images/venue5.jpg";
import cake9 from "../../../assets/images/cake9.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios"; // making HTTP requests
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

const BirthdayDes = () => {
  const location = useLocation(); // access current location in the browser's url
  const queryParams = new URLSearchParams(location.search);
  const package_id = queryParams.get("package_id");
  const event_id = queryParams.get("event_id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [birthdayDesData, setBirthdayDesData] = useState([]);
  const [birthData, setBirthData] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [price, setPrice] = useState(0);
  const [finalPrice, setFinalPrize] = useState(0);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchedData = async () => {
      axios
        .get(
          `/api/customer/viewPreBirthdayPackageDetails?package_id=${package_id}`
        )
        .then((response) => {
          setBirthData(response.data);
          setLoading1(false);
          console.log(birthData);
        })
        .catch((error) => {
          setError(error);
          setLoading1(false);
        });
    };
    const fetchedpackData = async () => {
      axios
        .get(
          `/api/customer/viewBirthdayPackageDetails?package_id=${package_id}`
        )
        .then((response) => {
          setBirthdayDesData(response.data);
          setLoading(false);
          console.log(birthdayDesData);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      for (const birthdayDes of birthdayDesData) {
        if (birthdayDes.length !== 0 && birthdayDes[0] !== undefined) {
          totalPrice += parseFloat(birthdayDes[0].package_price);
        }
      }
      setPrice(totalPrice);
    };

    if (event_id === null) {
      fetchedData();
      fetchedpackData();
      calculateTotalPrice();
    } else {
      fetchedData();
      fetchedpackData();
      calculateTotalPrice();
    }
  }, [loading]);
  // console.log(birthdayDesData);
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  // const birthdayDesData = [
  //     {
  //         id: 1,
  //         image: cake9,
  //         pckgName: 'Black Forest Cake',
  //         title: 'by Cake Talent',
  //         link: '/CakeDes'
  //     },
  //     {
  //         id: 2,
  //         image: deco9,
  //         pckgName: '21st Birthday Package',
  //         title: 'by Party House Decor',
  //         link: '/DecorationDes'
  //     },
  //     {
  //         id: 3,
  //         image: sound5,
  //         pckgName: 'DJ package',
  //         title: 'by Pure AV',
  //         link: '/SoundAndLightDes'
  //     },
  //     {
  //         id: 4,
  //         image: photo4,
  //         pckgName: 'Silver Package',
  //         title: 'by Capturra',
  //         link: '/PhotographyDes'
  //     },
  //     {
  //         id: 5,
  //         image: catering4,
  //         pckgName: 'Birthday Package',
  //         title: 'by Classics catering',
  //         link: '/CateringDes'
  //     }
  // ];
  const navigate = useNavigate();

  const handleViewServiceProvider = () => {
    navigate("/customer/PredefinePackage/ServiceProvider-profile");
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          {birthData.length != 0 ? (
            <h3 className="s-title">{birthData[0].prepackage_title}</h3>
          ) : null}
          {birthData.length != 0 ? (
            <p className="s-para" onClick={handleViewServiceProvider}>
              by {birthData[0].name}
            </p>
          ) : null}

          <div className="b-container">
            {/* <Container> */}
            <Row>
              {birthdayDesData.map((birthdayDes) =>
                birthdayDes.length !== 0 ? (
                  birthdayDes[0] === undefined ? null : (
                    <Col
                      sm={2}
                      className="b-pcg-img"
                      key={birthdayDes[0].package_title}
                    >
                      <Card style={{ width: "15rem" }} className="mb-2">
                        <Card.Header className="pckg-header">
                          {birthdayDes[0].package_title}
                        </Card.Header>
                        <Card.Body>
                          <Link to={birthdayDes.link}>
                            <Card.Img
                              className="s-img"
                              variant="top"
                              src={`../../src/assets/images/uploads/${birthdayDes[0].sp_images}`}
                            />
                          </Link>
                          <Card.Text className="s-text">
                            {birthdayDes.title}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                ) : null
              )}
            </Row>
            <Row className="b-description">
              <Col sm>
                <div className="discount_container_predefine"> 
                  <h5>
                    <b>Normal Budget For This Package {price} </b>
                    <br />
                    {birthData[0] != undefined ? (
                      <b>{birthData[0].prepackage_discount}% OFF</b>
                    ) : null}
                    <br />
                    {birthData[0] != undefined ? (
                      <b>
                        All For Only :-{" "}
                        {price -
                          (price * birthData[0].prepackage_discount) / 100}
                      </b>
                    ) : null}
                    <br />
                    <br />
                    Included services :
                  </h5>
                </div>
                <ListGroup as="ol">
                  {birthdayDesData[0] != undefined ? (
                    <ListGroup.Item as="li">
                      Venue Details :- {birthdayDesData[0][0].package_op_count}{" "}
                      Guests, Area: {birthdayDesData[0][0].package_op_area} ,
                      Type: {birthdayDesData[0][0].package_op_type}
                    </ListGroup.Item>
                  ) : null}

                  {birthdayDesData[5] != undefined ? (
                    <ListGroup.Item as="li">
                      Decoration Items :-{" "}
                      {birthdayDesData[5][0].package_decoelements}
                    </ListGroup.Item>
                  ) : null}
                  {birthdayDesData[1] != undefined ? (
                    <ListGroup.Item as="li">
                      Menu Items : {birthdayDesData[1][0].package_menu}
                    </ListGroup.Item>
                  ) : null}
                  {birthdayDesData[2] != undefined ? (
                    <ListGroup.Item as="li">
                      Cake Details :- Serving Size :{" "}
                      {birthdayDesData[2][0].serving_size}
                    </ListGroup.Item>
                  ) : null}
                  {birthdayDesData[3] != undefined ? (
                    <ListGroup.Item as="li">
                      Photograohy Details :- Tools :{" "}
                      {birthdayDesData[3][0].package_tools}, Photo Delivery
                      Format : {birthdayDesData[3][0].package_format}
                    </ListGroup.Item>
                  ) : null}
                  {birthdayDesData[6] != undefined ? (
                    <ListGroup.Item as="li">
                      Sound Source :- {birthdayDesData[6][0].sound_source},
                      Lights Details:- {birthdayDesData[6][0].package_lights}
                    </ListGroup.Item>
                  ) : null}
                </ListGroup>
                <h4>
                  <br />
                  <b>If you need more changes price will be varied.</b>
                </h4>

                <Button className="s-btn" variant="primary" onClick={openModal}>
                  Contact Service Provider
                </Button>
              </Col>
            </Row>
            {/* </Container> */}
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Service Provider's Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Service Provider Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={birthData[0].name}
                  disabled
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={birthData[0].contactno}
                  disabled
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  value={birthData[0].email}
                  disabled
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={birthData[0].location}
                  disabled
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={closeModal}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BirthdayDes;
