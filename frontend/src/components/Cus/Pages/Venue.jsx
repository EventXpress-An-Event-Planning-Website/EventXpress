import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

import venue1 from '../../../assets/images/venue1.jpg';
import venue2 from '../../../assets/images/venue2.jpg';
import venue3 from '../../../assets/images/venue3.jpg';
import venue4 from '../../../assets/images/venue4.jpg';
import venue5 from '../../../assets/images/venue5.jpg';
import venue6 from '../../../assets/images/venue6.jpg';
import venue7 from '../../../assets/images/venue7.jpg';
import venue8 from '../../../assets/images/venue8.jpg';

const Venue = () => {

    const venuesData = [
        {
            id: 1,
            image: venue5,
            title: 'Araliya Beach Resort',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: venue6,
            title: 'Marino Beach Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: venue7,
            title: 'Green Palace Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: venue8,
            title: 'Cinnamon Lakeside',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: venue1,
            title: 'Grand View Hotel ',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: venue3,
            title: 'Queenswood Cottage',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: venue2,
            title: 'Mango Tree Villa Bentota',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: venue4,
            title: 'Galway Heights Hotel ',
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

                    {venuesData.map((venue) => (
                        <div className="col-md-3 custom-col" key={venue.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={venue.image} />
                                <Card.Body>
                                    <Card.Title>{venue.title}</Card.Title>
                                    <Card.Text className="s-text">{venue.text}</Card.Text>
                                    <Link to={`/VenueDes`}>
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



export default Venue;