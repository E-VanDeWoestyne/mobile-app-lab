import React, { useState } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";

export default function Lab5() {
  return (
    <ScrollView>
      <CallAPI />
    </ScrollView>
  );
}
