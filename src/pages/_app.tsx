import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import logoIgnite from '../assets/logo.svg'
import * as Styles from '../styles/pages/appStyle'
import Link from 'next/link'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Link href={'/'}>
        <Styles.Header>
          <Image src={logoIgnite} alt="" />
        </Styles.Header>
      </Link>
      <Component {...pageProps} />
    </div>
  )
}
