import { createSlice } from "@reduxjs/toolkit";

export type Login = {
    isLogin: boolean
    invalidAccount: boolean
}

const initValue: Login = {
    isLogin: false,
    invalidAccount: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initValue,
    reducers: {
        login: (state, action) => {
            state.isLogin = true
            state.invalidAccount = false
        },
        logout: (state) => {
            state.isLogin = false
        },
        invalidAccount: (state, action) => {
            state.invalidAccount = true
        }
    }
})

export const { login, logout, invalidAccount} = loginSlice.actions

export default loginSlice