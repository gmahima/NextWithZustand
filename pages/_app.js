
import 'tailwindcss/dist/base.min.css'
import styled, {createGlobalStyle} from 'styled-components'
import React, {useEffect} from 'react'
import tw from 'twin.macro';
import Head from 'next/head'

const GlobalStyles = createGlobalStyle`
body {
  ${tw `bg-gray-100 text-gray-900 sm:text-xl h-screen overflow-hidden`}
}
`

function MyApp({ Component, pageProps }) {

  
  return (
    <>
      <GlobalStyles/>
      <Head><title>Zustand Next Scoreboard</title></Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp