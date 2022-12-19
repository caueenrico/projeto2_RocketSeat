import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import  theme  from './src/theme'

import { Groups } from "@screens/Groups";

export default function App() {
 const [fontsLoad] useFonts({Roboto_400Regular,Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
    <Groups />
    </ThemeProvider>
  );
}
