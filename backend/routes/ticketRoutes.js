import express from 'express'
const router = express.Router()
import {
  addTicket,
  getAllTicket
} from '../controllers/ticketController.js'

router.post('/addTicket', addTicket)
router.get('/getAllTickets', getAllTicket)

export default router
