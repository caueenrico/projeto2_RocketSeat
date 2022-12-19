import { NavigationContainer, useTheme } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";

export function Routes() {
  const {COLORS} = useTheme()

  return (
    <View style={flex: 1}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
