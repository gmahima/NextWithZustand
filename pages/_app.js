import 'tailwindcss/dist/base.min.css'
import styled, {createGlobalStyle} from 'styled-components'
import React, {useEffect} from 'react'
import tw from 'twin.macro';
import Head from 'next/head'
import usePlayerStore from '../stores/usePlayerStore'
import useVipStore from '../stores/useVipStore'
const GlobalStyles = createGlobalStyle`
body {
  ${tw `bg-gray-100 text-gray-900 sm:text-xl`}
}
`

function MyApp({ Component, pageProps }) {
  const loadPlayers = usePlayerStore(state => state.loadPlayers)
  const loadVips = useVipStore(state => state.loadVips)
  useEffect(() => {
    loadPlayers()
    loadVips()
}, [])
  
  return (
    <>
      <GlobalStyles/>
      <Head><title>Zustand Next Scoreboard</title></Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
