import asyncHandler from 'express-async-handler'
import getCustomers from '../../models/adminModel.js'

const getAllCustomersByAdmin = asyncHandler(async (req, res) => {
    const customers = await getCustomers()
    if (customers) {
        res.status(200).json({customers
        })
      } else {
        res.status(400).json({
          message: 'Invalid verification token or token expired',
        })
      }
})

export {
    getAllCustomersByAdmin
}
