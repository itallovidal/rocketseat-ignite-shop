import React, { useState } from 'react'
import * as Styles from '../../styles/pages/productStyle'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../../lib/stripe'
import Stripe from 'stripe'
import axios from 'axios'
import { IProduct } from '@/pages'
import Head from 'next/head'

interface ProductProps {
  product: IProduct
}

function Product({ product }: ProductProps) {
  const [isLoading, setIsLoading] = useState(false)
  async function handleBuyProduct() {
    console.log(product)
    try {
      setIsLoading(true)
      const response = await axios.post(
        '/api/checkout',
        {
          priceID: product.defaultPriceID,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const { checkoutURL } = response.data
      window.location.href = checkoutURL
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }

  return (
    <Styles.Main>
      <Head>
        <title> Camisetas | Ignite</title>
      </Head>
      <Styles.PictureBox>
        <Image fill alt={''} src={product.imageUrl} />
      </Styles.PictureBox>

      <Styles.ProductInfo>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>

        <p>{product.description}</p>

        <button disabled={isLoading} onClick={() => handleBuyProduct()}>
          Comprar agora
        </button>
      </Styles.ProductInfo>
    </Styles.Main>
  )
}

export default Product

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productID = params!.id as string

  const product = await stripe.products.retrieve(productID, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceID: price.id,
      },
    },
      revalidate: 60 * 60,
  }
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_OYRE0Af39GeaCo',
        },
      },
    ], // indicates that no page needs be created at build time
    fallback: 'blocking', // indicates the type of fallback
  }
}
