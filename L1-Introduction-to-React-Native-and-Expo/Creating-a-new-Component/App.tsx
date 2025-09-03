import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>App.tsx</Text>
      <MyComponent text={"This is the prop we are giving to the component"} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
