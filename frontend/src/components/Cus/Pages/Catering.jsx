import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import catering1 from '../../../assets/images/catering-1.webp';
import catering2 from '../../../assets/images/catering-2.webp';
import catering3 from '../../../assets/images/catering-3.webp';
import catering4 from '../../../assets/images/catering-4.webp';
import catering5 from '../../../assets/images/catering-5.webp';
import catering6 from '../../../assets/images/catering-6.webp';
import catering7 from '../../../assets/images/catering-7.webp';
import catering8 from '../../../assets/images/catering-8.webp';

const Catering = () => {

    const cateringsData = [
        {
            id: 1,
            image: catering1,
            title: 'Araliya Beach Resort',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: catering2,
            title: 'Marino Beach Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: catering3,
            title: 'Green Palace Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: catering4,
            title: 'Cinnamon Lakeside',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: catering5,
            title: 'Grand View Hotel ',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: catering6,
            title: 'Queenswood Cottage',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: catering7,
            title: 'Mango Tree Villa Bentota',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: catering8,
            title: 'Galway Heights Hotel ',
            text: ' Some quick example text to build on the card title'
        }
    ];

    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <div className="row">

                    {cateringsData.map((catering) => (
                        <div className="col-md-3" key={catering.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={catering.image} />
                                <Card.Body>
                                    <Card.Title>{catering.title}</Card.Title>
                                    <Card.Text className="s-text">{catering.text}</Card.Text>
                                    <Button className="s-btn" variant="primary">Select</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};



export default Catering;