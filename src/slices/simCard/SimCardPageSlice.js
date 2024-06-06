import {createSlice} from "@reduxjs/toolkit";
import {selectNumber, selectSize} from "@/slices/PageNumberSlice";

export const sortingFields = {
    iccid: "iccid",
    defNumber: "defNumber",
    mobileOperator: "mobileOperator",
    status: "status",
}

export const sortingOrders = {
    asc: "ASC",
    desc: "DESC",
}

export const simCardStatuses = {
    active: "ACTIVE",
    inactive: "INACTIVE",
}

export const simCardPage = createSlice({
    name: "simCardPage",
    initialState: {
        sortingField: sortingFields.iccid,
        sortingOrder: sortingOrders.asc,
        searchMobileOperator: "",
        searchIccid: "",
        searchDefNumber: "",
        searchAddress: "",
        searchSerialNumber: "",
    },
    reducers: {
        setSort: (state, action) => {
            if (state.sortingField === action.payload) {
                if (state.sortingOrder === sortingOrders.asc) {
                    state.sortingOrder = sortingOrders.desc;
                } else {
                    state.sortingOrder = sortingOrders.asc;
                }
            } else {
                state.sortingField = action.payload;
                state.sortingOrder = sortingOrders.asc;
            }
        },
        setSearchMobileOperator: (state, action) => {
            state.searchMobileOperator = action.payload;
        },
        setSearchIccid: (state, action) => {
            state.searchIccid = action.payload;
        },
        setSearchDefNumber: (state, action) => {
            state.searchDefNumber = action.payload;
        },
        setSearchAddress: (state, action) => {
            state.searchAddress = action.payload;
        },
        setSearchSerialNumber: (state, action) => {
            state.searchSerialNumber = action.payload;
        },
    }
});

export const selectSimCardRequest = (state) => {
    return "page=" + selectNumber(state)
        + "&size=" + selectSize(state)
        + "&sortingField=" + state.simCardPage.sortingField
        + "&sortingOrder=" + state.simCardPage.sortingOrder
        + "&searchMobileOperator=" + state.simCardPage.searchMobileOperator
        + "&searchIccid=" + state.simCardPage.searchIccid
        + "&searchDefNumber=" + state.simCardPage.searchDefNumber
        + "&searchAddress=" + state.simCardPage.searchAddress
        + "&searchSerialNumber=" + state.simCardPage.searchSerialNumber;
}

export const selectSortingField = (state) => state.simCardPage.sortingField
export const selectSortingOrder = (state) => state.simCardPage.sortingOrder

export const {
    setSort,
    setSearchMobileOperator,
    setSearchIccid,
    setSearchDefNumber,
    setSearchAddress,
    setSearchSerialNumber
} = simCardPage.actions
export default simCardPage.reducer