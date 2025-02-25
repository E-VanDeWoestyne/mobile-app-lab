import { ScrollView, View, Text } from "react-native";
import vacationDestinations from "../constants/list_items";
export default function Lab4() {
  return (
    <ScrollView>
      <Text>
        {" "}
        <h1>Choose your destinations</h1>
      </Text>
      {vacationDestinations.map((destination) => (
        <View key={destination.id}>
          <Text>{"\u2705"}</Text>
          <Text>{destination.location}</Text>
          <Text>{destination.price}</Text>
          <Text>{destination.average_yearly_temperature}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
