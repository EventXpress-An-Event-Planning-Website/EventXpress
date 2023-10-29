import { Stripe } from 'stripe'
import { sendTicketDetailsEmail } from '../utils/emailUtils.js'
import { ticketBooking } from '../models/ticketModel.js'

const stripe = new Stripe(
  'sk_test_51NoJfsSAEsih9IEoDo56f1M1TgvCoXdtS4vINUAAAJOC3wm2HszY8qe5XFORE95RDB3oYCFwUAExuY5UwStpzoqi00nyQNoC7B'
)

const buyTicket = async (req, res) => {
  const {
    amount,
    token,
    ticketId,
    buyerId,
    buyerEmail,
    eventName,
    eventDate,
    EventTime,
    eventVenue,
    ticketType,
    ticketPrice,
    noOfTickets,
  } = req.body
  // console.log(req.body)

  const ticketDetails = {
    eventTitle: eventName,
    eventDate: eventDate,
    eventTime: EventTime,
    eventVenue: eventVenue,
    ticketType: ticketType,
    ticketPrice: ticketPrice,
    ticketQuantity: noOfTickets,
    totalPayable: amount,
  }

  try {
    // Create a PaymentMethod using the token
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        token: token.id,
      },
    })

    // Create a PaymentIntent using the PaymentMethod
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'lkr',
      payment_method_types: ['card'],
      payment_method: paymentMethod.id,
    })

    // Confirm the payment intent
    const confirmedPaymentIntent = await stripe.paymentIntents.confirm(
      paymentIntent.id
    )

    // Obtain the PaymentIntent ID (pid)
    const pid = confirmedPaymentIntent.id

    // execute database query
    await ticketBooking(
      ticketId,
      buyerId,
      pid,
      ticketType,
      noOfTickets,
      amount
    )

    //Send the ticket details email
    await sendTicketDetailsEmail(buyerEmail, ticketDetails)

    res.status(200).json({ message: 'Payment successful' })
  } catch (error) {
    console.error('Error creating PaymentIntent:', error)
    res.status(500).json({ error: 'Failed to create PaymentIntent' })
  }
}

export { buyTicket }
