import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import FilterPackages from "./FilterPackages";

import photo1 from '../../../assets/images/photo1.jpg';
import photo2 from '../../../assets/images/photo2.jpg';
import photo3 from '../../../assets/images/photo3.jpg';
import photo4 from '../../../assets/images/photo4.jpg';
import photo5 from '../../../assets/images/photo5.jpg';
import photo6 from '../../../assets/images/photo6.jpg';
import photo7 from '../../../assets/images/photo7.jpg';
import photo8 from '../../../assets/images/photo8.jpg';

const Photography = () => {



    const photosData = [
        {
            id: 1,
            image: photo5,
            pckgName: 'Silver Package',
            title: 'by Candy Click',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: photo6,
            pckgName: 'Elegant Package',
            title: 'by Daisy Pixels',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: photo7,
            pckgName: 'Gold Package',
            title: 'by Picture Perfect',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: photo8,
            pckgName: 'Superior Package',
            title: 'by Shutter Surprise',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: photo1,
            pckgName: 'Birthday Package',
            title: 'by Photamora',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: photo3,
            pckgName: 'Superior Package',
            title: 'by Memoclips',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: photo2,
            pckgName: 'Platinum Package',
            title: 'by Click It',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: photo4,
            pckgName: 'Birthday Package',
            title: 'by Capturra',
            text: ' Some quick example text to build on the card title'
        }
    ];

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }


    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <div className="row custom-row">
                <FilterPackages/>
                    <h1 className="pckg-name">Photography Packages</h1>
                    {photosData.map((photo) => (
                        <div className="col-md-3 custom-col" key={photo.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={photo.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{photo.pckgName}</Card.Title>
                                    <Card.Text className="s-main-title-pckg">{photo.title}</Card.Text>
                                    <Card.Text className="s-text">{photo.text}</Card.Text>
                                    <Link to={`/PhotographyDes`}>
                                        <Button className="s-btn" variant="primary">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className="s-pagination">
                <div>
                    <Pagination>{items}</Pagination>
                </div>

            </div>
        </>
    );
};

export default Photography;