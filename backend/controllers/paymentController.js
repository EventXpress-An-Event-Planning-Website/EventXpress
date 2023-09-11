import { Stripe } from 'stripe'

const stripe = new Stripe(
  'sk_test_51NoJfsSAEsih9IEoDo56f1M1TgvCoXdtS4vINUAAAJOC3wm2HszY8qe5XFORE95RDB3oYCFwUAExuY5UwStpzoqi00nyQNoC7B'
)

const buyTicket = async (req, res) => {
  const { amount, token } = req.body
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
      payment_method: paymentMethod.id, // Use the PaymentMethod ID here
    })

    // Confirm the payment intent
    await stripe.paymentIntents.confirm(paymentIntent.id)

    res.status(200).json({ message: 'Payment successful' })
  } catch (error) {
    console.error('Error creating PaymentIntent:', error)
    res.status(500).json({ error: 'Failed to create PaymentIntent' })
  }
}

export { buyTicket }
