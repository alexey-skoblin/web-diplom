import {createSlice} from "@reduxjs/toolkit";
import {simCardStatuses} from "@/slices/simCard/SimCardPageSlice";
import {taskStatuses} from "@/slices/task/TaskPageSlice";

const initialState = {
    id: 0,
    taskStatus: taskStatuses.await,
    taskDate: "",
    simCardIccid: "",
    simCardStatus: simCardStatuses.inactive,
    simCardDate: "",
    simCardDefNumber: "",
    simCardMobileOperator: "",
    clientName: "",
    clientLastName: "",
    clientEmail: ""
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})

export default taskSlice.reducer