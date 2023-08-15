// import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { FaPlus, FaCalendarAlt, FaListAlt, FaTicketAlt } from 'react-icons/fa';
// import { FaPlus } from 'react-icons/fa';

const HomeIcons = () => {
  return (
    <Container className="home_icons">
      <Row>
        <Col>
          <a href="/ServiceProvider/packageForm" className='icon'><FaPlus /></a>
          <h4>Create Normal or Predefined Packages</h4>
        </Col>

        {/* <Col>
          <a href="/ServiceProvider/myEventhome" className='icon'><FaPlus /></a>
          <h4>Create Event</h4>
        </Col> */}

        <Col>
          <a href="/ServiceProvider/packagesView" className='icon'><FaListAlt /></a>
          <h4>My Packages</h4>
        </Col>

        <Col>
          <a href="/customer/buyTickets" className='icon'><FaTicketAlt /></a>
          <h4>Buy Tickets</h4>
        </Col>

        <Col>
          <a href="/serviceProvider/availability" className='icon'><FaCalendarAlt /></a>
          <h4>Calendar</h4>
        </Col>
        
      </Row>
    </Container>
    
  )
}

export default HomeIcons