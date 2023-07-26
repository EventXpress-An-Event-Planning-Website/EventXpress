import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'

const RegisterScreen = () => {
  return (
    <div className="register-screen">
      <Row className="register-row">
        <Col className="purple-bg register-col" sm={6}>
          <div className="register-content">
            <h1>Want to get our service?</h1>
            <h3>Register as a Customer</h3>
            <Link to="customer">
              <Button variant="primary" className="me-3">
                Sign Up
              </Button>
            </Link>
          </div>
        </Col>
        <Col className="white-bg register-col" sm={6}>
          <div className="register-content">
            <h1>Want to become a Service Provider?</h1>
            <h3>Register as a Service Provider</h3>
            <Link to="serviceProvider">
              <Button variant="primary" className="me-3">
                Sign Up
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default RegisterScreen
