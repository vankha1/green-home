import { RootState } from './store'

export const notifyListSelector = (state: RootState) => state.notification.list
export const loginSelector = (state: RootState) => state.login