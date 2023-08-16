import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import FilterPackages from "./FilterPackages";

import cake1 from '../../../assets/images/cake1.jpg';
import cake2 from '../../../assets/images/cake2.jpg';
import cake3 from '../../../assets/images/cake3.jpg';
import cake4 from '../../../assets/images/cake4.jpg';
import cake5 from '../../../assets/images/cake5.jpg';
import cake6 from '../../../assets/images/cake6.jpg';
import cake7 from '../../../assets/images/cake7.jpg';
import cake8 from '../../../assets/images/cake8.jpg';
import cake9 from '../../../assets/images/cake9.png';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Cake = () => {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const package_Count= queryParams.get('packageCount')
    const event_id= queryParams.get('event_id')


    const cakesData = [
        {
            id: 1,
            image: cake9,
            title: 'Black Forest cake',
            shopName: 'by Cake Talent',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: cake2,
            shopName: 'by Dream Day Cakes',
            title: 'Eggless Chocolate Cake',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: cake3,
            shopName: 'by SweetArt Cakes',
            title: 'Violet Ribbon Cake',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: cake4,
            shopName: 'by Cake Stand Bakery',
            title: 'Gluten-free Fruit cake',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: cake5,
            shopName: 'by The Brilliant Bakers',
            title: 'Forever Together Cake',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: cake6,
            shopName: 'by First taste cake',
            title: 'Strawberry Heaven Cake',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: cake7,
            shopName: 'by Wonders Bakery',
            title: 'Coffee Vanila Sponge Cake',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: cake8,
            shopName: 'by Cake Affection',
            title: 'Purple Patch Ribbon Cake',
            text: ' Some quick example text to build on the card title'
        }
    ];

    return (
        <>
        {event_id ===null ?
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <div className="row custom-row">
                <FilterPackages/>
                    <h1 className="pckg-name">Cake Packages</h1>

                    {cakesData.map((cake) => (
                        <div className="col-md-3 custom-col" key={cake.id}>

                            <Card className="s-card" style={{ width: '18rem' }}>
                                <Card.Img className="s-img" variant="top" src={cake.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{cake.title}</Card.Title>
                                    <Card.Text className="s-main-title-pckg">{cake.shopName}</Card.Text>
                                    <Card.Text className="s-text">{cake.text}</Card.Text>
                                    <Link to={`/CakeDes`}>
                                        <Button className="s-btn" variant="primary">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>:<div style={{ "display": "flex" }}>
               
                <div className="row custom-row" style={{marginLeft:'3%'}}>
                <FilterPackages/>
                    <h1 className="pckg-name">Cake Packages</h1>

                    {cakesData.map((cake) => (
                        <div className="col-md-3 custom-col" key={cake.id}>

                            <Card className="s-card" style={{ width: '18rem' }}>
                                <Card.Img className="s-img" variant="top" src={cake.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{cake.title}</Card.Title>
                                    <Card.Text className="s-main-title-pckg">{cake.shopName}</Card.Text>
                                    <Card.Text className="s-text">{cake.text}</Card.Text>
                                    <Link to={`/CakeDes`}>
                                        <Button className="s-btn" variant="primary">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>}
        </>
    );
};



export default Cake;