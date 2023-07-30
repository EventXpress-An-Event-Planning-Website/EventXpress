import React from 'react'
import { Link } from 'react-router-dom'
import TicketDetailsCard from '../components/TicketsPage/TicketStatusCard.jsx'
import image1 from '../assets/images/tickets/event-new-api-hamuwemuda.JPG'

const SellTicketsPage = () => {
  const ticketData = {
    imageUrl: image1,
    totalTickets: 60,
    soldTickets: 30,
    totalIncome: 60000,
  }
  return (
    <>
      <div className='add-new-ticket-button-container'>
        <Link to="/customer/sellTickets/add">
          <button className="add-new-ticket-button">Add Tickets</button>
        </Link>
      </div>
      <TicketDetailsCard
        imageUrl={ticketData.imageUrl}
        totalTickets={ticketData.totalTickets}
        soldTickets={ticketData.soldTickets}
        totalIncome={ticketData.totalIncome}
      />
    </>
  )
}

export default SellTicketsPage
