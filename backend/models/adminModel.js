import { assign } from 'nodemailer/lib/shared/index.js'
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
    // console.log(serviceProvidersExists);

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
    // console.log(PendingServiceProvidersExists);

    return PendingServiceProvidersExists.rowCount > 0 ? PendingServiceProvidersExists.rows : false
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

//get count of customers from database
const getCountOfCustomers = async () => {
  try {
    const customerCountQuery = `
    SELECT COUNT(*) FROM customer;`
    const customerCount = await query(customerCountQuery, [])

    return customerCount.rows[0].count
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// get count of service providers approve by admin from database
const getCountOfServiceProviders = async () => {
  try {
    const serviceProviderCountQuery = `
    SELECT COUNT(*) FROM serviceprovider WHERE isverifiedbyadmin = 'true';`
    const serviceProviderCount = await query(serviceProviderCountQuery, [])

    // console.log("here",serviceProviderCount.rows[0].count);

    return serviceProviderCount.rows[0].count
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// get count of service providers request from database
const getCountOfNewRequests = async () => {
  try {
    const requsetCountQuery = `
    SELECT COUNT(*) FROM serviceprovider WHERE isverifiedbyadmin = 'false';`
    const newRequestsCount = await query(requsetCountQuery, [])

    // console.log("here",serviceProviderCount.rows[0].count);

    return newRequestsCount.rows[0].count
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

//get total users count from database
const totalUsersCount = async () => {
  try {
    var totalUsers = parseInt(await (getCountOfCustomers())) + parseInt(await (getCountOfServiceProviders()));
    return totalUsers;
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)

  }
}

// get total ticket quantity when give ID of ticket
const getTotalTicketsQuantity = async (ticket_Id) => {
  try {
    const eventDetailsQuery = ` SELECT ticketId, SUM(totalQuantity) AS totalQuantitySum
    FROM ticketStatus
    WHERE ticketId = $1
    GROUP BY ticketId;`

    const eventDetails = await query(eventDetailsQuery, [ticket_Id])
    return eventDetails.rows[0].totalquantitysum

  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// get current ticket quantity when give ID of ticket
const getCurrentTicketsQuantity = async (ticket_Id) => {
  try {
    const eventDetailsQuery = ` SELECT ticketId, SUM(currentQuantity) AS currentQuantitySum
    FROM ticketStatus
    WHERE ticketId = $1
    GROUP BY ticketId;`

    const eventDetails = await query(eventDetailsQuery, [ticket_Id])

    return eventDetails.rows[0].currentquantitysum
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// get remaining ticket quantity when give ID of ticket
const getSoldTicketsQuantity = async (ticket_Id) => {
  try {
    let totalTickets = parseInt(await (getTotalTicketsQuantity(ticket_Id)));
    let currentTickets = parseInt(await (getCurrentTicketsQuantity(ticket_Id)));
    let soldTickets = totalTickets - currentTickets;

    return soldTickets;
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// total revenue when give ID of ticket
const getTicketRevenue = async (ticket_Id) => {
  try {
    const ticketRevQuery = ` SELECT ticketId, SUM(amount) AS totalAmount
    FROM ticketBookings
    WHERE ticketId = $1
    GROUP BY ticketId;
    `
    const eventDetails = await query(ticketRevQuery, [ticket_Id])
    return eventDetails.rows[0].totalamount
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// get all event Names and Ticket IDs
const totalEvents = async () => {
  try {
    const totalEventsQuery = `
    SELECT id,eventTitle FROM ticket`
    const totalEvents = await query(totalEventsQuery, [])
    console.log(totalEvents);

    return totalEvents.rowCount > 0 ? totalEvents.rows : false
  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// assign event data for object
const combineEventData = async () => {
  try {
    const totEvents = await totalEvents(); // Assuming totalEvents is an asynchronous function to get all event names and IDs

    const combinedEventDetails = [];

    for (const event of totEvents) {
      const getTicketRevenues = await getTicketRevenue(parseInt(event.id));
      const remainingTickets = await getSoldTicketsQuantity(parseInt(event.id));

      const newEvent = {
        "eventtitle": `${event.eventtitle}`,
        "ticketid": `${event.id}`,
        "revenue": `${getTicketRevenues}`,
        "soldtickets": `${remainingTickets}`
      };

      combinedEventDetails.push(newEvent);
    }

    return combinedEventDetails;
  } catch (error) {
    console.error(`Internal Error: ${error.message}`);
    throw new Error(`Internal Error: ${error.message}`);
  }
};


//get service provider details from database when give ID of service provider

const getServiceProviderDetails = async (serviceProvider_Id) => {

  try {
    const getServiceProviderDetailsQuery = ` SELECT * FROM serviceprovider WHERE id = $1;`

    const getServiceProviderDetails = await query(getServiceProviderDetailsQuery, [serviceProvider_Id])

    return getServiceProviderDetails.rows[0]
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}


//acceptFunction
const serviceproviderAcceptFunction = async (serviceProvider_Id) => {
  try {
    const acceptQuery = `UPDATE serviceprovider SET isverifiedbyadmin = true WHERE id = $1;`

    const accept = await query(acceptQuery, [serviceProvider_Id])

    return (accept ? true : false)
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

export {
  getCustomers, getServiceProviders, getPendingServiceProviders, getCountOfCustomers,
  getCountOfServiceProviders, totalUsersCount, getCountOfNewRequests,
  combineEventData,getServiceProviderDetails,serviceproviderAcceptFunction
};