import React from "react";
import { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function CallAPI() {
  const [response, setResponse] = useState<{
    title: string;
    body: string;
    id: number;
  } | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        let json = await response.json();
        setResponse(json);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {response && (
        <View style={styles.responseContainer}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.text}>{response.title}</Text>

          <Text style={styles.label}>Body:</Text>
          <Text style={styles.text}>{response.body}</Text>

          <Text style={styles.label}>Post ID:</Text>
          <Text style={styles.text}>{response.id}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  responseContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
});
