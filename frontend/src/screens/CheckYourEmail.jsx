import React from 'react';
import { Container } from 'react-bootstrap';
import { BsCheckCircle } from 'react-icons/bs';

const CheckYourEmail = () => {

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <>
                    <BsCheckCircle size={100} color="green" className="mb-3" />
                    <h2>Email has been sent.</h2>
                    <h3>Please check your email and continue</h3>

                </>
            </div>
        </Container>
    )
};

export default CheckYourEmail;
