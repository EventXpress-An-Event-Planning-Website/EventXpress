import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

import deco1 from '../../../assets/images/deco1.jpg';
import deco2 from '../../../assets/images/deco2.jpg';
import deco3 from '../../../assets/images/deco3.jpg';
import deco4 from '../../../assets/images/deco4.jpg';
import deco5 from '../../../assets/images/deco5.jpg';
import deco6 from '../../../assets/images/deco6.jpg';
import deco9 from '../../../assets/images/deco9.jpg';
import deco8 from '../../../assets/images/deco8.jpg';

const Decoration = () => {



    const decosData = [
        {
            id: 1,
            image: deco1,
            title: 'Cool Party Rentals',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: deco9,
            title: 'Party House Decor',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: deco3,
            title: 'Epic Party Magic',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: deco4,
            title: 'Party Funland',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: deco6,
            title: 'Creative Dreams',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: deco5,
            title: 'Glitter and Glue',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: deco2,
            title: 'Streamers Suprise',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: deco8,
            title: 'Fun Times Inc',
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
                <h1 className="pckg-name">Decoration Packages</h1>
                    {decosData.map((deco) => (
                        <div className="col-md-3 custom-col" key={deco.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={deco.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{deco.title}</Card.Title>
                                    <Card.Text className="s-text">{deco.text}</Card.Text>
                                    <Link to={`/DecorationDes`}>
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

export default Decoration;