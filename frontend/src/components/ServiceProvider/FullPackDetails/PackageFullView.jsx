// import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import mainImage from '../../../assets/images/hotel.jpg'
import { FaMapMarkerAlt } from 'react-icons/fa'

const PackageFullView = () => {
  return (
    <div id="main_contentinfo" className="main_contentinfo">
        <Container fluid>
            <Row>
                <Col className='leftContentImg'><img src={mainImage}/></Col>

                <Col sm={6} className='rightcontentinfo'>
                    <h3>Araliya Beach Resort</h3>
                    <h4>Dehiwala</h4>
                    <p>Embellished with the charms of immaculate beaches, lush coconut groves, and stunning oceanic vistas 
                        from all its abodes, Araliya Beach Resort is a premier amongst Dehiwala hotels! Being the 
                        first star-class and five-star hotel in Dehiwala, the property is composed of a wide array of exclusive 
                        accommodation options, bars, restaurants, boutiques, and entertainment hubs making it an idyllic destination 
                        to experience pure tropical bliss!</p>
                    <p><FaMapMarkerAlt/><span> Dehiwala, Mount Lavinia</span><a> (Show map)</a></p>
                    <p>Contact no: <span>+94 773322340</span></p>
                    <p>Established Date: <span>2023/04/15</span></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PackageFullView