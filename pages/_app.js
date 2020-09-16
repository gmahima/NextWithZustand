import 'tailwindcss/dist/base.min.css'
import styled, {createGlobalStyle} from 'styled-components'
import tw from 'twin.macro';
import create from 'zustand'
import { devtools } from 'zustand/middleware'

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
  ${tw `bg-gray-100 text-gray-900 sm:text-xl `}
}
`
const playerStore = (set,get) => ({
  players: initialPlayers,
  sounds: ['yay', 'wohoo', 'hah!', 'I am the best'],
  highScore: 0,
  setHighScore: (s => set({highScore: s})),
  incrementPlayerScore: (id) => (set(state => {
    console.log(state.players)
    const n = [...state.players]
    const player = n.find(p => p.id === id)
    console.log(player)
    player.score = player.score+10;
    if(player.score > state.highScore) {
      const sounds = get().sounds;
      const i = Math.floor(Math.random()*sounds.length); 
      console.log(player.name+ " says: "+ sounds[i])
      return ({
        players: n,
        highScore: player.score
      })
    }
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
  deleteEverything: () => (set ({}, true)) // true replaces state model instead of merging it
})

export const usePlayerStore = create(devtools(playerStore))

export const useVipStore = create(set => ({
  vips: ['10', '2', '5']
}))

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
