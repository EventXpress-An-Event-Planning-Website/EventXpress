import asyncHandler from 'express-async-handler'
import { getCustomers, getPendingServiceProviders, getServiceProviders,getCountOfCustomers,getCountOfServiceProviders,totalUsersCount,getCountOfNewRequests } from '../../models/adminModel.js'

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

const getAllCustomerCount = asyncHandler(async (req, res) => {
  const customerCount = await getCountOfCustomers()
  if (customerCount) {
      res.status(200).json(customerCount)
    } else {
      res.status(400).json({
        message: 'Invalid verification token or token expired',
      })
    }
})

const getAllServiceProvidersCount = asyncHandler(async (req, res) => {
  const serviceProvidersCount = await getCountOfServiceProviders()
  
  if (serviceProvidersCount) {
    // console.log(serviceProvidersCount);
      res.status(200).json(serviceProvidersCount)
    } else {
      res.status(400).json({
        message: 'Invalid verification token or token expired',
      })
    }
})


const getAllUserCount = asyncHandler(async (req, res) => {
  const totalUserCount = await totalUsersCount()
  
  if (totalUserCount) {
    // console.log(serviceProvidersCount);
      res.status(200).json(totalUserCount)
    } else {
      res.status(400).json({
        message: 'Invalid verification token or token expired',
      })
    }
})


const getAllNewRequestCount = asyncHandler(async (req, res) => {
  const newRequestCount = await getCountOfNewRequests()
  
  if (newRequestCount) {
    // console.log(serviceProvidersCount);
      res.status(200).json(newRequestCount)
    } else {
      res.status(400).json({
        message: 'Invalid verification token or token expired',
      })
    }
})



export {
    getAllCustomersByAdmin, getAllServiceProvidersByAdmin , getPendingServiceProvidersByAdmin, getAllCustomerCount,getAllServiceProvidersCount,getAllUserCount,getAllNewRequestCount
}
