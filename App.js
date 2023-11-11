import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, View } from 'react-native';
import React from 'react';
import Cat from './components/cat';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      <Text style={styles.title}>First React Native App! Wooooow!</Text>
      <Text>First React Native App! Wooooow!</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      <Cat name="Munkustrap" />
      <Cat name="Spot" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },

  title: {
    color: '#f00',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
