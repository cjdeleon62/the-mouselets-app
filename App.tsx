import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { TamaguiProvider, View, createTamagui } from "@tamagui/core";
import { defaultConfig } from "@tamagui/config/v5";

const config = createTamagui(defaultConfig);

type Conf = typeof config;

// make imports typed
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
