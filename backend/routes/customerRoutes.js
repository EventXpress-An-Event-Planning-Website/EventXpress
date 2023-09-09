import express from 'express'
const router = express.Router()

import { createevent,getEvent, getEventDetails,addEventToDo, viewEventToDo } from '../controllers/Customer/createEventController.js'
import {protect}  from '../middleware/authMiddleware.js'
import { viewVenuePackage,viewVenuePackageDetails,addVenuePack,addVenuePackToCompare,getPackageCount,getComparePackage,addPackageToCompareTable,viewCakePackage,viewCakesPackageDetails,addCakePackToCompare,getCompareCakePackage,addCakePackageToCompareTable } from '../controllers/Customer/packageController.js'

router.post('/createEvent', createevent)
router.get('/viewVenuePackage', viewVenuePackage)
router.post('/addToDo',addEventToDo)
router.get('/viewToDo',viewEventToDo)
router.get('/myEvents', getEvent)

router.get('/profile', createevent)
router.get('/eventDetails',getEventDetails)
router.get('/viewVenuePackageDetails',viewVenuePackageDetails)
router.post('/addvenuePackToEvent',addVenuePack )
router.post('/addvenuePackToCompare',addVenuePackToCompare )
router.get('/getPackageCount',getPackageCount)
router.get('/CompareVenue',getComparePackage)
router.post('/addvenuePackToCompareTable',addPackageToCompareTable)
router.get('/viewCakePackage',viewCakePackage)
router.get('/viewCakePackageDetails',viewCakesPackageDetails)
router.post('/addCakePackToCompare',addCakePackToCompare )
router.get('/CompareCake',getCompareCakePackage)
router.post('/addCakePackToCompareTable', addCakePackageToCompareTable )

export default router