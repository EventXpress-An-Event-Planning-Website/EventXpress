import React from "react";
import { useState } from "react";
import Certification from "../../assets/images/cetificate.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function UsersMain() {
  const [show, setShow] = useState(false);
  const [Cancel, setCancel] = useState(false);

  const handleCancelClose = () => setCancel(false);
  const handleCancel = () => setCancel(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mainUsers ">
      <div className="DetailsBox">
        <span
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "30px",
            marginLeft: "45px",
          }}
        >
          {" "}
          Mr. Naveen Rajan{" "}
        </span>

        <div className="DetailsInfo">
          <div className="DetailsLeft">
            <div className="DetailsLeftIcon">
              <h3>Personal Details</h3>
              Full Name: Naveen Rajan
              <br />
              Email: naveen@gmail.com
              <br />
              NIC:991029102v
              <br />
              Contact Number: +94771234567
            </div>
            <div className="DetailsLeftIcon">
              <h3>Business Details</h3>
              Business Name: Navis Photography
              <br />
              Business Email:photography.navi@gmail.com
              <br />
              Business registration number:2002/South/123
              <br />
              Business Type: Photography
              <br />
              Business Address: No. 123, Galle Road, Colombo 03
            </div>
          </div>
          <div className="DetailsRight">
            <img src={Certification} style={{ marginLeft: "20%" }} />
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ position: "absolute", bottom: "10%", right: "20%", backgroundColor:"#23C309" }}
            >
              Accept
            </Button>
            <Button
              variant="primary"
              onClick={handleCancel}
              style={{ position: "absolute", bottom: "10%", right: "10%", backgroundColor:"#C31B07"   }}
            >
              Reject
            </Button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Accept Service Provider</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={Cancel} onHide={handleCancelClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "red" }}>
                Reject Service Provider
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Give the reason</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCancelClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={handleCancelClose}
                style={{ backgroundColor: "red" }}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default UsersMain;
