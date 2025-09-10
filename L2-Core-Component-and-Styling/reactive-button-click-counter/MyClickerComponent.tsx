import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
  }, [secondsAgo]); // Restart timer whenever "secondsAgo" changes (reruns the code in useEffect)

  const onPress = () => {
    setAmount((currentAmount) => currentAmount + 1);
    setSecondsAgo(0); // This triggers useEffect to restart the timer
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textExample}>This is the Clicker Component!</Text>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.textExample}>
          Press here to increment: {currentAmount}
        </Text>
      </TouchableOpacity>
      <Text style={styles.textExample}>
        Last updated: {secondsAgo} seconds ago
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: 350,
  },
  textExample: {
    fontWeight: "bold",
    fontSize: 25,
    borderColor: "black",
  },
});
