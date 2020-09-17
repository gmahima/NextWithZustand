import create from 'zustand'
import { devtools } from 'zustand/middleware'


const vipStore = set => ({
    vips: ['10', '2', '5']
})

const useVipStore = create(devtools(vipStore))

export default useVipStore