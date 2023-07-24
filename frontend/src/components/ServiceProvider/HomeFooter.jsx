// import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import logo from "../../assets/images/logo.png"
import { FaPhoneVolume } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const HomeFooter = () => {
  return (
    <Container className="footer">
        <Row>
          <Col className="logo">
              <img className='picture' src={logo} />
              <p>Make your dream <span>event come true</span></p>
          </Col>

          <Col className="contact">
            <h4>Contact US</h4>
            <a href="" className='icon'><FaPhoneVolume /> +94 33 234 1249</a><br></br>
            <a href="" className='icon'><FaEnvelopeOpenText />  eventxpress@gmail.com</a><br></br>
            <a href="" className='icon'><FaMapMarkerAlt />  UCSC Complex, Reid Avenue, Colombo 07</a>
          </Col>

          <Col className="slogo">
            <h4>Folllow us on social media</h4>
            <a href="" className="SIcon"><FaFacebookF /></a>
            <a href="" className="SIcon"><FaInstagram /></a>
            <a href="" className="SIcon"><FaLinkedinIn /></a>
          </Col>

        </Row>
    </Container>
  )
}

export default HomeFooter