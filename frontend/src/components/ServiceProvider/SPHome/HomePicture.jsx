import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic from '../../../assets/images/djfes.jpg';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const HomePicture = () => {
  const userInfo = localStorage.getItem("userInfo");
  const parsedUserInfo = JSON.parse(userInfo);
  const userEmail = parsedUserInfo.email;
  const userId = parsedUserInfo.id;

  const [loading, setLoading] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const publishableKey = 'pk_test_51NoJfsSAEsih9IEozgBErrqrFJ55gGXNa9TnileDPUxzEGYfIobHHzgIWTQ6fM01rgi8qxPFuhVHsvPMj4tqay780068h5NhjO'
  const imageStyle = {
    position: 'relative',
  };
  const MySwal = withReactContent(Swal);

  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
    });
    setIsPaymentSuccessful(true);
  };

  const labelStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  };

  const handlePayment = async (token) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/payment/getSubscription', {
        serviceProviderId: userId,
        amount: 100000,
        token: token,
      });
      handleSuccess()
      // Handle the response from your server (e.g., show a success message)
      console.log('Payment successful:', response.data);
    } catch (error) {
      handleFailure()
      console.error('Payment failed:', error);
    } finally {
      // Hide the loader after the response is received
      setLoading(false);
    }
  };

  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 1000,
    });
  };

  return (
    <section className="home_pic">
      <div style={imageStyle}>
        <img className='picture' src={pic} alt="Your Image" />
        <div style={labelStyle}>
          {isPaymentSuccessful ? (
            // Render this label when payment is successful
            <p style={{ display: 'none' }}>Payment Successful Label</p>
          ) : (
            // Render the Renew Subscription button when payment is not successful

            <div style={{ textAlign: 'center' }}>
              <p>Paid your subscription for continuous services</p>
              <StripeCheckout
                stripeKey={publishableKey}
                token={handlePayment}
                email={userEmail}
                amount={100000}
                currency="LKR"
                name="Renew Subscription"
                description="Renew your subscription"
                image={pic}
              >
                <Button style={buttonStyle}>Renew Subscription</Button>
              </StripeCheckout>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomePicture;
