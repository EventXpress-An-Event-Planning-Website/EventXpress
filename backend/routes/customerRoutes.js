import express from 'express'
const router = express.Router()

import { createevent,getEvent, getEventDetails,addEventToDo, viewEventToDo } from '../controllers/Customer/createEventController.js'
import {protect}  from '../middleware/authMiddleware.js'
import { viewVenuePackage} from '../controllers/Customer/packageController.js'

router.post('/createEvent', createevent)
router.get('/viewPackage', viewVenuePackage)
router.post('/addToDo',addEventToDo)
router.get('/viewToDo',viewEventToDo)
router.get('/myEvents', getEvent)

router.get('/profile', createevent)
router.get('/eventDetails',getEventDetails)


export default router