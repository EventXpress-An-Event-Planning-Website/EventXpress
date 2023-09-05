// import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PackageFullView = () => {
    const {package_id} = useParams();
    const [packageFullData, setPackageFullData] = useState({});

    useEffect(() => {
        axios
            .get(`/api/serviceProvider/getFullPackDetails?id={package_id}`)
            .then((response) => {
                setPackageFullData(response.data);
                // console.log(response.data.packageData);
            })
            .catch((error) => {
                console.error('Error fetching packages:', error);
            });
    }, [package_id]);

  return (
    <div id="main_contentinfo" className="main_contentinfo">
        <Container fluid>
            <Row>
                <Col className='leftContentImg'><img src={`../../src/assets/images/uploads/${packageFullData.sp_images}`}/></Col>

                <Col sm={6} className='rightcontentinfo'>
                    <h3>{packageFullData.package_title}</h3>
                    <h4>{packageFullData.package_address}</h4>
                    <p>{packageFullData.package_description}</p>
                    <p><FaMapMarkerAlt/><span> </span><a> (Show map)</a></p>
                    <p>Contact no: <span></span></p>
                    <p>Established Date: <span></span></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PackageFullView