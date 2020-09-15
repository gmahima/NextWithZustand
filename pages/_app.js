import 'tailwindcss/dist/base.min.css'
import styled, {createGlobalStyle} from 'styled-components'
import tw from 'twin.macro';
import {GlobalContextProvider} from '../context/global'
const GlobalStyles = createGlobalStyle`
body {
  ${tw `bg-gray-900 text-gray-400`}
}
`
function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <GlobalStyles/>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default MyApp
