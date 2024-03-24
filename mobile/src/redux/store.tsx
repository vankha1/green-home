import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
import notifySlice from "./slice/notifySlice";

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        notification: notifySlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>