import { RootState } from './store'

export const luminositySelector = (state: RootState) => state.luminosity
export const humiditySelector = (state: RootState) => state.humidity
export const moistureSelector = (state: RootState) => state.moisture
export const temperatureSelector = (state: RootState) => state.temperature
export const notifyListSelector = (state: RootState) => state.notification.list
export const loginSelector = (state: RootState) => state.login