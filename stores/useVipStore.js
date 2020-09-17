import create from 'zustand'
import { devtools } from 'zustand/middleware'
const Url = 'http://localhost:3004/vips'

const vipStore = set => ({
    vips: [],
    loadVips: () => {
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
        .then(vips => {
          console.log(vips);
          set({vips})
      
        })
        .catch(error =>{console.log(error)})
    }
})

const useVipStore = create(devtools(vipStore))

export default useVipStore