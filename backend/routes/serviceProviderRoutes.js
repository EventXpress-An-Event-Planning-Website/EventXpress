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
    // updateSPDetails
} from '../controllers/ServiceProvider/spController.js'
import { prePackagesByUser } from '../controllers/Customer/packageController.js'


const router = express.Router()

router.post('/createPackage',createpackage)
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