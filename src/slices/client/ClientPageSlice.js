import {createSlice} from "@reduxjs/toolkit";
import {selectNumber, selectSize} from "@/slices/PageNumberSlice";

export const sortingFields = {
    id: "id",
    name: "name",
    lastName: "lastName",
    login: "login",
    email: "email",
    role: "role"
}

export const sortingOrders = {
    asc: "ASC",
    desc: "DESC",
}

export const clientRoles = {
    guest: "GUEST",
    user: "USER",
    operator: "OPERATOR",
    senior_operator: "SENIOR_OPERATOR",
    admin: "ADMIN",
}


export const clientPage = createSlice({
    name: "clientPage",
    initialState: {
        sortingField: sortingFields.id,
        sortingOrder: sortingOrders.asc,
        searchName: "",
        searchLastName: "",
        searchLogin: "",
        searchEmail: "",
        searchRole: "",
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
        setSearchName: (state, action) => {
            state.searchName = action.payload
        },
        setSearchLastName: (state, action) => {
            state.searchLastName = action.payload
        },
        setSearchLogin: (state, action) => {
            state.searchLogin = action.payload
        },
        setSearchEmail: (state, action) => {
            state.searchEmail = action.payload
        },
        setSearchRole: (state, action) => {
            state.searchRole = action.payload
        },
    }
});

export const selectClientRequest = (state) => {
    return "page=" + selectNumber(state)
        + "&size=" + selectSize(state)
        + "&sortingField=" + selectSortingField(state)
        + "&sortingOrder=" + selectSortingOrder(state)
        + "&searchName=" + selectSearchName(state)
        + "&searchLastName=" + selectSearchLastName(state)
        + "&searchLogin=" + selectSearchLogin(state)
        + "&searchEmail=" + selectSearchEmail(state)
        + "&searchRole=" + selectSearchRole(state)
}

export const selectSortingField = (state) => state.clientPage.sortingField
export const selectSortingOrder = (state) => state.clientPage.sortingOrder
export const selectSearchName = (state) => state.clientPage.searchName
export const selectSearchLastName = (state) => state.clientPage.searchLastName
export const selectSearchLogin = (state) => state.clientPage.searchLogin
export const selectSearchEmail = (state) => state.clientPage.searchEmail
export const selectSearchRole = (state) => state.clientPage.searchRole

export const {
    setSort,
    setSearchName,
    setSearchLastName,
    setSearchLogin,
    setSearchEmail,
    setSearchRole
} = clientPage.actions
export default clientPage.reducer