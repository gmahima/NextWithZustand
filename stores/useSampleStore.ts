import create from "zustand";
export type State = {
    bears: number
    increase: (by: number) => void
}

export const useSampleStore = create<State>(set => ({
bears: 0,
increase: (by) => set(state => ({ bears: state.bears + by }))
}))

// ==========
// or use a middleware to let tsc infer types:
// ==========

// import { combine } from "zustand/middleware";

// export const useSampleStore = create(
//   combine({ bears: 0 }, (set) => ({
//     increase: (by: number) => set((state) => ({ bears: state.bears + by }))
//   }))
// );
