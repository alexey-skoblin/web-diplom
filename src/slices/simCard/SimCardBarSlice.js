import {createSlice} from '@reduxjs/toolkit'

export const simCardBarSlice = createSlice({
    name: 'simCardBar',
    initialState: {
        data: null
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    },
})

export const selectData = (state) => state.simCardBar.data

export const {setData} = simCardBarSlice.actions

export default simCardBarSlice.reducer