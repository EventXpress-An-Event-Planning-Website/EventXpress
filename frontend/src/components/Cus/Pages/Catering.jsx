import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

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
            pckgName: 'Birthday Package',
            title: 'by Elite Catering',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: catering2,
            pckgName: 'Platinum Menu',
            title: 'by Taste Ming',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: catering3,
            pckgName: 'Gold Menu',
            title: 'by Butlers Catering Service',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: catering4,
            pckgName: 'Silver Menu',
            title: 'by Classics catering',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: catering5,
            pckgName: 'Bronze Menu',
            title: 'by Toast the Host',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: catering6,
            pckgName: 'Silver Menu',
            title: 'by Cool Caterers',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: catering7,
            pckgName: 'Gold Menu',
            title: 'by Better Cater',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: catering8,
            pckgName: 'Bronze Menu',
            title: 'by YummyMist Foods',
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
                    <div style={{ "display": "flex" }}>
                        <span className="input-group-text all-text">All</span>

                        <Form className="pckg-search-bar">
                            <FormControl
                                type="text"
                                placeholder="Search for caterings..."
                            // value={searchQuery}
                            // onChange={handleSearchChange}
                            />
                        </Form>

                        <Dropdown>
                            <Dropdown.Toggle className="location-dropdown">Select Location</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Colombo</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Gampaha</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Kandy</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Jaffna</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Galle</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle className="location-dropdown">
                                Select Rating No
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">5</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle className="location-dropdown">
                                Select Price Range
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">LKR 10000 - LKR 40000</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">LKR 40000 - LKR 50000</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">LKR 50000 - LKR 70000</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">LKR 70000 - LKR 80000</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">LKR 80000 - LKR 100000</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <h1 className="pckg-name">Catering Packages</h1>
                    {cateringsData.map((catering) => (
                        <div className="col-md-3 custom-col" key={catering.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={catering.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{catering.pckgName}</Card.Title>
                                    <Card.Text className="s-main-title-pckg">{catering.title}</Card.Text>
                                    <Card.Text className="s-text">{catering.text}</Card.Text>
                                    <Link to={`/CateringDes`}>
                                        <Button className="s-btn" variant="primary">Read More</Button>
                                    </Link>
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