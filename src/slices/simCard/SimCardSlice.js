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
    reducers: {}
});

export const {} = simCardSlice.actions;

export default simCardSlice.reducer;