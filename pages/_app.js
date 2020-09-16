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
  ${tw `bg-gray-200 text-gray-900 sm:text-2xl `}
}
`
export const useStore = create(set => ({
  players: initialPlayers,
  incrementPlayerScore: (id) => (set(state => {
    console.log(state.players)
    const n = [...state.players]
    const player = n.find(p => p.id === id)
    console.log(player)
    player.score = player.score+10;
    return ({
      players: n
    })

  })),
  decrementPlayerScore: (id) => (set(state => {
    console.log(state.players)
    const n = [...state.players]
    const player = n.find(p => p.id === id)
    console.log(player)
    player.score = player.score-10;
    return ({
      players: n
    })

  })),
  removeAllPlayers: () => set({ players: [] })
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
