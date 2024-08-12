import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/JobSlice";
export default configureStore({
    reducer:jobReducer,
})