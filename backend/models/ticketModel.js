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
          VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`
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
    if (addTicket.rowCount > 0) {
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

export { addNewTicket, getAllTickets }
