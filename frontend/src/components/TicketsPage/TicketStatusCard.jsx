import React from 'react'
import { Card } from 'react-bootstrap'

const TicketStatusCard = ({
  imageUrl,
  totalTickets,
  soldTickets,
  totalIncome,
}) => {
  const remainingTickets = totalTickets - soldTickets

  return (
    <Card className="ticket-status-card">
      <Card.Img variant="top" src={imageUrl} alt="Ticket Image" />
      <Card.Body>
        <div className="ticket-status-row">
          <span>Total Tickets:</span>
          <span>{totalTickets}</span>
        </div>
        <div className="ticket-status-row">
          <span>No. of Sold Tickets:</span>
          <span>{soldTickets}</span>
        </div>
        <div className="ticket-status-row">
          <span>Total Income:</span>
          <span>Rs. {totalIncome}</span>
        </div>
        <div className="ticket-status-row">
          <span>Remaining Tickets:</span>
          <span>{remainingTickets}</span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TicketStatusCard
