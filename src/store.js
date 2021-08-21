import { createStore } from "redux";
import { configureStore, createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const items = createSlice({
    name: 'itemReducer',
    initialState: [],
    reducers: {
        ADD_ITEM : (state, action) => {
            state.push({
                text: action.payload,
                id: uuid()
            })
        },
        DELETE_ITEM : (state, action) => 
            state.filter( item => item.id !== action.payload )
        ,
    }
})

export const { ADD_ITEM, DELETE_ITEM } = items.actions;
export default store = configureStore({ reducer: items.reducer} )