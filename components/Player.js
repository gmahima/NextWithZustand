import styled, {css} from 'styled-components'
import tw from 'twin.macro';
import {Plus, Minus} from '@styled-icons/boxicons-regular'
import {Star} from '@styled-icons/boxicons-solid/Star'
const PlayerDiv = styled.div `
${tw `
    flex flex-row p-2 justify-between border-b items-center
`}

`
const StyledStar = styled(Star) `
${tw `text-gray-400 w-12 h-12`}
${props => {
    if(props.isInLead) {
        return tw`text-yellow-400`
    }
}}
`
export default function Player ({player, handleInc, handleDec}) {
    return(
        <PlayerDiv>
            <StyledStar isInLead></StyledStar>
            <h1>{player.name}</h1>
            <div>
                <button onClick={() => {handleInc(player.id)}}>increment</button>
                <span>{player.score}</span>
                <button onClick={() => {handleDec(player.id)}}>decrement</button>
            </div>
            
        </PlayerDiv>
    )
}