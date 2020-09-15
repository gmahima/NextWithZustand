
import Head from 'next/head'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import {useStore} from './_app'

export default function Home() {
  const players = useStore(state => state.players)
  const inc = useStore(state => state.incrementPlayerScore)
  
  return (
  <div>{players.map(p => {
    return (
      <div key={p.id}>
        <span>{p.name} |</span>
        <span> {p.score} | </span>
        <button onClick={() => {inc(p.id)}}> increment </button>
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
  