import { StyleSheet } from "react-native";
import { Text, View } from "tamagui";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up app/index.tsx to start working on your app!</Text>
    </View>
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
