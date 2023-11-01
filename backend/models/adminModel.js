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

// get sold ticket quantity when give ID of ticket
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

// get event date when give Name of event
const getEventNameDate = async (id) => {

  try {
    const totalEventsQuery = `
    SELECT eventdate FROM ticket WHERE id = $1`

    const eventName = await query(totalEventsQuery, [id])
    return eventName.rows[0].eventdate

  } catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// assign event data for displya in event page
const combinesEventData = async () => {
  try {
    const totEvents = await totalEvents(); // Assuming totalEvents is an asynchronous function to get all event names and IDs

    const combinedEventDetails = [];

    for (const event of totEvents) {
      const getTicketRevenues = await getTicketRevenue(parseInt(event.id));
      const soldTickets = await getSoldTicketsQuantity(parseInt(event.id));
      const eventDate = await getEventNameDate(event.id);
      const totalTickets = await getTotalTicketsQuantity(parseInt(event.id));

      const newEvent = {
        "eventtitle": `${event.eventtitle}`,
        "eventdate": `${eventDate}`,
        "ticketid": `${event.id}`,
        "revenue": `${getTicketRevenues}`,
        "soldtickets": `${soldTickets}`,
        "totaltickets": `${totalTickets}`
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

//Event Details Function
const eventDetailsFunction = async (ticketId) => {
  try {
    const eventTicketDetails = await eventTicketDetailsFunction(ticketId);
    const eventDetails = await ticketDetailsFunction(ticketId);
    const buyerDetails = await buyerDetailsFunction(ticketId);
    // const ticketBookingDetails = await ticketbookingsFunction(ticketId);
    const eventOrganizerDetails = await serviceProviderDetailsFunction(eventDetails.accountholdername);
    const TotalTicketsQuantity = await getTotalTicketsQuantity(ticketId);
    const data = {
      eventTicketDetails,
      eventDetails,
      buyerDetails,
      eventOrganizerDetails,
      TotalTicketsQuantity
    };


    return data
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

//get data from tickettable 
const ticketDetailsFunction = async (ticketId) => {
  try {
    const ticketDetailsQuery = `SELECT *
    FROM  ticket  WHERE id = $1;`
    const ticketDetails = await query(ticketDetailsQuery, [ticketId])

    return (ticketDetails ? ticketDetails.rows[0] : 'data not found')
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

//gate data from ticketstatus table
const ticketStatusFunction = async (ticketId) => {
  try {
    const tickertStatusDetailsQuery = `SELECT *
    FROM  ticketstatus  WHERE ticketid = $1;`
    const tickertStatusDetails = await query(tickertStatusDetailsQuery, [ticketId])
    return (tickertStatusDetails ? tickertStatusDetails.rows : 'data not found')
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// get data from ticketbookings table
const ticketbookingsFunction = async (ticketId) => {
  try {
    const ticketBookingDetailsQuery = `SELECT *
    FROM  ticketbookings  WHERE ticketid = $1;`
    const ticketBookingDetails = await query(ticketBookingDetailsQuery, [ticketId])
    return (ticketBookingDetails ? ticketBookingDetails.rows : 'data not found')
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

//get customer details who buy tickets
const buyerDetailsFunction = async (ticketId) => {
  try {
    const ticketbookingsDetails = await ticketbookingsFunction(ticketId);
    const buyerDetails =[];

    for (const ticketbookingsDetail of ticketbookingsDetails) {
      
      const customerDetails = await customerDetailsFunction (ticketbookingsDetail.buyerid);
     

      const buyerName = customerDetails.name;
      const buyerNIC = customerDetails.nic;
      const buyerEmail = customerDetails.email;
      const noOfTickets = ticketbookingsDetail.nooftickets ;
      const Price = ticketbookingsDetail.amount ;
      const Date = ticketbookingsDetail.created_at ;

      const newBuyer = {
        "buyerName": `${buyerName}`,
        "buyerNIC": `${buyerNIC}`,
        "buyerEmail": `${buyerEmail}`,
        "noOfTickets": `${noOfTickets}`,
        "Price": `${Price}`,
        "Date": `${Date}`,
        

      };
      buyerDetails.push(newBuyer);
    };

return buyerDetails;
  } 
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// get service provider details from service provider table
const serviceProviderDetailsFunction = async (spName) => {
  try {
    const serviceProviderDetailsQuery = `SELECT *
    FROM  serviceprovider  WHERE name = $1;`
    const serviceProviderDetails = await query(serviceProviderDetailsQuery, [spName])
    return (serviceProviderDetails ? serviceProviderDetails.rows[0] : 'data not found')
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// get customer details from customer table
const customerDetailsFunction = async (cusId) => {
  try {
    const customerDetailsQuery = `SELECT *
    FROM  customer  WHERE id = $1;`
    const customerDetails = await query(customerDetailsQuery, [cusId])
    return (customerDetails ? customerDetails.rows[0] : 'data not found')
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

//calculate event ticket details
const eventTicketDetailsFunction = async (ticketId) => {

  const totEvents = await ticketStatusFunction(ticketId);
  const combinedEventTicketDetails = [];
  let currentTotalIncome = 0;
  let expectedTotalIncome = 0;
  const incomeAndProfit = [];
  try {

    for (const eventTicketDetails of totEvents) {
      const soldTicket = parseInt(eventTicketDetails.totalquantity) - parseInt(eventTicketDetails.currentquantity);
      const currentIncomeInTicketType = parseInt(soldTicket) * parseInt(eventTicketDetails.price);
      const expextedIncomeInTicketType = parseInt(eventTicketDetails.totalquantity) * parseInt(eventTicketDetails.price);
      currentTotalIncome = currentTotalIncome + currentIncomeInTicketType;
      expectedTotalIncome = expectedTotalIncome + expextedIncomeInTicketType;


      const newEvent = {
        "ticketid": `${eventTicketDetails.ticketid}`,
        "ticketType": `${eventTicketDetails.type}`,
        "priceOfOne": `${eventTicketDetails.price}`,
        "soldTicket": `${soldTicket}`,
        "currentIncomeInTicketType": `${currentIncomeInTicketType}`,
        "totalTypeOfTickets": `${eventTicketDetails.totalquantity}`
      };
      combinedEventTicketDetails.push(newEvent);
    };

    let currentTotalProfit = parseInt(currentTotalIncome) * 0.1;
    let expectedTotalProfit = parseInt(expectedTotalIncome) * 0.1;

    const newIncomeAndProfit = {
      "currentTotalProfit": `${currentTotalProfit}`,
      "expectedTotalProfit": `${expectedTotalProfit}`,
      "currentTotalIncome": `${currentTotalIncome}`,
      "expectedTotalIncome": `${expectedTotalIncome}`
    }
    incomeAndProfit.push(newIncomeAndProfit);

    const data = {
      combinedEventTicketDetails,
      newIncomeAndProfit
    };

    return (newIncomeAndProfit && combinedEventTicketDetails ? data : 'data not found')
  }
  catch (error) {
    console.error(`Internal Error: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// get all complain  details didn't handle
const getAllComplainDontHanle = async ()=>{
  try{
  const allComplainQuery = `SELECT * FROM customercomplaints WHERE ishandled = false ;`
  const allComplain = await query(allComplainQuery,[]);
  return (allComplain ? allComplain.rows : "No new Complains")
}catch(error){
  console.error(`Internal Error: ${error.message}`)
  throw new Error(`Internal Error`)
}
}

// get all complain details handle
const getAllComplainHanle = async ()=>{
  try{
  const allComplainQuery = `SELECT * FROM customercomplaints WHERE ishandled = true ;`
  const allComplain = await query(allComplainQuery,[]);
  return (allComplain ? allComplain.rows : "No Complains")
}catch(error){
  console.error(`Internal Error: ${error.message}`)
  throw new Error(`Internal Error`)
}
}

//get All complains
const getAllComplains = async()=>{
  try{
    const complainDidntHandle = await  getAllComplainDontHanle();
    const complainHandle = await getAllComplainHanle();

    const combinedComplainDidntHandleDetails = [];
    const combinedComplainHandleDetails = [];

    for (const complainDidnotHandle of complainDidntHandle) {
      const customerName = await customerDetailsFunction(parseInt(complainDidnotHandle.customer_id));

      // console.log(customerName.name);

      const newComplain = {
        "complain": `${complainDidnotHandle.complaint_text}`,
        "complainId": `${complainDidnotHandle.complaintid }`,
        "customerName": `${customerName.name}`,
        "customerId": `${complainDidnotHandle.customer_id}`,
        "handled": false 
      };

      combinedComplainDidntHandleDetails.push(newComplain);
    }

    for (const complainDidHandle of complainHandle) {
      const customerName = await customerDetailsFunction(parseInt(complainDidHandle.customer_id));

      // console.log(customerName.name);

      const oldComplain = {
        "complain": `${complainDidHandle.complaint_text}`,
        "complainId": `${complainDidHandle.complaintid }`,
        "customerName": `${customerName.name}`,
        "customerId": `${complainDidHandle.customer_id}`,
        "handled": true 
      };

      combinedComplainHandleDetails.push(oldComplain);
    }

    const data={
      combinedComplainDidntHandleDetails,
      combinedComplainHandleDetails
    }
    return (data);

  }
  catch(error){
    console.error(`Internal Error: ${error.message}`)
  throw new Error(`Internal Error`)
  }
}

const makeAsReadComplain = async (complainId)=>{
  try{
    const makeAsReadQuery = `UPDATE customercomplaints SET ishandled = true WHERE complaintid = $1;`
    const makeAsRead = await query(makeAsReadQuery,[complainId]);
    return (makeAsRead ? true : false)
  }
  catch(error){
    console.error(`Internal Error: ${error.message}`)
  throw new Error(`Internal Error`)
  }

}




export {
  getCustomers, getServiceProviders, getPendingServiceProviders, getCountOfCustomers,
  getCountOfServiceProviders, totalUsersCount, getCountOfNewRequests,
  combineEventData, getServiceProviderDetails, serviceproviderAcceptFunction, combinesEventData, 
  eventDetailsFunction, getAllComplains,customerDetailsFunction,makeAsReadComplain
};