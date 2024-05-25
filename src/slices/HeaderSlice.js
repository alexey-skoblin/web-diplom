import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        isOpenSidebar: false,
    },
    reducers: {
        setIsOpenSidebar: (state, action) => {
            state.isOpenSidebar = action.payload
        }
    },
})

export const selectIsOpenSidebar = (state) => state.header.isOpenSidebar

export const { setIsOpenSidebar} = headerSlice.actions
export default headerSlice.reducer