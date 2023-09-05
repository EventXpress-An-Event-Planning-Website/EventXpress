// import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import hot1 from '../../../assets/images/hot1.jpg'
import hot2 from '../../../assets/images/hot2.webp'
import hot3 from '../../../assets/images/hot3.jpg'
import hot4 from '../../../assets/images/hot4.jpg'

const PackageFullView = () => {
  return (
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
                    <h3>Option</h3>
                    <h4>Tpoic:</h4>
                    <p>Description:</p>

                    <Row className='rowoption'>
                        <Col>Maximum guest count</Col>
                        <Col className='coloption'></Col>
                    </Row>

                    <Row className='rowoption'>
                        <Col>Hall area</Col>
                        <Col className='coloption'></Col>
                    </Row>

                    <Row className='rowoption'>
                        <Col>Hall type</Col>
                        <Col className='coloption'></Col>
                    </Row>

                    <p className='hourprice'>per one hour</p>

                    <Button className='optionedit'>Edit</Button>
                    <Button className='optiondelete'>Delete</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PackageFullView