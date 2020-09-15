import 'tailwindcss/dist/base.min.css'
import styled, {createGlobalStyle} from 'styled-components'
import tw from 'twin.macro';
// import {GlobalContextProvider} from '../context/global'
import create from 'zustand'

const initialPlayers = [
  {
      id: "1",
      score: 0,
      name: "harry"
  },
  {
      id: "2",
      score: 0,
      name: "ron"
  }
]

const GlobalStyles = createGlobalStyle`
body {
  ${tw `bg-gray-900 text-gray-400`}
}
`
export const useStore = create(set => ({
  players: initialPlayers
}))

function MyApp({ Component, pageProps }) {
  
  return (
    // <GlobalContextProvider>
    //   <GlobalStyles/>
    //   <Component {...pageProps} />
    // </GlobalContextProvider>
    <>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
