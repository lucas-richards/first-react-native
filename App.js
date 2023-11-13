import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Image, Text, TextInput, View, FlatList } from 'react-native';
import React, {useState} from 'react';
import Cat from './components/Cat';
import FlatListBasics from './components/FlatListBasics'; 
import SectionListBasics from './components/SectionListBasics';

export default function App() {
  const [text, setText] = useState('');
  const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
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
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
      <FlatListBasics />
      <SectionListBasics />
      
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
