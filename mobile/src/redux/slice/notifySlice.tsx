import { createSlice } from "@reduxjs/toolkit";

export type NotifyElement = {
  title: string;
  message: string;
  isRead: boolean;
};

export type Notification = {
  temperature: boolean;
  soilMoisture: boolean;
  luminosity: boolean;
  fan: boolean;
  list: [];
};

const initValue = {
  temperature: false,
  soilMoisture: false,
  luminosity: false,
  fan: false,
  list: [],
};

const notifySlice = createSlice({
  name: "notification",
  initialState: initValue,
  reducers: {
    temperatureStatus: (state, action) => {
      if (action.payload && action.payload?.status != state.temperature) {
        state.temperature = action.payload?.status;
      }
    },
    soilMoistureStatus: (state, action) => {
      if (action.payload && action.payload?.status != state.soilMoisture) {
        state.soilMoisture = action.payload?.status;
      }
    },
    luminosityStatus: (state, action) => {
      if (action.payload && action.payload?.status != state.luminosity) {
        state.luminosity = action.payload?.status;
      }
    },
    fanStatus: (state, action) => {
      if (action.payload && action.payload?.status != state.fan) {
        state.fan = action.payload?.status;
      }
    },
    addNotify: (state, action) => {
        if (action.payload) {
            let data: NotifyElement = {
                title: action.payload.title,
                message: action.payload.message,
                isRead: false,
            }

            state.list.unshift(data as never)
        }
    },
    removeNotify: (state, action) => {
        if (action.payload) {
            state.list = state.list.filter((item, index) => index != action.payload.id)
        }
    },
    setIsRead: (state, action) => {
        if (action.payload) {
            state.list.forEach((element : any, i) => {
                if (i == action.payload.id) element.isRead = true
                return element
            })
        }
    }
  },
});

export const { temperatureStatus, luminosityStatus, fanStatus, addNotify, removeNotify, setIsRead } = notifySlice.actions;

export default notifySlice;
