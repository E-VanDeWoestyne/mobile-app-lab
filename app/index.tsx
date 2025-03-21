import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/lab3" style={styles.link}>
        <Text style={styles.linkText}>Lab 3</Text>
      </Link>
      <Link href="/lab4" style={styles.link}>
        <Text style={styles.linkText}>Lab 4</Text>
      </Link>
      <Link href="/lab5" style={styles.link}>
        <Text style={styles.linkText}>Lab 5</Text>
      </Link>
      <Link href="/bonuslab" style={styles.link}>
        <Text style={styles.linkText}>Lab 5</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  link: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    margin: 5,
  },
  linkText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
