import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Incrementor } from "./incrementor";

export default function MyClickerComponent() {
  const [currentAmount, setAmount] = useState(0);

  // New: keeps track of how many seconds since the button was last pressed
  const [secondsAgo, setSecondsAgo] = useState(0);

  /*
    New: useEffect sets up a timer that increases "secondsAgo" by 1 every second.
    Because "secondsAgo" is in the dependency array, the timer restarts 
    whenever you set "secondsAgo" to 0 after a button press.
  */
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAgo((prev) => prev + 1);
    }, 1000);

    // Clean up the old timer whenever secondsAgo changes or component unmounts
    return () => clearInterval(interval);
  }, []); // Restart timer whenever "secondsAgo" changes (reruns the code in useEffect)

  const onPress = () => {
    setAmount((currentAmount) => currentAmount + 1);
    setSecondsAgo(0); // This triggers useEffect to restart the timer
  };

  return (
    <View style={styles.card}>
      <Text style={styles.header}>Click Counter</Text>
      <Text style={styles.textExample}>
        Tap the button below to increment the counter
      </Text>
      <View style={styles.counterDisplay}>
        <Text style={styles.counterText}>{currentAmount}</Text>
      </View>
      <Incrementor onPress={onPress} />
      <Incrementor onPress={onPress} />
      <Incrementor onPress={onPress} />
      <View style={styles.timerDisplay}>
        <Text style={styles.timerText}>
          Last updated: {secondsAgo} seconds ago
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#fff",
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 12,
  },
  textExample: {
    fontSize: 15,
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  counterDisplay: {
    backgroundColor: "#f1f8e9",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#c5e1a5",
  },
  counterText: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#388e3c",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#388e3c",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  timerDisplay: {
    backgroundColor: "#e3f2fd",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#90caf9",
  },
  timerText: {
    fontSize: 14,
    color: "#1976d2",
    fontWeight: "600",
    textAlign: "center",
  },
});
