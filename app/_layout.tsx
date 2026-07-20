import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider } from "tamagui";
import { config } from "@/tamagui.config";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </TamaguiProvider>
  );
}
