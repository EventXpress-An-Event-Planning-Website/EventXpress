import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import FilterPackages from "./FilterPackages";

import deco1 from '../../../assets/images/deco1.jpg';
import deco2 from '../../../assets/images/deco2.jpg';
import deco3 from '../../../assets/images/deco3.jpg';
import deco4 from '../../../assets/images/deco4.jpg';
import deco5 from '../../../assets/images/deco5.jpg';
import deco6 from '../../../assets/images/deco6.jpg';
import deco9 from '../../../assets/images/deco9.jpg';
import deco8 from '../../../assets/images/deco8.jpg';
import { useLocation } from "react-router-dom";

const Decoration = () => {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const package_Count= queryParams.get('packageCount')
    const event_id= queryParams.get('event_id')



    const decosData = [
        {
            id: 1,
            image: deco9,
            pckgName: '21st Birthday Package',
            title: 'by Cool Party Rentals',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: deco1,
            pckgName: 'Bridal Shower',
            title: 'by Party House Decor',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: deco3,
            pckgName: 'Baby Shower',
            title: 'by Epic Party Magic',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: deco4,
            pckgName: 'Teens Birthday Package',
            title: 'by Party Funland',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: deco6,
            pckgName: 'Gender Reveal',
            title: 'by Creative Dreams',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: deco5,
            pckgName: 'Proposal Package',
            title: 'by Glitter and Glue',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: deco2,
            pckgName: 'Gender Reveal',
            title: 'by Streamers Suprise',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: deco8,
            pckgName: 'Kids Birthday Package',
            title: 'by Fun Times Inc',
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
        {event_id === null ?
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <div className="row custom-row">
                <FilterPackages/>
                    <h1 className="pckg-name">Decoration Packages</h1>
                    {decosData.map((deco) => (
                        <div className="col-md-3 custom-col" key={deco.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={deco.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{deco.pckgName}</Card.Title>
                                    <Card.Text className="s-main-title-pckg">{deco.title}</Card.Text>
                                    <Card.Text className="s-text">{deco.text}</Card.Text>
                                    <Link to={`/DecorationDes`}>
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
                    <h1 className="pckg-name">Decoration Packages</h1>
                    {decosData.map((deco) => (
                        <div className="col-md-3 custom-col" key={deco.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={deco.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{deco.pckgName}</Card.Title>
                                    <Card.Text className="s-main-title-pckg">{deco.title}</Card.Text>
                                    <Card.Text className="s-text">{deco.text}</Card.Text>
                                    <Link to={`/DecorationDes`}>
                                        <Button className="s-btn" variant="primary">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>}

            {/* <div className="s-pagination">
                <div>
                    <Pagination>{items}</Pagination>
                </div>

            </div> */}
        </>
    );
};

export default Decoration;