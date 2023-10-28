import express from 'express'
import { createpackage } from '../controllers/ServiceProvider/createPackageController.js'
import { 
    getSPprofile, 
    getAllPack, 
    getPacAllkDetails,
    getSPNames,
    createBlockPrefSPList,
    removeBlockPrefSPList,
    getPreferenceSPNames,
    getBlockSPNames
} from '../controllers/ServiceProvider/spController.js'


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

export default router