import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { supabase } from "./lib/supabase";
import { getRecord } from "./lib/supabase_crud";

const bonuslab = () => {
  const [names, setNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNames = async () => {
      setLoading(true);
      const { data, error } = await getRecord();
      if (error) {
        console.error("Error fetching names:", error);
      } else {
        setNames(data.map((item: any) => item.name));
      }
      setLoading(false);
    };

    fetchNames();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Names List
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={names}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 16, marginVertical: 5 }}>{item}</Text>
          )}
        />
      )}
    </View>
  );
};

export default bonuslab;
