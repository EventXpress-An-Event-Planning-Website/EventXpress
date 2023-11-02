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

import Social1 from '../../../assets/images/Social1.jpg';
import Social2 from '../../../assets/images/Social2.jpg';
import Social3 from '../../../assets/images/Social3.jpg';
import Social4 from '../../../assets/images/Social4.jpg';
import Social5 from '../../../assets/images/Social5.jpg';
import Social6 from '../../../assets/images/Social6.jpg';
import Social7 from '../../../assets/images/Social7.jpg';
import Social8 from '../../../assets/images/Social8.jpg';

const Social = () => {

    const location = useLocation() // access current location in the browser's url
    const queryParams = new URLSearchParams(location.search);
    const event_id = queryParams.get('event_id')
    // const event_type = queryParams.get('event_type')
    const event_type='Social Events'
    const [loading, setLoading] = useState(true)
    const [socialData , setSocialData] = useState([])
    const [error, setError] = useState("")
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const user_type = user.role
    const user_id = user.id

    useEffect(() => {

        const fetchedData = (async () => {

            axios.get(`/api/customer/viewBirthdayPackage?event_type=${event_type}`)
                .then(response => {
                    setSocialData(response.data)
                    setLoading(false);
                    


                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });



        })

        const fetchPrePackage = (async()=>{
            axios.get(`/api/serviceProvider/viewBirthdayPackageByUser?event_type=${event_type}&&user_id=${user_id}`)
                .then(response => {

                    setSocialData(response.data)
                    setLoading(false);
                   


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
                <h3 className="s-title">Social Event Packages</h3>
                </div>

                <div>

                <div className="row">
                <FilterPackages/>
                    {socialData.map((Social) => (
                        <div className="col-md-3" key={Social.predefined_id}>

                            <Card className="s-card" >
                                <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${Social.pckg_img}`} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{Social.prepackage_title}</Card.Title>
                                    <Card.Text className="s-text">{Social.prepackage_description}</Card.Text>
                                    <Link to={`/SocialDes?package_id=${Social.predefined_id}&event_id=${event_id}`}>
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

export default Social;