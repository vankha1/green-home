import { NavigatorScreenParams } from '@react-navigation/native'

type HomeStackParamList = {
    HomeScreen: undefined
    Notification: undefined
    LivingRoom: undefined
    Kitchen: undefined
    Bedroom: undefined
    Toilet: undefined
    Login: undefined
}

type AppTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>
    Setting: undefined
    Statistic: undefined
}

export { AppTabParamList, HomeStackParamList }