import React from "react";
import Sidebar from "../PrePackages/Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';
import FilterPackages from "../Pages/FilterPackages";
import { useLocation } from "react-router-dom";
import axios from "axios"; 
import { useEffect } from "react";
import { useState } from "react";

import Bride1 from '../../../assets/images/Bride1.jpg';
import Bride2 from '../../../assets/images/Bride2.jpg';
import Bride3 from '../../../assets/images/Bride3.jpg';
import Bride4 from '../../../assets/images/Bride4.jpg';
import Bride5 from '../../../assets/images/Bride5.jpg';
import Bride6 from '../../../assets/images/Bride6.jpg';
import Bride7 from '../../../assets/images/Bride7.jpg';
import Bride8 from '../../../assets/images/Bride8.jpg';

const BrideToBe = () => {

    const location = useLocation() // access current location in the browser's url
    const queryParams = new URLSearchParams(location.search);
    const event_id = queryParams.get('event_id')
    // const event_type = queryParams.get('event_type')
    const event_type='Bride To Be'
    const [loading, setLoading] = useState(true)
    const [bridesData, setBridesData] = useState([])
    const [error, setError] = useState("")
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const user_type = user.role
    const user_id = user.id

    useEffect(() => {

        const fetchedData = (async () => {

            axios.get(`/api/customer/viewBirthdayPackage?event_type=${event_type}`)
                .then(response => {
                    setBridesData(response.data)
                    setLoading(false);
                    console.log(bridesData);


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })

        const fetchPrePackage = (async()=>{
            axios.get(`/api/serviceProvider/viewBirthdayPackageByUser?event_type=${event_type}&&user_id=${user_id}`)
                .then(response => {

                    setBridesData(response.data)
                    setLoading(false);
                    console.log(bridesData);


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
            });
        })

        if (event_id === null) {
            if (user_type==='serviceProvider') {
                fetchPrePackage()
                
            }else{
                fetchedData()
            }  

        } else {
            fetchedData()
        }
    }, [loading]);

    

    return (
        <>
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <Stack gap={0}>

                <div>
                <h3 className="s-title">Bride To Be Packages</h3>
                </div>

                <div>

                <div className="row">
                <FilterPackages/>
                    {bridesData.map((Bride) => (
                        <div className="col-md-3" key={Bride.predefined_id}>

                            <Card className="s-card" >
                                <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${Bride.pckg_img}`} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{Bride.prepackage_title}</Card.Title>
                                    <Card.Text className="s-text">{Bride.prepackage_description}</Card.Text>
                                    <Link to={`/BrideDes?package_id=${Bride.predefined_id}&event_id=${event_id}`}>
                                        <Button className="s-btn" variant="primary">Select</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
            </Stack>

            </div>
        </>
    );
};

export default BrideToBe;