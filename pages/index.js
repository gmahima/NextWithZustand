
import Head from 'next/head'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import {useStore} from './_app'

export default function Home() {

  const players = useStore(state => state.players)
  const incrementPlayerScore = useStore(state => state.incrementPlayerScore)
  return (
  <div>{players.map(p => {
    return (
      <div>
        <span>{p.name} |</span>
        <span> {p.score} | </span>
        <button onClick={incrementPlayerScore}> increment </button>
      </div>
    )
  })}</div>
  )

}
  