import React,{createContext, useState} from 'react'

export const GlobalContext = createContext(null)

export const GlobalContextProvider = ({children}) => {
    const initialPlayers = [
        {
            id: "1",
            score: 0,
            name: "harry"
        },
        {
            id: "2",
            score: 0,
            name: "ron"
        }
    ]
    const [players, setPlayers] = useState(initialPlayers)
    return (
        <GlobalContext.Provider value={{
            players
        }} >
            {children}

        </GlobalContext.Provider>
    )
}