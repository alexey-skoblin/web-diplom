import {createSlice} from "@reduxjs/toolkit";
import {selectNumber, selectSize} from "@/slices/PageNumberSlice";

export const sortingFields = {
    status: "status"
}

export const sortingOrders = {
    asc: "ASC",
    desc: "DESC",
}

export const taskStatuses = {
    await: "AWAIT",
    completed: "COMPLETED",
    canceled: "CANCELED",
}

export const taskPage = createSlice({
    name: "taskPage",
    initialState: {
        sortingField: sortingFields.status,
        sortingOrder: sortingOrders.asc,
        searchTaskStatus: "",
    },
    reducers: {
        setSort: (state) => {
            if (state.sortingOrder === sortingOrders.asc) {
                state.sortingOrder = sortingOrders.desc
            } else {
                state.sortingOrder = sortingOrders.asc
            }
        },
        setSearchTaskStatus: (state, action) => {
            state.searchTaskStatus = action.payload;
        }
    }
});

export const selectTaskRequest = (state) => {
    return "page=" + selectNumber(state)
        + "&size=" + selectSize(state)
        + "&sortingField=" + state.taskPage.sortingField
        + "&sortingOrder=" + state.taskPage.sortingOrder
        + "&searchTaskStatus=" + state.taskPage.searchTaskStatus;
}

export const selectSearchTaskStatus = (state) => state.taskPage.searchTaskStatus
export const selectSortingField = (state) => state.taskPage.sortingField
export const selectSortingOrder = (state) => state.taskPage.sortingOrder

export const {setSort, setSearchTaskStatus} = taskPage.actions
export default taskPage.reducer


