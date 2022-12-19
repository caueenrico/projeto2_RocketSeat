import {NavigationContainer} from '@react-navigation/native'
import {AppRoutes, appRoutes} from './app.routes'

export function Routes (){
  return (
    <NavigationContainer>
      <AppRoutes 
      />
    </NavigationContainer>
  )
}