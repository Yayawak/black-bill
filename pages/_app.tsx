import '../styles/global.css'
import AAppContext from "../contexts/AAppContext"
import { useState } from 'react'
import TAppContext from '../types/Contexts'


export default function App({ Component, pageProps }) {
  const [isSuccessLogin, setIsSuccessLogin] = useState<boolean>(false)
  // return <Component {...pageProps} />
  return <>
    header
      <AAppContext.Provider value={{isSuccessLogin, setIsSuccessLogin}}>
        <Component {...pageProps} />
      </AAppContext.Provider>
    footer
  </>
}
