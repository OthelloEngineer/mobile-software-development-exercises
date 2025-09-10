import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default function MyClickerComponent() {
  /* 
  Use the useState hook to create a state variable called currentAmount
  and a function to update it called setAmount.
  */
  const [currentAmount, setAmount] = useState(0);

  /* 
  Currently written as shorthand, but can be written as a function, like so:
  
  function onPress() {
      setAmount(currentAmount + 1);
  }
   
  Uses currentAmount to get its current value and increments it by 1, when setAmount is called.
  */
  const onPress = () => setAmount((currentAmount) => currentAmount + 1);

  return (
    <View style={styles.card}>
      <Text style={styles.header}>Click Counter</Text>
      <Text style={styles.textExample}>
        Tap the button below to increment the counter
      </Text>
      <View style={styles.counterDisplay}>
        <Text style={styles.counterText}>{currentAmount}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Increment Counter</Text>
      </TouchableOpacity>
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
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
