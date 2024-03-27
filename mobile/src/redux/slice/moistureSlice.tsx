import { createSlice } from '@reduxjs/toolkit'

export type Moisture = {
    moisture: number
}

const initValue: Moisture = {
    moisture: 25,
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
    },
})

export const { updateMoisture } = moistureSlice.actions

export default moistureSlice
