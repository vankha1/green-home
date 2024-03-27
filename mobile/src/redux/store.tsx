import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
import notifySlice from "./slice/notifySlice";
import temperatureSlice from "./slice/temperatureSlice";
import moistureSlice from "./slice/moistureSlice";
import humiditySlice from "./slice/humiditySlice";
import luminositySlice from "./slice/luminositySlice";

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        notification: notifySlice.reducer,
        temperature: temperatureSlice.reducer,
        moisture: moistureSlice.reducer,
        humidity: humiditySlice.reducer,
        luminosity: luminositySlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>