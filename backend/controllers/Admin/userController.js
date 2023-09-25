import asyncHandler from 'express-async-handler'
import { getCustomers, getPendingServiceProviders, getServiceProviders } from '../../models/adminModel.js'

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

const getAllServiceProvidersByAdmin = asyncHandler(async (req, res) => {
  const serviceProviders = await getServiceProviders()
  if (serviceProviders) {
      res.status(200).json({serviceProviders
      })
    } else {
      res.status(400).json({
        message: 'Invalid verification token or token expired',
      })
    }
})

const getPendingServiceProvidersByAdmin = asyncHandler(async (req, res) => {
  const serviceProviders = await getPendingServiceProviders()
  if (serviceProviders) {
      res.status(200).json({serviceProviders
      })
    } else {
      res.status(400).json({
        message: 'Invalid verification token or token expired',
      })
    }
})

export {
    getAllCustomersByAdmin, getAllServiceProvidersByAdmin , getPendingServiceProvidersByAdmin
}
