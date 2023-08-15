// import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import wedding from "../../../assets/images/weddingout.jpg"
import food from "../../../assets/images/food.jpg"
import cam from "../../../assets/images/cam.jpg"
import party from "../../../assets/images/party.webp"

const HomePackages = () => {
  return (
    <Container className="home_pack">
        <h2>Your Packages</h2>
        <Row>
          <Col><img className='picture' src={wedding} /></Col>
          <Col><img className='picture' src={food} /></Col>
          <Col><img className='picture' src={cam} /></Col>
          <Col><img className='picture' src={party} /></Col>
        </Row>
        <Link to={`/ServiceProvider/packagesView`}><Button className="more_btn">View Packages</Button></Link> 
    </Container>
  )
}

export default HomePackages