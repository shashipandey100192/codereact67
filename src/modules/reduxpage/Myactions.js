import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
    rname:"ravi singh",
    age:50
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
      },
      dname:(state)=>{
        state.rname="mohan singh";
      }
    },
  })
  

  export const { increment, decrement,dname} = counterSlice.actions
  
  export default counterSlice.reducer