import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

import stage1 from '../../../assets/images/stage1.png';
import stage2 from '../../../assets/images/stage2.png';
import stage3 from '../../../assets/images/stage3.png';
import stage4 from '../../../assets/images/stage4.png';
import stage5 from '../../../assets/images/stage5.png';
import stage6 from '../../../assets/images/stage6.png';
import stage7 from '../../../assets/images/stage7.png';
import stage8 from '../../../assets/images/stage8.png';

const StageRentals = () => {

    const stagesData = [
        {
            id: 1,
            image: stage5,
            title: 'High Life Rental',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: stage6,
            title: 'Salsa duet',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: stage3,
            title: 'Mime hood',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: stage8,
            title: 'Joy planner',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: stage1,
            title: 'One touch events',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: stage2,
            title: 'Moveheel',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: stage7,
            title: 'Dazzling designers',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: stage4,
            title: 'Entertainer agency',
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
                                placeholder="Search for stage rentals..."
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
                    <h1 className="pckg-name">Stage Rentals Packages</h1>
                    {stagesData.map((stage) => (
                        <div className="col-md-3 custom-col" key={stage.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={stage.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{stage.title}</Card.Title>
                                    <Card.Text className="s-text">{stage.text}</Card.Text>
                                    <Link to={`/StageRentalsDes`}>
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

export default StageRentals;