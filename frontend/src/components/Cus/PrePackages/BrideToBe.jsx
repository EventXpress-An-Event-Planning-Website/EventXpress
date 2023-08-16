import React from "react";
import Sidebar from "../PrePackages/Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';
import FilterPackages from "../Pages/FilterPackages";

import Bride1 from '../../../assets/images/Bride1.jpg';
import Bride2 from '../../../assets/images/Bride2.jpg';
import Bride3 from '../../../assets/images/Bride3.jpg';
import Bride4 from '../../../assets/images/Bride4.jpg';
import Bride5 from '../../../assets/images/Bride5.jpg';
import Bride6 from '../../../assets/images/Bride6.jpg';
import Bride7 from '../../../assets/images/Bride7.jpg';
import Bride8 from '../../../assets/images/Bride8.jpg';

const BrideToBe = () => {

    const BridesData = [
        {
            id: 1,
            image: Bride1,
            title: 'Party Wings',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: Bride6,
            title: 'We Plan Better',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: Bride7,
            title: 'Art Of Wonderland',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: Bride8,
            title: 'One Party Point',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: Bride5,
            title: 'Romantic Oasis',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: Bride3,
            title: 'Little Buds',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: Bride2,
            title: 'Party In Style',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: Bride4,
            title: 'Candy Hearts',
            text: ' Some quick example text to build on the card title'
        }
    ];

    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <Stack gap={0}>

                <div>
                <h3 className="s-title">Bride To Be Packages</h3>
                </div>

                <div>

                <div className="row">
                <FilterPackages/>
                    {BridesData.map((Bride) => (
                        <div className="col-md-3" key={Bride.id}>

                            <Card className="s-card" >
                                <Card.Img className="s-img" variant="top" src={Bride.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{Bride.title}</Card.Title>
                                    <Card.Text className="s-text">{Bride.text}</Card.Text>
                                    <Link to={`/BrideDes`}>
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

export default BrideToBe;