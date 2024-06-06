import {configureStore} from '@reduxjs/toolkit'
import simCardReducer from "@/slices/simCard/SimCardSlice";
import headerReducer from "@/slices/HeaderSlice";
import sidebarReducer from "@/slices/SidebarSlice";
import infoBarReducer from "@/slices/simCard/SimCardBarSlice";
import pageNumberReducer from "@/slices/PageNumberSlice";
import simCardPageSlice from "@/slices/simCard/SimCardPageSlice";
import clientPageSlice from "@/slices/client/ClientPageSlice";

export const store = configureStore({
    reducer: {
        header: headerReducer,
        simCard: simCardReducer,
        sidebar: sidebarReducer,
        simCardBar: infoBarReducer,
        pageNumber: pageNumberReducer,
        simCardPage: simCardPageSlice,
        clientPage: clientPageSlice
    }
})