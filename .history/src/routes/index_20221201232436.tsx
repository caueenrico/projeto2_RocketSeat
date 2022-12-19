import {NavigationContainer} from '@react-navigation/native'
import {AppRoutes} from './app.routes'
import {View} from 'reacr'

export function Routes (){
  return (
    <View></View>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}