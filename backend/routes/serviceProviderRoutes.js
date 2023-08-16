import express from 'express'
import { createpackage } from '../controllers/ServiceProvider/createPackageController.js'
import { getSPprofile, getAllCakePack } from '../controllers/ServiceProvider/spController.js'


const router = express.Router()

router.post('/createPackage',createpackage)
router.post('/profile', getSPprofile)
router.get('/getAllCakePackages', getAllCakePack)


export default router