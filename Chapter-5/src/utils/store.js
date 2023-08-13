import {configureStore } from '@reduxjs/toolkit' ;
import cartSlice from './cartSlice';

const store = configureStore({
reducer:{
    cart:cartSlice,
}
}) ;

export default store ;



/* 

====steps====

1. create store 
    - import {configureStore} from '@redux/toolkit'
    -stored the configration in store variable
    
2. Provider
    - Provide my store to app
    -import { Provider } from 'react-redux'
    -packed the <App/> component in <Provider></Provider> component 
    - passed my store as a props


3. Slice
   -import { createSlice } from "@reduxjs/toolkit"
   -stored the createSlice api in cartSlice variable
   -create slice with name "cart", initial state and reducers
   -added the 'reducers'as object, inside the reducers added dispatcher actions,as a key and task what is does a function 
   -action name will be key and function will be there value 
   - function takes two parameters,, initialState as state , action 
    addItems:(state, action)=>{
        // logic here
    }
    -we can create multiple actions inside reducers
    -export const {addItems, removeItems, etc} = cartSlice.actions;
    -export default cartSlice.reducer ;

  




Put the Slice into Store

   -inside store, added reducer as an object like this (name of this obj always will be reducer) -  reducer:{
    cart:cartSlice,
    user:UserSlice,
    auth:authSlice
    etc...
}
  -added Slices into it 












*/
