import express from 'express'
const router = express.Router();
import {getAllCustomersByAdmin, getAllServiceProvidersByAdmin, getPendingServiceProvidersByAdmin,getAllCustomerCount} from '../controllers/Admin/userController.js'

router.get('/getAllCustomers', getAllCustomersByAdmin);
router.get('/getAllServiceProviders', getAllServiceProvidersByAdmin);
router.get('/getPendingServiceProviders', getPendingServiceProvidersByAdmin);
router.get('/getAllCustomerCount', getAllCustomerCount);

export default router