import asyncHandler from 'express-async-handler'
import {
  getCustomers, getPendingServiceProviders, getServiceProviders, getCountOfCustomers, getCountOfServiceProviders,
  totalUsersCount, getCountOfNewRequests,combineEventData,getServiceProviderDetails,serviceproviderAcceptFunction,
  combinesEventData, eventDetailsFunction, getAllComplains,customerDetailsFunction,makeAsReadComplain,desableServiceProvider,
  deleteServiceProvider
} from '../../models/adminModel.js'
import { request } from 'express'

const getAllCustomersByAdmin = asyncHandler(async (req, res) => {
  const customers = await getCustomers()
  if (customers) {
    res.status(200).json({
      customers
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
    res.status(200).json({
      serviceProviders
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
    res.status(200).json({
      serviceProviders
    })
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
  }
})

const getServiceProviderDetail = asyncHandler(async (req, res) => {
  const spId = req.query.id;

  const serviceProviders = await getServiceProviderDetails(spId)
  if (serviceProviders) {
    res.status(200).json({
      serviceProviders
    })
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
  }
})

const acceptServiceProvider = asyncHandler(async (req, res) => {
  const spId = req.query.id;
  const serviceProviders = await serviceproviderAcceptFunction(spId)
  if (serviceProviders) {
    res.status(200).json({
      serviceProviders
    })
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
  }
})

const getEventDetail = asyncHandler(async (req, res) => {
  const ticketId = req.query.ticketId;
  const eventFullDetails = await eventDetailsFunction(ticketId)
  if (eventFullDetails) {
    res.status(200).json({
      eventFullDetails
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

const getEventData = asyncHandler(async (req, res) => {
  const eventData = await combineEventData()

  if (eventData) {
    // console.log(serviceProvidersCount);
    res.status(200).json(eventData)
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
  }
})

const getEventDataForEventsPage = asyncHandler(async (req, res) => {
  const eventData = await combinesEventData()

  if (eventData) {
    // console.log(serviceProvidersCount);
    res.status(200).json(eventData)
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
  }
})

const getAllComplain = asyncHandler(async (req, res) => {
  const eventData = await getAllComplains()

  if (eventData) {
    // console.log(serviceProvidersCount);
    res.status(200).json(eventData)
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
  }
})

const getCustomer = asyncHandler(async (req, res) => {
  
  const cusId = req.query.cusId;
  const customer = await customerDetailsFunction(cusId)

  if (customer) {
    // console.log(serviceProvidersCount);
    res.status(200).json(customer)
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
  }
})

const makeAsRead = asyncHandler(async (req, res) => {
  
  const compalainId = req.query.compalainId;
  const complain = await makeAsReadComplain(compalainId)

  if (complain) {
    // console.log(serviceProvidersCount);
    res.status(200).json(complain)
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
  }
})

const desableServiceProviderByAdmin = asyncHandler(async (req, res) => {
    const spId = req.query.spId;
    const serviceProvider = await desableServiceProvider(spId)
  
    if (serviceProvider) {
      // console.log(serviceProvidersCount);
      res.status(200).json(serviceProvider)
    } else {
      res.status(400).json({
        message: 'Invalid verification token or token expired',
      })
    }
})

const deleteServiceProviderByAdmin = asyncHandler(async (req, res) => {
  const spId = req.query.spId;
  const serviceProvider = await deleteServiceProvider(spId)

  if (serviceProvider) {
    // console.log(serviceProvidersCount);
    res.status(200).json(serviceProvider)
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
  }
})




export {
  getAllCustomersByAdmin, getAllServiceProvidersByAdmin, getPendingServiceProvidersByAdmin, getAllCustomerCount,
  getAllServiceProvidersCount, getAllUserCount, getAllNewRequestCount,getEventData,getServiceProviderDetail,acceptServiceProvider,
  getEventDataForEventsPage, getEventDetail,getAllComplain,getCustomer,makeAsRead,desableServiceProviderByAdmin,deleteServiceProviderByAdmin
}
