import {createSlice} from '@reduxjs/toolkit'

export const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isDisplayed: false,
    },
    reducers: {
        setIsDisplayed: (state, action) => {
            state.isDisplayed = action.payload
        }
    },
})

export const selectIsDisplayed = (state) => state.sidebar.isDisplayed
export const {setIsDisplayed} = sideBarSlice.actions
export default sideBarSlice.reducer