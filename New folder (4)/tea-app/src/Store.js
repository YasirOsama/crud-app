import { configureStore } from '@reduxjs/toolkit'
import Salice from './Salice'

   

export const store=configureStore({
    reducer:{
     counter: Salice
    }
})