import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Myactions';

export const mydatastore = configureStore({
    reducer: {
        counter:counterSlice
    },
  })