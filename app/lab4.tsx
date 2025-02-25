import React, { useState } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import vacationDestinations from "../constants/list_items";

// Define the interface for each vacation destination.
interface VacationDestination {
  id: number;
  location: string;
  price: number; // numeric value for prices
  average_yearly_temperature: string;
}

export default function Lab4() {
  const [selectedDestinations, setSelectedDestinations] = useState<
    VacationDestination[]
  >([]);

  function handlePress(destination: VacationDestination) {
    const isSelected = selectedDestinations.some(
      (item) => item.id === destination.id
    );
    if (isSelected) {
      setSelectedDestinations(
        selectedDestinations.filter((item) => item.id !== destination.id)
      );
    } else {
      setSelectedDestinations([...selectedDestinations, destination]);
    }
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.header}>Choose your destinations</Text>
      {vacationDestinations.map((destination) => {
        const isSelected = selectedDestinations.some(
          (item) => item.id === destination.id
        );
        return (
          <View key={destination.id} style={styles.destinationContainer}>
            <Pressable onPress={() => handlePress(destination)}>
              {/* Show tick only if the destination is NOT selected */}
              {!isSelected && <Text style={styles.tick}>{"\u2b1c"}</Text>}
              {isSelected && <Text style={styles.tick}>{"\u2705"}</Text>}
            </Pressable>
            <View style={styles.info}>
              <Text style={styles.text}>Location: {destination.location}</Text>
              <Text style={styles.text}>Price: ${destination.price}</Text>
              <Text style={styles.text}>
                Avg Temp: {destination.average_yearly_temperature}
              </Text>
            </View>
          </View>
        );
      })}
      {/* <Text style={styles.header}>Selected destinations:</Text>
      {selectedDestinations.map((destination) => (
        <View key={destination.id} style={styles.selectedContainer}>
          <Text style={styles.text}>Location: {destination.location}</Text>
          <Text style={styles.text}>Price: ${destination.price}</Text>
          <Text style={styles.text}>
            Avg Temp: {destination.average_yearly_temperature}
          </Text>
        </View>
      ))}
   */}{" "}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  destinationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  tick: {
    fontSize: 20,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  selectedContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    padding: 8,
  },
});
