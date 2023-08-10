import express from 'express'
import { createpackage } from '../controllers/ServiceProvider/createPackageController.js'
const router = express.Router()

router.post('/createPackage',createpackage)


export default router