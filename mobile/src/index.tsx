import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './navigation/AuthNavigation'
import { useSelector } from 'react-redux'
import { loginSelector } from './redux/selector'
import TabNavigator from './navigation/TabNavigation'
import useSocket from './hook/useSocket'
import socket from './utils/socket'

const Main = () => {
  useSocket(socket)
  const login = useSelector(loginSelector)
  return (
    <NavigationContainer>
      {login.isLogin ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}
export default Main