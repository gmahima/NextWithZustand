import create from 'zustand'
import { devtools } from 'zustand/middleware'
const Url = 'http://localhost:3004/players'
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

const handleLoadPlayers = async (set, get) => {
  fetch(Url)
  .then(res => {
      if(res.ok) {
          return res
      }
  }, 
  error => {
      console.log("error: ", error)
      let errmes = new Error(error.message)
      throw(errmes)
  })
  .then(res => res.json())
  .then(players => {
    console.log(players);
    set({players: players})

  })
  .catch(error =>{console.log(error)})
}
const handleAddPlayer = (set, get, name) =>{
  set(state => {
    let n = [...state.players]
    let p ={};
    p.name = name;
    p.id = (n.length+1).toString();
    p.score = 0;
    n.push(p)
    return ({
      players: n
    })
  })
}

const handleIncrementPlayerScore = (set, get, id) => {
  set(state => {
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

  })
}

const handleDecrementPlayerScore = (set, get, id) => {
  set(state => {
    console.log(state.players)
    const n = [...state.players]
    const player = n.find(p => p.id === id)
    console.log(player)
    player.score = player.score-10;
    return ({
      players: n
    })

  })
}

const sounds = ['yay', 'wohoo', 'hah!', 'I am the best']
  
const playerStore = (set,get) => ({
    players: initialPlayers,
    loadPlayers: async () => { await handleLoadPlayers(set, get)},
    addPlayer: (name) => {handleAddPlayer(set,get, name)},
    sounds: sounds,
    highScore: 0,
    setHighScore: (s => set({highScore: s})),
    incrementPlayerScore: (id) => {handleIncrementPlayerScore(set,get, id)},
    decrementPlayerScore: (id) => {handleDecrementPlayerScore(set,get, id)},
    deleteEverything: () => (set ({}, true)) // true replaces state model instead of merging it
  })
  
const usePlayerStore = create(devtools(playerStore))

export default usePlayerStore
  