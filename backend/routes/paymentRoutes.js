import express from 'express'
const router = express.Router()
import { buyTicket } from '../controllers/paymentController.js'

router.post('/buyTicket', buyTicket)

export default router
