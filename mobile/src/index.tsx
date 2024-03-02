import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import AuthNavigator from './navigation/AuthNavigation'
const Main = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}
export default Main
const styles = StyleSheet.create({})