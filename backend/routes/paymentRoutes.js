import express from 'express'
const router = express.Router()
import { buyTicket, getSubscription } from '../controllers/paymentController.js'

router.post('/buyTicket', buyTicket)
router.post('/getSubscription', getSubscription)

export default router
