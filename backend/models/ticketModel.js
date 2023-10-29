import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler'

// add a new ticket
const addNewTicket = asyncHandler(
  async (
    selectedCategory,
    eventTitle,
    eventDate,
    eventTime,
    eventVenue,
    eventDescription,
    eventPoster,
    ticketItemsString,
    accountHolderName,
    bankName,
    branchName,
    accountNumber,
    bankPassbookImage
  ) => {
    const addTicketQuery = `
        INSERT INTO 
          ticket(selectedCategory,
            eventTitle,
            eventDate,
            eventTime,
            eventVenue,
            eventDescription,
            eventPoster,
            ticketItems,
            accountHolderName,
            bankName,
            branchName,
            accountNumber,
            bankPassbookImage) 
          VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) 
          RETURNING id`
    const addTicket = await query(addTicketQuery, [
      selectedCategory,
      eventTitle,
      eventDate,
      eventTime,
      eventVenue,
      eventDescription,
      eventPoster,
      ticketItemsString,
      accountHolderName,
      bankName,
      branchName,
      accountNumber,
      bankPassbookImage,
    ])
    // console.log(addTicket);
    if (addTicket.rows.length === 1) {
      return addTicket.rows[0].id
    } else {
      throw new Error('Internal Error')
    }
  }
)

// add ticket status
const addTicketStatus = asyncHandler(
  async (ticketId, userId, type, price, quantity) => {
    const addTicketStatusQuery = `
      INSERT INTO 
        ticketStatus(
            ticketId,
            customerId,
            type,
            price,
            totalQuantity,
            currentQuantity)
          VALUES($1,$2,$3,$4,$5,$6)`
    const ticketStatus = await query(addTicketStatusQuery, [
      ticketId,
      userId,
      type,
      price,
      quantity,
      quantity,
    ])
    if (ticketStatus.rowCount > 0) {
      return true
    } else {
      throw new Error('Internal Error')
    }
  }
)

// get all tickets
const getAllTickets = asyncHandler(async () => {
  const getTicketQuery = `SELECT * FROM ticket`
  const getTicket = await query(getTicketQuery, [])
  if (getTicket) {
    return getTicket.rows
  } else {
    throw new Error('Internal Error')
  }
})

// get all tickets
const getTicket = asyncHandler(async (id) => {
  const getTicketQuery = `SELECT *
  FROM ticket
  JOIN ticketStatus ON ticket.id = ticketStatus.ticketId
  WHERE ticket.id = $1`
  const getTicket = await query(getTicketQuery, [id])
  // console.log("Ticket info",getTicket);
  if (getTicket) {
    return getTicket.rows
  } else {
    throw new Error('Internal Error')
  }
})

// ticket booking
const ticketBooking = asyncHandler(
  async (
    ticketId,
    buyerId,
    pid,
    ticketType,
    noOfTickets,
    amount
  ) => {
    try {
      // add the booking record to the database
      const addBookingQuery = `
        INSERT INTO ticketBookings (buyerId, ticketId, pid, ticketType, noOfTickets, amount)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;
      const addBookingResult = await query(addBookingQuery, [
        buyerId,
        ticketId,
        pid,
        ticketType,
        noOfTickets,
        amount,
      ]);

      // update the ticket quantity in the ticket database
      const updateTicketQuery = `
        UPDATE ticketStatus
        SET currentQuantity = currentQuantity - $1
        WHERE ticketId = $2 AND type = $3
      `;
      const updateTicketResult = await query(updateTicketQuery, [
        noOfTickets,
        ticketId,
        ticketType,
      ]);

      return true;
    } catch (error) {
      console.error('Error during ticket booking:', error);
      throw new Error('Failed to complete the booking.');
    }
  }
)

export {
  addNewTicket,
  getAllTickets,
  getTicket,
  addTicketStatus,
  ticketBooking,
}
