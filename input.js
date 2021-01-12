import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Input() {
  const [ name, setName ] = useState("Avinash");
  const [ age, setAge ] = useState(22);
  
  return (
    <View style={styles.container}>
      <Text>Enter Name :</Text>
      <TextInput 
      style={styles.input}
      placeholder="e.g. Avinash"
      onChangeText={(val) => setName(val)}/>
      <Text>Enter Age :</Text>
      <TextInput 
      keyboardType="numeric"
      style={styles.input}
      placeholder="e.g. 35"
      onChangeText={(val) => setName(val)}/>
      <StatusBar style="auto" />
      <Text>Name : { name }</Text>
      <Text>Age : { age }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor:'blue',
    padding:5,
    margin: 5,
    width: 200,
    borderRadius: 5
  }
});
