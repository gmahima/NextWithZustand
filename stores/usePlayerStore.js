import create from 'zustand'
import {devtools} from 'zustand/middleware'


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

const handleChangePlayerScore = (id, dir, set, get) => {
    let n = [...get().players]
    let player = n.find(p => p.id === id);
    if(dir === 'up') {
        player.score += 10
        if(player.score> get().highScore) {
            set({highScore: player.score})
        }
    }
    else {
        player.score -= 10
    }
    set({
        players: n
    })

}
const handleAddPlayer = (set, get, name) =>{
  let n = [...get().players]
  let p ={};
  p.name = name;
  p.id = (n.length+1).toString();
  p.score = 0;
  n.push(p)
    set(state => {
      return ({
        players: n
      })
    })
  }
  

const store = (set, get) => ({
    players: initialPlayers,
    highScore: 0,
    addPlayer: (name) => {handleAddPlayer(set, get, name)},
    changePlayerScore : (id, dir) => {handleChangePlayerScore(id, dir, set, get)}
})

const usePlayerStore = create(devtools(store))

export default usePlayerStore