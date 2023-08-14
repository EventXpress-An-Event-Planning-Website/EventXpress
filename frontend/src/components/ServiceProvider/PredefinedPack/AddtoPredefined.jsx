// import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import mainImage from '../../../assets/images/hotel.jpg'
import hot1 from '../../../assets/images/hot1.jpg'
import hot2 from '../../../assets/images/hot2.webp'
import hot3 from '../../../assets/images/hot3.jpg'
import hot4 from '../../../assets/images/hot4.jpg'


const AddtoPredefined = () => {
  return (
    <div>
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

        <div id="option_contentinfo" className="option_contentinfo">
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
                        <h3>Option 1</h3>
                        <h4>Hall Phoenix</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis optio quisquam in omnis dolorum quos placeat.</p>

                        <Row className='rowoption'>
                            <Col>Maximum guest count</Col>
                            <Col className='coloption'>200</Col>
                        </Row>

                        <Row className='rowoption'>
                            <Col>Hall area</Col>
                            <Col className='coloption'>1200 sqft</Col>
                        </Row>

                        <Row className='rowoption'>
                            <Col>Hall type</Col>
                            <Col className='coloption'>Outdoor</Col>
                        </Row>

                        <p className='hourprice'>Rs. 150,000 per one hour</p>

                        <Button className='optionedit'>Send request</Button>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default AddtoPredefined