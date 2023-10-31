import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons'


const TicketCard = ({
  id,
  src,
  title,
  date,
  time,
  venue,
  price,
  description,
}) => {
    const updatedSrc = `../../src/assets/images/uploads/${src}`
    const editedPrice = JSON.parse(price)
    const editedTime = date.split("T")[0]

  return (
    <Card className="ticket-card">
      <Card.Img variant="top" src={updatedSrc} alt="Ticket Image" />
      <Card.Body>
        <Card.Title className="font-weight-bold mb-4">{title}</Card.Title>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Text>
              <FontAwesomeIcon icon={faCalendarAlt} /> {editedTime}
            </Card.Text>
          </div>
          <div>
            <Card.Text>
              <FontAwesomeIcon icon={faClock} /> {time}
            </Card.Text>
          </div>
        </div>
        <div className="mt-3">
          <Card.Text>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {venue}
          </Card.Text>
        </div>
        <div className="mt-3">
          <Card.Text className="font-weight-bold">
            <FontAwesomeIcon icon={faMoneyBillWave} /> Rs. {editedPrice[0].price}
          </Card.Text>
        </div>
        <div className="d-flex justify-content-center mt-3">
        <Link
            to={`/customer/buyTickets/info?id=${id}`}
            className="btn btn-primary w-100"
          >
            Buy Tickets
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TicketCard
