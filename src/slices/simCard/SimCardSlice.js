import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    iccid: "",
    status: "INACTIVE",
    defNumber: "",
    mobileOperator: "",
    tariff: "",
    lastActionDate: 0,
    lastLocation: {x: 0, y: 0},
    trafficForYesterday: 0,
    clientName: "",
    clientLastName: "",
    clientEmail: "",
    clientIp: "",
    modemStatus: "INACTIVE",
    modemImei: "",
    modemEquipmentHostname: "",
    modemEquipmentModel: "",
    modemEquipmentSerialNumber: "",
    modemEquipmentFacilityAddress: "",
    modemEquipmentFacilityLocation: {x: 0, y: 0},
    modemEquipmentFacilityStatus: "INACTIVE",
};

export const simCardSlice = createSlice({
    name: "simCard",
    initialState,
    reducers: {
        updateIccid: (state, action) => {
            state.iccid = action.payload;
        },
        updateStatus: (state, action) => {
            state.status = action.payload;
        },
        updateDefNumber: (state, action) => {
            state.defNumber = action.payload;
        },
        updateMobileOperator: (state, action) => {
            state.mobileOperator = action.payload;
        },
        updateTariff: (state, action) => {
            state.tariff = action.payload;
        },
        updateLastActionDate: (state, action) => {
            state.lastActionDate = action.payload;
        },
        updateLastLocation: (state, action) => {
            state.lastLocation = action.payload;
        },
        updateTrafficForYesterday: (state, action) => {
            state.trafficForYesterday = action.payload;
        },
        updateClientName: (state, action) => {
            state.clientName = action.payload;
        },
        updateClientLastName: (state, action) => {
            state.clientLastName = action.payload;
        },
        updateClientEmail: (state, action) => {
            state.clientEmail = action.payload;
        },
        updateClientIp: (state, action) => {
            state.clientIp = action.payload;
        },
        updateModemStatus: (state, action) => {
            state.modemStatus = action.payload;
        },
        updateModemImei: (state, action) => {
            state.modemImei = action.payload;
        },
        updateModemEquipmentHostname: (state, action) => {
            state.modemEquipmentHostname = action.payload;
        },
        updateModemEquipmentModel: (state, action) => {
            state.modemEquipmentModel = action.payload;
        },
        updateModemEquipmentSerialNumber: (state, action) => {
            state.modemEquipmentSerialNumber = action.payload;
        },
        updateModemEquipmentFacilityAddress: (state, action) => {
            state.modemEquipmentFacilityAddress = action.payload;
        },
        updateModemEquipmentFacilityLocation: (state, action) => {
            state.modemEquipmentFacilityLocation = action.payload;
        },
        updateModemEquipmentFacilityStatus: (state, action) => {
            state.modemEquipmentFacilityStatus = action.payload;
        }
    }
});

export const {
    updateIccid,
    updateStatus,
    updateDefNumber,
    updateMobileOperator,
    updateTariff,
    updateLastActionDate,
    updateLastLocation,
    updateTrafficForYesterday,
    updateClientName,
    updateClientLastName,
    updateClientEmail,
    updateClientIp,
    updateModemStatus,
    updateModemImei,
    updateModemEquipmentHostname,
    updateModemEquipmentModel,
    updateModemEquipmentSerialNumber,
    updateModemEquipmentFacilityAddress,
    updateModemEquipmentFacilityLocation,
    updateModemEquipmentFacilityStatus
} = simCardSlice.actions;

export default simCardSlice.reducer;