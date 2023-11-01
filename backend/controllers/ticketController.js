import asyncHandler from 'express-async-handler'
import {
  addNewTicket,
  getAllTickets,
  getTicket,
  addTicketStatus,
  getAllTrendingTickets,
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
    bankPassbookImage,
    userId,
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
    bankPassbookImage
  )

  console.log(addTicketResponse);
  const ticketId = addTicketResponse;

  for (const item of ticketItems) {
    const { type, price, quantity } = item

    const ticketStatusResponse = await addTicketStatus(
      ticketId,
      userId,
      type,
      price,
      quantity
    )
    if (!ticketStatusResponse) {
      console.error('Error adding ticket status')
    } else {
      console.log(`Ticket status added`)
    }
  }

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
      getAllTicketsResponse,
    })
  } else {
    res.status(404)
    throw new Error('Fail to fetch tickets')
  }
})

const getTicketInfo = asyncHandler(async (req, res) => {
  const { id } = req.query
  const getTicketResponse = await getTicket(id)

  if (getTicketResponse) {
    res.status(200).json({
      getTicketResponse,
    })
  } else {
    res.status(404)
    throw new Error('Fail to fetch ticket')
  }
})

const getTrendingTickets = asyncHandler(async (req, res) => {
  const getTicketResponse = await getAllTrendingTickets()

  if (getTicketResponse) {
    res.status(200).json({
      getTicketResponse,
    })
  } else {
    res.status(404)
    throw new Error('Fail to fetch ticket')
  }
})

export { addTicket, getAllTicket, getTicketInfo, getTrendingTickets }
