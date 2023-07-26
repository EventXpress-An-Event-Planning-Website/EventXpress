import React from "react";
import Sidebar from "../PrePackages/Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';

import birthday1 from '../../../assets/images/birthday1.jpg';
import birthday2 from '../../../assets/images/birthday2.jpg';
import birthday3 from '../../../assets/images/birthday3.jpg';
import birthday4 from '../../../assets/images/birthday4.jpg';
import birthday5 from '../../../assets/images/birthday5.jpg';
import birthday6 from '../../../assets/images/birthday6.jpg';
import birthday7 from '../../../assets/images/birthday7.jpg';
import birthday8 from '../../../assets/images/birthday8.jpg';

const Birthday = () => {

    const birthdaysData = [
        {
            id: 1,
            image: birthday5,
            title: 'Araliya Beach Resort',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: birthday6,
            title: 'Marino Beach Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: birthday7,
            title: 'Green Palace Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: birthday8,
            title: 'Cinnamon Lakeside',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: birthday1,
            title: 'Grand View Hotel ',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: birthday3,
            title: 'Queenswood Cottage',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: birthday2,
            title: 'Mango Tree Villa Bentota',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: birthday4,
            title: 'Galway Heights Hotel ',
            text: ' Some quick example text to build on the card title'
        }
    ];

    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <Stack gap={0}>

                <div>
                <h3 className="s-title">Birthday Packages</h3>
                </div>

                <div>

                <div className="row">

                    {birthdaysData.map((birthday) => (
                        <div className="col-md-3" key={birthday.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={birthday.image} />
                                <Card.Body>
                                    <Card.Title>{birthday.title}</Card.Title>
                                    <Card.Text className="s-text">{birthday.text}</Card.Text>
                                    <Link to={`/VenueDes`}>
                                        <Button className="s-btn" variant="primary">Select</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
            </Stack>

            </div>
        </>
    );
};

export default Birthday;