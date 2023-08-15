import React from "react";
import Sidebar from "../PrePackages/Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';

import Anniversary1 from '../../../assets/images/Anniversary1.jpg';
import Anniversary2 from '../../../assets/images/Anniversary2.jpg';
import Anniversary3 from '../../../assets/images/Anniversary3.jpg';
import Anniversary4 from '../../../assets/images/Anniversary4.jpg';
import Anniversary5 from '../../../assets/images/Anniversary5.jpg';
import Anniversary6 from '../../../assets/images/Anniversary6.jpg';
import Anniversary7 from '../../../assets/images/Anniversary7.jpg';
import Anniversary8 from '../../../assets/images/Anniversary8.jpg';

const Anniversary = () => {

    const AnniversaryData = [
        {
            id: 1,
            image: Anniversary1,
            title: 'The Grand Affair',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: Anniversary2,
            title: 'Blue Sapphire',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: Anniversary8,
            title: 'Love All Around',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: Anniversary7,
            title: 'The Pink Pearl',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: Anniversary5,
            title: 'Whispers of Love',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: Anniversary3,
            title: 'Warm Heart',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: Anniversary6,
            title: 'Garden of Eden',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: Anniversary4,
            title: 'Blooming Florist',
            text: ' Some quick example text to build on the card title'
        }
    ];

    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <Stack gap={0}>

                <div>
                <h3 className="s-title">Anniversary Packages</h3>
                </div>

                <div>

                <div className="row">

                    {AnniversaryData.map((Anniversary) => (
                        <div className="col-md-3" key={Anniversary.id}>

                            <Card className="s-card" >
                                <Card.Img className="s-img" variant="top" src={Anniversary.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{Anniversary.title}</Card.Title>
                                    <Card.Text className="s-text">{Anniversary.text}</Card.Text>
                                    <Link to={`/AnniversaryDes`}>
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

export default Anniversary;