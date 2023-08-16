import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faMapMarkerAlt, faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const TicketInfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const src = queryParams.get('src');
  const title = queryParams.get('title');
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const venue = queryParams.get('venue');
  const description = queryParams.get('description');
  const price = queryParams.get('price');


  const updatedSrc = `../../src/assets/images/uploads/${src}`
  const editedPrice = JSON.parse(price)
  const editedTime = date.split("T")[0]
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [totalPayable, setTotalPayable] = useState(price);

  useEffect(() => {
    const calculatedTotal = numberOfTickets * editedPrice[0].price;
    setTotalPayable(calculatedTotal);
  }, [numberOfTickets, price]);


  const handleNumberOfTicketsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= 10) {
      setNumberOfTickets(value);
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
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            <FontAwesomeIcon icon={faCalendar} />
            {editedTime}
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} />
            {time}
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {venue}
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
            <div className='confirmed-ticket-info-details'>{title}</div>
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
              <option>{time}</option>
            </select>
          </div>

          <div className='confirmed-ticket-info-row'>
            <span className='confirmed-ticket-info-label'>Event Venue:</span>
            <select className='confirmed-ticket-info-details'>
              <option>{venue}</option>
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
