import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import TicketCard from './TicketCard'
import axios from 'axios'

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get('/api/tickets/getAllTickets')
      .then((response) => {
        // Update the state with the fetched data
        setTickets(response.data.getAllTicketsResponse);
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  }, []);

  return (
    <div className="ticket-grid-container">
      <Row className="ticket-custom-row">
        {tickets.map((ticket) => (
          <Col key={ticket.id} xs={12} md={4} className="mb-4 ticket-custom-col">
            <TicketCard
              id={ticket.id}
              src={ticket.eventposter}
              title={ticket.eventtitle}
              date={ticket.eventdate}
              time={ticket.eventtime}
              venue={ticket.eventvenue}
              price={ticket.ticketitems}
              description={ticket.eventdescription}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Tickets
