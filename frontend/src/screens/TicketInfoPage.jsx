import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faMapMarkerAlt, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const TicketInfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [ticket, setTicket] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [totalPayable, setTotalPayable] = useState(0);

  const user = JSON.parse(localStorage.getItem('userInfo'));
  const user_email = user.email;

  const publishableKey = 'pk_test_51NoJfsSAEsih9IEozgBErrqrFJ55gGXNa9TnileDPUxzEGYfIobHHzgIWTQ6fM01rgi8qxPFuhVHsvPMj4tqay780068h5NhjO'

  const MySwal = withReactContent(Swal);

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

  const payNow = async (token) => {
    try {
      const response = await axios.post('/api/payment/buyTicket', {
        token: token,
        amount: totalPayable * 100
      });
      handleSuccess()
      // Handle the response from your server (e.g., show a success message)
      console.log('Payment successful:', response.data);

    } catch (error) {
      handleFailure()
      console.error('Payment failed:', error);
    }
  };

  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 1000,
    });
  };

  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 1000,
    });
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
              <strong>Rs. {totalPayable}</strong>
            </div>
            <StripeCheckout
              stripeKey={publishableKey}
              label='Pay Now'
              name='Enter your card details'
              email={user_email}
              currency='LKR'
              amount={totalPayable * 100}
              description={`E-Ticket will be sent to the email`}
              token={payNow}
            />

          </div>
        </div>
      </div>
    </>
  );
};


export default TicketInfoPage;
