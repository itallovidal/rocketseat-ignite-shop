import {stripe} from "../../../../lib/stripe";
import {NextApiRequest, NextApiResponse} from "next";
import {NextRequest} from "next/server";

export const config = {
    api: {
        bodyParser: true
    },
}

export default async function handler(req: NextApiRequest , res: NextApiResponse){

    if(req.method !== 'POST'){
        return res.status(405).end()
    }
    const { priceID } = req.body

    if(!priceID){
        return res.status(400).end()
    }



    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
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