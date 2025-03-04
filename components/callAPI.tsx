import React from "react";
import { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function CallAPI() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setResponse(await response.json());
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{response ? JSON.stringify(response, null, 2) : "Loading..."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
