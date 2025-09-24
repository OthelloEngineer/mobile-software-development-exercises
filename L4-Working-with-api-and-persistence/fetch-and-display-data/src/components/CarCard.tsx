import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CarResponse } from "../types/Car";

interface CarCardProps {
  car: CarResponse;
}

// Exercise requirement: Create a car card component for displaying individual cars
export default function CarCard({ car }: CarCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../../assets/batmobile.jpg")}
        style={styles.carImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.carTitle}>
          {car.make} {car.model}
        </Text>
        <Text style={styles.carDetails}>Year: {car.year}</Text>
        <Text style={styles.carDetails}>Color: {car.color}</Text>
        <Text style={styles.carPrice}>${car.pricePerDay}/day</Text>
        {/* Exercise requirement: Optional conditional rendering for isAvailable */}
        {!car.isAvailable && (
          <Text style={styles.unavailableText}>Currently Unavailable</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  carImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  carTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  carDetails: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  carPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007BFF",
    marginTop: 5,
  },
  unavailableText: {
    fontSize: 12,
    color: "#ff4444",
    fontWeight: "500",
    marginTop: 3,
  },
});
