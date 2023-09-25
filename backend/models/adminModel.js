import { query } from '../config/db.js'


const getCustomers =  async () => {
  try {
    const customerExistsQuery = `
    SELECT * FROM customer`
    const customerExists = await query(customerExistsQuery, [])
    
    return customerExists.rowCount > 0 ?  customerExists.rows: false
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}



const getServiceProviders = async () => {
  try {
    const serviceProvidersExistsQuery = `
    SELECT * FROM serviceprovider where isVerifiedByAdmin = true`
    const serviceProvidersExists = await query(serviceProvidersExistsQuery, [])
    console.log(serviceProvidersExists);

    return serviceProvidersExists.rowCount > 0 ?  serviceProvidersExists.rows: false
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

const getPendingServiceProviders = async () => {
  try {
    const PendingServiceProvidersExistsQuery = `
    SELECT * FROM serviceprovider where isVerifiedByAdmin = false`
    const PendingServiceProvidersExists = await query(PendingServiceProvidersExistsQuery, [])
    console.log(serviceProvidersExists);

    return PendingServiceProvidersExists.rowCount > 0 ?  PendingServiceProvidersExists.rows: false
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

export {getCustomers,getServiceProviders, getPendingServiceProviders};