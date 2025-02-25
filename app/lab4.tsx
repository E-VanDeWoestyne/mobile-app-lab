import { ScrollView, View, Text, StyleSheet } from "react-native";
import vacationDestinations from "../constants/list_items";
export default function Lab4() {
  return (
    <ScrollView>
      <Text>
        <Text>Choose your destinations</Text>
      </Text>
      {vacationDestinations.map((destination) => (
        <View key={destination.id} style={styles.container}>
          <Text>{destination.location}</Text>
          <Text>{destination.price}</Text>
          <Text>{destination.average_yearly_temperature}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
    }
})