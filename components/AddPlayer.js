import React, {useState} from 'react'
import {usePlayerStore} from '../pages/_app'
export default function AddPlayerForm() {
    const [val, setVal] = useState('')
    const addPlayer = usePlayerStore(state => state.addPlayer)
    const handleSubmit = (e => {
        e.preventDefault();
        addPlayer(val)

    })
    return(
        <form onSubmit={handleSubmit}>
            <input value={val} onChange={(e) => {setVal(e.target.value)}}></input>
            <button type="submit">add player</button>
        </form>
    )
}