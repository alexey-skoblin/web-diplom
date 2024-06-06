import {createSlice} from '@reduxjs/toolkit'

export const pageNumberSlice = createSlice({
    name: 'pageNumber',
    initialState: {
        currentNumber: 0,
        size: 10
    },
    reducers: {
        reset: (state) => {
            state.currentNumber = 0;
            state.size = 10;
        },
        increment: (state) => {
            state.currentNumber += 1
        },
        decrement: (state) => {
            if (state.currentNumber > 0) {
                state.currentNumber -= 1
            }
        },
        setNumber: (state, action) => {
            if (action.payload > -1) {
                state.currentNumber = action.payload
            }
        },
        setSize: (state, action) => {
            if (action.payload > 0) {
                state.size = action.payload
            }
        }
    },
})

export const selectNumber = (state) => state.pageNumber.currentNumber
export const selectSize = (state) => state.pageNumber.size
export const {reset, increment, decrement, setNumber, setSize} = pageNumberSlice.actions

export default pageNumberSlice.reducer