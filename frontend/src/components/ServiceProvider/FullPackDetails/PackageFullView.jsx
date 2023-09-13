// import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FaMapMarkerAlt } from 'react-icons/fa'
// import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const PackageFullView = () => {
    
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const package_id= queryParams.get('id')
//    console.log(package_id);
    const idParts = package_id.split('_');
//    console.log(idParts);
    const [packageFullData, setPackageFullData] = useState();


    useEffect(() => {
        axios
            .get(`/api/serviceProvider/getFullPackDetails?package_id=${package_id}&service=${idParts[0].toLowerCase()}`)
            .then((response) => {
                setPackageFullData(response.data);
                console.log(response.data.PackageDetails);
            })
            .catch((error) => {
                console.error('Error fetching packages:', error);
            });
    }, []);

    // console.log(packageFullData);
    if (packageFullData === undefined) {
        return  <h1>Loading</h1>
    }else{

  return (
    <div id="main_contentinfo" className="main_contentinfo">
        <Container fluid>
            <Row>
                <Col className='leftContentImg'><img className='leftimg' src={`../../src/assets/images/uploads/${packageFullData.PackageDetails[0].sp_images}`}/></Col>

                <Col sm={6} className='rightcontentinfo'>
                    <h3>{packageFullData.PackageDetails[0].package_title}</h3>
                    <h4>{packageFullData.PackageDetails[0].package_address}</h4>
                    <p>{packageFullData.PackageDetails[0].package_description}</p>
                    <p><FaMapMarkerAlt/><span> {packageFullData.PackageDetails[0].package_address}</span>
                        <a className='showmap' > (Show map)</a></p>
                    <p>Contact no: <span>{packageFullData.PackageDetails[0].package_contact}</span></p>
                    <p>Established Date: <span>{new Date(packageFullData.PackageDetails[0].createdate).toLocaleString()}</span></p>

                </Col>
            </Row>
        </Container>
        
    </div>
  )
    }
}

export default PackageFullView