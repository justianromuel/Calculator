import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native';
import Keyboard from './src/components/Keyboard';

export default function App() {
  return (
    <View style={Styles.container}>
      <StatusBar style="auto" />
      <Keyboard />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#18181b'
  },
});