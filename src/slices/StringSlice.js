import { createSlice } from '@reduxjs/toolkit'

export const stringSlice = createSlice({
    name: 'string',
    initialState: {
        value: '',
    },
    reducers: {
        addSubstring: (state, action) => {
            state.value = state.value + action.payload
        },
        removeSubString: (state, action) => {
            state.value = state.value.replace(action.payload, '')
        },
        clear: (state) => {
            state.value = state.value.initialState
        },
    },
})

export const { addSubstring, removeSubString, clear } = stringSlice.actions

export const selectString = (state) => state.string.value

export default stringSlice.reducer