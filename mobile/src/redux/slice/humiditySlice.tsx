import { createSlice } from '@reduxjs/toolkit'

export type Humidity = {
    humidity: number
}

const initValue: Humidity = {
    humidity: 25,
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
    },
})

export const { updateHumidity } = humiditySlice.actions

export default humiditySlice
