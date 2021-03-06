import React, {useState} from 'react'
import usePlayerStore from '../stores/usePlayerStore'
import tw from 'twin.macro'
export default function AddPlayerForm() {
    const [val, setVal] = useState('')
    const addPlayer = usePlayerStore(state => state.addPlayer)
    
    const handleSubmit = (e => {
        e.preventDefault();
        if(val !== '') {
            addPlayer(val)
            setVal('')

        }
        
    })
    
    return(
        <form onSubmit={handleSubmit} css={tw `flex space-x-2 self-center`}>
            <input value={val} onChange={(e) => {setVal(e.target.value)}} css={tw `p-2 rounded-lg bg-white outline-none border-2 border-green-400 focus:border-green-300`}></input>
            <button type="submit" css={tw `border-2 border-green-400 bg-white text-green-500 rounded-lg p-2 active:border-green-300`}>add player</button>
        </form>
    )
}