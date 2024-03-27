import { createSlice } from '@reduxjs/toolkit'

export type Moisture = {
    moisture: number,
    moistureArray: number[],
}

const initValue: Moisture = {
    moisture: 25,
    moistureArray: []
}

const moistureSlice = createSlice({
    name: 'moisture',
    initialState: initValue,
    reducers: {
        updateMoisture: (state, action) => {
            if (action.payload !== '') {
                state.moisture = action.payload?.value
            }
        },
        updateMoistureArray: (state, action) => {
            if (action.payload !== '') {
                state.moistureArray = [...state.moistureArray, action.payload?.value]
            }
        }
    },
})

export const { updateMoisture, updateMoistureArray } = moistureSlice.actions

export default moistureSlice
