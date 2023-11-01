// import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
// import { FaMapMarkerAlt } from 'react-icons/fa'
// import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import hot1 from '../../../assets/images/hot1.jpg'
import hot2 from '../../../assets/images/hot2.webp'
import hot3 from '../../../assets/images/hot3.jpg'
import hot4 from '../../../assets/images/hot4.jpg'


const PackageFullView = () => {
    
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const package_id= queryParams.get('id')
//    console.log(package_id);
    const idParts = package_id.split('_');
    const packType = idParts[0];
//    console.log(idParts);
    const [packageFullData, setPackageFullData] = useState();


    useEffect(() => {
        axios
            .get(`/api/serviceProvider/getFullPackDetails?package_id=${package_id}&service=${packType.toLowerCase()}`)
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
            <div className='all_details'>
                <div id="main_contentinfo" className="main_contentinfo">
                    <Container fluid>
                        <Row>
                            <Col className='leftContentImg'><img className='leftimg' src={`../../src/assets/images/uploads/${packageFullData.PackageDetails[0].sp_images}`}/></Col>

                            <Col sm={6} className='rightcontentinfo'>
                                <h3>{packageFullData.PackageDetails[0].package_title}</h3>
                                <h4>{packageFullData.PackageDetails[0].package_address}</h4>
                                <p>{packageFullData.PackageDetails[0].package_description}</p>
                                <p>Location: {packageFullData.PackageDetails[0].package_address}</p>
                                <p>Contact no: <span>{packageFullData.PackageDetails[0].package_contact}</span></p>
                                <p>Established Date: <span>{new Date(packageFullData.PackageDetails[0].createdate).toLocaleString()}</span></p>

                            </Col>
                        </Row>
                    </Container>
                    
                </div>

                <div className="option_contentinfo">
                    <Container fluid>
                        <Row>
                            <Col>
                                <Row>
                                    <Col><img className='optionimg' src={hot1}/></Col>
                                    <Col><img className='optionimg' src={hot2}/></Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col><img className='optionimg' src={hot3}/></Col>
                                    <Col><img className='optionimg' src={hot4}/></Col>
                                </Row>
                            </Col>
                            
                            <Col sm={6} className='rightoptioninfo'>
                                <h3>More Details</h3>
                                {   packType === 'Photography' ? (
                                    <>
                                        <h5>Photography Equipment: <p>{packageFullData.PackageDetails[0].package_tools}</p></h5>
                                        <h5>Photo Delivery Format: <p>{packageFullData.PackageDetails[0].package_format}</p></h5>
                                    </>
                                ) : packType === 'Decoration' ? (
                                    <>
                                        <h5>Decoration elements: </h5>
                                        <p>{packageFullData.PackageDetails[0].package_decoelements}</p>
                                    </>
                                ) : packType === 'Catering' ? (
                                    <>
                                        <h5>Menu: </h5>
                                        <p>{packageFullData.PackageDetails[0].package_menu}</p>
                                    </>
                                ) : packType === 'Cake' ?(
                                    <>
                                        <h5>Service size of the cake: {packageFullData.PackageDetails[0].serving_size}</h5>
                                        <h5>Cake shape: {packageFullData.PackageDetails[0].cake_shape}</h5>
                                        <h5>Allergy Information: {packageFullData.PackageDetails[0].allergy}</h5>
                                    </>
                                ) : packType === 'StageRental' ? (
                                    <>
                                        <h5>Stage Type: {packageFullData.PackageDetails[0].stage_type}</h5>
                                        <h5>Stage Height(feet): {packageFullData.PackageDetails[0].stage_height}</h5>
                                        <h5>Stage Size and Dimension: {packageFullData.PackageDetails[0].stage_size}</h5>
                                    </>
                                ) : packType === 'LightsANDSounds' ? (
                                    <>
                                        <h5>Sound Source: {packageFullData.PackageDetails[0].sound_source}</h5>
                                        <h5>Lightning Fixtures: {packageFullData.PackageDetails[0].package_lights}</h5>
                                    </>
                                ) : (
                                    <>
                                        <h4>Topic: {packageFullData.PackageDetails[0].package_op_title}</h4>
                                        <p>Description: {packageFullData.PackageDetails[0].package_op_des}</p>

                                        <Row className='rowoption'>
                                            <Col>Maximum guest count</Col>
                                            <Col className='coloption'>{packageFullData.PackageDetails[0].package_op_count}</Col>
                                        </Row>

                                        <Row className='rowoption'>
                                            <Col>Hall area</Col>
                                            <Col className='coloption'>{packageFullData.PackageDetails[0].package_op_area}</Col>
                                        </Row>

                                        <Row className='rowoption'>
                                            <Col>Hall type</Col>
                                            <Col className='coloption'>{packageFullData.PackageDetails[0].package_op_type}</Col>
                                        </Row>
                                    </>
                                )}
                            </Col>

                        </Row>
                    </Container>
                </div>
                {/* <Button className='optionedit'>Edit</Button>
                <Button className='optiondelete'>Delete</Button> */}
            </div>
        )
    }
}

export default PackageFullView