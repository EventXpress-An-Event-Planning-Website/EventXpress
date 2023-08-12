import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';

const EmailVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const verificationToken = queryParams.get('verificationToken');
  const role = queryParams.get('role');

  const [verificationResponse, setVerificationResponse] = useState('Verifying...');
  const [isVerificationSuccessful, setIsVerificationSuccessful] = useState(false);

  useEffect(() => {
    const verificationUrl = `/api/users/verify?email=${email}&verificationToken=${verificationToken}&role=${role}`;

    axios
      .get(verificationUrl)
      .then((response) => {
        setIsVerificationSuccessful(true);
        setVerificationResponse('Email verification successful');
      })
      .catch((error) => {
        console.log(error);
        setIsVerificationSuccessful(false);
        setVerificationResponse('Invalid verification token or token expired');
      });
  }, []);

  const handleLoginRedirect = () => {
    navigate(`/login?email=${email}`)
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        {isVerificationSuccessful ? (
          <BsCheckCircle size={100} color="green" className="mb-3" />
        ) : (
          <BsXCircle size={80} color="red" className="mb-3" />
        )}
        {isVerificationSuccessful ? (
          <>
            <h2>Email has been verified.</h2>
            <h3>Now you can login to EventXpress using this email.</h3>
            <button className="btn-primary" style={{
              width: '150px',
              color: 'white',   
              fontSize: '1rem'      
            }} 
            onClick={handleLoginRedirect}>Login</button>
          </>
        ) : (
          <>
            <h2>Email verification failed.</h2>
            <h3>Please try again. </h3>
          </>
        )}
      </div>
    </Container>
  );
};

export default EmailVerification;
