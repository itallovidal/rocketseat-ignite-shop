import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY as string, {
  apiVersion: '2023-08-16',
  appInfo: {
    name: 'igniteShop',
  },
})
