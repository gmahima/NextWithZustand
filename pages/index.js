
import Head from 'next/head'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import {useStore} from './_app'
import Player from '../components/Player'
export default function Home() {
  const players = useStore(state => state.players)
  const inc = useStore(state => state.incrementPlayerScore)
  const dec = useStore(state => state.decrementPlayerScore)
  
  return (
    <div css={tw `flex flex-col items-center sm:p-32 sm:space-y-12`}>
      <div css={tw ``}>
      <h1 css={tw `text-black text-6xl`}>Scoreboard</h1>
      </div>
      <div css={tw`bg-white shadow-xl py-4 px-32 w-2/3 h-72 overscroll-y-auto overflow-auto flex flex-col rounded-lg`}>
        {players.map(p => {
          return (
            <Player player={p} handleInc={(id) => {inc(id)}} handleDec={id => {dec(id)}}/>
          )

        })}
      </div>
    </div>

  
  )

}
  // wrong
// export default function Home() {

//   const players = useStore(state => state.players)
//   const incrementPlayerScore = () => {
//     return (
//       useStore(state => state.incrementPlayerScore) //cant call use store in an anonymous js function
// right way is to extract the function:
// inc = useStore(state => state.incrementPlayerScore)
// and call the function wherever you want: inc(id)
//     )
//   }
//   return (
//   <div>{players.map(p => {
//     return (
//       <div>
//         <span>{p.name} |</span>
//         <span> {p.score} | </span>
//         <button onClick={() => (useStore(state => state.incrementPlayerScore(p.id)))}> increment </button>
//       </div>
//     )
//   })}</div>
//   )

// }
//wrong 
  