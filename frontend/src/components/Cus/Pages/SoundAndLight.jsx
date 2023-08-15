import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import FilterPackages from "./FilterPackages";

import sound1 from '../../../assets/images/sound1.jpg';
import sound2 from '../../../assets/images/sound2.jpg';
import sound3 from '../../../assets/images/sound3.jpg';
import sound4 from '../../../assets/images/sound4.jpg';
import sound5 from '../../../assets/images/sound5.jpg';
import sound6 from '../../../assets/images/sound6.jpg';
import sound7 from '../../../assets/images/sound7.jpg';
import sound8 from '../../../assets/images/sound8.jpg';

const SoundAndLight = () => {

    const soundsData = [
        {
            id: 1,
            image: sound5,
            pckgName: '',
            title: 'Pure AV',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 2,
            image: sound6,
            pckgName: '',
            title: 'Pure Audio Visual Inc',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 3,
            image: sound3,
            pckgName: '',
            title: 'Tailgate Express Events',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 4,
            image: sound2,
            pckgName: '',
            title: 'dBcontrol bv',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 5,
            image: sound1,
            pckgName: '',
            title: 'Auvicom',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 6,
            image: sound4,
            pckgName: '',
            title: 'A.S. Technology',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 7,
            image: sound7,
            pckgName: '',
            title: 'Painting with Light',
            text: ' Some quick example text to build on the card title'
        },
        {
            id: 8,
            image: sound8,
            pckgName: '',
            title: 'Alphatentevent',
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
                    <h1 className="pckg-name">Sound and Light Packages</h1>
                    {soundsData.map((sound) => (
                        <div className="col-md-3 custom-col" key={sound.id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={sound.image} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{sound.title}</Card.Title>
                                    <Card.Text className="s-text">{sound.text}</Card.Text>
                                    <Link to={`/SoundAndLightDes`}>
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

export default SoundAndLight;