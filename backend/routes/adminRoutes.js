import express from 'express'
const router = express.Router();
import {
    getAllCustomersByAdmin, getAllServiceProvidersByAdmin, getPendingServiceProvidersByAdmin, getAllCustomerCount,
    getAllServiceProvidersCount, getAllUserCount, getAllNewRequestCount,getEventData,getServiceProviderDetail,acceptServiceProvider,
    getEventDataForEventsPage, getEventDetail,getAllComplain, getCustomer,makeAsRead,desableServiceProviderByAdmin,deleteServiceProviderByAdmin,
    getRevenueData,getAllRevenueData
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
router.get('/getEventDataForEventsPage', getEventDataForEventsPage);
router.get('/getEventDetail', getEventDetail);
router.get('/getAllComplain', getAllComplain);
router.get('/getCustomer', getCustomer);  
router.put('/makeAsRead', makeAsRead);
router.put('/desableServiceProviderByAdmin', desableServiceProviderByAdmin);
router.delete('/deleteServiceProviderByAdmin', deleteServiceProviderByAdmin);
router.get('/getRevenueData', getRevenueData);
router.get('/getAllRevenueData', getAllRevenueData);

export default router
