import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  menu: [
    {name: "Proyectos", route: "/project"}, 
    {name: "Experiencia", route: "/experience"}, 
    {name: "Certificaciones", route: "/certifications"}]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
