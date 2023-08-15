import express from 'express'
const router = express.Router();
import {getAllCustomersByAdmin} from '../controllers/Admin/userController.js'

router.get('/getAllCustomers', getAllCustomersByAdmin);

export default router