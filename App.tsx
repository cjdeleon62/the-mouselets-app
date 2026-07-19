import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { TamaguiProvider, View } from "tamagui";
import { config } from "@/tamagui.config";

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
