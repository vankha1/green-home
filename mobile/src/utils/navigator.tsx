import { NavigatorScreenParams } from '@react-navigation/native'

type HomeStackParamList = {
    HomeScreen: undefined
}

type AppTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>
    Setting: undefined
    Statistic: undefined
    Control: undefined,
    Notification: undefined
}

export { AppTabParamList, HomeStackParamList }