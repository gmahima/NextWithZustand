import create from 'zustand'
import { devtools } from 'zustand/middleware'
const Url = 'https://my-json-server.typicode.com/gmahima/NextWithZustand/players'
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
    players.map(p => p.score = 0)
    set({players: players})

  })
  .catch(error =>{console.log(error)})
}
const storePlayer = async (p) => {
  await fetch(Url, {
    method: 'POST',
    body: JSON.stringify(p),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'

  }).then(res => {
      if(res.ok) {
          return res
      }
      else {
          let err = res.json()
          err.res = res;
          throw err; 
      }
  }, error => {
      console.log("error: ", error)
      let errmes = new Error(error.message)
      throw(errmes)
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error =>{console.log(error)})
}
const handleAddPlayer = async (set, get, name) =>{
  let n = [...get().players]
  let p ={}
  p.name = name
  p.id = (n.length+1).toString();
  await storePlayer(p).then(() => {
    p.score = 0;
    n.push(p)
    set({players: n})
  })
  .catch(e => console.log(e))
}

const handleChangePlayerScore = (id, dir, get, set) => {
  let n = [...get().players]
  let player = n.find(p => p.id === id)
  if(dir === 'up') {
      player.score += 10;
      if(player.score> get().highScore) {
          set({highScore: player.score})
      }

  }
  else {
      player.score -= 10;
  }
  set({players: n})

  console.log(n)
}


  
const playerStore = (set,get) => ({
    players: initialPlayers,
    loadPlayers: async () => { await handleLoadPlayers(set, get)},
    addPlayer: (name) => {handleAddPlayer(set,get, name)},
    highScore: 0,
    setHighScore: (s => set({highScore: s})),
    changePlayerScore: ((id, dir) => {handleChangePlayerScore(id, dir, get, set)}),
    deleteEverything: () => (set ({}, true)) // true replaces state model instead of merging it
  })
  
const usePlayerStore = create(devtools(playerStore))

export default usePlayerStore
  