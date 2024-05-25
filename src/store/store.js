import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/slices/CounterSlice'
import stringReducer from "@/slices/StringSlice";
import simCardReducer from "@/slices/SimCardSlice";
import headerReducer from "@/slices/HeaderSlice";

export const store = configureStore({
    reducer: {
        header: headerReducer,
        counter: counterReducer,
        string: stringReducer,
        simCard: simCardReducer,
    }
})