import styled, {css} from 'styled-components'
import tw from 'twin.macro';
import {Plus, Minus} from '@styled-icons/boxicons-regular'
import {Star} from '@styled-icons/boxicons-solid/Star'
const PlayerDiv = styled.div `
${tw `
    flex flex-row p-2 justify-between border-b items-center mt-12
`}
button {
    ${tw `border border-gray-400 px-1 rounded-lg hover:bg-gray-100 active:bg-gray-300`}
}
h1 {
    ${tw `capitalize`}
}
`
const StyledStar = styled(Star) `
${tw `text-gray-400 w-8 h-8`}
${props => {
    if(props.isInLead) {
        return tw`text-yellow-400`
    }
}}
`
export default function Player ({player, handleInc, handleDec}) {
    return(
        <PlayerDiv>
            {/* <StyledStar isInLead></StyledStar> */}
            <h1>{player.name}</h1>
            <div>
                <button onClick={() => {handleInc(player.id)}}><Plus css={tw `w-4 h-4 text-gray-600`}></Plus></button>
                <span css={tw `align-middle mx-4`}>{player.score}</span>
                <button onClick={() => {handleDec(player.id)}}><Minus css={tw `w-4 h-4 text-gray-600`}></Minus></button>
            </div>
            
        </PlayerDiv>
    )
}