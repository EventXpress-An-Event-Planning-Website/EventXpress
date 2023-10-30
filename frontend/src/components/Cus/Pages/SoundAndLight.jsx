import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import FilterPackages from "./FilterPackages";
import { useLocation } from "react-router-dom";
import axios from "axios"; // making HTTP requests

import sound1 from '../../../assets/images/sound1.jpg';
import sound2 from '../../../assets/images/sound2.jpg';
import sound3 from '../../../assets/images/sound3.jpg';
import sound4 from '../../../assets/images/sound4.jpg';
import sound5 from '../../../assets/images/sound5.jpg';
import sound6 from '../../../assets/images/sound6.jpg';
import sound7 from '../../../assets/images/sound7.jpg';
import sound8 from '../../../assets/images/sound8.jpg';

const SoundAndLight = () => {

    const location = useLocation() // access current location in the browser's url
    const queryParams = new URLSearchParams(location.search);
    const package_Count = Number(queryParams.get('packageCount'))
    const event_id = queryParams.get('event_id')
    const column_id = Number(queryParams.get('column'))
    const [selectedCount, setSelectedCount] = useState(package_Count)
    const [loading, setLoading] = useState(true)
    const [soundAndLightPackage, setSoundAndLightPackage] = useState([])
    const [soundAndLightsData, setSoundAndLightsData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        const fetchedData = (async () => {

            axios.get(`/api/customer/viewSoundAndLightPackage`)
                .then(response => {
                    setSoundAndLightPackage(response.data)
                    setLoading(false);
                    // console.log(cakePackage);


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })

        const fetchedPackCount = (async () => {
            const service = 'SoundAndLight'
            axios.get(`/api/customer/getPackageCount?event_id=${event_id}&service=${service}`)
                .then(response => {
                    setSelectedCount(response.data)
                    setLoading(false);



                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })
        if (event_id === null) {
            fetchedData()
            setSoundAndLightsData(soundAndLightPackage)

        } else {
            fetchedData()
            setSoundAndLightsData(soundAndLightPackage)
            fetchedPackCount()
        }
    }, [loading]);

    // const soundsData = [
    //     {
    //         id: 1,
    //         image: sound5,
    //         pckgName: '',
    //         title: 'Pure AV',
    //         text: 'Pure AV focuses sound equipment and setup, lighting design, stage and set design in the event.'
    //     },
    //     {
    //         id: 2,
    //         image: sound6,
    //         pckgName: '',
    //         title: 'Pure Audio Visual Inc',
    //         text: 'Pure Audio Visual Inc focuses sound equipment and setup, lighting design, stage and set design in the event.'
    //     },
    //     {
    //         id: 3,
    //         image: sound3,
    //         pckgName: '',
    //         title: 'Tailgate Express Events',
    //         text: 'Tailgate Express Events focuses sound equipment and setup, lighting design, stage and set design in the event.'
    //     },
    //     {
    //         id: 4,
    //         image: sound2,
    //         pckgName: '',
    //         title: 'DBcontrol bv',
    //         text: 'DBcontrol bv focuses sound equipment and setup, lighting design, stage and set design in the event.'
    //     },
    //     {
    //         id: 5,
    //         image: sound1,
    //         pckgName: '',
    //         title: 'Auvicom',
    //         text: 'Auvicom focuses sound equipment and setup, lighting design, stage and set design in the event.'
    //     },
    //     {
    //         id: 6,
    //         image: sound4,
    //         pckgName: '',
    //         title: 'A.S. Technology',
    //         text: 'A.S. Technology focuses sound equipment and setup, lighting design, stage and set design in the event.'
    //     },
    //     {
    //         id: 7,
    //         image: sound7,
    //         pckgName: '',
    //         title: 'Painting with Light',
    //         text: 'Painting with Light focuses sound equipment and setup, lighting design, stage and set design in the event.'
    //     },
    //     {
    //         id: 8,
    //         image: sound8,
    //         pckgName: '',
    //         title: 'Alphatentevent',
    //         text: 'Alphatentevent focuses sound equipment and setup, lighting design, stage and set design in the event.'
    //     }
    // ];

    // let active = 2;
    // let items = [];
    // for (let number = 1; number <= 5; number++) {
    //     items.push(
    //         <Pagination.Item key={number} active={number === active}>
    //             {number}
    //         </Pagination.Item>,
    //     );
    // }


    return (
        <>
            {event_id === null ?
                <div style={{ "display": "flex" }}>
                    <Sidebar />
                    <div className="row custom-row">
                        <FilterPackages />
                        <h1 className="pckg-name">Sound and Light Packages</h1>
                        {soundAndLightsData.map((soundAndLight) => (
                            <div className="col-md-3 custom-col" key={soundAndLight.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }} >
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${soundAndLight.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{soundAndLight.package_title}</Card.Title>
                                        <Card.Text className="s-main-title-pckg">by {soundAndLight.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {soundAndLight.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{soundAndLight.package_description}</Card.Text>

                                        <Link to={`/SoundAndLightDes?pac=${soundAndLight.package_id}`}>
                                            <Button className="s-btn" variant="primary">Read More</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div> : <div style={{ "display": "flex" }}>

                    <div className="row custom-row" style={{ marginLeft: '3%' }}>
                        <FilterPackages />
                        <h1 className="pckg-name">Sound And Light Packages</h1>

                        {soundAndLightsData.map((soundAndLight) => (

                            <div className="col-md-3 custom-col" key={soundAndLight.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }}>
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${soundAndLight.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{soundAndLight.package_title}</Card.Title>
                                        <Card.Text className="s-main-title-pckg">by {soundAndLight.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {soundAndLight.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{soundAndLight.package_description}</Card.Text>
                                        <Link to={`/customer/event/SoundAndLightDes?event_id=${event_id}&packageCount=${selectedCount}&column=${column_id}&pac=${soundAndLight.package_id}`}>
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

export default SoundAndLight;