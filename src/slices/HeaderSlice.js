import {createSlice} from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        pageTitle: ``,
        isOpenSidebar: false
    },
    reducers: {
        setPageTitle: (state, action) => {
            state.pageTitle = action.payload;
        },
        setIsOpenSidebar: (state, action) => {
            state.isOpenSidebar = action.payload
        }
    },
})

export const selectIsOpenSidebar = (state) => state.header.isOpenSidebar
export const selectPageTitle = (state) => state.header.pageTitle
export const {setIsOpenSidebar, setPageTitle} = headerSlice.actions
export default headerSlice.reducer