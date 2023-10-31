import express from 'express'
import { createpackage } from '../controllers/ServiceProvider/createPackageController.js'
import { getSPprofile, getAllCakePack, getAllNotifications,acceptNotification, declineNotification, getBusyDates, setBusyDates } from '../controllers/ServiceProvider/spController.js'


const router = express.Router()

router.post('/createPackage',createpackage)
router.post('/profile', getSPprofile)
router.get('/getAllCakePackages', getAllCakePack)
router.get('/getAllNotifications', getAllNotifications)
router.put('/updateNotificationStatus/accept/:notify_id', acceptNotification)
router.put('/updateNotificationStatus/decline/:notify_id', declineNotification)
router.get('/getBusyDates/:id', getBusyDates)
router.post('/setBusyDates/:id', setBusyDates)


export default router