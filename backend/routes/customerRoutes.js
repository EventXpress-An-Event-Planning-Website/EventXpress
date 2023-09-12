import express from 'express'
const router = express.Router()

import { createevent,getEvent, getEventDetails,addEventToDo, viewEventToDo } from '../controllers/Customer/createEventController.js'
import {protect}  from '../middleware/authMiddleware.js'
import { viewVenuePackage,viewVenuePackageDetails,addVenuePack,addVenuePackToCompare,getPackageCount,getComparePackage,addPackageToCompareTable,viewCakePackage,viewCakesPackageDetails,addCakePackToCompare,getCompareCakePackage,addCakePackageToCompareTable,viewdecoPackage,viewDecoPackageDetails,addDecoPackToCompare,addDecoPackageToCompareTable,getCompareDecoPackage } from '../controllers/Customer/packageController.js'

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
router.get('/viewDecoPackage',viewdecoPackage)
router.get('/viewDecorationPackageDetails',viewDecoPackageDetails)
router.post('/addDecoPackToCompare',addDecoPackToCompare )
router.post('/addDecoPackToCompareTable', addDecoPackageToCompareTable )
router.get('/CompareDeco',getCompareDecoPackage)

export default router