import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export default function ListAndScroll() {
  const [people, setPeople] = useState([
    { name: "Avinash", key: "1" },
    { name: "Shivam", key: "2" },
    { name: "Vivek", key: "3" },
    { name: "Mohit", key: "4" },
    { name: "RamJi", key: "5" },
    { name: "Aakash", key: "6" }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "blue",
    margin: 8,
    padding: 24,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
});
