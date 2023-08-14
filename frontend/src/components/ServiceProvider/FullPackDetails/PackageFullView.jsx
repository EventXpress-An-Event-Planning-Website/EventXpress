// import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import mainImage from '../../../assets/images/hotel.jpg'

const PackageFullView = () => {
  return (
    <div id="main_contentinfo" className="main_contentinfo">
        <Container fluid>
            <Row>
                <Col className='leftContentImg'><img src={mainImage}/></Col>

                <Col sm={6} className='rightcontentinfo'>
                    <h3>Araliya Beach Resort</h3>
                    <h4>Dehiwala</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repudiandae nisi sunt, quis error cumque tempore, 
                        recusandae illo ducimus dolor commodi non iste itaque soluta iusto laboriosam sint in cum?</p>
                    <p>Add location from the map</p>
                    <p>Contact no: <span>+94 33 234</span></p>
                    <p>Address: <span>Dehiwala, Mount Lavinia</span></p>
                    <p>Established Date: <span>2023/04/15</span></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PackageFullView