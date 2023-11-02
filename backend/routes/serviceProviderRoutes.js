import express from 'express'
import { createpackage,createPredefine,getsloePackages } from '../controllers/ServiceProvider/createPackageController.js'
import { 
    getSPprofile, 
    getAllPack, 
    getPacAllkDetails,
    getSPNames,
    createBlockPrefSPList,
    removeBlockPrefSPList,
    getPreferenceSPNames,
    getBlockSPNames,
    getAllNotifications,
    acceptNotification,
    declineNotification,
    getBusyDates,
    setBusyDates
    // updateSPDetails
} from '../controllers/ServiceProvider/spController.js'
import { prePackagesByUser } from '../controllers/Customer/packageController.js'


const router = express.Router()

router.post('/createPackage',createpackage)
// router.get('/getAllCakePackages', getAllCakePack)
router.get('/getAllNotifications', getAllNotifications)
router.put('/updateNotificationStatus/accept/:notify_id', acceptNotification)
router.put('/updateNotificationStatus/decline/:notify_id', declineNotification)
router.get('/getBusyDates/:id', getBusyDates)
router.post('/setBusyDates/:id', setBusyDates)
router.post('/addtoBlockPrefList', createBlockPrefSPList)
router.post('/removefromBlockPrefList', removeBlockPrefSPList)
router.get('/profile', getSPprofile)
router.get('/getAllPackages', getAllPack)
router.get('/getFullPackDetails', getPacAllkDetails)
router.get('/getAllSProviders', getSPNames)
router.get('/getPreferenceSProviders', getPreferenceSPNames)
router.get('/getBlockSProviders', getBlockSPNames)
router.post('/CreatePredefine', createPredefine)
router.get('/getprePackages',getsloePackages)
router.get('/viewBirthdayPackageByUser',prePackagesByUser)


// router.get('/updateServiceProviderDetails', updateSPDetails)


export default router