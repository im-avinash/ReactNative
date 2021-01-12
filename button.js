import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Hooks() {
  const [ name, setName ] = useState("Avinash");
  const [ person, setPerson ] = useState({ name: "mario", age: 22});
  const clickhandler = () => {
    setName('Shivam');
  }
  return (
    <View style={styles.container}>
      <Text>Hello { name }</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={ clickhandler }/>
      </View>
      <View>
        <Text>Hello { person.name }</Text>
      </View>
      <StatusBar style="auto" />
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
  buttonContainer: {
    marginTop:10,
  }
});
