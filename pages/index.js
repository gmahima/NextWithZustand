import React, {useContext} from 'react'
import Head from 'next/head'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import {useStore} from './_app'
// import {GlobalContext} from '../context/global'

export default function Home() {

  // const c = useContext(GlobalContext)
  const players = useStore(state => state.players)
  console.log(players)
  return <div></div>

}



  
  // <a
  //   href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   Powered by{' '}
  //   <img src="/vercel.svg" alt="Vercel Logo"/>
  // </a>
  