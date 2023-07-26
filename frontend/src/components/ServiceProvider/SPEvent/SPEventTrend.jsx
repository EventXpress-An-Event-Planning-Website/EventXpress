// import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import show1 from '../../../assets/images/show3.jpg'
import show2 from '../../../assets/images/show4.jpg'
import show3 from '../../../assets/images/show5.jpg'
import show4 from '../../../assets/images/show9.jpg'

const SPEventTrend = () => {
  return (
    <section className='trending'>
        <h2>TRENDING</h2>
        <Row className='trendimgcontainer'>

            <Col><img className='trendimg' src={show1} />
              <Link to={`/ServiceProvider/packageForm`}>
                <Button className="book_btn">Book now</Button> 
              </Link>
            </Col>

            <Col><img className='trendimg' src={show2} />
              <Link to={`/ServiceProvider/packageForm`}>
                <Button className="book_btn">Book now</Button> 
              </Link>
            </Col>

            <Col><img className='trendimg' src={show3} />
              <Link to={`/ServiceProvider/packageForm`}>
                <Button className="book_btn">Book now</Button> 
              </Link>
            </Col>

            <Col><img className='trendimg' src={show4} />
              <Link to={`/ServiceProvider/packageForm`}>
                <Button className="book_btn">Book now</Button> 
              </Link>
            </Col>
        </Row>
    </section>
  )
}

export default SPEventTrend