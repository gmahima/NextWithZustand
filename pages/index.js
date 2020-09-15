
import Head from 'next/head'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import {useStore} from './_app'

export default function Home() {
  const players = useStore(state => state.players)
  const inc = useStore(state => state.incrementPlayerScore)
  const useInc = (id) => {inc(id)}
  
  return (
  <div>{players.map(p => {
    return (
      <div>
        <span>{p.name} |</span>
        <span> {p.score} | </span>
        <button onClick={() => {useInc(p.id)}}> increment </button>
      </div>
    )
  })}</div>
  )

}
  // wrong
// export default function Home() {

//   const players = useStore(state => state.players)
//   const incrementPlayerScore = () => {
//     return (
//       useStore(state => state.incrementPlayerScore)
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
  