import React from "react";
import Sidebar from "../PrePackages/Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';
import FilterPackages from "../Pages/FilterPackages";

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
            title: 'Forever Young-ish',
            text: 'Budget range of Rs. 95,000/- to 110,000/-'
        },
        {
            id: 2,
            image: birthday6,
            title: 'Fun to be One',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: birthday7,
            title: 'Ringing in the 21st',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: birthday8,
            title: 'Fabulous Four Fairyland',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: birthday1,
            title: '21 Karat Gold Party',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: birthday3,
            title: 'Starry Night Soiree',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: birthday2,
            title: 'Fifty & Fabulous',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: birthday4,
            title: 'Tacos for Two',
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
                    <FilterPackages/>

                    {birthdaysData.map((birthday) => (
                        <div className="col-md-3" key={birthday.id}>

                            <Card className="s-card" >
                                <Card.Img className="s-img" variant="top" src={birthday.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{birthday.title}</Card.Title>
                                    <Card.Text className="s-text">{birthday.text}</Card.Text>
                                    <Link to={`/BirthdayDes`}>
                                        <Button className="s-btn" variant="primary">View More</Button>
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