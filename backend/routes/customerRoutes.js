import express from 'express'
const router = express.Router()
import { createevent, addEventToDo, viewEventToDo } from '../controllers/Customer/createEventController.js'
import {protect}  from '../middleware/authMiddleware.js'
import { viewPackage } from '../controllers/Customer/packageController.js'

router.post('/createEvent', createevent)
router.get('/viewPackage', viewPackage)
router.post('/addToDo',addEventToDo)
router.post('/viewToDo',viewEventToDo)

export default router