import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import Header from '../components/header'

const RegisterScreen = () => {
  return (
    <>
      <div className="register-screen">
        <div className="register-container customer-side">
          <div className="register-content register-content-customer">
            <h1>Want to get our <br></br>service?</h1>
            <h2>Register as a Customer</h2>
            <Link to="customer">
              <Button variant="primary" className="me-4">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
        <div className="register-container sp-side">
          <div className="register-content register-content-service-provide">
            <h1>Want to become a  <br></br>Service Provider?</h1>
            <h2>Register as a Service Provider</h2>
            <Link to="serviceProvider">
              <Button variant="primary" className="me-3">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterScreen
