// import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { FaPlus, FaCalendarAlt, FaListAlt, FaTicketAlt, FaBell } from 'react-icons/fa';
// import { FaPlus, FaCalendarAlt, FaListAlt, FaTicketAlt } from 'react-icons/fa';
// import { BiSolidMessageAltDetail } from 'react-icons/bi';
// import { FaPlus } from 'react-icons/fa';


const HomeIcons = () => {
  return (
    <Container className="home_icons">
      <h2>Your Services</h2>
      <Row>
        <Col className='h_icon'>
          <a href="/ServiceProvider/packageForm" className='icon'><FaPlus /></a>
          <h4>Create Normal or Predefined Packages</h4>
        </Col>

        <Col className='h_icon'>
          <a href="/ServiceProvider/packagesView" className='icon'><FaListAlt /></a>
          <h4>My Packages</h4>
        </Col>

        <Col className='h_icon'>
          <a href="/customer/buyTickets" className='icon'><FaTicketAlt /></a>
          <h4>Buy Tickets</h4>
        </Col>

        <Col className='h_icon'>
          <a href="/serviceProvider/availability" className='icon'><FaCalendarAlt /></a>
          <h4>Calendar</h4>
        </Col>

        <Col className='h_icon'>
          <a href="/ServiceProvider/Requests" className='icon'><FaBell /></a>
          <h4>Request</h4>
        </Col>
        
      </Row>
    </Container>
    
  )
}

export default HomeIcons