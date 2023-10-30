import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faMapMarkerAlt, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loader from '../components/Loader';

const TicketInfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [ticket, setTicket] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [totalPayable, setTotalPayable] = useState(0);
  const [selectedTicketType, setSelectedTicketType] = useState('');
  const [selectedTicketPrice, setSelectedTicketPrice] = useState(0);
  const [availableTicketQuantity, setAvailableTicketQuantity] = useState(0);
  const [allTicketsResponse, setAllTicketsResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem('userInfo'));
  const user_email = user.email;
  const user_id = user.id;
  const navigate = useNavigate()

  const publishableKey = 'pk_test_51NoJfsSAEsih9IEozgBErrqrFJ55gGXNa9TnileDPUxzEGYfIobHHzgIWTQ6fM01rgi8qxPFuhVHsvPMj4tqay780068h5NhjO'

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    axios
      .get(`/api/tickets/getTicketInfo?id=${id}`)
      .then((response) => {
        setTicket(response.data.getTicketResponse[0])
        const res = response.data.getTicketResponse[0]
        setAllTicketsResponse(response.data.getTicketResponse);
        // console.log("response is: ", response.data.getTicketResponse);
        // console.log("res is: ", res);
        setTotalPayable(res.price);
        if (res) {
          setSelectedTicketType(res.type);
          setSelectedTicketPrice(res.price);
          setAvailableTicketQuantity(res.currentquantity);
        }
      })
      .catch((error) => {
        console.error('Error fetching ticket Info:', error);
      });
  }, [id]);

  // Conditionally render the content when ticket data is available
  if (!ticket) {
    return <p>Loading...</p>;
  }


  const updatedSrc = `../../src/assets/images/uploads/${ticket.eventposter}`
  const res = JSON.parse(ticket.ticketitems)
  const editedTime = ticket.eventdate.split("T")[0]

  const showTicketQuantityError = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Maximum available quantity exceeded',
      text: 'The number of tickets selected exceeds the available quantity.',
    });
  };

  const handleNumberOfTicketsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= 10) {
      // Check if the number of tickets doesn't exceed the available quantity
      if (value <= availableTicketQuantity) {
        setNumberOfTickets(value);
        // Recalculate total payable based on the selectedTicketPrice and new number of tickets
        setTotalPayable(selectedTicketPrice * value);
      } else {
        // Limit the number of tickets to the available quantity and show an error message
        setNumberOfTickets(availableTicketQuantity);
        setTotalPayable(selectedTicketPrice * availableTicketQuantity);
        showTicketQuantityError();
      }
    } else if (value > 10) {
      // Limit the number of tickets to a maximum of 10
      setNumberOfTickets(10);
      setTotalPayable(selectedTicketPrice * 10);
    }
  };

  const payNow = async (token) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/payment/buyTicket', {
        ticketId: id,
        buyerId: user_id,
        buyerEmail: user_email,
        token: token,
        eventName: ticket.eventtitle,
        eventDate: editedTime,
        EventTime: ticket.eventtime,
        eventVenue: ticket.eventvenue,
        ticketType: selectedTicketType,
        ticketPrice: selectedTicketPrice,
        noOfTickets: numberOfTickets,
        amount: totalPayable * 100
      });
      handleSuccess()
      // Handle the response from your server (e.g., show a success message)
      console.log('Payment successful:', response.data);

    } catch (error) {
      handleFailure()
      console.error('Payment failed:', error);
    } finally {
      // Hide the loader after the response is received
      setLoading(false);
    }
  };

  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful check your email',
    });

    navigate(`/customer/buyTickets`)
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
            {res[0].price}
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
            <div className='confirmed-ticket-info-details'>
              {editedTime}
            </div>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Event Time:</span>
            <div className='confirmed-ticket-info-details'>
              {ticket.eventtime}
            </div>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Event Venue:</span>
            <div className='confirmed-ticket-info-details'>
              {ticket.eventvenue}
            </div>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Ticket Type:</span>
            <select
              className='confirmed-ticket-info-details'
              value={selectedTicketType}
              onChange={(e) => {
                const selectedType = e.target.value;
                const selectedTicket = allTicketsResponse.find((ticket) => ticket.type === selectedType);
                if (selectedTicket) {
                  // console.log("Selected ticket",selectedTicket);
                  setSelectedTicketType(selectedType);
                  setSelectedTicketPrice(selectedTicket.price);
                  setAvailableTicketQuantity(selectedTicket.currentquantity);
                  setTotalPayable(selectedTicket.price * numberOfTickets);
                }
              }}
            >
              {allTicketsResponse
                .filter((ticket) => ticket.currentquantity > 0)
                .map((ticket) => (
                  <option key={ticket.type} value={ticket.type}>
                    {ticket.type}
                  </option>
                ))}
            </select>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Price:</span>
            <span className='confirmed-ticket-info-details'>{selectedTicketPrice}</span>
          </div>
          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Available Quantity:</span>
            <span className='confirmed-ticket-info-details'>{availableTicketQuantity}</span>
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
            {loading ? (
              <Loader />
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};


export default TicketInfoPage;
