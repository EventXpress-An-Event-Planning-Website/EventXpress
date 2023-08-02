import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

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
            title: 'Candy Click',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: photo6,
            title: 'Daisy Pixels',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: photo7,
            title: 'Picture Perfect',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: photo8,
            title: 'Shutter Surprise',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: photo1,
            title: 'Photamora',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: photo3,
            title: 'Memoclips',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: photo2,
            title: 'Click It',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: photo4,
            title: 'Capturra',
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

                    {photosData.map((photo) => (
                        <div className="col-md-3 custom-col" key={photo.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={photo.image} />
                                <Card.Body>
                                    <Card.Title>{photo.title}</Card.Title>
                                    <Card.Text className="s-text">{photo.text}</Card.Text>
                                    <Link to={`/photoDes`}>
                                        <Button className="s-btn" variant="primary">Select</Button>
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