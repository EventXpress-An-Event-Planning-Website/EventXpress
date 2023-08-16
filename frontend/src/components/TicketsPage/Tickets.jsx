import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import TicketCard from './TicketCard'
import image1 from '../../assets/images/tickets/CT-NEW-EVENT.jpg'
import image2 from '../../assets/images/tickets/event-new-api-hamuwemuda.jpg'
import image3 from '../../assets/images/tickets/Eventstalk-2023 -NEW-Event-Banner.jpg'
import image4 from '../../assets/images/tickets/kapthuru-gee-event-01.jpg'
import image5 from '../../assets/images/tickets/legends-new-event-banner.jpg'
import image6 from '../../assets/images/tickets/MA-NOWANA-MAMA11.png'
import image7 from '../../assets/images/tickets/Marians-teaser.jpg'
import image8 from '../../assets/images/tickets/sankranthi-event-new.jpg'
import axios from 'axios'

const Tickets = () => {
  const [tickets1, setTickets1] = useState([]);

  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get('/api/tickets/getAllTickets')
      .then((response) => {
        // Update the state with the fetched data
        console.log(response.data.getAllTicketsResponse);
        setTickets1(response.data.getAllTicketsResponse);
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  }, []);

  const tickets = [
    {
      id: 1,
      title: 'Ticket 1',
      image: image1,
      date: '2023-07-30',
      time: '15:00',
      venue: 'Some Venue 1',
      price: 2000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      title: 'Ticket 2',
      image: image2,
      date: '2023-07-30',
      time: '15:00',
      venue: 'Some Venue 2',
      price: 2000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      title: 'Ticket 3',
      image: image3,
      date: '2023-07-30',
      time: '15:00',
      venue: 'Some Venue 3',
      price: 2000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 4,
      title: 'Ticket 4',
      image: image4,
      date: '2023-07-30',
      time: '15:00',
      venue: 'Some Venue 4',
      price: 2000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 5,
      title: 'Ticket 5',
      image: image5,
      date: '2023-07-30',
      time: '15:00',
      venue: 'Some Venue 5',
      price: 2000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 6,
      title: 'Ticket 6',
      image: image6,
      date: '2023-07-30',
      time: '15:00',
      venue: 'Some Venue 6',
      price: 2000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 7,
      title: 'Ticket 7',
      image: image7,
      date: '2023-07-30',
      time: '15:00',
      venue: 'Some Venue 7',
      price: 2000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 8,
      title: 'Ticket 8',
      image: image8,
      date: '2023-07-30',
      time: '15:00',
      venue: 'Some Venue 8',
      price: 2000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]

  // Function to divide the tickets into chunks of 2
  const chunkTickets = (arr, size) => {
    const result = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }

  const ticketChunks = chunkTickets(tickets, 3)

  return (
    <div className="ticket-grid-container">
      {/* {ticketChunks.map((ticketRow, index) => (
        <Row key={index} className="ticket-custom-row">
          {ticketRow.map((ticket, innerIndex) => (
            <Col key={innerIndex} xs={12} md={4} className="mb-4 ticket-custom-col">
              <TicketCard
                id={ticket.id}
                src={ticket.image}
                title={ticket.title}
                date={ticket.date}
                time={ticket.time}
                venue={ticket.venue}
                price={ticket.price}
                description={ticket.description}
              />
            </Col>
          ))}
        </Row>
      ))} */}

      <Row className="ticket-custom-row">
        {tickets1.map((ticket) => (
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
