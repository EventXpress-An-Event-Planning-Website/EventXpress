import express from 'express'
const router = express.Router()
import {
  addTicket,
  getAllTicket,
  getTicketInfo
} from '../controllers/ticketController.js'

router.post('/addTicket', addTicket)
router.get('/getAllTickets', getAllTicket)
router.get('/getTicketInfo', getTicketInfo)

export default router
