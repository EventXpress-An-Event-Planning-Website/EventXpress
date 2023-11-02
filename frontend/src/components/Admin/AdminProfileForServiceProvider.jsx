import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function AdminProfileForServiceProvider() {
  const navigate = useNavigate();
  const location = useLocation(); // access current location in the browser's url
  const queryParams = new URLSearchParams(location.search);
  const [serviceProvider, setServiceProvider] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const customerId = Number(queryParams.get("cusId"));
  const serviceProviderId = Number(queryParams.get("spId"));

  useEffect(() => {
    axios
      .get(`/api/admin/getServiceProviderDetail?id=${serviceProviderId}`)
      .then((response) => {
        setServiceProvider(response.data.serviceProviders);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

  const desableFunction = (id) => {
    axios
      .put(`/api/admin/desableServiceProviderByAdmin?spId=${id}`)
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


  const profileimage = serviceProvider.profileimage;
  const updatedSrc = `../../src/assets/images/uploads/${profileimage}`
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={updatedSrc}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" , height: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{serviceProvider.name}</p>
                <p className="text-muted mb-4">{serviceProvider.location}</p>
                <div className="d-flex justify-content-center mb-2">
                  { serviceProvider.isverifiedbyadmin ? (
                 <MDBBtn onClick={() => desableFunction(serviceProviderId)}>
                    Deactivate
                  </MDBBtn> ):( <MDBBtn outline className="ms-1">Activate</MDBBtn>
                  ) }

                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {serviceProvider.name}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                    {serviceProvider.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                    {serviceProvider.contactno}
                    
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Location</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {serviceProvider.location}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>NIC</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {serviceProvider.nic}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Facebook</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {serviceProvider.facebooklink}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Instagram</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {serviceProvider.instagramlink}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Twitter</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {serviceProvider.twitterlink}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
