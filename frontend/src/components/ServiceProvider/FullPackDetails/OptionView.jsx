// import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import hot1 from '../../../assets/images/hot1.jpg'
import hot2 from '../../../assets/images/hot2.webp'
import hot3 from '../../../assets/images/hot3.jpg'
import hot4 from '../../../assets/images/hot4.jpg'

const PackageFullView = () => {
  return (
    <section id="option_contentinfo" className="option_contentinfo">
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
                        <Col className='coloption'>Indoor - AC</Col>
                    </Row>

                    <p className='hourprice'>Rs. 150,000 per one hour</p>

                    <button className='optionedit'>Edit</button>
                    <button className='optiondelete'>Delete</button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PackageFullView