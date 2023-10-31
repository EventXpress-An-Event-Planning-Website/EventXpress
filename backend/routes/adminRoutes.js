import express from 'express'
const router = express.Router();
import {
    getAllCustomersByAdmin, getAllServiceProvidersByAdmin, getPendingServiceProvidersByAdmin, getAllCustomerCount,
    getAllServiceProvidersCount, getAllUserCount, getAllNewRequestCount,getEventData,getServiceProviderDetail,acceptServiceProvider
} from '../controllers/Admin/userController.js'

router.get('/getAllCustomers', getAllCustomersByAdmin);
router.get('/getAllServiceProviders', getAllServiceProvidersByAdmin);
router.get('/getPendingServiceProviders', getPendingServiceProvidersByAdmin);
router.get('/getAllCustomerCount', getAllCustomerCount);
router.get('/getAllServiceProvidersCount', getAllServiceProvidersCount);
router.get('/getAllUserCount', getAllUserCount);
router.get('/getAllNewRequestCount', getAllNewRequestCount);
router.get('/getEventData', getEventData);
router.get('/getServiceProviderDetail', getServiceProviderDetail);
router.put('/acceptServiceProvider', acceptServiceProvider);

export default router
