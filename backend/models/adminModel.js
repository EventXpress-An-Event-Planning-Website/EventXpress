import { query } from '../config/db.js'



// get value all customers from database
const getCustomers = async () => {
  try {
    const customerExistsQuery = `
    SELECT * FROM customer`
    const customerExists = await query(customerExistsQuery, [])

    return customerExists.rowCount > 0 ? customerExists.rows : false
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}


// get all service providers from database that are verified by admin
const getServiceProviders = async () => {
  try {
    const serviceProvidersExistsQuery = `
    SELECT * FROM serviceprovider where isVerifiedByAdmin = true`
    const serviceProvidersExists = await query(serviceProvidersExistsQuery, [])
    console.log(serviceProvidersExists);

    return serviceProvidersExists.rowCount > 0 ? serviceProvidersExists.rows : false
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}


// get all service providers from database that are not verified by admin
const getPendingServiceProviders = async () => {
  try {
    const PendingServiceProvidersExistsQuery = `
    SELECT * FROM serviceprovider where isVerifiedByAdmin = false`
    const PendingServiceProvidersExists = await query(PendingServiceProvidersExistsQuery, [])
    console.log(serviceProvidersExists);

    return PendingServiceProvidersExists.rowCount > 0 ? PendingServiceProvidersExists.rows : false
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

const getCountOfCustomers = async () => {
  try {
    const customerCountQuery = `
    SELECT COUNT(*) FROM customer;`
    const customerCount = await query(customerCountQuery, [])
    console.log(customerCount);

    return customerCount
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}


const getCountOfServiceProviders = async () => {
  try {
    const customerCountQuery = `
    SELECT COUNT(*) FROM customer;`
    const customerCount = await query(customerCountQuery, [])
    console.log(customerCount);

    return customerCount
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}





export { getCustomers, getServiceProviders, getPendingServiceProviders, getCountOfCustomers };