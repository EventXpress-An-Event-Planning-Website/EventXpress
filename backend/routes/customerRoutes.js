import express from 'express'
const router = express.Router()
import { createevent } from '../controllers/Customer/createEventController.js'
import {protect}  from '../middleware/authMiddleware.js'

router.post('/createEvent', createevent)


export default router