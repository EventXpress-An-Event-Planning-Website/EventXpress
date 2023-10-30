import React, { useState, useEffect } from "react";
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
import axios from "axios"; // making HTTP requests


const Cake = () => {

    const location = useLocation() // access current location in the browser's url
    const queryParams = new URLSearchParams(location.search);
    const package_Count = Number(queryParams.get('packageCount'))
    const event_id = queryParams.get('event_id')
    const column_id = Number(queryParams.get('column'))
    const [selectedCount, setSelectedCount] = useState(package_Count)
    const [loading, setLoading] = useState(true)
    const [cakePackage, setCakePackage] = useState([])
    const [cakesData, setCakesData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        const fetchedData = (async () => {

            axios.get(`/api/customer/viewCakePackage`)
                .then(response => {
                    setCakePackage(response.data)
                    setLoading(false);
                    // console.log(cakePackage);


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })

        const fetchedPackCount = (async () => {
            const service = 'Cake'
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
        const fetchedCakeData = (async () => {

            axios.get(`/api/customer/viewCakes?event_id=${event_id}`)
                .then(response => {
                    setCakePackage(response.data)
                    setLoading(false);
                    // console.log(cakePackage);


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })

        if (event_id === null) {
            fetchedData()
            setCakesData(cakePackage)

        } else {
            fetchedCakeData()
            setCakesData(cakePackage)
            fetchedPackCount()
        }
    }, [loading]);

      
    // const cakesData = [
    //     {
    //         id: 1,
    //         image: cake9,
    //         title: 'Black Forest cake',
    //         shopName: 'by Cake Talent',
    //         text: 'Cake Talent focus about cake design, flavor selection, customization, size and budget.'
    //     },
    //     {
    //         id: 2,
    //         image: cake2,
    //         shopName: 'by Dream Day Cakes',
    //         title: 'Eggless Chocolate Cake',
    //         text: 'Dream Day Cakes focus about cake design, flavor selection, customization, size and budget.'
    //     },
    //     {
    //         id: 3,
    //         image: cake3,
    //         shopName: 'by SweetArt Cakes',
    //         title: 'Violet Ribbon Cake',
    //         text: 'SweetArt Cakes focus about cake design, flavor selection, customization, size and budget.'
    //     },
    //     {
    //         id: 4,
    //         image: cake4,
    //         shopName: 'by Cake Stand Bakery',
    //         title: 'Gluten-free Fruit cake',
    //         text: 'Cake Stand Bakery focus about cake design, flavor selection, customization, size and budget.'
    //     },
    //     {
    //         id: 5,
    //         image: cake5,
    //         shopName: 'by The Brilliant Bakers',
    //         title: 'Forever Together Cake',
    //         text: 'The Brilliant Bakers focus about cake design, flavor selection, customization, size and budget.'
    //     },
    //     {
    //         id: 6,
    //         image: cake6,
    //         shopName: 'by First taste cake',
    //         title: 'Strawberry Heaven Cake',
    //         text: 'First taste cake focus about cake design, flavor selection, customization, size and budget.'
    //     },
    //     {
    //         id: 7,
    //         image: cake7,
    //         shopName: 'by Wonders Bakery',
    //         title: 'Coffee Vanila Sponge Cake',
    //         text: 'Wonders Bakery focus about cake design, flavor selection, customization, size and budget.'
    //     },
    //     {
    //         id: 8,
    //         image: cake8,
    //         shopName: 'by Cake Affection',
    //         title: 'Purple Patch Ribbon Cake',
    //         text: 'Cake Affection focus about cake design, flavor selection, customization, size and budget.'
    //     }
    // ];

    return (
        <>
            {event_id === null ?
                <div style={{ "display": "flex" }}>
                    <Sidebar />
                    <div className="row custom-row">
                        <FilterPackages />
                        <h1 className="pckg-name">Cake Packages</h1>

                        {cakesData.map((cake) => (
                            <div className="col-md-3 custom-col" key={cake.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }}>
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${cake.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{cake.package_title}</Card.Title>
                                        <Card.Text className="s-main-title-pckg">by {cake.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {cake.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{cake.package_description}</Card.Text>
                                        <Link to={`/CakeDes?pac=${cake.package_id}`}>
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
                        <h1 className="pckg-name">Cake Packages</h1>

                        {cakesData.map((cake) => (
                            <div className="col-md-3 custom-col" key={cake.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }}>
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${cake.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{cake.package_title}</Card.Title>
                                        <Card.Text className="s-main-title-pckg">by {cake.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {cake.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{cake.package_description}</Card.Text>
                                        <Link to={`/customer/event/CakeDes?event_id=${event_id}&packageCount=${selectedCount}&column=${column_id}&pac=${cake.package_id}`}>
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