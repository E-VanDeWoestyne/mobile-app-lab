import React, { useState } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";

export default function Lab5() {
  const [display, setDisplay] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {display && (
        <View>
          <CallAPI />
        </View>
      )}

      <Pressable style={styles.button} onPress={() => setDisplay(!display)}>
        <Text style={styles.buttonText}>
          {display ? "Hide API Response" : "Show API Response"}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
