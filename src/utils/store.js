import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import HistorySlice from "./HistorySlice";
import searchSlice from "./searchSlice";
const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        History: HistorySlice,

    }
})
export default store;