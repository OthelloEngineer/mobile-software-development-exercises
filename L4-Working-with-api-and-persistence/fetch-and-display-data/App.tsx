import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import axios from "axios";
import CarCard from "./src/components/CarCard";
import { CarResponse } from "./src/types/Car";

export default function App() {
  // Exercise requirement: State to hold the array of cars from the API
  const [cars, setCars] = useState<CarResponse[]>([]);
  const [loading, setLoading] = useState(true);

  // Exercise requirement: Fetch data from the provided URL using axios.get or fetch
  const fetchCarData = async () => {
    try {
      const response = await axios.get<CarResponse[]>(
        "https://raw.githubusercontent.com/OthelloEngineer/mobile-software-development-exercises/refs/heads/main/cars.json"
      );
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Exercise requirement: Fetch data when component mounts
  useEffect(() => {
    fetchCarData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading cars...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Car Rental</Text>
      {/* Exercise requirement: Use FlatList to display a list of cars */}
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarCard car={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
});
