import React from "react";
import { useState } from "react";
import Certification from "../../assets/images/cetificate.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UsersMain() {

  const [show, setShow] = useState(false);
  const [Cancel, setCancel] = useState(false);
  const [spData, setSpData] = useState([]);
  const handleCancelClose = () => setCancel(false);
  const handleCancel = () => setCancel(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();


  const location = useLocation() // access current location in the browser's url
    const queryParams = new URLSearchParams(location.search);
    const serviceProviderId = Number(queryParams.get('id'))

    useEffect(() => {
      axios
        .get(`/api/admin/getServiceProviderDetail?id=${serviceProviderId}`)
        .then((response) => {
          // console.log(response.data.serviceProviders);
          setSpData(response.data.serviceProviders);
          
        })
        .catch((error) => {
          // console.log(error);
          setError(error);
          setLoading(false);
        });
    }, []);

    const nicImg = spData.nicimage;
    const updatedSrc = `../../src/assets/images/uploads/${nicImg}`
  
    const acceptFunction = (id) => {
      axios
        .put(`/api/admin/acceptServiceProvider?id=${id}`)
        // console.log(response);
        .then((response) => {
          navigate("/Users");
          console.log("Accepted");
        })
        .catch((error) => {
          setError(error); 
          setLoading(false);
        });

    };

    const rejectFunction = (id) => {
      axios
        .delete(`/api/admin/deleteServiceProviderByAdmin?spId=${id}`)
        // console.log(response);
        .then((response) => {
          navigate("/Users");
          console.log("Deleted");
        })
        .catch((error) => {
          setError(error); 
          setLoading(false);
        });

        console.log(id);

    };


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
          {spData.name}{" "}
        </span>

        <div className="DetailsInfo">
          <div className="DetailsLeft">
            <div className="DetailsLeftIcon">
              <h3>Personal Details</h3>
              Full Name: {spData.name}
              <br />
              Email: {spData.email}
              <br />
              NIC:{spData.nic}
              <br />
              Contact Number: {spData.contactno}
            </div>
            
          </div>
          <div className="DetailsRight">

            <img src={updatedSrc} style={{ marginLeft: "20%", width:'300px', height:'350px' }} />
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
              <Button variant="primary" onClick={()=>acceptFunction(spData.id)}>
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
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCancelClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={()=>rejectFunction(spData.id)}
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
