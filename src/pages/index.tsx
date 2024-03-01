import * as Styles from '../styles/pages/homeStyle'
import Image from 'next/image'


import {CaretLeft, CaretRight} from 'phosphor-react'
import React from 'react'
import {GetStaticProps} from "next";
import {stripe} from '../../lib/stripe'
import Stripe from "stripe";
import Link from "next/link";

export interface IProduct{
    id: string,
    description: string
    name: string,
    imageUrl: string,
    price: string,
    defaultPriceID: string
}
interface Props{
    products: IProduct[]
}

function Home({products} : Props) {
    const carrousel = React.useRef<HTMLDivElement>(null)
    function handleScroll(value: 'right' | 'left'){
        if(value === 'right'){

            carrousel.current!.scrollBy({
                left: 400,
                behavior: "smooth"
            })
        }
        else{
            carrousel.current!.scrollBy({
                left: -400,
                behavior: "smooth"
            })
        }
    }

    return (
        <Styles.Main >
            <Styles.CarrouselArrow onClick={()=> handleScroll("left")} justify={'start'}>
                <CaretLeft size={32} weight="fill" />
            </Styles.CarrouselArrow>

            <Styles.Carrousel ref={carrousel}>

                { products.map((product)=>{
                    return (
                        <Link href={`/product/${product.id}`} key={product.id}>
                            <Styles.Product >
                                <picture>
                                    <Image fill objectFit={'contain'} alt={'a'} src={product.imageUrl}/>
                                </picture>
                                <Styles.ProductFooter>
                                    <Styles.ProductName>{product.name}</Styles.ProductName>
                                    <Styles.Price>{product.price}</Styles.Price>
                                </Styles.ProductFooter>
                            </Styles.Product>
                        </Link>
                    )
                })}


            </Styles.Carrousel>

            <Styles.CarrouselArrow onClick={()=> handleScroll("right")} justify={'end'}>
                <CaretRight size={32} weight="fill" />
            </Styles.CarrouselArrow>
        </Styles.Main>
    );
}

export default Home;

export const getStaticProps: GetStaticProps = async()=>{
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })

    const products = response.data.map(product =>{
        const price = product.default_price as Stripe.Price
        return {
            defaultPriceID:price.id,
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL'
            }).format(price.unit_amount! / 100)
        }
    })

    return {
        props: {
            products
        },
        revalidate: 60 * 60
    }
}