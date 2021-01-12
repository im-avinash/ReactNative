import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text,TouchableOpacity } from 'react-native';

export default function Touchables(){
    const [ people, setPeople ] = useState([
        { name: "Avinash", id: "1" },
        { name: "Shivam", id: "2" },
        { name: "Vivek", id: "3" },
        { name: "Mohit", id: "4" },
        { name: "RamJi", id: "5" },
        { name: "Aakash", id: "6" }
    ]);

    const pressHandler = (id) => {
        console.log(id);
        setPeople((prevPeople) => { 
            return prevPeople.filter( person => person.id!=id)
        });
    }
    return ( 
        <View style={styles.container}>
            <FlatList 
            keyExtractor={ (item) => {return item.id} }
            data={ people }
            renderItem={ ({item}) => (
                <TouchableOpacity onPress={ () => pressHandler(item.id)}>
                    <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
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
  