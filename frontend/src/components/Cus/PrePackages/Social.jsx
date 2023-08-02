import React from "react";
import Sidebar from "../PrePackages/Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';

import Social1 from '../../../assets/images/Social1.jpg';
import Social2 from '../../../assets/images/Social2.jpg';
import Social3 from '../../../assets/images/Social3.jpg';
import Social4 from '../../../assets/images/Social4.jpg';
import Social5 from '../../../assets/images/Social5.jpg';
import Social6 from '../../../assets/images/Social6.jpg';
import Social7 from '../../../assets/images/Social7.jpg';
import Social8 from '../../../assets/images/Social8.jpg';

const Social = () => {

    const SocialData = [
        {
            id: 1,
            image: Social1,
            title: 'Araliya Beach Resort',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: Social2,
            title: 'Marino Beach Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: Social8,
            title: 'Green Palace Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: Social6,
            title: 'Cinnamon Lakeside',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: Social5,
            title: 'Grand View Hotel ',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: Social3,
            title: 'Queenswood Cottage',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: Social7,
            title: 'Mango Tree Villa Bentota',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: Social4,
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
                <h3 className="s-title">Social Event Packages</h3>
                </div>

                <div>

                <div className="row">

                    {SocialData.map((Social) => (
                        <div className="col-md-3" key={Social.id}>

                            <Card className="s-card" >
                                <Card.Img className="s-img" variant="top" src={Social.image} />
                                <Card.Body>
                                    <Card.Title>{Social.title}</Card.Title>
                                    <Card.Text className="s-text">{Social.text}</Card.Text>
                                    <Link to={`/SocialDes`}>
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

export default Social;