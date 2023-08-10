import express from 'express'
const router = express.Router()
import { createevent,getEvent, getEventDetails } from '../controllers/Customer/createEventController.js'
import {protect}  from '../middleware/authMiddleware.js'

router.post('/createEvent', createevent)
router.get('/myEvents', getEvent)

router.get('/profile', createevent)
router.get('/eventDetails',getEventDetails)


export default router