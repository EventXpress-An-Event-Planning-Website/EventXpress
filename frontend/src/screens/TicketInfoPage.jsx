import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faMapMarkerAlt, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

const TicketInfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [ticket, setTicket] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/tickets/getTicketInfo?id=${id}`)
      .then((response) => {
        setTicket(response.data.getTicketResponse)
        const editedPrice = JSON.parse(response.data.getTicketResponse.ticketitems);
        const initialTotalPayable = editedPrice[0].price * numberOfTickets;
        setTotalPayable(initialTotalPayable);
      })
      .catch((error) => {
        console.error('Error fetching ticket Info:', error);
      });
  }, []);

  // Conditionally render the content when ticket data is available
  if (!ticket) {
    return <p>Loading...</p>;
  }


  const updatedSrc = `../../src/assets/images/uploads/${ticket.eventposter}`
  const editedPrice = JSON.parse(ticket.ticketitems)
  const editedTime = ticket.eventdate.split("T")[0]

  const handleNumberOfTicketsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= 10) {
      setNumberOfTickets(value);
       // Recalculate total payable based on editedPrice and new number of tickets
       if (ticket) {
        const editedPrice = JSON.parse(ticket.ticketitems);
        setTotalPayable(editedPrice[0].price * value);
      }
    } else if (value > 10) {
      setNumberOfTickets(10);
    }
  };

  return (
    <>
      <div className='ticket-info-container'>
        <div className='ticket-info-image'>
          <img src={updatedSrc} alt='Ticket' />
        </div>
        <div className='ticket-info-content' >
          <h2>{ticket.eventtitle}</h2>
          <p>{ticket.eventdescription}</p>
          <p>
            <FontAwesomeIcon icon={faCalendar} />
            {editedTime}
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} />
            {ticket.eventtime}
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {ticket.eventvenue}
          </p>
          <p>
            <FontAwesomeIcon icon={faRupeeSign} />
            {editedPrice[0].price}
          </p>

        </div>
      </div>
      <div className='confirmed-ticket-info-container'>
        <div className='confirmed-ticket-info-wrapper'>
          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Event Name:</span>
            <div className='confirmed-ticket-info-details'>{ticket.eventtitle}</div>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Event Date:</span>
            <select className='confirmed-ticket-info-details'>
              <option>{editedTime}</option>
            </select>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Event Time:</span>
            <select className='confirmed-ticket-info-details'>
              <option>{ticket.eventtime}</option>
            </select>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Event Venue:</span>
            <select className='confirmed-ticket-info-details'>
              <option>{ticket.eventvenue}</option>
            </select>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Ticket Type:</span>
            <select className='confirmed-ticket-info-details'>
              <option>{editedPrice[0].price}</option>
            </select>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>No of Tickets:</span>
            <input
              type='number'
              className='confirmed-ticket-info-details'
              value={numberOfTickets}
              onChange={handleNumberOfTicketsChange}
            />
          </div>
          {numberOfTickets === 10 && <p className='max-tickets-message'>You can buy maximum of 10 tickets at a time.</p>}

          <div className='confirmed-ticket-info-total'>
            <div>
              <span>Total Payable: </span>
              <strong>{totalPayable}</strong>
            </div>
            <button className='confirmed-ticket-pay-button'>Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};


export default TicketInfoPage;
