import asyncHandler from 'express-async-handler'
import {
  addNewTicket,
  getAllTickets
} from '../models/ticketModel.js'

const addTicket = asyncHandler(async (req, res) => {
  const {
    selectedCategory,
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
    bankPassbookImage
  } = req.body

  const ticketItemsString = JSON.stringify(ticketItems)

  const addTicketResponse = await addNewTicket( 
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
    bankPassbookImage)

  if (addTicketResponse) {
    res.status(200).json({
      msg: 'Ticket added successfully',
    })
  } else {
    res.status(404)
    throw new Error('Fail to add new ticket')
  }
})

const getAllTicket = asyncHandler(async (req, res) => {
 
  const getAllTicketsResponse = await getAllTickets()

  if (getAllTicketsResponse) {
    res.status(200).json({
      getAllTicketsResponse
    })
  } else {
    res.status(404)
    throw new Error('Fail to add new ticket')
  }
})

export { addTicket, getAllTicket }