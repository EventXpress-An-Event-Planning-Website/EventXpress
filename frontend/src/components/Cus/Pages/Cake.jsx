import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cake1 from '../../../assets/images/cake1.jpg';
import cake2 from '../../../assets/images/cake2.jpg';
import cake3 from '../../../assets/images/cake3.jpg';
import cake4 from '../../../assets/images/cake4.jpg';
import cake5 from '../../../assets/images/cake5.jpg';
import cake6 from '../../../assets/images/cake6.jpg';
import cake7 from '../../../assets/images/cake7.jpg';
import cake8 from '../../../assets/images/cake8.jpg';

const Cake = () => {

    const cakesData = [
        {
            id: 1,
            image: cake1,
            title: 'Araliya Beach Resort',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: cake2,
            title: 'Marino Beach Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: cake3,
            title: 'Green Palace Colombo',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: cake4,
            title: 'Cinnamon Lakeside',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: cake5,
            title: 'Grand View Hotel ',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: cake6,
            title: 'Queenswood Cottage',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: cake7,
            title: 'Mango Tree Villa Bentota',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: cake8,
            title: 'Galway Heights Hotel ',
            text: ' Some quick example text to build on the card title'
        }
    ];

    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <div className="row">

                    {cakesData.map((cake) => (
                        <div className="col-md-3" key={cake.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={cake.image} />
                                <Card.Body>
                                    <Card.Title>{cake.title}</Card.Title>
                                    <Card.Text className="s-text">{cake.text}</Card.Text>
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



export default Cake;