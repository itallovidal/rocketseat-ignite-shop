import {NextRequest, NextResponse} from "next/server";
import {stripe} from "../../../lib/stripe";

export async function handler(req: NextRequest, res: NextResponse){
    const priceID = ''

    const successUrl = `${process.env.NEXT_URL}/success`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession =await stripe.checkout.sessions.create({
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
}