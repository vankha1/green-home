import { createSlice } from '@reduxjs/toolkit'

export type Temperature = {
    temperature: number,
    temperatureList: number[],
}

const initValue: Temperature = {
    temperature: 25,
    temperatureList: []
}

const temperatureSlice = createSlice({
    name: 'temperature',
    initialState: initValue,
    reducers: {
        updateTemperature: (state, action) => {
            if (action.payload !== '') {
                state.temperature = action.payload?.value
            }
        },
        updateTemperatureArray: (state, action) => {
            if (action.payload !== '') {
                state.temperatureList.push(action.payload?.value)
            }
        }
    },
})

export const { updateTemperature, updateTemperatureArray } = temperatureSlice.actions
export default temperatureSlice
