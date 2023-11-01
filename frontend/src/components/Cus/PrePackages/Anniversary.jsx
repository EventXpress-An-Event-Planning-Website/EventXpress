import React from "react";
import Sidebar from "../PrePackages/Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';
import FilterPackages from "../Pages/FilterPackages";
import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";


import Anniversary1 from '../../../assets/images/Anniversary1.jpg';
import Anniversary2 from '../../../assets/images/Anniversary2.jpg';
import Anniversary3 from '../../../assets/images/Anniversary3.jpg';
import Anniversary4 from '../../../assets/images/Anniversary4.jpg';
import Anniversary5 from '../../../assets/images/Anniversary5.jpg';
import Anniversary6 from '../../../assets/images/Anniversary6.jpg';
import Anniversary7 from '../../../assets/images/Anniversary7.jpg';
import Anniversary8 from '../../../assets/images/Anniversary8.jpg';

const Anniversary = () => {

    const location = useLocation() // access current location in the browser's url
    const queryParams = new URLSearchParams(location.search);
    const event_id = queryParams.get('event_id')
    // const event_type = queryParams.get('event_type')
    const event_type='Anniversary'
    const [loading, setLoading] = useState(true)
    const [anniversaryData, setAnniversaryData] = useState([])
    const [error, setError] = useState("")
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const user_type = user.role
    const user_id = user.id

    useEffect(() => {

        const fetchedData = (async () => {

            axios.get(`/api/customer/viewBirthdayPackage?event_type=${event_type}`)
                .then(response => {
                    console.log(response.data);
                    setAnniversaryData(response.data)
                    setLoading(false);
                    console.log(anniversaryData);
                 


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })

        const fetchPrePackage = (async()=>{
            axios.get(`/api/serviceProvider/viewBirthdayPackageByUser?event_type=${event_type}&&user_id=${user_id}`)
                .then(response => {
                    console.log(response.data);
                    setAnniversaryData(response.data)
                    setLoading(false);
                    console.log(anniversaryData);
                    


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
                <h3 className="s-title">Anniversary Packages</h3>
                </div>

                <div>

                <div className="row">
                <FilterPackages/>
                    {anniversaryData.map((Anniversary) => (
                        <div className="col-md-3" key={Anniversary.predefined_id}>

                            <Card className="s-card" >
                                <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${Anniversary.pckg_img}`} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{Anniversary.prepackage_title}</Card.Title>
                                    <Card.Text className="s-text">{Anniversary.prepackage_description}</Card.Text>
                                    <Link to={`/AnniversaryDes?package_id=${Anniversary.predefined_id}&event_id=${event_id}`}>
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

export default Anniversary;