import { ScrollView, View, Text, Pressable } from "react-native";
import { useState } from "react";
import vacationDestinations from "../constants/list_items";
export default function Lab4() {
  const [checked, setChecked] = useState(false);
  return (
    <ScrollView>
      <Text> Choose your destinations</Text>
      {vacationDestinations.map((destination) => (
        <View key={destination.id}>
          <Pressable onPress={() => setChecked(!checked)}>
            <Text>{checked ? "\u2705" : "\u2B1C"}</Text>
          </Pressable>
          <Text>{destination.location}</Text>
          <Text>{destination.price}</Text>
          <Text>{destination.average_yearly_temperature}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
