import React, {useState} from 'react';
import * as Styles from '../../styles/pages/productStyle'
import Image from 'next/image'
import {GetStaticPaths, GetStaticProps} from "next";
import {stripe} from "../../../lib/stripe";
import Stripe from "stripe";
import axios from "axios";
import {IProduct} from "@/pages";
import Head from "next/head";

interface ProductProps{
    product: IProduct
}

function Product({product} : ProductProps) {
    const [isLoading, setIsLoading] = useState(false)
    async function handleBuyProduct(){
        try {
            setIsLoading(true)
            // const response = await axios.post('/api/checkout', {
            //     priceID: product.defaultPriceID
            // }, {
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // })

            console.log('a')
            const response = await fetch('http://localhost:3000/api/checkout', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify({
                    priceID: product.defaultPriceID
                })
            })
            console.log('b')
            console.log(response)

            // const { checkoutURL } = response.data
            // window.location.href = checkoutURL
        }catch (e) {
            setIsLoading(false)
            console.log(e)
        }
    }

    return(
        <Styles.Main>
            <Head>
                <title> {product.name} | Ignite</title>
            </Head>
            <Styles.PictureBox>
                <Image fill alt={''} src={product.imageUrl}/>
            </Styles.PictureBox>

            <Styles.ProductInfo>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>

                <p>{product.description}</p>

                <button disabled={isLoading} onClick={()=> handleBuyProduct()}>Comprar agora</button>

            </Styles.ProductInfo>
        </Styles.Main>
    )
}

export default Product

export const getStaticProps: GetStaticProps = async ({params})=>{
    const productID = params!.id as string

    const product = await stripe.products.retrieve(productID, {
        expand: ['default_price']
    })
    const price = product.default_price as Stripe.Price

    return{
        props:{
            product:{
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(price.unit_amount! / 100),
                description: product.description
            }
        },
        revalidate: 60 * 60
    }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}