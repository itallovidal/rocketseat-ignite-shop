import type { AppProps } from 'next/app'
import {globalStyles} from "@/styles/global";
import logoIgnite from '../assets/logo.svg'
import * as Styles from '../styles/pages/appStyle'
import Link from "next/link";

globalStyles()



export default function App({ Component, pageProps }: AppProps) {
  return(
  <div style={{overflow: 'hidden'}}>
    <Link href={'/'}>
      <Styles.Header>
        <img src={logoIgnite.src} alt=""/>
      </Styles.Header>
    </Link>
    <Component {...pageProps} />
  </div>
  )
}
