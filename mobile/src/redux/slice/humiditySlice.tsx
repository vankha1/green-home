import { createSlice } from '@reduxjs/toolkit'

export type Humidity = {
    humidity: number,
    humidityArray: number[],
}

const initValue: Humidity = {
    humidity: 25,
    humidityArray: []
}

const humiditySlice = createSlice({
    name: 'humidity',
    initialState: initValue,
    reducers: {
        updateHumidity: (state, action) => {
            console.log("Check payload in humidity",action.payload?.value)
            if (action.payload !== '') {
                state.humidity = action.payload?.value
            }
        },
        updateHumidityArray: (state, action) => {
            if (action.payload !== '') {
                state.humidityArray = [...state.humidityArray, action.payload?.value]
            }
        }
    },
})

export const { updateHumidity, updateHumidityArray } = humiditySlice.actions

export default humiditySlice
