import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useViewPackageQuery } from "../../../slices/viewPackageSlice";
import { useLocation } from "react-router-dom";
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import FilterPackages from "./FilterPackages";
import axios from "axios";

import venue1 from '../../../assets/images/venue1.jpg';
import venue2 from '../../../assets/images/venue2.jpg';
import venue3 from '../../../assets/images/venue3.jpg';
import venue4 from '../../../assets/images/venue4.jpg';
import venue5 from '../../../assets/images/venue5.jpg';
import venue6 from '../../../assets/images/venue6.jpg';
import venue7 from '../../../assets/images/venue7.jpg';
import venue8 from '../../../assets/images/venue8.jpg';

const Venue = () => {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const package_Count= queryParams.get('packageCount')
    const event_id= queryParams.get('event_id')
    const column_id= Number(queryParams.get('column'))
    console.log(`column_id ${column_id}`);
    const [selectedCount, setselectedCount] = useState(package_Count)
    const [venuePackage, setVenuePackage] = useState([])
    console.log(selectedCount);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] =useState('')
    const [venuesData,setVenuesData]=useState([])

    // const { data: packageData, error, isLoading } = useViewPackageQuery();
    
   
    // console.log(isLoading)
    // useEffect(() => {
    //     if (error) {
    //         console.error('Error fetching packages:', error);
    //     }

    // }, [error]);


    // useEffect(() => {
    //     if (!isLoading) {
    //         console.log(packageData);
    //     }
    // }, [isLoading])

   


    useEffect(() => {

        const fetchedData=(async()=>{

            axios.get(`/api/customer/viewVenuePackage`)
                .then(response => {
                    setVenuePackage(response.data)
                    setLoading(false);
                    console.log(venuePackage);
                    
                
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
            
            
            
        })

        const fetchedPackCount=(async()=>{
            const service ='Venue'
            axios.get(`/api/customer/getPackageCount?event_id=${event_id}&service=${service}`)
                .then(response => {
                    setselectedCount(response.data)
                    setLoading(false);
                  
                    
                
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
            
            
            
        })
        const fetchedVenueData=(async()=>{

            axios.get(`/api/customer/viewVenuePackages?event_id=${event_id}`)
                .then(response => {
                    setVenuePackage(response.data)
                    setLoading(false);
                    console.log(venuePackage);
                    
                
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
            
            
            
        })
        if(event_id===null){
            fetchedData()
            setVenuesData(venuePackage)
            
        }else{
            fetchedVenueData()
            setVenuesData(venuePackage)
            fetchedPackCount()
        }
      }, [loading]);

    
    // const venuesData = [
    //     {
    //         id: 1,
    //         image: venue5,
    //         title: 'Araliya Beach Resort',
    //         text: 'Araliya Beach Resort provides accommodations with a garden and a terrace. '
    //     },
    //     {
    //         id: 2,
    //         image: venue6,
    //         title: 'Marino Beach Colombo',
    //         text: ' Marino Beach Resort provides accommodations with a garden and a terrace.'
    //     },
    //     {
    //         id: 3,
    //         image: venue7,
    //         title: 'Green Palace Colombo',
    //         text: 'Green Palace Resort provides accommodations with a garden and a terrace.'
    //     },
    //     {
    //         id: 4,
    //         image: venue8,
    //         title: 'Cinnamon Lakeside',
    //         text: 'Cinnamon Lakeside provides accommodations with a garden and a terrace.'
    //     },
    //     {
    //         id: 5,
    //         image: venue1,
    //         title: 'Grand View Hotel ',
    //         text: 'Grand View Hotel provides accommodations with a garden and a terrace.'
    //     },
    //     {
    //         id: 6,
    //         image: venue3,
    //         title: 'Queenswood Cottage',
    //         text: 'Queenswood Cottage provides accommodations with a garden and a terrace.'
    //     },
    //     {
    //         id: 7,
    //         image: venue2,
    //         title: 'Mango Tree Villa Bentota',
    //         text: 'Mango Tree Villa Bentota provides accommodations with a garden and a terrace.'
    //     },
    //     {
    //         id: 8,
    //         image: venue4,
    //         title: 'Galway Heights Hotel ',
    //         text: 'Galway Heights Hotel provides accommodations with a garden and a terrace.'
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
                    {/* <div style={{ "display": "flex" }}>
                        <span className="input-group-text all-text">All</span>

                        <Form className="pckg-search-bar">
                            <FormControl
                                type="text"
                                placeholder="Search for venues..."
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
                    </div> */}
                    <FilterPackages />
                    <h1 className="pckg-name">Venue Packages</h1>
                        {venuesData.map((venue) => (
                            <div className="col-md-3 custom-col" key={venue.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }} >
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${venue.sp_images}`}/>
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{venue.package_op_title}</Card.Title>
                                        <Card.Text className="s-text">{venue.package_description}</Card.Text>

                                        {event_id === null?
                                        <Link to={`/VenueDes?euid=${venue.userid}`}>
                                            <Button className="s-btn" variant="primary">View More</Button>
                                        </Link>:
                                        <Link to={`/customer/event/VenueDes?event_id=${event_id}&packageCount=${selectedCount}&euid=${venue.userid}&column=${column_id}`}>
                                        <Button className="s-btn" variant="primary">View More</Button>
                                        </Link>}


                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                        {/* <div className="s-pagination">
                            <div>
                                <Pagination>{items}</Pagination>
                            </div>
                
                        </div> */}
                    </div>
                    
                </div>:
                <div style={{ "display": "flex" }}>
                    <div className="row custom-row" style={{marginLeft:'3%'}}>
                    {/* <div style={{ "display": "flex" }}>
                        <span className="input-group-text all-text">All</span>

                        <Form className="pckg-search-bar">
                            <FormControl
                                type="text"
                                placeholder="Search for venues..."
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
                    </div> */}
                    <FilterPackages />
                    <h1 className="pckg-name">Venue Packages</h1>
                        {venuesData.map((venue) => (
                            <div className="col-md-3 custom-col" key={venue.package_id}>

                                <Card className="s-card" style={{ width: '18rem' }} >
                                    <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${venue.sp_images}`} />
                                    <Card.Body>
                                        <Card.Title className="s-main-title">{venue.package_op_title}</Card.Title>
                                        <Card.Text className="s-text">{venue.package_description}</Card.Text>
                                        {event_id === null?
                                        <Link to={`/VenueDes`}>
                                            <Button className="s-btn" variant="primary">View More</Button>
                                        </Link>:
                                        <Link to={`/customer/event/VenueDes?event_id=${event_id}&packageCount=${selectedCount}&euid=${venue.userid}&column=${column_id}&id=${venue.package_id}`}>
                                        <Button className="s-btn" variant="primary">View More</Button>
                                        </Link>}

                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                        {/* <div className="s-pagination">
                            <div>
                                <Pagination>{items}</Pagination>
                            </div>
                
                        </div> */}
                    </div>
                    
                </div>}


        </>
    );
};



export default Venue;