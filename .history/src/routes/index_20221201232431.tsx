import {NavigationContainer} from '@react-navigation/native'
import {AppRoutes} from './app.routes'
import {View}

export function Routes (){
  return (
    <View></View>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}