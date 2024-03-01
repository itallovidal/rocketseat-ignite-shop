import React from 'react';
import * as Styles from '../../styles/pages/productStyle'
import Image from 'next/image'
import placeholder from '../../assets/placeholder.png'

function Product() {
    return(
        <Styles.Main>
            <Styles.PictureBox>
                <Image fill alt={''} src={placeholder}/>
            </Styles.PictureBox>

            <Styles.ProductInfo>
                <h1>Nome da camiseta</h1>
                <h2>92,00</h2>

                <p>Tempus fermentum eget lacus, quis ante. Potenti sit pharetra, ridiculus amet. Bibendum pretium arcu arcu eget viverra at metus donec hendrerit. Rhoncus, nunc, eu at ac.

                    At massa, fermentum amet ornare cras tincidunt nunc tincidunt. Netus lorem nulla nulla mattis integer velit dictum proin nibh.</p>

                <button>Comprar agora</button>

            </Styles.ProductInfo>
        </Styles.Main>
    )
}

export default Product