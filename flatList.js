import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

export default function Flat(){
    const [ people, setPeople ] = useState([
        { name: "Avinash", id: "1" },
        { name: "Shivam", id: "2" },
        { name: "Vivek", id: "3" },
        { name: "Mohit", id: "4" },
        { name: "RamJi", id: "5" },
        { name: "Aakash", id: "6" }
    ]);

    return ( 
        <View style={styles.container}>
            <FlatList 
            keyExtractor={ (item) => {return item.id} }
            data={ people }
            renderItem={ ({item}) => (
            <Text style={styles.item}>{item.name}</Text>
            )} />
        </View>
    )
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
  