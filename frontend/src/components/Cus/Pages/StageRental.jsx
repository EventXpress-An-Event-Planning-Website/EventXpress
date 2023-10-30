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

import stage1 from '../../../assets/images/stage1.png';
import stage2 from '../../../assets/images/stage2.png';
import stage3 from '../../../assets/images/stage3.png';
import stage4 from '../../../assets/images/stage4.png';
import stage5 from '../../../assets/images/stage5.png';
import stage6 from '../../../assets/images/stage6.png';
import stage7 from '../../../assets/images/stage7.png';
import stage8 from '../../../assets/images/stage8.png';

const StageRental = () => {

    const location = useLocation() // access current location in the browser's url
    const queryParams = new URLSearchParams(location.search);
    const package_Count = Number(queryParams.get('packageCount'))
    const event_id = queryParams.get('event_id')
    const column_id = Number(queryParams.get('column'))
    const [selectedCount, setSelectedCount] = useState(package_Count)
    const [loading, setLoading] = useState(true)
    const [stageRentalPackage, setStageRentalPackage] = useState([])
    const [stageRentalsData, setStageRentalsData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        const fetchedData = (async () => {

            axios.get(`/api/customer/viewStageRentalPackage`)
                .then(response => {
                    setStageRentalPackage(response.data)
                    setLoading(false);
                    console.log(stageRentalPackage);


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })

        const fetchedPackCount = (async () => {
            const service = 'StageRental'
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
            setStageRentalsData(stageRentalPackage)

        } else {
            fetchedData()
            setStageRentalsData(stageRentalPackage)
            fetchedPackCount()
        }
    }, [loading]);

    // const stagesData = [
    //     {
    //         id: 1,
    //         image: stage5,
    //         title: 'High Life Rental',
    //         text: ' Some quick example text to build on the card title'
    //     },
    //     {
    //         id: 2,
    //         image: stage6,
    //         title: 'Salsa duet',
    //         text: ' Some quick example text to build on the card title'
    //     },
    //     {
    //         id: 3,
    //         image: stage3,
    //         title: 'Mime hood',
    //         text: ' Some quick example text to build on the card title'
    //     },
    //     {
    //         id: 4,
    //         image: stage8,
    //         title: 'Joy planner',
    //         text: ' Some quick example text to build on the card title'
    //     },
    //     {
    //         id: 5,
    //         image: stage1,
    //         title: 'One touch events',
    //         text: ' Some quick example text to build on the card title'
    //     },
    //     {
    //         id: 6,
    //         image: stage2,
    //         title: 'Moveheel',
    //         text: ' Some quick example text to build on the card title'
    //     },
    //     {
    //         id: 7,
    //         image: stage7,
    //         title: 'Dazzling designers',
    //         text: ' Some quick example text to build on the card title'
    //     },
    //     {
    //         id: 8,
    //         image: stage4,
    //         title: 'Entertainer agency',
    //         text: ' Some quick example text to build on the card title'
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
                        <h1 className="pckg-name">Stage Rentals Packages</h1>
                        {stageRentalsData.map((stage) => (
                            <div className="col-md-3 custom-col" key={stage.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }} >
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${stage.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{stage.package_title}</Card.Title>
                                        <Card.Text className="s-text">by {stage.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {stage.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{stage.package_description}</Card.Text>
                                        <Link to={`/StageRentalDes?pac=${stage.package_id}`}>
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
                        <h1 className="pckg-name">Stage Rentals Packages</h1>

                        {stageRentalsData.map((stage) => (
                            <div className="col-md-3 custom-col" key={stage.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }}>
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${stage.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{stage.package_title}</Card.Title>
                                        <Card.Text className="s-main-title-pckg">by {stage.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {stage.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{stage.package_description}</Card.Text>
                                        <Link to={`/customer/event/StageRentalDes?event_id=${event_id}&packageCount=${selectedCount}&column=${column_id}&pac=${stage.package_id}`}>
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

export default StageRental;