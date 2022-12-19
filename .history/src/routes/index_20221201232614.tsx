import { NavigationContainer, useTheme } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";

export function Routes() {
  const {} = useTheme()

  return (
    <View style={{flex: 1, backgroundColor: COLORS.}}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
