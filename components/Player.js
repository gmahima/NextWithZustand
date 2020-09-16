import styled, {css} from 'styled-components'
import tw from 'twin.macro';
import {Plus, Minus} from '@styled-icons/boxicons-regular'
import {Star} from '@styled-icons/boxicons-solid/Star'
import {usePlayerStore, useVipStore} from '../pages/_app'
import {Vip} from '@styled-icons/remix-line/Vip'


const PlayerDiv = styled.div `
${tw `
    flex flex-row p-2 justify-between border-b items-center mt-12
`}
button {
    ${tw `border border-gray-400 px-1 rounded-lg hover:bg-gray-100 active:bg-gray-300`}
}
h1 {
    ${tw `capitalize mx-auto`}
}
`
const StyledStar = styled(Star) `
${tw `text-gray-400 w-8 h-8`}
${props => {
    if(props.hasHighScore) {
        return tw`text-green-400 `
    }
}}
`
const StyledVip = styled(Vip) `
${tw `w-6 h-6 text-gray-400 hidden`}
${props => {
    if(props.isVip) {
        return (tw `inline`)
    }
}}
`
export default function Player ({player}) {
    const vips = useVipStore(state => state.vips)
    const inc = usePlayerStore(state => state.incrementPlayerScore)
    const dec = usePlayerStore(state => state.decrementPlayerScore)
    const highScore = usePlayerStore(state => state.highScore)


    return(
        <PlayerDiv>
            <div>
                <StyledStar hasHighScore={player.score === highScore}></StyledStar>

            </div>
            
            <h1> <span><StyledVip isVip={vips.includes(player.id)}></StyledVip></span> {player.name}</h1>
            <div>
                <button onClick={() => {inc(player.id)}}><Plus css={tw `w-4 h-4 text-gray-600`}></Plus></button>
                <span css={tw `align-middle mx-4`}>{player.score}</span>
                <button onClick={() => {dec(player.id)}}><Minus css={tw `w-4 h-4 text-gray-600`}></Minus></button>
            </div>
            
        </PlayerDiv>
    )
}