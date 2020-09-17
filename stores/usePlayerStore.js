import create from 'zustand'
import { devtools } from 'zustand/middleware'

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

const handleLoadPlayers = (set, get) => {
    let p = get().players
    console.log(p)
  }
  
  
const playerStore = (set,get) => ({
    players: initialPlayers,
    loadPlayers: () => {handleLoadPlayers(set, get)},
    addPlayer: (name => set(state => {
      let n = [...state.players]
      let p ={};
      p.name = name;
      p.id = (n.length+1).toString();
      p.score = 0;
      n.push(p)
      return ({
        players: n
      })
    })),
    sounds: ['yay', 'wohoo', 'hah!', 'I am the best'],
    highScore: 0,
    setHighScore: (s => set({highScore: s})),
    incrementPlayerScore: (id) => (set(state => {
      console.log(state.players)
      const n = [...state.players]
      const player = n.find(p => p.id === id)
      console.log(player)
      player.score = player.score+10;
      if(player.score > state.highScore) {
        const sounds = get().sounds;
        const i = Math.floor(Math.random()*sounds.length); 
        console.log(player.name+ " says: "+ sounds[i])
        return ({
          players: n,
          highScore: player.score
        })
      }
      return ({
        players: n
      })
  
    })),
    decrementPlayerScore: (id) => (set(state => {
      console.log(state.players)
      const n = [...state.players]
      const player = n.find(p => p.id === id)
      console.log(player)
      player.score = player.score-10;
      return ({
        players: n
      })
  
    })),
    deleteEverything: () => (set ({}, true)) // true replaces state model instead of merging it
  })
  
const usePlayerStore = create(devtools(playerStore))

export default usePlayerStore
  