import React from "react";
import Sidebar from "../../Cus/PrePackages/Sidebar";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import deco9 from '../../../assets/images/deco9.jpg';
import sound5 from '../../../assets/images/sound5.jpg';
import photo4 from '../../../assets/images/photo4.jpg';
import catering4 from '../../../assets/images/catering-4.webp';
import cake4 from '../../../assets/images/cake4.jpg';
import venue5 from '../../../assets/images/venue5.jpg';
import cake9 from '../../../assets/images/cake9.png';
import { useNavigate } from "react-router-dom";

const BirthdayDes = () => {

    const birthdayDesData = [
        {
            id: 1,
            image: cake9,
            pckgName: 'Black Forest Cake',
            title: 'by Cake Talent',
            link: '/CakeDes'
        },
        {
            id: 2,
            image: deco9,
            pckgName: '21st Birthday Package',
            title: 'by Party House Decor',
            link: '/DecorationDes'
        },
        {
            id: 3,
            image: sound5,
            pckgName: 'DJ package',
            title: 'by Pure AV',
            link: '/SoundAndLightDes'
        },
        {
            id: 4,
            image: photo4,
            pckgName: 'Silver Package',
            title: 'by Capturra',
            link: '/PhotographyDes'
        },
        {
            id: 5,
            image: catering4,
            pckgName: 'Birthday Package',
            title: 'by Classics catering',
            link: '/CateringDes'
        }
    ];
    const navigate = useNavigate()

    const handleViewServiceProvider=()=>{
        navigate('/customer/PredefinePackage/ServiceProvider-profile')
    }
    return (
        <>
            <div style={{ "display": "flex" }} >
                <Sidebar />
                <div>
                    <h3 className="s-title">Forever Young-ish</h3>
                    <p className="s-para" onClick={handleViewServiceProvider}>by Kalana Weranga</p>

                    <div className="b-container">

                        {/* <Container> */}
                        <Row>
                            {birthdayDesData.map((birthdayDes) => (
                                <Col sm={2} className="b-pcg-img">
                                    <Card style={{ width: '15rem' }} className="mb-2" >
                                        <Card.Header className="pckg-header">{birthdayDes.pckgName}</Card.Header>
                                        <Card.Body>
                                            <Link to={birthdayDes.link}>
                                                <Card.Img className="s-img" variant="top" src={birthdayDes.image} />
                                            </Link>
                                            <Card.Text className="s-text">{birthdayDes.title}</Card.Text>

                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}
                        </Row>
                        <Row className="b-description">
                            <Col sm>
                                <h5><b>Within the budget  range of Rs. 95,000/-  to 110,000/-</b>
                                    <br />
                                    included services :
                                </h5>

                                <ListGroup as="ol" numbered>
                                    <ListGroup.Item as="li">2kg cake (can be customized)</ListGroup.Item>
                                    <ListGroup.Item as="li">Icludes backdrop , table decos (can customize to a theme)</ListGroup.Item>
                                    <ListGroup.Item as="li">Music - DJ (for 4 hour)</ListGroup.Item>
                                    <ListGroup.Item as="li">Photography - 350 -450 clicks</ListGroup.Item>
                                    <ListGroup.Item as="li">Catering  including(for 20-30 people)
                                        <ListGroup as="ul" bulleted>
                                            <ListGroup.Item as="li">Rice and 5 side dishes</ListGroup.Item>
                                            <ListGroup.Item as="li">2 Desserts</ListGroup.Item>
                                            <ListGroup.Item as="li">Drinks and a snack</ListGroup.Item>
                                        </ListGroup>
                                    </ListGroup.Item>

                                </ListGroup>
                                <h4><b>If need more changes price will be varied.</b></h4>

                                <Link to={`/ChatDes`}>
                                    <Button className="s-btn" variant="primary">Send a Message</Button>
                                </Link>
                            </Col>

                        </Row>
                        {/* </Container> */}
                    </div>
                </div>
            </div>
        </>
    );
};



export default BirthdayDes;