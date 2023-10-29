import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import FilterPackages from "./FilterPackages";

import catering1 from '../../../assets/images/catering-1.webp';
import catering2 from '../../../assets/images/catering-2.webp';
import catering3 from '../../../assets/images/catering-3.webp';
import catering4 from '../../../assets/images/catering-4.webp';
import catering5 from '../../../assets/images/catering-5.webp';
import catering6 from '../../../assets/images/catering-6.webp';
import catering7 from '../../../assets/images/catering-7.webp';
import catering8 from '../../../assets/images/catering-8.webp';
import { useLocation } from "react-router-dom";
import axios from "axios"; // making HTTP requests

const Catering = () => {
    // const location = useLocation()
    // const queryParams = new URLSearchParams(location.search);
    // const package_Count= queryParams.get('packageCount')
    // const event_id= queryParams.get('event_id')
    const location = useLocation() // access current location in the browser's url
    const queryParams = new URLSearchParams(location.search);
    const package_Count = Number(queryParams.get('packageCount'))
    const event_id = queryParams.get('event_id')
    const column_id = Number(queryParams.get('column'))
    const [selectedCount, setSelectedCount] = useState(package_Count)
    const [loading, setLoading] = useState(true)
    const [cateringPackage, setCateringPackage] = useState([])
    const [cateringsData, setCateringsData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        const fetchedData = (async () => {

            axios.get(`/api/customer/viewCateringPackage`)
                .then(response => {
                    setCateringPackage(response.data)
                    setLoading(false);
                    // console.log(cateringPackage);


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })

        const fetchedCateringData = (async () => {

            axios.get(`/api/customer/viewCatering?event_id=${event_id}`)
                .then(response => {
                    setCateringPackage(response.data)
                    setLoading(false);
                    // console.log(cateringPackage);


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })
        

        const fetchedPackCount = (async () => {
            const service = 'Catering'
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
            setCateringsData(cateringPackage)

        } else {
            fetchedCateringData()
            setCateringsData(cateringPackage)
            fetchedPackCount()
        }
    }, [loading]);
    // const cateringsData = [
    //     {
    //         id: 1,
    //         image: catering1,
    //         pckgName: 'Birthday Package',
    //         title: 'by Elite Catering',
    //         text: 'Elite Catering considers about menu selection, customization, beverage services of your event.'
    //     },
    //     {
    //         id: 2,
    //         image: catering2,
    //         pckgName: 'Platinum Menu',
    //         title: 'by Taste Ming',
    //         text: 'Taste Ming considers about menu selection, customization, beverage services of your event.'
    //     },
    //     {
    //         id: 3,
    //         image: catering3,
    //         pckgName: 'Gold Menu',
    //         title: 'by Butlers Catering Service',
    //         text: 'Butlers Catering Service considers about menu selection, customization, beverage services of your event.'
    //     },
    //     {
    //         id: 4,
    //         image: catering4,
    //         pckgName: 'Silver Menu',
    //         title: 'by Classics catering',
    //         text: 'Classics catering considers about menu selection, customization, beverage services of your event.'
    //     },
    //     {
    //         id: 5,
    //         image: catering5,
    //         pckgName: 'Bronze Menu',
    //         title: 'by Toast the Host',
    //         text: 'Toast the Host considers about menu selection, customization, beverage services of your event.'
    //     },
    //     {
    //         id: 6,
    //         image: catering6,
    //         pckgName: 'Silver Menu',
    //         title: 'by Cool Caterers',
    //         text: 'Cool Caterers considers about menu selection, customization, beverage services of your event.'
    //     },
    //     {
    //         id: 7,
    //         image: catering7,
    //         pckgName: 'Gold Menu',
    //         title: 'by Better Cater',
    //         text: 'Better Cater considers about menu selection, customization, beverage services of your event.'
    //     },
    //     {
    //         id: 8,
    //         image: catering8,
    //         pckgName: 'Bronze Menu',
    //         title: 'by YummyMist Foods',
    //         text: 'YummyMist Foods considers about menu selection, customization, beverage services of your event.'
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

                        <h1 className="pckg-name">Catering Packages</h1>
                        {cateringsData.map((catering) => (
                            <div className="col-md-3 custom-col" key={catering.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }} >
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${catering.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{catering.package_title}</Card.Title>
                                        <Card.Text className="s-main-title-pckg">by {catering.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {catering.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{catering.package_description}</Card.Text>
                                        <Link to={`/CateringDes?pac=${catering.package_id}`}>
                                            <Button className="s-btn" variant="primary">Read More</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div> : <div style={{ "display": "flex" }} >

                    <div className="row custom-row" style={{ marginLeft: '3%' }}>
                        <FilterPackages />

                        <h1 className="pckg-name">Catering Packages</h1>
                        {cateringsData.map((catering) => (
                            <div className="col-md-3 custom-col" key={catering.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }} >
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${catering.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{catering.package_title}</Card.Title>
                                        <Card.Text className="s-main-title-pckg">by {catering.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {catering.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{catering.package_description}</Card.Text>
                                        <Link to={`/customer/event/CateringDes?event_id=${event_id}&packageCount=${selectedCount}&column=${column_id}&pac=${catering.package_id}`}>
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



export default Catering;