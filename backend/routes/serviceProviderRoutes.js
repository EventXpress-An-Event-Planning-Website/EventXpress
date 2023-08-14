import express from 'express'
import { createpackage } from '../controllers/ServiceProvider/createPackageController.js'
import { getSPprofile } from '../controllers/ServiceProvider/spController.js'

const router = express.Router()

router.post('/createPackage',createpackage)
router.post('/profile', getSPprofile)

export default router