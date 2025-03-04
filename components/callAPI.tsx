import React from "react";
import { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function callAPI() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setResponse(await response.json());
        console.log(setResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Call API" onPress={() => console.log(response)} />
      <Text>{response}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
