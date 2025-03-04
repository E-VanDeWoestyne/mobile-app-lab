import React from "react";
import { useState, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";

export default function callAPI() {
  const [response, setResponse] = useState(null);
  useEffect(async () => {
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      let json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
