import React from "react";
import { View, Text, StyleSheet } from "react-native";

/*
     
    Exercise: Creating a new component
        •Use the application you just created
        •Create a new component
        •Create a file with a name such as: MyComponent.tsx or js
        •Make sure it has View and Text component with text like: “Hello World!”
        •Import it into App.tsx, to show the component
        •Also, create another Text component and pass a Prop with some newtext. 
    
        Tip: Check “The elements of a component” slide for syntax examples
 
*/

// First we define the props that we want to pass to the component
interface ComponentProps {
  text: string;
}

// We define the component as a function that takes in the props
export default function MyComponent({ text }: ComponentProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>MyComponent.tsx</Text>
      <Text style={styles.textExample}>Below is the prop you passed:</Text>
      <View style={styles.propHighlight}>
        <Text style={styles.propText}>{text}</Text>
      </View>
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
  textExample: {
    fontSize: 15,
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  propHighlight: {
    backgroundColor: "#f1f8e9",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginTop: 4,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c5e1a5",
  },
  propText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#388e3c",
    textAlign: "center",
  },
});
