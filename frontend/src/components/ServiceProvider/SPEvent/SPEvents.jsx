// import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import event1 from '../../../assets/images/show8.jpg'
import event2 from '../../../assets/images/show2.jpeg'
import event3 from '../../../assets/images/show6.jpg'

const SPEvents = () => {
  return (
    <section>
        <div className='evnt_list'>
            <Row>
                <Col>
                    <img className='event_ticket' src={event1} />
                    <div className='bottom_link'>
                        <Button className='see_more'>See More</Button>
                        <Button className='buy_ticket'>Buy ticket now</Button>
                    </div>
                </Col>

                <Col>
                    <img className='event_ticket' src={event2} />
                    <div className='bottom_link'>
                        <Button className='see_more'>See More</Button>
                        <Button className='buy_ticket'>Buy ticket now</Button>
                    </div>
                </Col>

                <Col>
                    <img className='event_ticket' src={event3} />
                    <div className='bottom_link'>
                        <Button className='see_more'>See More</Button>
                        <Button className='buy_ticket'>Buy ticket now</Button>
                    </div>
                </Col>
            </Row>
            
        </div>
    </section>
  )
}

export default SPEvents