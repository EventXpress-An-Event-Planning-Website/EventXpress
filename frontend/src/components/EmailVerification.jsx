import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const EmailVerification = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const verificationToken = queryParams.get('verificationToken');
    console.log(email,verificationToken);
  const [verificationResponse, setVerificationResponse] = useState('Verifying...');

  useEffect(() => {
    // Construct the URL for the email verification endpoint
    const verificationUrl = `/api/users/verify?email=${email}&verificationToken=${verificationToken}`;

    // Send the verification request using Axios
    axios
      .get(verificationUrl)
      .then((response) => {
        // If successful, update the response
        setVerificationResponse('Email verification successful');
      })
      .catch((error) => {
        // If there's an error, update the response accordingly
        console.log(error);
        setVerificationResponse('Invalid verification token or token expired');
      });
  }, [email, verificationToken]);

  return (
    <div>
      <h2>Email Verification Status</h2>
      <p>{verificationResponse}</p>
    </div>
  );
};

export default EmailVerification;
