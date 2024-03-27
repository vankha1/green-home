import { createSlice } from '@reduxjs/toolkit'

export type Luminosity = {
    luminosity: number
}

const initValue: Luminosity = {
    luminosity: 25,
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
    },
})

export const { updateLuminosity } = luminositySlice.actions

export default luminositySlice
