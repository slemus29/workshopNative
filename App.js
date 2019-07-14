import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TodoList from './Todo'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'red', fontSize:26}}>Todo List</Text>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
