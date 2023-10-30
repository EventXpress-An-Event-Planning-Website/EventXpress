import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import FilterPackages from "./FilterPackages";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios"; // making HTTP requests

import photo1 from '../../../assets/images/photo1.jpg';
import photo2 from '../../../assets/images/photo2.jpg';
import photo3 from '../../../assets/images/photo3.jpg';
import photo4 from '../../../assets/images/photo4.jpg';
import photo5 from '../../../assets/images/photo5.jpg';
import photo6 from '../../../assets/images/photo6.jpg';
import photo7 from '../../../assets/images/photo7.jpg';
import photo8 from '../../../assets/images/photo8.jpg';

const Photography = () => {

    const location = useLocation() // access current location in the browser's url
    const queryParams = new URLSearchParams(location.search);
    const package_Count = Number(queryParams.get('packageCount'))
    const event_id = queryParams.get('event_id')
    const column_id = Number(queryParams.get('column'))
    const [selectedCount, setSelectedCount] = useState(package_Count)
    const [loading, setLoading] = useState(true)
    const [photographyPackage, setPhotographyPackage] = useState([])
    const [photosData, setPhotosData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        const fetchedData = (async () => {

            axios.get(`/api/customer/viewPhotographyPackage`)
                .then(response => {
                    setPhotographyPackage(response.data)
                    setLoading(false);
                    // console.log(photographyPackage);


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })

        const fetchedPackCount = (async () => {
            const service = 'Photography'
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
            setPhotosData(photographyPackage)

        } else {
            fetchedData()
            setPhotosData(photographyPackage)
            fetchedPackCount()
        }
    }, [loading]);



    // const photosData = [
    //     {
    //         id: 1,
    //         image: photo5,
    //         pckgName: 'Silver Package',
    //         title: 'by Candy Click',
    //         text: 'Candy Click considers about session type, coverage, editing and retouching in your event.'
    //     },
    //     {
    //         id: 2,
    //         image: photo6,
    //         pckgName: 'Elegant Package',
    //         title: 'by Daisy Pixels',
    //         text: 'Daisy Pixels considers about session type, coverage, editing and retouching in your event.'
    //     },
    //     {
    //         id: 3,
    //         image: photo7,
    //         pckgName: 'Gold Package',
    //         title: 'by Picture Perfect',
    //         text: 'Picture Perfect considers about session type, coverage, editing and retouching in your event.'
    //     },
    //     {
    //         id: 4,
    //         image: photo8,
    //         pckgName: 'Superior Package',
    //         title: 'by Shutter Surprise',
    //         text: 'Shutter Surprise considers about session type, coverage, editing and retouching in your event.'
    //     },
    //     {
    //         id: 5,
    //         image: photo1,
    //         pckgName: 'Birthday Package',
    //         title: 'by Photamora',
    //         text: 'Photamora considers about session type, coverage, editing and retouching in your event.'
    //     },
    //     {
    //         id: 6,
    //         image: photo3,
    //         pckgName: 'Superior Package',
    //         title: 'by Memoclips',
    //         text: 'Memoclips considers about session type, coverage, editing and retouching in your event.'
    //     },
    //     {
    //         id: 7,
    //         image: photo2,
    //         pckgName: 'Platinum Package',
    //         title: 'by Click It',
    //         text: 'Click It considers about session type, coverage, editing and retouching in your event.'
    //     },
    //     {
    //         id: 8,
    //         image: photo4,
    //         pckgName: 'Birthday Package',
    //         title: 'by Capturra',
    //         text: 'Capturra considers about session type, coverage, editing and retouching in your event.'
    //     }
    // ];

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
                        <FilterPackages />
                        <h1 className="pckg-name">Photography Packages</h1>
                        {photosData.map((photo) => (
                            <div className="col-md-3 custom-col" key={photo.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }} >
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${photo.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{photo.package_title}</Card.Title>
                                        <Card.Text className="s-main-title-pckg">by {photo.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {photo.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{photo.package_description}</Card.Text>
                                        <Link to={`/PhotographyDes?pac=${photo.package_id}`}>
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
                        <h1 className="pckg-name">Photography Packages</h1>

                        {photosData.map((photo) => (
                            <div className="col-md-3 custom-col" key={photo.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }}>
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${photo.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{photo.package_title}</Card.Title>
                                        <Card.Text className="s-main-title-pckg">by {photo.package_busname}</Card.Text>
                                        <Card.Text className="s-main-title-pckg-price">LKR {photo.package_price}.00</Card.Text>
                                        <Card.Text className="s-text">{photo.package_description}</Card.Text>
                                        <Link to={`/customer/event/PhotographyDes?event_id=${event_id}&packageCount=${selectedCount}&column=${column_id}&pac=${photo.package_id}`}>
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

export default Photography;