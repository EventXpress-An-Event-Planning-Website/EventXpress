import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import image1 from '../../assets/images/tickets/t1.jpg'
import image2 from '../../assets/images/tickets/t2.jpg'
import image3 from '../../assets/images/tickets/t3.jpg'
import image4 from '../../assets/images/tickets/t4.jpg'
import image5 from '../../assets/images/tickets/t5.jpg'
import image6 from '../../assets/images/tickets/t6.jpg'
import image7 from '../../assets/images/tickets/t7.jpg'
import image8 from '../../assets/images/tickets/t8.jpg'

const Trending = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ]
  const [startIndex, setStartIndex] = useState(0)

  const onNextClick = () => {
    const nextIndex = startIndex + 1
    setStartIndex(nextIndex >= images.length ? 0 : nextIndex)
  }

  const onPrevClick = () => {
    const prevIndex = startIndex - 1
    setStartIndex(prevIndex < 0 ? images.length - 1 : prevIndex)
  }

  return (
    <>
      <div className="trending-wrapper">
        <div className="trending-container">
          <h2>TRENDING NOW</h2>
          <div>
            <span className="trending-buttons" onClick={onPrevClick}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <span className="trending-buttons" onClick={onNextClick}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>
        <Row className="my-3">
          {[0, 1, 2, 3].map((offset) => {
            const newIndex = (startIndex + offset) % images.length
            return (
              <Col key={newIndex} xs={12} md={3} className="mb-4">
                <div className="trending-custom-card">
                  <Card.Img variant="top" src={images[newIndex]} />
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </>
  )
}

export default Trending
