import express from 'express'
const router = express.Router();
import {getAllCustomersByAdmin, getAllServiceProvidersByAdmin, getPendingServiceProvidersByAdmin} from '../controllers/Admin/userController.js'

router.get('/getAllCustomers', getAllCustomersByAdmin);
router.get('/getAllServiceProviders', getAllServiceProvidersByAdmin);
router.get('/getPendingServiceProviders', getPendingServiceProvidersByAdmin);

export default router