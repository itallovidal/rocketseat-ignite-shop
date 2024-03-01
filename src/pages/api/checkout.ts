import {stripe} from "../../../lib/stripe";
import {NextApiRequest, NextApiResponse} from "next";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { priceID } = req.body
    console.log(req.body)
    console.log('a')

    if(req.method !== 'POST'){
        return res.status(405).end()
    }
    if(!priceID){
        return res.status(400).end()
    }

    const successUrl = `${process.env.NEXT_URL}/success`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: "payment",
        line_items: [
            {
                price: priceID,
                quantity: 1
            }
        ]
    })

    console.log(checkoutSession)

    return res.status(201).send({
        checkoutURL: checkoutSession.url
    })
}