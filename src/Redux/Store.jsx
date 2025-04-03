import { configureStore } from "@reduxjs/toolkit";
import myCounter from './CounterSlice'

export const store = configureStore({
  reducer: {
    counter: myCounter
  }
})