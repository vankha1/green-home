import { createSlice } from '@reduxjs/toolkit'

export type Luminosity = {
    luminosity: number,
    luminosityArray: number[],
}

const initValue: Luminosity = {
    luminosity: 25,
    luminosityArray: []
}

const luminositySlice = createSlice({
    name: 'luminosity',
    initialState: initValue,
    reducers: {
        updateLuminosity: (state, action) => {
            if (action.payload !== '') {
                state.luminosity = action.payload?.value
            }
        },
        updateLuminosityArray: (state, action) => {
            if (action.payload !== '') {
                state.luminosityArray = [...state.luminosityArray, action.payload?.value]
            }
        }
    },
})

export const { updateLuminosity, updateLuminosityArray } = luminositySlice.actions

export default luminositySlice
