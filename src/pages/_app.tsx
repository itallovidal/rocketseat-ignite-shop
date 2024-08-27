import type { AppProps } from 'next/app'
import { ApplicationContainer, globalStyles } from '@/styles/global'
import logoIgnite from '../assets/logo.svg'
import * as Styles from '../styles/pages/appStyle'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

globalStyles()

function MinimumWidthMessage() {
  return (
    <div className={'warning'}>
      <p>
        Esse projeto foi feito exclusivamente para desktops maiores de 1250px.
      </p>

      <p>
        O foco é estudar princípios de Next como SSR, SSG, API Routes e outros,
        e despender menos tempo possível com estilização.
      </p>
    </div>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApplicationContainer style={{ overflow: 'hidden' }}>
      <MinimumWidthMessage />

      <Link href={'/'}>
        <Styles.Header>
          <Image src={logoIgnite} alt="" />
        </Styles.Header>
      </Link>
      <Component {...pageProps} />
    </ApplicationContainer>
  )
}
