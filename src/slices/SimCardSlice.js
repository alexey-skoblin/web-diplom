import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchSimCardData = createAsyncThunk(
    'simCard/fetchData',
    async () => {
        const response = await axios.get('http://localhost:8080/automated-workstation/simCard');
        console.log(response)
        return response.data;
    }
);

const initialState = {
    iccid: '',
    status: '',
    defNumber: '',
    mobileOperator: '',
    tariff: '',
    lastActivation: 0,
    lastLocation: {
        lat: 0,
        lng: 0
    },
    trafficForYesterday: 0,
    loading: false,
    error: null
}

const reducers = {};

const extraReducers = (builder) => {

    builder.addCase(fetchSimCardData.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(fetchSimCardData.fulfilled, (state, action) => {
        state.loading = false;
        state.iccid = action.payload.iccid;
        state.status = action.payload.status;
        state.defNumber = action.payload.defNumber;
        state.mobileOperator = action.payload.mobileOperator;
        state.tariff = action.payload.tariff;
        state.lastActivation = action.payload.lastActivation;
        state.lastLocation = action.payload.lastLocation;
        state.trafficForYesterday = action.payload.trafficForYesterday;
    });
    builder.addCase(fetchSimCardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
};
export const simCardSlice = createSlice({
    name: 'simCard',
    initialState,
    reducers,
    extraReducers
});

export const {} = simCardSlice.actions;

export const selectSimCard = (state) => state.simCard
export const selectIccid = (state) => state.simCard.iccid;
export const selectStatus = (state) => state.simCard.status;
export const selectDefNumber = (state) => state.simCard.defNumber;
export const selectMobileOperator = (state) => state.simCard.mobileOperator;
export const selectTariff = (state) => state.simCard.tariff;
export const selectLastActivation = (state) => state.simCard.lastActivation;
export const selectLastLocation = (state) => state.simCard.lastLocation;
export const selectTrafficForYesterday = (state) => state.simCard.trafficForYesterday;
export const selectLoading = (state) => state.simCard.loading;
export const selectError = (state) => state.simCard.error;

export default simCardSlice.reducer;